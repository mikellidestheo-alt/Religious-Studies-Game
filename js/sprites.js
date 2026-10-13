/*
 * sprites.js - All pixel art for The Confessional, drawn in code.
 *
 * Nothing here loads an image file. Every sprite is an array of strings
 * (one character per pixel) plus a small palette that maps characters to
 * colours. A '.' is always transparent.
 *
 * Main parts:
 *   1. Helpers (canvas, seeded random numbers, grid drawing)
 *   2. Palettes
 *   3. Character parts: bodies, heads, faces, hair, hats, accessories
 *   4. Character builder (procedural penitents, Father Michael, the bishop)
 *   5. Animation ticker (one requestAnimationFrame loop, paused when hidden)
 *   6. Drawables: confessional Scene, StrikeCandles, Title, Portrait, EndScene
 *
 * Everything is drawn at "art resolution" (e.g. 160x100) into a small
 * buffer canvas and then copied to the visible canvas at a whole-number
 * scale with smoothing turned off, so pixels stay crisp on Retina screens.
 *
 * Penitent "look" options (all optional) for dilemma authors:
 *   age:        child | teen | adult | elder
 *   build:      slim | broad              (adults only)
 *   hat:        none | flatcap | beanie | headscarf | schoolcap | hardhat
 *   hair:       short | long | bob | bun | afro | ponytail | braids | buzz | spiky | bald
 *   hairColour: black | darkbrown | brown | auburn | ginger | blonde | grey | white | teal | pink
 *   accessory:  none | glasses | guitar | oranges | scarf | clipboard | toddler |
 *               cane | headphones | flowers | satchel
 *   glasses:    true | false            (can be combined with another accessory)
 *   pattern:    plain | stripes | check | dots | tie | hivis | cardigan
 *   bottom:     trousers | skirt
 *   skin:       0-7 (light to deep). Leave blank for a random tone.
 */
