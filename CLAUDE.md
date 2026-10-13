# CLAUDE.md: project rules for The Confessional

A static browser revision game for Edexcel International GCSE RS (4RS1) Christianity, hosted on GitHub Pages. The player is a Catholic parish priest. The correct option in each dilemma is the one that best reflects Catholic teaching. Read README.md for the dilemma format.

## Hard rules

- **No build step, frameworks, libraries, ES modules, npm packages or network requests.** Use plain `<script>` tags only. The game must work from `file://` and from a GitHub Pages project URL.
- **Relative paths only**: `css/style.css`, never `/css/style.css`.
- **No student data.** No analytics, cookies, logins or tracking. Wrap any `localStorage` use in try/catch, and keep the game working without it.
- **Conservative JavaScript (ES2017 or earlier).** No optional chaining, nullish coalescing, top-level await or modules. Use `var` and function expressions, to match the existing code.
- **iOS Safari is the primary target.**
  - Use click events only. Never add both touch and mouse handlers.
  - Buttons are real `<button>` elements, at least 48x48px.
  - Never use alert, confirm or prompt; use the on-screen modals.
  - Never use the Fullscreen or Vibration APIs.
  - Never use `100vh` without a `100dvh` or flex fallback. Never lock body scroll.
  - Add `-webkit-` prefixes alongside modern properties.
- **Motion:** 300ms or less, using transform and opacity only. Respect `prefers-reduced-motion` and the in-game "Reduce motion" setting (`Sprites.reducedMotion`, `html.reduce-motion`).
- **Fonts:** the pixel font (Press Start 2P, weight 400 only) is for short labels, headings and buttons only. All dilemma, option and feedback text uses the system font stack at 16px or larger, with a line height of at least 1.5.
- **Feedback must never rely on colour alone.** Always add an icon and a word (tick + "Correct", cross + "Not quite").

## Art rules

- All art is drawn in code in `js/sprites.js`, as string grids and palettes. No image files.
- Draw at art resolution into a buffer canvas, then copy it at a whole-number scale with smoothing off (`fitCanvas` and `blit`).
- Never depict Jesus, God or saints. The cross on the booth is a plain cross with no figure. Never use religious imagery as a joke.
- Headwear must be religion-neutral (no hijab or other religious head coverings for penitents). The bishop's zucchetto is the only clerical headwear.
- Keep the tone gentle and respectful. Never mock any belief, denomination, the sacrament or the priesthood.
- Never use the word "excommunicated". At game over, the bishop moves the player from the parish.

## Dilemma rules

- Each dilemma tests one spec content statement. Tag `paper`, `section`, `specRef` and `topic` correctly; `js/spec.js` is the master list.
- Scenes are 60 words or fewer, in simple English (many players are EAL learners). Options are about 20 words or fewer.
- The correct option must not be the longest. The validator enforces this.
- The correct option is the most pastoral, best-reasoned Catholic answer, not just the strictest. Wrong options must be plausible: Protestant, Orthodox, secular or Humanist views, popular opinion, legalistic over-readings, or half-truths. Name the view in `viewsRepresentedByWrongOptions`.
- Never present one denomination as "the" Christian view. Describe what Catholics believe, not what is true.
- **Never invent** Bible quotations, Church documents, papal statements, canon law or statistics. Give scripture as book, chapter and verse; if you quote, name the translation. If you are not sure of a reference, leave it out and add it to `notes/to-verify.md`.
- If Catholic teaching on a topic is open or disputed, rewrite the dilemma so one answer is clearly best, or skip it and record it in `notes/flagged.md`.
- Sensitive topics are described briefly and without graphic detail. Use no real people, parishes or organisations, except those named in the specification (for example, Prison Fellowship and Street Pastors) and well-known Church documents.

## Workflow

- After editing dilemmas, run `node tools/validate.js`. It must pass with 0 errors. It also reports coverage per spec topic, with a target of 3 per topic.
- If you add a dilemma file, add its `<script>` tag to both `index.html` and `tools/validate.html`.
- Test at phone and tablet sizes. Playwright with Chromium is available in cloud sessions.
- Commit after each stage, with a clear message.
