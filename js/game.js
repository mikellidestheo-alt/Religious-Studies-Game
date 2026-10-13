/*
 * game.js - The Confessional game engine.
 *
 * Screens: start -> game -> end (game over or win).
 * Handles: difficulty, section choice, shuffling, scoring, strikes,
 * feedback, the revision report, settings, optional sound and the
 * optional personal best (localStorage, wrapped in try/catch).
 *
 * No data ever leaves the device. Nothing here makes a network request.
 */
(function () {
  'use strict';

  var SPEC = window.SPEC;
  var Sprites = window.Sprites;
  var ALL = (window.DILEMMAS || []).slice();

  var MAX_STRIKES = 3;
  var LETTERS = ['A', 'B', 'C', 'D'];

  /*
   * Difficulty decides which dilemmas are used. Each dilemma has a "level":
   *   1 = wrong options are clearly different from Catholic teaching
   *   2 = wrong options are plausible
   *   3 = wrong options are subtle half-truths
   * If a chosen topic has too few dilemmas at a difficulty, all levels are
   * used (and the player is told).
   */
  var DIFFICULTY = {
    novice: { label: 'Novice', levels: [1, 2] },
    priest: { label: 'Priest', levels: [1, 2, 3] },
    bishop: { label: 'Bishop', levels: [2, 3] }
  };
  var MIN_DECK = 6;

  /* ---------------------------------------------------------------
   * Small helpers
   * --------------------------------------------------------------- */

  function $(id) { return document.getElementById(id); }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* Dilemma text may mark key terms with **double stars** for bold. */
  function rich(s) {
    return escapeHtml(s || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }

  function plain(s) {
    return String(s || '').replace(/\*\*/g, '');
  }

  function prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* Optional storage. The game works normally if storage is blocked. */
  var store = {
    get: function (key, fallback) {
      try {
        var v = window.localStorage.getItem(key);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { window.localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
    }
  };

  /* Pixel icons built from tiny grids, drawn as crisp SVG squares. */
  var ICONS = {
    tick: ['........', '.......#', '......##', '#....##.', '##..##..', '.####...', '..##....', '........'],
    cross: ['##....##', '###..###', '.######.', '..####..', '..####..', '.######.', '###..###', '##....##'],
    gear: ['...###...', '.#.###.#.', '..#####..', '###...###', '###...###', '###...###', '..#####..', '.#.###.#.', '...###...'],
    door: ['.#######.', '.#.....#.', '.#.....#.', '.#.....#.', '.#...#.#.', '.#.....#.', '.#.....#.', '.#.....#.', '#########'],
    star: ['...#...', '...#...', '.#####.', '#######', '.#####.', '.##.##.', '##...##']
  };

  function icon(name, extraClass) {
    var g = ICONS[name];
    var w = g[0].length, h = g.length;
    var rects = '';
    for (var y = 0; y < h; y++) {
      for (var x = 0; x < w; x++) {
        if (g[y].charAt(x) === '#') { rects += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>'; }
      }
    }
    return '<svg class="icon ' + (extraClass || '') + '" viewBox="0 0 ' + w + ' ' + h +
      '" aria-hidden="true" focusable="false" shape-rendering="crispEdges">' + rects + '</svg>';
  }

  function sectionName(paper, section) {
    var s = SPEC.findSection(paper, section);
    return s ? s.name : '';
  }

  function specLine(d) {
    return 'Paper ' + d.paper + ' · Spec ' + d.specRef + ' ' + SPEC.topicTitle(d.paper, d.specRef);
  }

  /* ---------------------------------------------------------------
   * Settings
   * --------------------------------------------------------------- */

  var settings = {
    sound: false,
    reducedMotion: prefersReducedMotion(),
    largeText: false
  };
  (function loadSettings() {
    var saved = store.get('confessional.settings', null);
    if (saved && typeof saved === 'object') {
      if (typeof saved.sound === 'boolean') { settings.sound = saved.sound; }
      if (typeof saved.reducedMotion === 'boolean') { settings.reducedMotion = saved.reducedMotion; }
      if (typeof saved.largeText === 'boolean') { settings.largeText = saved.largeText; }
    }
  })();

  function applySettings() {
    var root = document.documentElement;
    root.classList.toggle('reduce-motion', settings.reducedMotion);
    root.classList.toggle('large-text', settings.largeText);
    Sprites.reducedMotion = settings.reducedMotion;
    setSwitch($('set-sound'), settings.sound);
    setSwitch($('set-motion'), settings.reducedMotion);
    setSwitch($('set-text'), settings.largeText);
    Sprites.wake();
  }

  function setSwitch(btn, on) {
    if (!btn) { return; }
    btn.setAttribute('aria-checked', on ? 'true' : 'false');
    var label = btn.querySelector('.switch-state');
    if (label) { label.textContent = on ? 'On' : 'Off'; }
  }

  /* ---------------------------------------------------------------
   * Sound: soft tones made with Web Audio. Off by default, only ever
   * started from a tap, and never needed to play the game.
   * --------------------------------------------------------------- */

  var Sound = {
    ctx: null,
    ready: function () {
      if (!settings.sound) { return null; }
      if (!this.ctx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) { return null; }
        try { this.ctx = new AC(); } catch (e) { return null; }
      }
      if (this.ctx.state === 'suspended' && this.ctx.resume) {
        try { this.ctx.resume(); } catch (e) { /* ignore */ }
      }
      return this.ctx;
    },
    tone: function (ctx, freq, start, dur, type, vol) {
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(vol || 0.08, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + dur + 0.05);
    },
    play: function (name) {
      var ctx = this.ready();
      if (!ctx) { return; }
      var t = ctx.currentTime + 0.01;
      try {
        if (name === 'correct') {
          this.tone(ctx, 523.25, t, 0.16);
          this.tone(ctx, 659.25, t + 0.09, 0.18);
          this.tone(ctx, 783.99, t + 0.18, 0.28);
        } else if (name === 'wrong') {
          this.tone(ctx, 246.94, t, 0.22, 'triangle', 0.07);
          this.tone(ctx, 207.65, t + 0.12, 0.3, 'triangle', 0.06);
        } else if (name === 'tap') {
          this.tone(ctx, 880, t, 0.06, 'sine', 0.03);
        } else if (name === 'win') {
          this.tone(ctx, 523.25, t, 0.2); this.tone(ctx, 659.25, t + 0.12, 0.2);
          this.tone(ctx, 783.99, t + 0.24, 0.2); this.tone(ctx, 1046.5, t + 0.36, 0.4);
        } else if (name === 'lose') {
          this.tone(ctx, 392, t, 0.3, 'triangle', 0.06); this.tone(ctx, 311.13, t + 0.2, 0.5, 'triangle', 0.05);
        }
      } catch (e) { /* sound is optional */ }
    }
  };

  /* ---------------------------------------------------------------
   * Game state
   * --------------------------------------------------------------- */

  var state = {
    difficulty: store.get('confessional.difficulty', 'priest'),
    section: 'all',
    deck: [],
    deckNote: '',
    index: 0,
    strikes: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    answered: 0,
    correct: 0,
    missed: [],
    results: [],
    order: [],
    current: null,
    locked: true
  };
  if (!DIFFICULTY[state.difficulty]) { state.difficulty = 'priest'; }

  var scene, candles, title, endScene, michael;

  function matchesSection(d) {
    if (state.section === 'all') { return true; }
    return ('P' + d.paper + '-S' + d.section) === state.section;
  }

  function buildDeck() {
    var pool = ALL.filter(matchesSection);
    var levels = DIFFICULTY[state.difficulty].levels;
    var deck = pool.filter(function (d) { return levels.indexOf(d.level || 2) !== -1; });
    state.deckNote = '';
    if (deck.length < Math.min(MIN_DECK, pool.length)) {
      deck = pool.slice();
      state.deckNote = 'There are only a few ' + DIFFICULTY[state.difficulty].label +
        '-level dilemmas for this choice so far, so all levels are included.';
    }
    return shuffle(deck);
  }

  /* ---------------------------------------------------------------
   * Screens
   * --------------------------------------------------------------- */

  var screens = ['start', 'game', 'end'];

  function showScreen(name) {
    screens.forEach(function (s) {
      $('screen-' + s).hidden = (s !== name);
    });
    try { window.scrollTo(0, 0); } catch (e) { /* ignore */ }
    resizeAll();
    Sprites.wake();
  }

  function resizeAll() {
    if (scene) {
      scene.setMode(isCompact() ? 'banner' : 'full');
      scene.resize();
    }
    if (title) { title.resize(); }
    if (endScene) { endScene.resize(); }
    if (candles) { candles.resize(); }
  }

  /* Phones in portrait (and short landscape screens) get the banner scene. */
  function isCompact() {
    if (!window.matchMedia) { return window.innerWidth < 600; }
    return window.matchMedia('(max-width: 599px), (max-height: 500px)').matches;
  }

  /* ---------------------------------------------------------------
   * Start screen
   * --------------------------------------------------------------- */

  function renderDifficulty() {
    var btns = $('difficulty-group').querySelectorAll('[data-difficulty]');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute('data-difficulty') === state.difficulty;
      btns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  function renderSections() {
    var group = $('section-group');
    var html = '';
    var all = ALL.length;
    html += sectionButton('all', 'All topics', 'Paper 1 and Paper 2', all);
    SPEC.sections.forEach(function (s) {
      var count = ALL.filter(function (d) { return d.paper === s.paper && d.section === s.section; }).length;
      html += sectionButton(s.key, s.name, 'Paper ' + s.paper + ' · Section ' + s.section, count);
    });
    group.innerHTML = html;
    renderSectionState();
  }

  function sectionButton(key, name, tag, count) {
    var disabled = count === 0;
    return '<button type="button" class="choice choice-section" data-section="' + key + '" aria-pressed="false"' +
      (disabled ? ' aria-disabled="true"' : '') + '>' +
      '<span class="choice-tag">' + escapeHtml(tag) + '</span>' +
      '<span class="choice-title">' + escapeHtml(name) + '</span>' +
      '<span class="choice-count">' + (disabled ? 'Coming soon' : count + (count === 1 ? ' dilemma' : ' dilemmas')) + '</span>' +
      '</button>';
  }

  function renderSectionState() {
    var btns = $('section-group').querySelectorAll('[data-section]');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].getAttribute('data-section') === state.section;
      btns[i].setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  function renderBest() {
    var best = store.get('confessional.best', 0);
    $('best-score').innerHTML = best > 0 ? icon('star') + ' Personal best: <strong>' + best + '</strong>' : '';
  }

  /* ---------------------------------------------------------------
   * Playing a game
   * --------------------------------------------------------------- */

  function startGame() {
    if (!ALL.length) { return; }
    state.deck = buildDeck();
    if (!state.deck.length) { return; }
    state.index = 0;
    state.strikes = 0;
    state.score = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.answered = 0;
    state.correct = 0;
    state.missed = [];
    state.results = [];
    showScreen('game');
    candles.setStrikes(0, false);
    scene.setStrikes(0);
    $('deck-note').textContent = state.deckNote;
    $('deck-note').hidden = !state.deckNote;
    showDilemma();
  }

  function updateHud() {
    $('hud-score').textContent = state.score;
    $('hud-streak').textContent = state.streak;
    $('hud-count').textContent = Math.min(state.index + 1, state.deck.length) + ' / ' + state.deck.length;
    var lit = MAX_STRIKES - state.strikes;
    $('candles-canvas').setAttribute('aria-label',
      lit + ' of 3 candles lit. ' + state.strikes + (state.strikes === 1 ? ' strike.' : ' strikes.'));
  }

  function restartAnimation(el, className) {
    el.classList.remove(className);
    void el.offsetWidth; // reflow so the animation can run again
    el.classList.add(className);
  }

  function showDilemma() {
    var d = state.deck[state.index];
    state.current = d;
    state.locked = false;
    state.order = shuffle([0, 1, 2, 3]);

    var sec = SPEC.findSection(d.paper, d.section);
    $('dilemma-tag').textContent = 'Paper ' + d.paper + ' · ' + (sec ? sec.short : '');
    $('dilemma-tag').setAttribute('title', sectionName(d.paper, d.section));
    $('penitent-name').textContent = d.penitent;
    $('scene-text').textContent = d.scene;

    var html = '';
    for (var slot = 0; slot < 4; slot++) {
      var idx = state.order[slot];
      html += '<button type="button" class="option" data-slot="' + slot + '">' +
        '<span class="badge" aria-hidden="true">' + LETTERS[slot] + '</span>' +
        '<span class="option-body">' +
        '<span class="visually-hidden">Option ' + LETTERS[slot] + ': </span>' +
        '<span class="option-text">' + escapeHtml(d.options[idx]) + '</span>' +
        '<span class="option-status" aria-hidden="true"></span>' +
        '</span></button>';
    }
    $('options').innerHTML = html;
    $('feedback').hidden = true;
    $('live').textContent = '';

    scene.setPenitent(Sprites.createPenitent(d.look, d.id), d.mood || 'neutral');
    $('scene-canvas').setAttribute('aria-label',
      'The confessional. ' + d.penitent + ' is behind the lattice screen, looking ' + (d.mood || 'calm') + '.');
    updateHud();

    restartAnimation($('dilemma-card'), 'fade-in');
    restartAnimation($('options'), 'fade-in');
  }

  function choose(slot) {
    if (state.locked) { return; }
    state.locked = true;
    var d = state.current;
    var chosen = state.order[slot];
    var correct = chosen === d.correctIndex;
    state.answered++;
    state.results.push({ d: d, correct: correct });

    var buttons = $('options').querySelectorAll('.option');
    for (var s = 0; s < buttons.length; s++) {
      var b = buttons[s];
      var idx = state.order[s];
      b.setAttribute('aria-disabled', 'true');
      var status = b.querySelector('.option-status');
      if (idx === d.correctIndex) {
        b.classList.add('is-correct');
        status.innerHTML = icon('tick') + (s === slot ? 'Correct' : 'Correct answer');
        status.removeAttribute('aria-hidden');
      } else if (s === slot) {
        b.classList.add('is-wrong');
        status.innerHTML = icon('cross') + 'Not quite';
        status.removeAttribute('aria-hidden');
      } else {
        b.classList.add('is-dimmed');
      }
      if (s === slot) { b.classList.add('is-chosen'); }
    }

    if (correct) {
      state.correct++;
      state.streak++;
      if (state.streak > state.bestStreak) { state.bestStreak = state.streak; }
      state.score += 10 + (state.streak >= 3 ? 5 : 0);
      scene.setExpression('hopeful');
      scene.celebrate();
      candles.brighten();
      Sound.play('correct');
    } else {
      state.strikes++;
      state.streak = 0;
      state.missed.push({ d: d, chosen: chosen });
      scene.setExpression('worried');
      scene.setStrikes(state.strikes);
      candles.setStrikes(state.strikes, true);
      restartAnimation($('game-layout'), 'shake');
      Sound.play('wrong');
    }
    updateHud();
    showFeedback(d, chosen, correct);
  }

  function showFeedback(d, chosen, correct) {
    var heading = $('feedback-heading');
    heading.innerHTML = correct ? icon('tick') + ' Correct!' : icon('cross') + ' Not quite';
    $('feedback').className = 'card card-cream feedback ' + (correct ? 'is-correct' : 'is-wrong');

    var body = '';
    if (correct) {
      body += '<p>' + rich(d.feedbackCorrect) + '</p>';
    } else {
      var view = d.viewsRepresentedByWrongOptions && d.viewsRepresentedByWrongOptions[chosen];
      if (view) { body += '<p class="your-view"><strong>Your answer:</strong> ' + rich(view) + '</p>'; }
      body += '<p>' + rich(d.feedbackWrong) + '</p>';
      body += '<p class="best-advice"><strong>Best advice:</strong> “' + escapeHtml(d.options[d.correctIndex]) + '”</p>';
    }
    $('feedback-body').innerHTML = body;
    $('feedback-spec').textContent = specLine(d);
    $('feedback-terms').innerHTML = (d.keyTerms || []).map(function (t) {
      return '<li>' + escapeHtml(t) + '</li>';
    }).join('');
    $('feedback-sources').textContent = d.sources && d.sources.length ? 'Find out more: ' + d.sources.join('; ') : '';
    $('feedback-sources').hidden = !(d.sources && d.sources.length);

    var last = state.index >= state.deck.length - 1;
    var next = $('btn-next');
    if (state.strikes >= MAX_STRIKES) { next.textContent = 'The bishop is here…'; }
    else if (last) { next.textContent = 'Finish'; }
    else { next.textContent = 'Next penitent'; }

    Sprites.drawPortrait($('michael-canvas'), michael, correct ? 'hopeful' : 'neutral', 64);

    var fb = $('feedback');
    fb.hidden = false;
    restartAnimation(fb, 'fade-in');
    $('live').textContent = (correct ? 'Correct. ' : 'Not quite. ') +
      plain(correct ? d.feedbackCorrect : d.feedbackWrong) +
      (state.strikes > 0 ? ' Strikes: ' + state.strikes + ' of 3.' : '');

    // Bring the feedback into view on small screens.
    var rect = fb.getBoundingClientRect();
    var viewH = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top > viewH * 0.55) {
      var y = (window.pageYOffset || document.documentElement.scrollTop) + rect.top - viewH * 0.25;
      try { window.scrollTo({ top: y, behavior: settings.reducedMotion ? 'auto' : 'smooth' }); }
      catch (e) { window.scrollTo(0, y); }
    }
  }

  function nextDilemma() {
    if (state.strikes >= MAX_STRIKES) { endGame(false); return; }
    state.index++;
    if (state.index >= state.deck.length) { endGame(true); return; }
    try { window.scrollTo(0, 0); } catch (e) { /* ignore */ }
    showDilemma();
    var name = $('penitent-name');
    try { name.focus({ preventScroll: true }); } catch (e) { name.focus(); }
  }

  /* ---------------------------------------------------------------
   * End screens and the revision report
   * --------------------------------------------------------------- */

  function endGame(win) {
    showScreen('end');
    endScene.setOutcome(win);
    $('end-canvas').setAttribute('aria-label', win ?
      'The bishop smiles at the church door. Father Michael cheers and all three candles are lit.' :
      'All three candles are out. The bishop stands at the church door with a letter, and Father Michael looks on kindly.');
    $('end-heading').textContent = win ? 'Well done, Monsignor!' : 'The bishop has come to call';
    $('end-message').textContent = win ?
      'You guided every penitent in this set wisely. The bishop is delighted and Father Michael is beaming.' :
      'All three candles are out. The bishop has kindly moved you from the parish for a little more study. Use your revision report, then try again!';

    var best = store.get('confessional.best', 0);
    var newBest = state.score > best;
    if (newBest) { store.set('confessional.best', state.score); }

    $('end-stats').innerHTML =
      stat('Score', state.score) +
      stat('Correct', state.correct + ' / ' + state.answered) +
      stat('Best streak', state.bestStreak) +
      stat('Personal best', newBest ? state.score + ' (new!)' : Math.max(best, state.score));

    $('report-body').innerHTML = buildReport(win);
    Sound.play(win ? 'win' : 'lose');
    var h = $('end-heading');
    try { h.focus({ preventScroll: true }); } catch (e) { h.focus(); }
  }

  function stat(label, value) {
    return '<div><dt>' + escapeHtml(label) + '</dt><dd>' + escapeHtml(String(value)) + '</dd></div>';
  }

  function buildReport(win) {
    var html = '';
    if (!win && state.answered < state.deck.length) {
      html += '<p>You answered <strong>' + state.answered + '</strong> of the ' + state.deck.length +
        ' dilemmas in this set.</p>';
    }

    if (!state.missed.length) {
      html += '<p>You did not miss any topics. Brilliant! To keep revising, try another section or a harder difficulty.</p>';
    } else {
      html += '<h3>Topics to revise</h3><ul class="report-list">';
      // Group missed dilemmas by spec reference
      var groups = {};
      var orderKeys = [];
      state.missed.forEach(function (m) {
        var key = 'P' + m.d.paper + '-' + m.d.specRef;
        if (!groups[key]) { groups[key] = []; orderKeys.push(key); }
        groups[key].push(m);
      });
      orderKeys.sort();
      orderKeys.forEach(function (key) {
        var items = groups[key];
        var d0 = items[0].d;
        var terms = [];
        items.forEach(function (m) {
          (m.d.keyTerms || []).forEach(function (t) { if (terms.indexOf(t) === -1) { terms.push(t); } });
        });
        html += '<li class="report-item">' +
          '<p class="report-spec">' + escapeHtml(specLine(d0)) + '</p>';
        items.forEach(function (m) {
          html += '<p><strong>' + escapeHtml(m.d.penitent) + ':</strong> ' + rich(m.d.feedbackWrong) + '</p>';
        });
        html += '<p class="report-terms"><strong>Key terms to revise:</strong> ' + escapeHtml(terms.join(', ')) + '</p>' +
          '</li>';
      });
      html += '</ul>';
    }

    // Score by section
    var bySection = {};
    var keys = [];
    state.results.forEach(function (r) {
      var key = 'P' + r.d.paper + '-S' + r.d.section;
      if (!bySection[key]) { bySection[key] = { right: 0, total: 0, d: r.d }; keys.push(key); }
      bySection[key].total++;
      if (r.correct) { bySection[key].right++; }
    });
    if (keys.length) {
      keys.sort();
      html += '<h3>How you did by section</h3><ul class="report-sections">';
      keys.forEach(function (k) {
        var s = bySection[k];
        html += '<li><span>Paper ' + s.d.paper + ' · ' + escapeHtml(sectionName(s.d.paper, s.d.section)) +
          '</span><strong>' + s.right + ' / ' + s.total + '</strong></li>';
      });
      html += '</ul>';
    }
    return html;
  }

  /* ---------------------------------------------------------------
   * Modals (used instead of alert/confirm)
   * --------------------------------------------------------------- */

  var lastFocus = null;

  function openModal(id) {
    lastFocus = document.activeElement;
    var m = $(id);
    m.hidden = false;
    var first = m.querySelector('[data-autofocus]') || m.querySelector('button');
    if (first) { first.focus(); }
  }

  function closeModal(id) {
    $(id).hidden = true;
    if (lastFocus && lastFocus.focus) { lastFocus.focus(); }
  }

  function openModalId() {
    var ids = ['modal-settings', 'modal-quit'];
    for (var i = 0; i < ids.length; i++) { if (!$(ids[i]).hidden) { return ids[i]; } }
    return null;
  }

  /* ---------------------------------------------------------------
   * Events (click only, so taps never fire twice)
   * --------------------------------------------------------------- */

  function closest(el, selector) {
    while (el && el.nodeType === 1) {
      if (el.matches ? el.matches(selector) : el.webkitMatchesSelector(selector)) { return el; }
      el = el.parentNode;
    }
    return null;
  }

  function bindEvents() {
    $('difficulty-group').addEventListener('click', function (e) {
      var b = closest(e.target, '[data-difficulty]');
      if (!b) { return; }
      state.difficulty = b.getAttribute('data-difficulty');
      store.set('confessional.difficulty', state.difficulty);
      renderDifficulty();
      Sound.play('tap');
    });

    $('section-group').addEventListener('click', function (e) {
      var b = closest(e.target, '[data-section]');
      if (!b || b.getAttribute('aria-disabled') === 'true') { return; }
      state.section = b.getAttribute('data-section');
      renderSectionState();
      Sound.play('tap');
    });

    $('btn-begin').addEventListener('click', function () { Sound.play('tap'); startGame(); });

    $('options').addEventListener('click', function (e) {
      var b = closest(e.target, '.option');
      if (!b) { return; }
      choose(parseInt(b.getAttribute('data-slot'), 10));
    });

    $('btn-next').addEventListener('click', function () { Sound.play('tap'); nextDilemma(); });
    $('btn-again').addEventListener('click', function () { Sound.play('tap'); startGame(); });
    $('btn-home').addEventListener('click', function () {
      Sound.play('tap');
      renderBest();
      showScreen('start');
    });

    $('btn-settings-start').addEventListener('click', function () { openModal('modal-settings'); });
    $('btn-settings-game').addEventListener('click', function () { openModal('modal-settings'); });
    $('btn-quit').addEventListener('click', function () { openModal('modal-quit'); });

    $('btn-quit-confirm').addEventListener('click', function () {
      $('modal-quit').hidden = true;
      renderBest();
      showScreen('start');
      $('btn-begin').focus();
    });

    // Any element with data-close shuts its modal (backdrop, Done, Keep playing).
    document.addEventListener('click', function (e) {
      var c = closest(e.target, '[data-close]');
      if (!c) { return; }
      var modal = closest(c, '.modal');
      if (modal) { closeModal(modal.id); }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        var id = openModalId();
        if (id) { closeModal(id); }
      }
    });

    $('set-sound').addEventListener('click', function () {
      settings.sound = !settings.sound;
      store.set('confessional.settings', settings);
      applySettings();
      Sound.play('tap'); // also unlocks audio on iOS, because this is inside a tap
    });
    $('set-motion').addEventListener('click', function () {
      settings.reducedMotion = !settings.reducedMotion;
      store.set('confessional.settings', settings);
      applySettings();
    });
    $('set-text').addEventListener('click', function () {
      settings.largeText = !settings.largeText;
      store.set('confessional.settings', settings);
      applySettings();
      resizeAll();
    });

    var resizeTimer = null;
    var onResize = function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeAll, 120);
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
  }

  /* ---------------------------------------------------------------
   * Start up
   * --------------------------------------------------------------- */

  function init() {
    applySettings();
    title = new Sprites.Title($('title-canvas'));
    scene = new Sprites.Scene($('scene-canvas'));
    candles = new Sprites.StrikeCandles($('candles-canvas'));
    endScene = new Sprites.EndScene($('end-canvas'));
    michael = Sprites.fatherMichael();

    renderDifficulty();
    renderSections();
    renderBest();
    bindEvents();

    if (!ALL.length) {
      $('btn-begin').setAttribute('aria-disabled', 'true');
      $('no-dilemmas').hidden = false;
    }
    showScreen('start');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