(function (global) {
  'use strict';

  var Sprites = {};

  /* When true, decorative motion (flicker, blinking, swaying, dust,
     sparkles, smoke) is switched off. game.js sets this from settings. */
  Sprites.reducedMotion = false;

  /* =================================================================
   * 1. HELPERS
   * ================================================================= */

  function rep(ch, n) {
    var s = '';
    for (var i = 0; i < n; i++) { s += ch; }
    return s;
  }

  /* Symmetric sprites are written as their left half only. */
  function mirror(rows) {
    return rows.map(function (r) { return r + r.split('').reverse().join(''); });
  }

  function makeCanvas(w, h) {
    var c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
  }

  function noSmooth(ctx) {
    if ('imageSmoothingEnabled' in ctx) {
      ctx.imageSmoothingEnabled = false;
    } else {
      ctx.webkitImageSmoothingEnabled = false;
      ctx.mozImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
    }
  }

  /* FNV-1a string hash, so the same dilemma id always gives the same face. */
  function hashString(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  /* Small seeded random number generator (mulberry32). */
  function seededRandom(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /*
   * Draws a sprite grid. pal maps a character to a colour string, or to a
   * function (col, row) -> colour so clothes can have patterns.
   */
  function drawGrid(ctx, rows, x, y, pal) {
    for (var r = 0; r < rows.length; r++) {
      var row = rows[r];
      for (var c = 0; c < row.length; c++) {
        var col = pal[row.charAt(c)];
        if (!col) { continue; }
        if (typeof col === 'function') {
          col = col(c, r);
          if (!col) { continue; }
        }
        ctx.fillStyle = col;
        ctx.fillRect(x + c, y + r, 1, 1);
      }
    }
  }

  function px(ctx, colour, x, y, w, h) {
    ctx.fillStyle = colour;
    ctx.fillRect(x, y, w || 1, h || 1);
  }

  /*
   * Sizes a visible canvas so that one art pixel = a whole number of device
   * pixels, within the given maximum CSS size. Returns the scale used.
   */
  function fitCanvas(canvas, artW, artH, maxCssW, maxCssH) {
    var dpr = global.devicePixelRatio || 1;
    var k = Math.floor(Math.min((maxCssW * dpr) / artW, (maxCssH * dpr) / artH));
    if (!isFinite(k) || k < 1) { k = 1; }
    var w = artW * k;
    var h = artH * k;
    if (canvas.width !== w) { canvas.width = w; }
    if (canvas.height !== h) { canvas.height = h; }
    canvas.style.width = (w / dpr) + 'px';
    canvas.style.height = (h / dpr) + 'px';
    return k;
  }

  /* Copies part of an art buffer onto a visible canvas at scale k. */
  function blit(target, buffer, sx, sy, sw, sh, k) {
    var ctx = target.getContext('2d');
    noSmooth(ctx);
    ctx.clearRect(0, 0, target.width, target.height);
    ctx.drawImage(buffer, sx, sy, sw, sh, 0, 0, sw * k, sh * k);
  }

  function isShown(el) {
    return !!(el && el.offsetParent !== null);
  }

  Sprites.hashString = hashString;
  Sprites.seededRandom = seededRandom;
  Sprites.fitCanvas = fitCanvas;

  /* =================================================================
   * 2. PALETTES
   * ================================================================= */

  var INK = '#2b1d26';        // outlines
  var EYE = '#22161d';
  var MOUTH = '#7a2e3a';
  var BLUSH = '#e48a80';

  /* A wide, respectful range of skin tones: [base, shade]. */
  var SKINS = [
    ['#f8dcc8', '#e6bea5'],
    ['#efc4a4', '#d9a685'],
    ['#dfa77f', '#c78b63'],
    ['#c98d62', '#ad724b'],
    ['#a86f47', '#8c5835'],
    ['#8a5634', '#704326'],
    ['#6b4027', '#56321e'],
    ['#4f2f1d', '#3d2416']
  ];

  var HAIR = {
    black: ['#1f1a1d', '#120e10'],
    darkbrown: ['#3b2619', '#2a1a10'],
    brown: ['#6b4226', '#4e2f1a'],
    auburn: ['#8f3f22', '#6c2d17'],
    ginger: ['#c46a2c', '#9a501e'],
    blonde: ['#d9b45a', '#b08c3d'],
    grey: ['#9c9a9e', '#76747a'],
    white: ['#e3e1dc', '#bdbab3'],
    teal: ['#3f8f8a', '#2c6965'],
    pink: ['#c45a8a', '#9a4069']
  };

  var CLOTHES = [
    ['#c0504d', '#93393a'],
    ['#3f6fb0', '#2d5287'],
    ['#4f9a78', '#387559'],
    ['#e0a23b', '#b97f26'],
    ['#8a5aa8', '#6a4283'],
    ['#d77a9c', '#b25b7c'],
    ['#5aa7b8', '#3f8191'],
    ['#7a6a58', '#5b4e40'],
    ['#e8e2d4', '#c7bfae'],
    ['#3d4452', '#2a2f3a'],
    ['#ef8a4a', '#c86a30']
  ];
  var ACCENTS = ['#f4f1ea', '#f2c94c', '#2b1d26', '#e05a6a', '#5aa7b8', '#7fb8a4'];
  var LEGS = [
    ['#33415e', '#243049'],
    ['#4a4a52', '#36363d'],
    ['#6b5640', '#514030'],
    ['#2d2b30', '#1f1d22'],
    ['#8b7d5c', '#6d6146']
  ];
  var SHOES = ['#2b2226', '#5a3a28', '#e9e4da', '#7a2f2f', '#3f6fb0'];
  var HATS = [
    ['#c0504d', '#93393a'],
    ['#3f6fb0', '#2d5287'],
    ['#4f9a78', '#387559'],
    ['#e0a23b', '#b97f26'],
    ['#6b5a4a', '#4e4136'],
    ['#8a5aa8', '#6a4283']
  ];

  var CLERGY_BLACK = '#2a2733';
  var CLERGY_SHADE = '#1c1a24';
  var BISHOP_MAGENTA = '#b0306f';
  var GOLD = '#e8c46a';

  /* =================================================================
   * 3. CHARACTER PARTS (32 x 48 pixel canvas)
   * ================================================================= */

  /*
   * Body proportions. hw = half width, th = torso rows, lh = leg rows.
   * Children are short with big heads; elders are a little shorter.
   */
  var BODIES = {
    child: { hw: 7, th: 8, lh: 6 },
    teen: { hw: 8, th: 11, lh: 10 },
    adult: { hw: 9, th: 13, lh: 12 },
    broad: { hw: 10, th: 13, lh: 12 },
    elder: { hw: 9, th: 13, lh: 11 }
  };

  /*
   * Builds the left half of a body grid (mirrored to make the whole).
   * Letters: o outline, c clothes, d clothes shade, s skin (neck, hands),
   * l/m trousers, q skirt, n/N tights, k shoes, K soles.
   */
  function makeBodyHalf(hw, th, lh, bottom) {
    var rows = [];
    rows.push(rep('.', hw - 1) + 's');                 // neck
    rows.push('..' + rep('o', hw - 2));                // shoulders
    rows.push('.o' + rep('c', hw - 2));
    for (var i = 0; i < th; i++) {                     // torso with arms
      rows.push('o' + (i >= th - 2 ? 'ss' : 'cc') + 'd' + rep('c', hw - 4));
    }
    rows.push('.oo' + rep('d', hw - 3));               // hem / belt
    var coverRows = bottom === 'skirt' ? Math.ceil(lh * 0.5) : (bottom === 'robe' ? lh : 0);
    for (var j = 0; j < lh; j++) {
      if (j < coverRows) {
        rows.push(bottom === 'robe' ? ('.o' + rep('c', hw - 2)) : ('..o' + rep('q', hw - 3)));
      } else {
        var leg = bottom === 'skirt' ? 'n' : 'l';
        var inner = bottom === 'skirt' ? 'N' : 'm';
        rows.push('...o' + rep(leg, hw - 5) + (j === 0 ? leg : inner));
      }
    }
    rows.push('..o' + rep('k', hw - 4) + '.');         // shoes
    rows.push('..o' + rep('K', hw - 4) + '.');
    return rows;
  }

  var HEAD = mirror([
    '..oooo',
    '.ossss',
    'osssss',
    'osssss',
    'osssss',
    'zsssss',
    'zsssss',
    'osssss',
    'osssss',
    '.ossss',
    '..osss',
    '...ooo'
  ]);

  /* Faces cover head rows 4-10. b brow, e eye, m mouth, r blush. */
  var FACES = {
    neutral: [
      '............',
      '..bb....bb..',
      '...e....e...',
      '...e....e...',
      '............',
      '.....mm.....',
      '............'
    ],
    worried: [
      '....b..b....',
      '..bb....bb..',
      '...e....e...',
      '...e....e...',
      '............',
      '....mmmm....',
      '....m..m....'
    ],
    hopeful: [
      '..bb....bb..',
      '............',
      '...e....e...',
      '...e....e...',
      '..r......r..',
      '....m..m....',
      '.....mm.....'
    ]
  };

  function blinkFace(face) {
    var f = face.slice();
    f[2] = '............';
    f[3] = '..ee....ee..';
    return f;
  }

  /*
   * Hair styles. Each is a list of parts: rows, dx/dy offset from the head's
   * top-left corner, and whether the rows are a mirrored left half.
   * Letters: h hair, H hair shade.
   */
  var SHORT_HAIR = { dx: -1, dy: -1, mirror: true, rows: [
    '....hhh',
    '..hhhhh',
    '.hhhhhh',
    '.hhhhhh',
    '.hhhHhh',
    '.hh....',
    '.h.....'
  ] };

  var HAIRSTYLES = {
    short: [SHORT_HAIR],
    long: [{ dx: -1, dy: -1, mirror: true, rows: [
      '....hhh',
      '..hhhhh',
      '.hhhhhh',
      'hhhhhhh',
      'hhhHhhh',
      'hhh....',
      'hhh....',
      'hhh....',
      'hh.....',
      'hh.....',
      'hh.....',
      'hh.....',
      'hh.....',
      'hH.....',
      '.h.....'
    ] }],
    bob: [{ dx: -1, dy: -1, mirror: true, rows: [
      '....hhh',
      '..hhhhh',
      '.hhhhhh',
      'hhhhhhh',
      'hhhhhhh',
      'hhh....',
      'hhh....',
      'hhh....',
      'hh.....',
      'hhh....',
      '.H.....'
    ] }],
    bun: [
      { dx: -1, dy: -4, mirror: true, rows: ['.....hh', '....hhh', '.....hH'] },
      SHORT_HAIR
    ],
    afro: [{ dx: -2, dy: -3, mirror: true, rows: [
      '....hhhh',
      '..hhhhhh',
      '.hhhhhhh',
      'hhhhHhhh',
      'hhhhhhhh',
      'hhhhhhhh',
      'hhhHhhhh',
      'hhh.....',
      'hhh.....',
      'hhh.....',
      '.hh.....',
      '..h.....'
    ] }],
    ponytail: [
      SHORT_HAIR,
      { dx: 12, dy: 1, mirror: false, rows: ['hh.', 'hhh', '.hh', '.hH', '..h'] }
    ],
    braids: [
      SHORT_HAIR,
      { dx: -1, dy: 6, mirror: true, rows: ['h......', 'H......', 'h......', 'H......', 'h......', 'H......', 'h......'] }
    ],
    buzz: [{ dx: -1, dy: -1, mirror: true, rows: [
      '....HHH',
      '..HHHHH',
      '.HHhhhh',
      '.H.....'
    ] }],
    spiky: [{ dx: -1, dy: -3, mirror: true, rows: [
      '..h..h.',
      '.hh.hhh',
      '.hhhhhh',
      '.hhhhhh',
      '.hhhhhh',
      '.hhHHhh',
      '.hh....',
      '.h.....'
    ] }],
    bald: [{ dx: -1, dy: 3, mirror: true, rows: ['h......', 'hh.....', 'hh.....', 'h......'] }]
  };

  /* Hats. Letters: a hat colour, A shade, x accent. Religion-neutral only. */
  var HATSTYLES = {
    flatcap: [{ dx: -1, dy: -2, mirror: true, rows: [
      '...aaaa',
      '.aaaaaa',
      'aaaaaaa',
      'aaaaaaa',
      '.AAAAAA'
    ] }],
    beanie: [{ dx: -1, dy: -4, mirror: true, rows: [
      '......x',
      '....aaa',
      '..aaaaa',
      '.aaaaaa',
      '.aaaaaa',
      '.xAxAxA',
      '.AxAxAx'
    ] }],
    headscarf: [
      { dx: -1, dy: -2, mirror: true, rows: [
        '...aaaa',
        '.aaaaaa',
        'aaxaaxa',
        'aaaaaaa',
        'aAAAAAA',
        'a......',
        'a......'
      ] },
      { dx: 13, dy: 2, mirror: false, rows: ['aa.', '.aa', '..a'] }
    ],
    schoolcap: [{ dx: -1, dy: -3, mirror: true, rows: [
      '....aaa',
      '..aaaaa',
      '.aaaaax',
      '.aaaaaa',
      'AAAAAAA'
    ] }],
    hardhat: [{ dx: -2, dy: -4, mirror: true, rows: [
      '.....aax',
      '...aaaax',
      '..aaaaax',
      '..aaaaaa',
      '.aaaaaaa',
      'AAAAAAAA'
    ] }],
    zucchetto: [{ dx: 2, dy: -1, mirror: true, rows: ['..aa', '.aaa', 'aaaa'] }]
  };

  /* Oversized glasses sit over head rows 5-8. */
  var GLASSES = [
    '.gggg..gggg.',
    '.g..gggg..g.',
    '.g..g..g..g.',
    '.gggg..gggg.'
  ];

  /* Accessory grids. Each is placed by a function in drawAccessory(). */
  var ACC = {
    guitar: [
      '..ooo..',
      '.oaaao.',
      '.oaxao.',
      '.oaaao.',
      '.oaaao.',
      '.oaaao.',
      '.oaaao.',
      'oaaaaao',
      'oaaaaao',
      'oaaaaao',
      'oaaxaao',
      'oaaaaao',
      'oaaaaao',
      'oaaaaao',
      'oaaaaao',
      '.ooooo.'
    ],
    oranges: [
      '.o..o.',
      '.o..o.',
      'offffo',
      'oFffFo',
      'offFfo',
      'oFffFo',
      '.offo.'
    ],
    scarf: [
      'aaxxaaxx',
      '.xaaxxa.',
      '.aa.....',
      '.xx.....',
      '.aa.....',
      '.xx.....',
      '.aa.....',
      '.x.x....'
    ],
    clipboard: [
      '..ww..',
      'bbwwbb',
      'bppppb',
      'bpkkpb',
      'bppppb',
      'bpkkkb',
      'bppppb',
      'bbbbbb'
    ],
    toddler: [
      '.oooo.',
      'oHHHHo',
      'osssso',
      'oesseo',
      'ossmso',
      '.oooo.',
      '.tttt.',
      'otttto',
      'otttto',
      '.tttt.',
      '.s..s.'
    ],
    headphones: [
      'oo......oo',
      'oxo....oxo',
      '.oo....oo.'
    ],
    flowers: [
      '.r..y..',
      'rRr.yYy',
      '.r.b.y.',
      '..bBb..',
      '.g.b.g.',
      '..ggg..',
      '...g...',
      '..www..',
      '..www..',
      '...w...'
    ],
    satchel: [
      'oooooo',
      'oaaaao',
      'oaxxao',
      'oaaaao',
      'oooooo'
    ],
    mug: [
      '.v..v',
      '..v..',
      'aaaa.',
      'aaaao',
      'axaao',
      'aaaa.'
    ],
    letter: [
      'wwwww',
      'wxwxw',
      'wwxww',
      'wwwww'
    ],
    pectoral: [
      '.xx.',
      'xxxx',
      '.xx.',
      '.xx.'
    ]
  };

  /* =================================================================
   * 4. CHARACTER BUILDER
   * ================================================================= */

  var AGE_OPTIONS = ['child', 'teen', 'adult', 'adult', 'elder'];
  var HAIR_BY_AGE = {
    child: ['short', 'bun', 'afro', 'ponytail', 'braids', 'bob'],
    teen: ['short', 'long', 'afro', 'ponytail', 'braids', 'bob', 'spiky', 'buzz'],
    adult: ['short', 'long', 'bun', 'afro', 'ponytail', 'braids', 'bob', 'buzz'],
    elder: ['bald', 'short', 'bob', 'buzz', 'bun']
  };
  var HAIRCOL_BY_AGE = {
    child: ['black', 'darkbrown', 'brown', 'auburn', 'ginger', 'blonde'],
    teen: ['black', 'darkbrown', 'brown', 'auburn', 'ginger', 'blonde', 'teal', 'pink'],
    adult: ['black', 'darkbrown', 'brown', 'auburn', 'ginger', 'blonde', 'grey'],
    elder: ['grey', 'white', 'grey']
  };
  var HAT_BY_AGE = {
    child: ['schoolcap', 'beanie'],
    teen: ['beanie', 'schoolcap'],
    adult: ['flatcap', 'beanie', 'hardhat', 'headscarf'],
    elder: ['flatcap', 'headscarf']
  };
  var ACC_BY_AGE = {
    child: ['satchel', 'scarf', 'flowers', 'oranges', 'glasses'],
    teen: ['headphones', 'guitar', 'scarf', 'satchel', 'glasses'],
    adult: ['clipboard', 'toddler', 'oranges', 'flowers', 'guitar', 'scarf', 'glasses', 'headphones'],
    elder: ['cane', 'flowers', 'oranges', 'glasses', 'scarf']
  };
  var PATTERNS = ['plain', 'plain', 'stripes', 'check', 'dots', 'cardigan', 'tie'];

  Sprites.LOOK_OPTIONS = {
    age: ['child', 'teen', 'adult', 'elder'],
    build: ['slim', 'broad'],
    hat: ['none', 'flatcap', 'beanie', 'headscarf', 'schoolcap', 'hardhat'],
    hair: Object.keys(HAIRSTYLES),
    hairColour: Object.keys(HAIR),
    accessory: ['none', 'glasses', 'guitar', 'oranges', 'scarf', 'clipboard', 'toddler', 'cane', 'headphones', 'flowers', 'satchel'],
    pattern: ['plain', 'stripes', 'check', 'dots', 'tie', 'hivis', 'cardigan'],
    bottom: ['trousers', 'skirt']
  };

  /*
   * Turns a (possibly partial) look into a full character description.
   * Anything not given is chosen with a seeded random generator, so the
   * same seed always gives the same person.
   */
  function buildSpec(look, seed) {
    look = look || {};
    var rnd = seededRandom(seed);
    function pick(arr) { return arr[Math.floor(rnd() * arr.length)]; }
    function chance(p) { return rnd() < p; }

    var age = look.age || pick(AGE_OPTIONS);
    if (!BODIES[age]) { age = 'adult'; }
    var bodyKey = age;
    if (age === 'adult') {
      bodyKey = look.build === 'broad' ? 'broad' : (look.build === 'slim' ? 'adult' : pick(['adult', 'broad']));
    }

    var spec = {
      age: age,
      body: BODIES[bodyKey],
      skin: SKINS[typeof look.skin === 'number' ? Math.max(0, Math.min(7, look.skin)) : Math.floor(rnd() * SKINS.length)],
      hair: look.hair || pick(HAIR_BY_AGE[age]),
      hairColour: HAIR[look.hairColour] || HAIR[pick(HAIRCOL_BY_AGE[age])],
      hat: look.hat || (chance(0.4) ? pick(HAT_BY_AGE[age]) : 'none'),
      hatColour: pick(HATS),
      accessory: look.accessory || (chance(0.85) ? pick(ACC_BY_AGE[age]) : 'none'),
      clothes: look.clothes || pick(CLOTHES),
      accent: pick(ACCENTS),
      pattern: look.pattern || pick(PATTERNS),
      legs: pick(LEGS),
      bottom: look.bottom || (age !== 'elder' && chance(0.3) ? 'skirt' : 'trousers'),
      shoes: pick(SHOES),
      glassesColour: pick(['#2b1d26', '#c0392b', '#2d6fa0', '#8a5aa8', '#d98a2b']),
      extraColour: pick(CLOTHES)[0],
      extraColour2: pick(ACCENTS),
      special: look.special || null
    };
    spec.glasses = look.glasses === true || spec.accessory === 'glasses' ||
      (look.glasses !== false && chance(0.12));
    if (spec.hat === 'hardhat') { spec.hatColour = ['#f2c94c', '#c9a033']; if (!look.pattern) { spec.pattern = 'hivis'; } }
    if (spec.pattern === 'hivis') { spec.clothes = ['#ef8a2a', '#c86a1c']; }
    if (spec.pattern === 'tie' && spec.clothes[0] === '#3d4452') { spec.clothes = CLOTHES[8]; }
    if (look.clothesColour) { spec.clothes = [look.clothesColour, look.clothesShade || look.clothesColour]; }
    return spec;
  }

  /* Colour function for clothes so patterns work on any body size. */
  function clothesColour(spec, hw, th) {
    var main = spec.clothes[0];
    var dark = spec.clothes[1];
    var acc = spec.accent === main ? '#f4f1ea' : spec.accent;
    var p = spec.pattern;
    return function (c, r) {
      var centre = (c === hw - 1 || c === hw);
      switch (p) {
        case 'stripes': return (r % 3 === 0) ? acc : main;
        case 'check': return (((c >> 1) + (r >> 1)) % 2) ? main : dark;
        case 'dots': return (c % 3 === 1 && r % 3 === 1) ? acc : main;
        case 'tie': return (centre && r >= 2 && r <= 10) ? (r === 2 ? dark : acc) : main;
        case 'hivis': return (r === 7 || r === 8) ? '#eef27a' : main;
        case 'cardigan':
          if (centre) { return dark; }
          return (c === hw - 2 && r % 3 === 0 && r > 2) ? acc : main;
        case 'collar': return (centre && (r === 2 || r === 3)) ? '#f4f1ea' : main;
        case 'cassock': return (c === hw - 1 && r >= 2 && r % 2 === 0) ? BISHOP_MAGENTA : main;
        default: return main;
      }
    };
  }

  function drawParts(ctx, parts, hx, hy, pal) {
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      drawGrid(ctx, p.mirror ? mirror(p.rows) : p.rows, hx + p.dx, hy + p.dy, pal);
    }
  }

  /* Draws one frame of a character into a new 32x48 canvas. */
  function renderCharacter(spec, expression, blink) {
    var cv = makeCanvas(32, 48);
    var ctx = cv.getContext('2d');
    var b = spec.body;
    var hw = b.hw;
    var bodyRows = makeBodyHalf(hw, b.th, b.lh, spec.bottom);
    var bodyH = bodyRows.length;
    var m = {
      x0: 16 - hw,
      y0: 48 - bodyH,
      hw: hw,
      th: b.th
    };
    m.headX = 10;
    m.headY = m.y0 - 12;
    m.handY = m.y0 + 3 + b.th - 2;
    m.handLX = m.x0 + 1;
    m.handRX = m.x0 + 2 * hw - 3;
    spec.metrics = m;

    var skin = spec.skin;
    var hairPal = { h: spec.hairColour[0], H: spec.hairColour[1] };

    // 1. Things carried behind the body
    if (spec.accessory === 'guitar') {
      drawGrid(ctx, ACC.guitar, m.x0 + 2 * hw - 5, m.y0 - 6,
        { o: INK, a: '#2f4a3a', x: GOLD });
    }

    // 2. Body
    var cloth = clothesColour(spec, hw, b.th);
    var hemRow = 3 + b.th;
    var dColour = function (c, r) {
      if (spec.pattern === 'cassock' && r === hemRow) { return BISHOP_MAGENTA; }
      return spec.clothes[1];
    };
    drawGrid(ctx, mirror(bodyRows), m.x0, m.y0, {
      o: INK, c: cloth, d: dColour, s: skin[0],
      l: spec.legs[0], m: spec.legs[1],
      q: spec.legs[0], n: skin[1], N: skin[1],
      k: spec.shoes, K: INK
    });

    // 3. Things worn round the neck (drawn before the head)
    if (spec.accessory === 'scarf') {
      drawGrid(ctx, ACC.scarf, 12, m.y0, { a: spec.extraColour, x: spec.extraColour2 === spec.extraColour ? '#f4f1ea' : spec.extraColour2 });
    }
    if (spec.accessory === 'headphones') {
      drawGrid(ctx, ACC.headphones, 11, m.y0 - 1, { o: '#2b2b33', x: '#e06a5a' });
    }
    if (spec.accessory === 'satchel') {
      // strap from right shoulder down to the left hip
      var steps = b.th + 1;
      for (var i = 0; i < steps; i++) {
        var sx = Math.round(m.x0 + 2 * hw - 4 - (i * (2 * hw - 6)) / steps);
        px(ctx, '#5a3420', sx, m.y0 + 2 + i);
      }
    }

    // 4. Head, face, hair, hat, glasses
    drawGrid(ctx, HEAD, m.headX, m.headY, { o: INK, s: skin[0], z: skin[1] });
    var face = FACES[expression] || FACES.neutral;
    if (blink) { face = blinkFace(face); }
    drawGrid(ctx, face, m.headX, m.headY + 4, {
      b: spec.hair === 'bald' ? '#76747a' : spec.hairColour[1],
      e: EYE, m: MOUTH, r: BLUSH
    });
    var hairParts = HAIRSTYLES[spec.hair] || HAIRSTYLES.short;
    var hatParts = HATSTYLES[spec.hat];
    // Big hair styles are trimmed to the short version under hats so they don't poke through.
    if (hatParts && (spec.hair === 'afro' || spec.hair === 'spiky' || spec.hair === 'bun')) {
      hairParts = HAIRSTYLES.short;
    }
    drawParts(ctx, hairParts, m.headX, m.headY, hairPal);
    if (hatParts) {
      drawParts(ctx, hatParts, m.headX, m.headY, {
        a: spec.hatColour[0], A: spec.hatColour[1],
        x: spec.hat === 'hardhat' ? '#fff1a8' : '#f4f1ea'
      });
    }
    if (spec.glasses) {
      drawGrid(ctx, GLASSES, m.headX, m.headY + 5, { g: spec.glassesColour });
    }

    // 5. Things held in front
    switch (spec.accessory) {
      case 'oranges':
        drawGrid(ctx, ACC.oranges, m.handRX - 1, m.handY + 1, { o: '#3d6b2c', f: '#f39a2e', F: '#d9741c' });
        break;
      case 'clipboard':
        drawGrid(ctx, ACC.clipboard, m.x0 + 3, m.y0 + 5, { b: '#9a6a3a', p: '#f4efe2', k: '#8a8f99', w: '#c9ccd3' });
        break;
      case 'toddler':
        drawGrid(ctx, ACC.toddler, m.x0 + 2 * hw - 6, m.y0 + 3, {
          o: INK, H: spec.hairColour[0], s: skin[0], e: EYE, m: MOUTH, t: '#f2c94c'
        });
        break;
      case 'cane':
        px(ctx, '#6b4a2b', m.handRX, m.handY - 1, 2, 1);
        px(ctx, '#6b4a2b', m.handRX + 2, m.handY, 1, 48 - m.handY);
        break;
      case 'flowers':
        drawGrid(ctx, ACC.flowers, m.handLX - 2, m.handY - 8, {
          r: '#e05a6a', R: '#ff9fae', y: '#f2c94c', Y: '#fff1a8',
          b: '#7a8be0', B: '#b0bcff', g: '#4f9a5a', w: '#f4efe2'
        });
        break;
      case 'satchel':
        drawGrid(ctx, ACC.satchel, m.x0, m.y0 + b.th - 1, { o: INK, a: '#8a4a2a', x: '#e0b04a' });
        break;
      case 'mug':
        drawGrid(ctx, ACC.mug, m.x0 + 2 * hw - 7, m.y0 + 5, { a: '#c95f3a', o: '#c95f3a', x: '#f4efe2', v: '#cfc8d8' });
        break;
      case 'letter':
        drawGrid(ctx, ACC.letter, m.handRX - 1, m.handY - 1, { w: '#f4efe2', x: '#8a8f99' });
        break;
    }
    if (spec.special === 'bishop') {
      drawGrid(ctx, ACC.pectoral, 14, m.y0 + 4, { x: GOLD });
    }
    return cv;
  }

  /*
   * A character holds pre-drawn frames for each expression, with eyes open
   * and closed (for blinking).
   */
  function Character(spec) {
    this.spec = spec;
    this.frames = {};
  }
  Character.prototype.frame = function (expression, blink) {
    var key = (expression || 'neutral') + (blink ? '-blink' : '');
    if (!this.frames[key]) {
      this.frames[key] = renderCharacter(this.spec, expression || 'neutral', blink);
    }
    return this.frames[key];
  };
  Character.prototype.headTop = function () {
    this.frame('neutral');
    return this.spec.metrics.headY;
  };

  /** Creates a penitent from a dilemma's look and a seed string (e.g. the dilemma id). */
  Sprites.createPenitent = function (look, seedText) {
    return new Character(buildSpec(look, hashString(String(seedText || Math.random()))));
  };

  /** Father Michael: a kind elderly priest with round glasses and a mug of tea. */
  Sprites.fatherMichael = function () {
    var spec = buildSpec({
      age: 'elder', hair: 'bald', hairColour: 'grey', skin: 2, hat: 'none',
      accessory: 'mug', glasses: true, pattern: 'collar', bottom: 'trousers',
      clothesColour: CLERGY_BLACK, clothesShade: CLERGY_SHADE
    }, 7);
    spec.glassesColour = '#c9a033';
    spec.legs = [CLERGY_BLACK, CLERGY_SHADE];
    spec.shoes = '#1a1820';
    return new Character(spec);
  };

  /** The bishop: magenta skullcap (zucchetto), cassock, sash and a plain pectoral cross. */
  Sprites.bishop = function () {
    var spec = buildSpec({
      age: 'adult', build: 'broad', hair: 'short', hairColour: 'grey', skin: 5,
      hat: 'zucchetto', accessory: 'letter', glasses: false, pattern: 'cassock',
      bottom: 'robe', clothesColour: CLERGY_BLACK, clothesShade: CLERGY_SHADE,
      special: 'bishop'
    }, 11);
    spec.hatColour = [BISHOP_MAGENTA, '#8a2357'];
    spec.shoes = '#1a1820';
    return new Character(spec);
  };

  /* =================================================================
   * 5. ANIMATION TICKER
   * One requestAnimationFrame loop drives every animated canvas. It stops
   * when nothing needs drawing and pauses while the tab is hidden.
   * ================================================================= */

  var raf = global.requestAnimationFrame || function (fn) { return setTimeout(function () { fn(Date.now()); }, 66); };
  function now() { return (global.performance && performance.now) ? performance.now() : Date.now(); }

  var Ticker = {
    items: [],
    running: false,
    add: function (item) {
      this.items.push(item);
      this.wake();
    },
    wake: function () {
      if (this.running || document.hidden) { return; }
      this.running = true;
      var self = this;
      var loop = function () {
        if (document.hidden) { self.running = false; return; }
        var t = now();
        var more = false;
        for (var i = 0; i < self.items.length; i++) {
          if (self.items[i].tick(t)) { more = true; }
        }
        if (more) { raf(loop); } else { self.running = false; }
      };
      raf(loop);
    }
  };
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) { Ticker.wake(); }
  });
  Sprites.wake = function () { Ticker.wake(); };

  /* Idle animations run at about 8 frames per second to stay light. */
  var IDLE_MS = 125;

  /* =================================================================
   * 6a. FLAMES (shared by the scene, strike candles and end scenes)
   * ================================================================= */

  var FLAMES = [
    ['.y.', 'yYy', 'yWy', 'oWo', '.o.'],
    ['..y', '.yy', 'yYy', 'oWo', '.o.'],
    ['.y.', '.Yy', 'yWY', 'oWo', '.o.']
  ];
  var FLAME_PAL = { y: '#f2b04a', Y: '#ffd27a', W: '#fff4c8', o: '#e0782a' };

  function drawFlame(ctx, x, y, frame) {
    drawGrid(ctx, FLAMES[frame % FLAMES.length], x, y, FLAME_PAL);
  }

  function drawGlow(ctx, x, y, r, alpha) {
    var g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(255, 196, 110, ' + alpha + ')');
    g.addColorStop(1, 'rgba(255, 196, 110, 0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  var SMOKE = [
    ['.s.', 's.s'],
    ['s..', '.s.', '..s'],
    ['.s', 's.', '.s', 's.']
  ];

  /* =================================================================
   * 6b. CHURCH BACKGROUND AND CONFESSIONAL BOOTH (160 x 100)
   * ================================================================= */

  var SCENE_W = 160;
  var SCENE_H = 100;
  /* On phones in portrait the scene becomes a banner cropped round the penitent. */
  var BANNER = { x: 24, y: 44, w: 112, h: 49 };

  var GLASS = ['#3c6fb6', '#b8434e', '#e2b14a', '#4d9a6e', '#7a4fa0', '#e2b14a'];

  /* A pointed-arch stained-glass window with an abstract pattern (no figures). */
  function drawWindow(ctx, x, y, w, h, bright) {
    var half = w / 2;
    var cx = x + half - 0.5;
    for (var yy = 0; yy < h; yy++) {
      var span = yy < half ? Math.round(Math.sqrt(Math.max(0, half * half - (half - yy) * (half - yy))) * 1.0) : half;
      for (var xx = 0; xx < w; xx++) {
        var dx = Math.abs(x + xx - cx);
        if (dx > span) { continue; }
        var edge = dx > span - 1 || yy === h - 1;
        var lead = (xx % 4 === 0) || (yy % 5 === 0);
        var colour;
        if (edge) { colour = '#1d1420'; }
        else if (lead) { colour = '#2a1d2c'; }
        else {
          var idx = (Math.floor(xx / 4) + Math.floor(yy / 5) + (yy > h / 2 ? 2 : 0)) % GLASS.length;
          colour = GLASS[idx];
        }
        ctx.fillStyle = colour;
        ctx.fillRect(x + xx, y + yy, 1, 1);
      }
    }
    if (bright) {
      ctx.fillStyle = 'rgba(255, 236, 190, 0.18)';
      ctx.fillRect(x + 2, y + half, w - 4, h - half - 2);
    }
  }

  function drawChurch(ctx) {
    // Wall with stone courses
    var g = ctx.createLinearGradient(0, 0, 0, 88);
    g.addColorStop(0, '#2a1f33');
    g.addColorStop(1, '#4a3646');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, SCENE_W, 88);
    ctx.fillStyle = 'rgba(20, 12, 24, 0.25)';
    for (var row = 0; row < 88; row += 6) {
      ctx.fillRect(0, row, SCENE_W, 1);
      for (var col = (row / 6) % 2 ? 0 : 6; col < SCENE_W; col += 12) {
        ctx.fillRect(col, row, 1, 6);
      }
    }
    // Pillars
    [[30, 6], [124, 6]].forEach(function (p) {
      px(ctx, '#56404f', p[0], 0, p[1], 88);
      px(ctx, '#6e5464', p[0] + 1, 0, 1, 88);
      px(ctx, '#3a2b38', p[0] + p[1] - 1, 0, 1, 88);
      px(ctx, '#6e5464', p[0] - 1, 84, p[1] + 2, 4);
    });
    // Stained-glass windows
    drawWindow(ctx, 8, 12, 18, 42, true);
    drawWindow(ctx, 134, 12, 18, 42, true);
    // Floor tiles
    for (var fy = 88; fy < SCENE_H; fy += 3) {
      for (var fx = 0; fx < SCENE_W; fx += 4) {
        ctx.fillStyle = ((fx / 4 + (fy - 88) / 3) % 2) ? '#5a4033' : '#4c3529';
        ctx.fillRect(fx, fy, 4, 3);
      }
    }
    px(ctx, '#2e2028', 0, 88, SCENE_W, 1);
    // Pews either side
    for (var p = 0; p < 2; p++) {
      var py = 74 + p * 7;
      px(ctx, '#5a3624', 0, py, 34, 2);
      px(ctx, '#3e2418', 0, py + 2, 34, 5);
      px(ctx, '#5a3624', 126, py, 34, 2);
      px(ctx, '#3e2418', 126, py + 2, 34, 5);
    }
  }

  var WOOD = '#7a4a2c', WOOD_LIGHT = '#9a6238', WOOD_DARK = '#5a3420', WOOD_DEEP = '#43261a';

  function drawPanel(ctx, x, y, w, h) {
    px(ctx, WOOD, x, y, w, h);
    px(ctx, WOOD_DARK, x + 2, y + 2, w - 4, h - 4);
    px(ctx, WOOD, x + 3, y + 3, w - 6, h - 6);
    px(ctx, WOOD_LIGHT, x + 3, y + 3, w - 6, 1);
    px(ctx, WOOD_DEEP, x + 3, y + h - 4, w - 6, 1);
  }

  /* The booth front. The doorway (x 52-107) is left transparent. */
  function drawBooth(ctx) {
    // Side panels
    [40, 108].forEach(function (x) {
      px(ctx, WOOD_DARK, x, 16, 12, 82);
      px(ctx, WOOD_LIGHT, x, 16, 1, 82);
      drawPanel(ctx, x + 1, 22, 10, 26);
      drawPanel(ctx, x + 1, 50, 10, 14);
      drawPanel(ctx, x + 1, 72, 10, 24);
    });
    // Cornice and pediment
    px(ctx, WOOD_DARK, 37, 16, 86, 4);
    px(ctx, WOOD, 38, 12, 84, 5);
    px(ctx, WOOD_LIGHT, 38, 12, 84, 1);
    px(ctx, WOOD_DEEP, 38, 16, 84, 1);
    for (var i = 0; i < 6; i++) {
      px(ctx, WOOD, 80 - 4 - i * 3, 11 - i, 8 + i * 6, 1);
    }
    px(ctx, WOOD_LIGHT, 62, 6, 36, 1);
    // Dentil moulding
    for (var d = 40; d < 120; d += 3) { px(ctx, WOOD_DEEP, d, 18, 1, 1); }
    // Plain cross on top (no figure)
    px(ctx, GOLD, 79, 0, 2, 7);
    px(ctx, GOLD, 77, 2, 6, 2);
    px(ctx, '#b08c3d', 80, 1, 1, 6);
    // Door frame and threshold
    px(ctx, WOOD_DEEP, 52, 20, 56, 2);
    px(ctx, WOOD_DARK, 50, 96, 60, 2);
    // Little shelf for the candle on the right panel
    px(ctx, WOOD_LIGHT, 106, 68, 16, 1);
    px(ctx, WOOD_DARK, 106, 69, 16, 2);
  }

  /* Interior behind the penitent: deep shadow with a soft lamp-lit back wall. */
  function drawInterior(ctx) {
    var g = ctx.createLinearGradient(0, 22, 0, 96);
    g.addColorStop(0, '#2a1c24');
    g.addColorStop(1, '#3a2830');
    ctx.fillStyle = g;
    ctx.fillRect(52, 22, 56, 74);
    // A soft lamp glow behind the penitent so their face reads clearly
    var glow = ctx.createRadialGradient(80, 62, 2, 80, 62, 30);
    glow.addColorStop(0, 'rgba(255, 214, 150, 0.42)');
    glow.addColorStop(1, 'rgba(255, 214, 150, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(52, 22, 56, 74);
  }

  /* The lattice screen the priest speaks through (drawn over the penitent). */
  function makeLattice() {
    var cv = makeCanvas(SCENE_W, SCENE_H);
    var ctx = cv.getContext('2d');
    for (var y = 24; y < 84; y++) {
      for (var x = 53; x < 107; x++) {
        if ((x + y) % 7 === 0 || (x - y + 70) % 7 === 0) {
          px(ctx, '#6a3f25', x, y);
        }
      }
    }
    // Frame round the screen
    px(ctx, WOOD_DARK, 52, 23, 56, 1);
    px(ctx, WOOD_DARK, 52, 84, 56, 1);
    return cv;
  }

  /* Curtain and kneeler drawn in front of the penitent. */
  function drawFront(ctx) {
    // Curtain gathered on the left of the doorway
    for (var y = 22; y < 96; y++) {
      var w = y < 60 ? 7 : 7 - Math.min(3, Math.floor((y - 60) / 8));
      for (var x = 0; x < w; x++) {
        px(ctx, (x % 3 === 0) ? '#6e2433' : '#8f3344', 52 + x, y);
      }
    }
    px(ctx, GOLD, 52, 58, 7, 1);
    // Kneeler
    px(ctx, '#7a2f3a', 58, 90, 44, 4);
    px(ctx, '#9a4250', 58, 90, 44, 1);
    px(ctx, WOOD_DARK, 58, 94, 44, 2);
  }

  /* Light shaft from the left window, with a cosy warm tint. */
  function drawShaft(ctx, alpha) {
    ctx.fillStyle = 'rgba(255, 220, 150, ' + alpha + ')';
    for (var y = 20; y < 88; y++) {
      var t = (y - 20) / 68;
      var x0 = Math.round(10 + t * 28);
      ctx.fillRect(x0, y, 14 + Math.round(t * 10), 1);
    }
  }

  /* =================================================================
   * 6c. THE CONFESSIONAL SCENE
   * ================================================================= */

  function Scene(canvas) {
    this.canvas = canvas;
    this.buffer = makeCanvas(SCENE_W, SCENE_H);
    this.bctx = this.buffer.getContext('2d');
    this.bg = makeCanvas(SCENE_W, SCENE_H);
    drawChurch(this.bg.getContext('2d'));
    this.booth = makeCanvas(SCENE_W, SCENE_H);
    drawBooth(this.booth.getContext('2d'));
    this.front = makeCanvas(SCENE_W, SCENE_H);
    drawFront(this.front.getContext('2d'));
    this.lattice = makeLattice();
    this.mode = 'full';
    this.k = 1;
    this.strikes = 0;
    this.character = null;
    this.expression = 'neutral';
    this.outgoing = null;
    this.anim = null;          // walk in/out
    this.sparkleUntil = 0;
    this.brightUntil = 0;
    this.lastIdle = -1;
    this.dirty = true;
    this.blinkOffset = Math.random() * 3000;
    this.motes = [];
    for (var i = 0; i < 7; i++) {
      this.motes.push({ x: 14 + Math.random() * 24, y: 26 + Math.random() * 56, s: 0.4 + Math.random() * 0.6 });
    }
    Ticker.add(this);
  }

  Scene.prototype.setMode = function (mode) {
    if (mode !== this.mode) { this.mode = mode; this.resize(); }
  };

  Scene.prototype.resize = function () {
    var parent = this.canvas.parentNode;
    var maxW = parent ? parent.clientWidth : 320;
    if (!maxW) { return; }
    if (this.mode === 'banner') {
      this.k = fitCanvas(this.canvas, BANNER.w, BANNER.h, maxW, 170);
    } else {
      this.k = fitCanvas(this.canvas, SCENE_W, SCENE_H, Math.min(maxW, 640), 420);
    }
    this.dirty = true;
    Ticker.wake();
  };

  /** Walks the current penitent out and the new one in. */
  Scene.prototype.setPenitent = function (character, expression) {
    var t = now();
    this.outgoing = Sprites.reducedMotion ? null : this.character;
    this.character = character;
    this.expression = expression || 'neutral';
    this.sparkleUntil = 0;
    this.anim = Sprites.reducedMotion ? null : { start: t, outMs: this.outgoing ? 200 : 0, inMs: 300 };
    this.dirty = true;
    Ticker.wake();
  };

  Scene.prototype.setExpression = function (expression) {
    this.expression = expression;
    this.dirty = true;
    Ticker.wake();
  };

  Scene.prototype.setStrikes = function (n) {
    this.strikes = n;
    this.dirty = true;
    Ticker.wake();
  };

  /** A short sparkle and brighter candle after a correct answer. */
  Scene.prototype.celebrate = function () {
    var t = now();
    this.brightUntil = t + 300;
    if (!Sprites.reducedMotion) { this.sparkleUntil = t + 300; }
    this.dirty = true;
    Ticker.wake();
  };

  Scene.prototype.tick = function (t) {
    if (!isShown(this.canvas)) { return false; }
    var animating = !!this.anim || t < this.sparkleUntil || t < this.brightUntil;
    var idle = Math.floor(t / IDLE_MS);
    var idleChanged = !Sprites.reducedMotion && idle !== this.lastIdle;
    if (this.dirty || animating || idleChanged) {
      this.lastIdle = idle;
      this.dirty = false;
      this.render(t);
    }
    if (this.anim && t - this.anim.start > this.anim.outMs + this.anim.inMs) {
      this.anim = null;
      this.outgoing = null;
      this.dirty = true;
      return true;
    }
    return animating || this.dirty || !Sprites.reducedMotion;
  };

  /* Where the penitent stands, and the walk animation offsets. */
  Scene.prototype.penitentPose = function (t) {
    var homeX = 64, baseY = 49;
    var pose = { who: this.character, x: homeX, y: baseY, walking: false };
    if (this.anim) {
      var e = t - this.anim.start;
      if (e < this.anim.outMs && this.outgoing) {
        var p = e / this.anim.outMs;
        pose.who = this.outgoing;
        pose.x = Math.round(homeX + p * 50);
        pose.walking = true;
      } else {
        var q = Math.min(1, (e - this.anim.outMs) / this.anim.inMs);
        var eased = 1 - (1 - q) * (1 - q);
        pose.x = Math.round(homeX - 44 + eased * 44);
        pose.walking = q < 1;
      }
      if (pose.walking) { pose.y = baseY + (Math.floor(e / 70) % 2); }
    } else if (!Sprites.reducedMotion) {
      // Gentle sway: 4-frame cycle
      var phase = Math.floor((t + this.blinkOffset) / 700) % 4;
      pose.x += (phase === 2 || phase === 3) ? 1 : 0;
    }
    return pose;
  };

  Scene.prototype.render = function (t) {
    var ctx = this.bctx;
    var reduced = Sprites.reducedMotion;
    var flick = reduced ? 0 : Math.floor(t / IDLE_MS) % 3;
    ctx.clearRect(0, 0, SCENE_W, SCENE_H);
    ctx.drawImage(this.bg, 0, 0);

    // The church dims as strikes build up.
    var dim = [0, 0.18, 0.32, 0.45][Math.min(3, this.strikes)];
    if (this.strikes === 0) { drawShaft(ctx, 0.08); }
    else if (this.strikes === 1) { drawShaft(ctx, 0.04); }

    drawInterior(ctx);

    // Penitent
    var pose = this.penitentPose(t);
    if (pose.who) {
      var blink = !reduced && !pose.walking && ((t + this.blinkOffset) % 3600) < 160;
      var expr = pose.who === this.character ? this.expression : 'neutral';
      ctx.save();
      ctx.beginPath();
      ctx.rect(52, 22, 56, 74);
      ctx.clip();
      ctx.drawImage(pose.who.frame(expr, blink), pose.x, pose.y);
      ctx.restore();
    }

    ctx.globalAlpha = 0.24;
    ctx.drawImage(this.lattice, 0, 0);
    ctx.globalAlpha = 1;
    ctx.drawImage(this.front, 0, 0);
    ctx.drawImage(this.booth, 0, 0);

    if (dim > 0) {
      ctx.fillStyle = 'rgba(16, 8, 28, ' + dim + ')';
      ctx.fillRect(0, 0, SCENE_W, SCENE_H);
    } else {
      ctx.fillStyle = 'rgba(255, 180, 90, 0.05)';
      ctx.fillRect(0, 0, SCENE_W, SCENE_H);
    }

    // Candle on the shelf, with a flickering glow
    var bright = t < this.brightUntil;
    drawGlow(ctx, 114, 58, (bright ? 20 : 15) + (flick === 1 ? 1 : 0), bright ? 0.42 : 0.28);
    px(ctx, '#b08c3d', 111, 66, 6, 2);
    px(ctx, '#f1e6cc', 112, 59, 4, 7);
    px(ctx, '#d8c9a8', 115, 59, 1, 7);
    px(ctx, '#3a2a2a', 113, 58, 1, 1);
    drawFlame(ctx, 112, 53, flick);

    // Dust motes drifting in the window light
    if (!reduced && this.strikes < 2) {
      ctx.fillStyle = 'rgba(255, 236, 190, 0.55)';
      for (var i = 0; i < this.motes.length; i++) {
        var mo = this.motes[i];
        var yy = 26 + ((mo.y - 26 + t * 0.004 * mo.s) % 58);
        var xx = mo.x + (yy - 26) * 0.38 + Math.sin(t / 900 + i) * 1.5;
        ctx.fillRect(Math.round(xx), Math.round(yy), 1, 1);
      }
    }

    // Sparkles round the penitent after a correct answer
    if (t < this.sparkleUntil && this.character) {
      var stage = Math.floor((this.sparkleUntil - t) / 100);
      var head = this.character.headTop() + 49;
      var spots = [[60, head - 2], [98, head + 4], [66, head + 16], [94, head + 20], [80, head - 6]];
      for (var s = 0; s < spots.length; s++) {
        var sx = spots[s][0], sy = spots[s][1];
        px(ctx, '#fff4c8', sx, sy);
        if (stage >= 1) {
          px(ctx, GOLD, sx - 1, sy); px(ctx, GOLD, sx + 1, sy);
          px(ctx, GOLD, sx, sy - 1); px(ctx, GOLD, sx, sy + 1);
        }
        if (stage >= 2) {
          px(ctx, 'rgba(232, 196, 106, 0.6)', sx - 2, sy); px(ctx, 'rgba(232, 196, 106, 0.6)', sx + 2, sy);
        }
      }
    }

    if (this.mode === 'banner') {
      blit(this.canvas, this.buffer, BANNER.x, BANNER.y, BANNER.w, BANNER.h, this.k);
    } else {
      blit(this.canvas, this.buffer, 0, 0, SCENE_W, SCENE_H, this.k);
    }
  };

  Sprites.Scene = Scene;

  /* =================================================================
   * 6d. STRIKE CANDLES (three candles in the header)
   * ================================================================= */

  var CANDLES_W = 40, CANDLES_H = 24;

  function StrikeCandles(canvas) {
    this.canvas = canvas;
    this.buffer = makeCanvas(CANDLES_W, CANDLES_H);
    this.lit = 3;
    this.smoke = [0, 0, 0];      // time each candle was snuffed
    this.brightUntil = 0;
    this.lastIdle = -1;
    this.dirty = true;
    this.k = fitCanvas(canvas, CANDLES_W, CANDLES_H, 80, 48);
    Ticker.add(this);
  }

  StrikeCandles.prototype.resize = function () {
    this.k = fitCanvas(this.canvas, CANDLES_W, CANDLES_H, 80, 48);
    this.dirty = true;
    Ticker.wake();
  };

  /** Sets how many strikes have been made. Snuffs candles from the right. */
  StrikeCandles.prototype.setStrikes = function (strikes, animate) {
    var lit = 3 - strikes;
    var t = now();
    for (var i = 0; i < 3; i++) {
      var wasLit = i < this.lit;
      var isLit = i < lit;
      if (wasLit && !isLit && animate && !Sprites.reducedMotion) { this.smoke[i] = t; }
      if (isLit) { this.smoke[i] = 0; }
    }
    this.lit = lit;
    this.dirty = true;
    Ticker.wake();
  };

  StrikeCandles.prototype.brighten = function () {
    this.brightUntil = now() + 300;
    this.dirty = true;
    Ticker.wake();
  };

  StrikeCandles.prototype.tick = function (t) {
    if (!isShown(this.canvas)) { return false; }
    var smoking = false;
    for (var i = 0; i < 3; i++) { if (this.smoke[i] && t - this.smoke[i] < 360) { smoking = true; } }
    var animating = smoking || t < this.brightUntil;
    var idle = Math.floor(t / IDLE_MS);
    var idleChanged = !Sprites.reducedMotion && idle !== this.lastIdle && this.lit > 0;
    if (this.dirty || animating || idleChanged) {
      this.lastIdle = idle;
      this.dirty = false;
      this.render(t);
    }
    return animating || (!Sprites.reducedMotion && this.lit > 0);
  };

  StrikeCandles.prototype.render = function (t) {
    var ctx = this.buffer.getContext('2d');
    ctx.clearRect(0, 0, CANDLES_W, CANDLES_H);
    var bright = t < this.brightUntil;
    for (var i = 0; i < 3; i++) {
      var x = 3 + i * 13;
      var lit = i < this.lit;
      if (lit) {
        drawGlow(ctx, x + 3, 6, bright ? 9 : 7, bright ? 0.5 : 0.3);
      }
      // dish
      px(ctx, '#b08c3d', x - 1, 20, 8, 2);
      px(ctx, '#d8b45a', x - 1, 20, 8, 1);
      // wax
      px(ctx, lit ? '#f1e6cc' : '#b8ad98', x + 1, 10, 4, 10);
      px(ctx, lit ? '#d8c9a8' : '#9c917e', x + 4, 10, 1, 10);
      px(ctx, '#3a2a2a', x + 2, 8, 1, 2);
      if (lit) {
        var flick = Sprites.reducedMotion ? 0 : (Math.floor(t / IDLE_MS) + i) % 3;
        drawFlame(ctx, x + 1, 3, flick);
      } else if (this.smoke[i] && t - this.smoke[i] < 360) {
        var f = Math.min(2, Math.floor((t - this.smoke[i]) / 120));
        drawGrid(ctx, SMOKE[f], x + 1, 7 - SMOKE[f].length - f, { s: 'rgba(200, 196, 210, 0.8)' });
      }
    }
    blit(this.canvas, this.buffer, 0, 0, CANDLES_W, CANDLES_H, this.k);
  };

  Sprites.StrikeCandles = StrikeCandles;

  /* =================================================================
   * 6e. PIXEL TITLE ("THE CONFESSIONAL") with twinkling sparkles
   * ================================================================= */

  var FONT = {
    A: ['.###.', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
    B: ['####.', '#...#', '#...#', '####.', '#...#', '#...#', '####.'],
    C: ['.###.', '#...#', '#....', '#....', '#....', '#...#', '.###.'],
    D: ['####.', '#...#', '#...#', '#...#', '#...#', '#...#', '####.'],
    E: ['#####', '#....', '#....', '####.', '#....', '#....', '#####'],
    F: ['#####', '#....', '#....', '####.', '#....', '#....', '#....'],
    G: ['.###.', '#...#', '#....', '#.###', '#...#', '#...#', '.####'],
    H: ['#...#', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
    I: ['.###.', '..#..', '..#..', '..#..', '..#..', '..#..', '.###.'],
    J: ['..###', '...#.', '...#.', '...#.', '#..#.', '#..#.', '.##..'],
    K: ['#...#', '#..#.', '#.#..', '##...', '#.#..', '#..#.', '#...#'],
    L: ['#....', '#....', '#....', '#....', '#....', '#....', '#####'],
    M: ['#...#', '##.##', '#.#.#', '#.#.#', '#...#', '#...#', '#...#'],
    N: ['#...#', '##..#', '#.#.#', '#..##', '#...#', '#...#', '#...#'],
    O: ['.###.', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
    P: ['####.', '#...#', '#...#', '####.', '#....', '#....', '#....'],
    Q: ['.###.', '#...#', '#...#', '#...#', '#.#.#', '#..#.', '.##.#'],
    R: ['####.', '#...#', '#...#', '####.', '#.#..', '#..#.', '#...#'],
    S: ['.####', '#....', '#....', '.###.', '....#', '....#', '####.'],
    T: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '..#..'],
    U: ['#...#', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
    V: ['#...#', '#...#', '#...#', '#...#', '#...#', '.#.#.', '..#..'],
    W: ['#...#', '#...#', '#...#', '#.#.#', '#.#.#', '##.##', '#...#'],
    X: ['#...#', '#...#', '.#.#.', '..#..', '.#.#.', '#...#', '#...#'],
    Y: ['#...#', '#...#', '.#.#.', '..#..', '..#..', '..#..', '..#..'],
    Z: ['#####', '....#', '...#.', '..#..', '.#...', '#....', '#####'],
    ' ': ['.....', '.....', '.....', '.....', '.....', '.....', '.....']
  };

  /* Draws pixel text with a dark outline and a gold gradient. */
  function drawPixelText(ctx, text, x, y, scale, colours) {
    var pass = function (ox, oy, colourFn) {
      for (var i = 0; i < text.length; i++) {
        var glyph = FONT[text.charAt(i)] || FONT[' '];
        for (var r = 0; r < 7; r++) {
          for (var c = 0; c < 5; c++) {
            if (glyph[r].charAt(c) !== '#') { continue; }
            ctx.fillStyle = colourFn(r);
            ctx.fillRect(x + (i * 6 + c) * scale + ox, y + r * scale + oy, scale, scale);
          }
        }
      }
    };
    var outline = function () { return '#1b1224'; };
    pass(-1, 0, outline); pass(1, 0, outline); pass(0, -1, outline); pass(0, 1, outline);
    pass(0, 2, function () { return '#3b2440'; });
    pass(0, 0, function (r) { return colours[Math.min(colours.length - 1, Math.floor(r * colours.length / 7))]; });
  }

  function textWidth(text, scale) { return (text.length * 6 - 1) * scale; }

  var TITLE_W = 160, TITLE_H = 36;

  function Title(canvas) {
    this.canvas = canvas;
    this.buffer = makeCanvas(TITLE_W, TITLE_H);
    this.base = makeCanvas(TITLE_W, TITLE_H);
    var ctx = this.base.getContext('2d');
    drawPixelText(ctx, 'THE', Math.round((TITLE_W - textWidth('THE', 1)) / 2), 2, 1, ['#f7efdf', '#f7efdf', '#e8dcc0']);
    drawPixelText(ctx, 'CONFESSIONAL', Math.round((TITLE_W - textWidth('CONFESSIONAL', 2)) / 2), 14, 2,
      ['#fff1b8', '#ffe08a', '#f2c45a', '#f2b04a', '#e39a35', '#d4842a', '#c4722a']);
    // Two small candles either side of "THE"
    px(ctx, '#f1e6cc', 62, 4, 2, 5); px(ctx, '#f1e6cc', 96, 4, 2, 5);
    this.sparkles = [[14, 14], [48, 26], [80, 13], [118, 27], [146, 15], [100, 3]];
    this.lastIdle = -1;
    this.dirty = true;
    this.k = 1;
    Ticker.add(this);
  }

  Title.prototype.resize = function () {
    var parent = this.canvas.parentNode;
    var maxW = parent ? parent.clientWidth : 320;
    if (!maxW) { return; }
    this.k = fitCanvas(this.canvas, TITLE_W, TITLE_H, Math.min(maxW, 640), 160);
    this.dirty = true;
    Ticker.wake();
  };

  Title.prototype.tick = function (t) {
    if (!isShown(this.canvas)) { return false; }
    var idle = Math.floor(t / 150);
    if (this.dirty || (!Sprites.reducedMotion && idle !== this.lastIdle)) {
      this.lastIdle = idle;
      this.dirty = false;
      var ctx = this.buffer.getContext('2d');
      ctx.clearRect(0, 0, TITLE_W, TITLE_H);
      ctx.drawImage(this.base, 0, 0);
      var flick = Sprites.reducedMotion ? 0 : idle % 3;
      drawFlame(ctx, 61, -1, flick);
      drawFlame(ctx, 95, -1, (flick + 1) % 3);
      if (!Sprites.reducedMotion) {
        for (var i = 0; i < this.sparkles.length; i++) {
          var phase = (idle + i * 3) % 12;
          var s = this.sparkles[i];
          if (phase < 3) {
            px(ctx, '#fff8de', s[0], s[1]);
            if (phase === 1) {
              px(ctx, '#ffe08a', s[0] - 1, s[1]); px(ctx, '#ffe08a', s[0] + 1, s[1]);
              px(ctx, '#ffe08a', s[0], s[1] - 1); px(ctx, '#ffe08a', s[0], s[1] + 1);
            }
          }
        }
      }
      blit(this.canvas, this.buffer, 0, 0, TITLE_W, TITLE_H, this.k);
    }
    return !Sprites.reducedMotion;
  };

  Sprites.Title = Title;

  /* =================================================================
   * 6f. PORTRAIT (Father Michael's head and shoulders in feedback)
   * ================================================================= */

  var PORTRAIT_W = 24, PORTRAIT_H = 22;

  /** Draws a static head-and-shoulders portrait of a character. */
  Sprites.drawPortrait = function (canvas, character, expression, cssSize) {
    var frame = character.frame(expression || 'neutral');
    var m = character.spec.metrics;
    var buffer = makeCanvas(PORTRAIT_W, PORTRAIT_H);
    var ctx = buffer.getContext('2d');
    var g = ctx.createLinearGradient(0, 0, 0, PORTRAIT_H);
    g.addColorStop(0, '#5a3f52');
    g.addColorStop(1, '#3a2840');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, PORTRAIT_W, PORTRAIT_H);
    drawGlow(ctx, 18, 4, 10, 0.25);
    ctx.drawImage(frame, 4, m.headY - 3, PORTRAIT_W, PORTRAIT_H, 0, 0, PORTRAIT_W, PORTRAIT_H);
    var k = fitCanvas(canvas, PORTRAIT_W, PORTRAIT_H, cssSize || 72, cssSize || 72);
    blit(canvas, buffer, 0, 0, PORTRAIT_W, PORTRAIT_H, k);
  };

  /* =================================================================
   * 6g. END SCENES (bishop at the door; or a celebration)
   * ================================================================= */

  function drawDoorway(ctx, open) {
    drawChurch(ctx);
    // Big arched door in the middle
    var cx = 80, top = 22, w = 44, half = w / 2;
    for (var y = top; y < 88; y++) {
      var span = y - top < half ? Math.round(Math.sqrt(Math.max(0, half * half - (half - (y - top)) * (half - (y - top))))) : half;
      for (var x = -span; x < span; x++) {
        var inside = Math.abs(x + 0.5) < span - 2 && y > top + 1;
        ctx.fillStyle = inside ? (open ? '#f3dfae' : '#5a3420') : '#7a5a48';
        ctx.fillRect(cx + x, y, 1, 1);
      }
    }
    if (open) {
      // Daylight spilling in across the floor
      ctx.fillStyle = 'rgba(255, 236, 190, 0.35)';
      for (var fy = 88; fy < SCENE_H; fy++) {
        var spread = Math.round((fy - 88) * 1.6);
        ctx.fillRect(cx - 20 - spread, fy, 40 + spread * 2, 1);
      }
    }
  }

  function EndScene(canvas) {
    this.canvas = canvas;
    this.buffer = makeCanvas(SCENE_W, SCENE_H);
    this.bg = makeCanvas(SCENE_W, SCENE_H);
    drawDoorway(this.bg.getContext('2d'), true);
    this.bishop = Sprites.bishop();
    this.michael = Sprites.fatherMichael();
    this.win = false;
    this.lastIdle = -1;
    this.dirty = true;
    this.k = 1;
    Ticker.add(this);
  }

  EndScene.prototype.setOutcome = function (win) {
    this.win = !!win;
    this.dirty = true;
    Ticker.wake();
  };

  EndScene.prototype.resize = function () {
    var parent = this.canvas.parentNode;
    var maxW = parent ? parent.clientWidth : 320;
    if (!maxW) { return; }
    this.k = fitCanvas(this.canvas, SCENE_W, SCENE_H, Math.min(maxW, 560), 300);
    this.dirty = true;
    Ticker.wake();
  };

  EndScene.prototype.tick = function (t) {
    if (!isShown(this.canvas)) { return false; }
    var idle = Math.floor(t / IDLE_MS);
    if (this.dirty || (!Sprites.reducedMotion && idle !== this.lastIdle)) {
      this.lastIdle = idle;
      this.dirty = false;
      this.render(t);
    }
    return !Sprites.reducedMotion;
  };

  EndScene.prototype.render = function (t) {
    var ctx = this.buffer.getContext('2d');
    var reduced = Sprites.reducedMotion;
    var flick = reduced ? 0 : Math.floor(t / IDLE_MS) % 3;
    var blink = !reduced && (t % 4000) < 160;
    ctx.clearRect(0, 0, SCENE_W, SCENE_H);
    ctx.drawImage(this.bg, 0, 0);

    // The bishop stands in the doorway; Father Michael nearby.
    ctx.drawImage(this.bishop.frame(this.win ? 'hopeful' : 'neutral', blink), 64, 42);
    ctx.drawImage(this.michael.frame(this.win ? 'hopeful' : 'worried', false), 108, 42);

    if (!this.win) {
      ctx.fillStyle = 'rgba(16, 8, 28, 0.38)';
      ctx.fillRect(0, 0, SCENE_W, SCENE_H);
    }

    // Candle stand with three candles: lit for a win, snuffed for game over.
    px(ctx, '#6a4a2a', 18, 72, 26, 2);
    px(ctx, '#4a3020', 29, 74, 4, 14);
    px(ctx, '#6a4a2a', 24, 86, 14, 2);
    for (var i = 0; i < 3; i++) {
      var x = 20 + i * 8;
      px(ctx, this.win ? '#f1e6cc' : '#b8ad98', x, 62, 4, 10);
      px(ctx, '#3a2a2a', x + 1, 60, 1, 2);
      if (this.win) {
        drawGlow(ctx, x + 2, 57, 8, 0.3);
        drawFlame(ctx, x, 55, (flick + i) % 3);
      } else if (!reduced) {
        var f = (Math.floor(t / 300) + i) % 3;
        drawGrid(ctx, SMOKE[f], x, 57 - f, { s: 'rgba(200, 196, 210, 0.55)' });
      }
    }

    if (this.win && !reduced) {
      var idle = Math.floor(t / 150);
      var spots = [[58, 34], [102, 38], [80, 18], [70, 60], [94, 56], [124, 34]];
      for (var s = 0; s < spots.length; s++) {
        if ((idle + s * 2) % 8 < 3) {
          px(ctx, '#fff4c8', spots[s][0], spots[s][1]);
          px(ctx, GOLD, spots[s][0] - 1, spots[s][1]); px(ctx, GOLD, spots[s][0] + 1, spots[s][1]);
          px(ctx, GOLD, spots[s][0], spots[s][1] - 1); px(ctx, GOLD, spots[s][0], spots[s][1] + 1);
        }
      }
    }
    blit(this.canvas, this.buffer, 0, 0, SCENE_W, SCENE_H, this.k);
  };

  Sprites.EndScene = EndScene;

  global.Sprites = Sprites;
})(window);
