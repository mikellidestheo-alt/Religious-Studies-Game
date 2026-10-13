/*
 * validate-core.js - Checks every dilemma. Shared by tools/validate.js (Node)
 * and tools/validate.html (browser).
 *
 * Errors must be fixed. Warnings are worth a look.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ConfessionalValidator = factory();
  }
})(this, function () {
  'use strict';

  var MAX_SCENE_WORDS = 60;
  var OPTION_WORDS_WARN = 20;   // "about 20 words"
  var OPTION_WORDS_ERROR = 25;
  var MOODS = ['worried', 'hopeful', 'neutral'];

  // Keep in step with the look options listed at the top of js/sprites.js.
  var LOOK = {
    age: ['child', 'teen', 'adult', 'elder'],
    build: ['slim', 'broad'],
    hat: ['none', 'flatcap', 'beanie', 'headscarf', 'schoolcap', 'hardhat'],
    hair: ['short', 'long', 'bob', 'bun', 'afro', 'ponytail', 'braids', 'buzz', 'spiky', 'bald'],
    hairColour: ['black', 'darkbrown', 'brown', 'auburn', 'ginger', 'blonde', 'grey', 'white', 'teal', 'pink'],
    accessory: ['none', 'glasses', 'guitar', 'oranges', 'scarf', 'clipboard', 'toddler', 'cane', 'headphones', 'flowers', 'satchel'],
    pattern: ['plain', 'stripes', 'check', 'dots', 'tie', 'hivis', 'cardigan'],
    bottom: ['trousers', 'skirt']
  };

  function words(s) {
    return String(s || '').replace(/\*\*/g, '').trim().split(/\s+/).filter(Boolean).length;
  }

  function sentences(s) {
    var plain = String(s || '').replace(/\*\*/g, '')
      // ignore full stops in references like "CCC 2267" or "Gen. 1"
      .replace(/\b(e\.g|i\.e|etc|St|Mr|Mrs|Ms|Dr)\./g, '$1');
    var m = plain.match(/[^.!?]+[.!?]+(\s|$)/g);
    return m ? m.length : 1;
  }

  function isNonEmptyString(v) {
    return typeof v === 'string' && v.trim().length > 0;
  }

  function validate(dilemmas, SPEC) {
    var errors = [];
    var warnings = [];
    var seen = {};
    var coverage = {};
    var bySection = {};
    Object.keys(SPEC.topics).forEach(function (k) { coverage[k] = 0; });
    SPEC.sections.forEach(function (s) { bySection[s.key] = 0; });

    (dilemmas || []).forEach(function (d, i) {
      var where = d && isNonEmptyString(d.id) ? d.id : ('dilemma #' + (i + 1));
      var err = function (msg) { errors.push(where + ': ' + msg); };
      var warn = function (msg) { warnings.push(where + ': ' + msg); };

      if (!d || typeof d !== 'object') { err('is not an object'); return; }

      // Required text fields
      ['id', 'specRef', 'topic', 'penitent', 'scene', 'feedbackCorrect', 'feedbackWrong'].forEach(function (f) {
        if (!isNonEmptyString(d[f])) { err('missing "' + f + '"'); }
      });

      // Unique id
      if (isNonEmptyString(d.id)) {
        if (seen[d.id]) { err('duplicate id (also used by another dilemma)'); }
        seen[d.id] = true;
      }

      // Paper, section and spec reference
      var section = SPEC.findSection(d.paper, d.section);
      if (!section) { err('paper/section ' + d.paper + '/' + d.section + ' is not in the specification'); }
      else { bySection[section.key]++; }
      if (isNonEmptyString(d.specRef)) {
        var key = 'P' + d.paper + '-' + d.specRef;
        if (!(key in coverage)) { err('specRef "' + d.specRef + '" is not a Paper ' + d.paper + ' content statement'); }
        else { coverage[key]++; }
        if (String(d.specRef).split('.')[0] !== String(d.section)) {
          err('specRef ' + d.specRef + ' does not belong to section ' + d.section);
        }
      }

      // Scene length
      if (words(d.scene) > MAX_SCENE_WORDS) {
        err('scene has ' + words(d.scene) + ' words (max ' + MAX_SCENE_WORDS + ')');
      }

      // Options
      if (!Array.isArray(d.options) || d.options.length !== 4) {
        err('must have exactly 4 options');
      } else {
        d.options.forEach(function (o, n) {
          if (!isNonEmptyString(o)) { err('option ' + (n + 1) + ' is empty'); return; }
          var w = words(o);
          if (w > OPTION_WORDS_ERROR) { err('option ' + (n + 1) + ' has ' + w + ' words (keep to about 20)'); }
          else if (w > OPTION_WORDS_WARN) { warn('option ' + (n + 1) + ' has ' + w + ' words (aim for 20 or fewer)'); }
        });
        var unique = {};
        d.options.forEach(function (o) { unique[String(o).trim().toLowerCase()] = true; });
        if (Object.keys(unique).length !== 4) { err('two options are the same'); }
      }

      // Correct answer
      var ci = d.correctIndex;
      if (typeof ci !== 'number' || ci % 1 !== 0 || ci < 0 || ci > 3) {
        err('correctIndex must be 0, 1, 2 or 3');
      } else if (Array.isArray(d.options) && d.options.length === 4) {
        var lens = d.options.map(function (o) { return String(o).length; });
        var longestOther = 0;
        lens.forEach(function (l, n) { if (n !== ci && l > longestOther) { longestOther = l; } });
        if (lens[ci] > longestOther) {
          err('the correct option is the longest (' + lens[ci] + ' characters); make a wrong option longer or the correct one shorter');
        }
      }

      // Views represented by wrong options: one entry per option, null for the correct one
      var v = d.viewsRepresentedByWrongOptions;
      if (!Array.isArray(v) || v.length !== 4) {
        err('viewsRepresentedByWrongOptions must have 4 entries (null for the correct option)');
      } else {
        v.forEach(function (text, n) {
          if (n === ci) {
            if (text !== null && text !== '') { warn('viewsRepresentedByWrongOptions[' + n + '] is the correct option, so it should be null'); }
          } else if (!isNonEmptyString(text)) {
            err('viewsRepresentedByWrongOptions[' + n + '] should say whose view option ' + (n + 1) + ' is');
          }
        });
      }

      // Key terms
      if (!Array.isArray(d.keyTerms) || !d.keyTerms.length) { err('keyTerms must list at least one term'); }

      // Feedback length (2-3 sentences)
      ['feedbackCorrect', 'feedbackWrong'].forEach(function (f) {
        if (!isNonEmptyString(d[f])) { return; }
        var n = sentences(d[f]);
        if (n < 2 || n > 3) { warn(f + ' has ' + n + ' sentences (aim for 2-3)'); }
      });

      // Bold markers balanced
      [d.scene, d.feedbackCorrect, d.feedbackWrong].concat(Array.isArray(v) ? v : []).forEach(function (t) {
        if (typeof t === 'string' && (t.split('**').length - 1) % 2 !== 0) { err('unbalanced ** bold markers in: "' + t.slice(0, 40) + '..."'); }
      });

      // Mood, level and look
      if (d.mood && MOODS.indexOf(d.mood) === -1) { err('mood must be worried, hopeful or neutral'); }
      if (!d.mood) { warn('no mood given (neutral will be used)'); }
      if (d.level === undefined) { warn('no level given (2 will be used)'); }
      else if ([1, 2, 3].indexOf(d.level) === -1) { err('level must be 1, 2 or 3'); }
      if (d.look && typeof d.look === 'object') {
        Object.keys(d.look).forEach(function (k) {
          if (LOOK[k] && LOOK[k].indexOf(d.look[k]) === -1) {
            warn('look.' + k + ' "' + d.look[k] + '" is not a known option (' + LOOK[k].join(', ') + ')');
          }
        });
      }
    });

    return {
      total: (dilemmas || []).length,
      errors: errors,
      warnings: warnings,
      coverage: coverage,
      bySection: bySection
    };
  }

  function pad(s, n) {
    s = String(s);
    while (s.length < n) { s += ' '; }
    return s;
  }

  /* Plain-text report: errors, warnings and coverage per spec topic. */
  function report(result, SPEC, target) {
    target = target || 3;
    var lines = [];
    lines.push('THE CONFESSIONAL - dilemma check');
    lines.push('Dilemmas found: ' + result.total);
    lines.push('');
    lines.push('Errors: ' + result.errors.length);
    result.errors.forEach(function (e) { lines.push('  x ' + e); });
    lines.push('Warnings: ' + result.warnings.length);
    result.warnings.forEach(function (w) { lines.push('  ! ' + w); });
    lines.push('');
    lines.push('COVERAGE (target: ' + target + ' per topic)');
    var gaps = 0;
    SPEC.sections.forEach(function (s) {
      lines.push('');
      lines.push('Paper ' + s.paper + ' Section ' + s.section + ': ' + s.name + '  [' + result.bySection[s.key] + ']');
      Object.keys(result.coverage).forEach(function (k) {
        var m = k.match(/^P(\d)-(\d+)\.(\d+)$/);
        if (!m || +m[1] !== s.paper || +m[2] !== s.section) { return; }
        var n = result.coverage[k];
        if (n < target) { gaps++; }
        var bar = n ? new Array(n + 1).join('#') : '-';
        lines.push('  ' + pad(m[2] + '.' + m[3], 5) + pad(n, 3) + pad(bar, 8) + (n < target ? ' needs ' + (target - n) + ' more  ' : '              ') + SPEC.topics[k]);
      });
    });
    lines.push('');
    lines.push('Topics below target: ' + gaps + ' of ' + Object.keys(result.coverage).length);
    lines.push(result.errors.length ? 'RESULT: FAIL - fix the errors above.' : 'RESULT: PASS');
    return lines.join('\n');
  }

  return { validate: validate, report: report, words: words };
});
