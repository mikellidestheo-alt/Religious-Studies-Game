# The Confessional

A pixel-art revision game for **Edexcel International GCSE Religious Studies (4RS1), Christianity**.

You play a Catholic parish priest. Penitents bring you dilemmas, and you choose the advice that best reflects **Catholic teaching**. The wrong options aren't silly: they reflect other Christian traditions, Humanist or secular views, popular opinion, or half-truths. Three wrong answers and the bishop comes to call.

- Plain HTML, CSS and JavaScript. No build step, frameworks, libraries or network requests.
- Works offline once loaded, and also works when `index.html` is opened straight from a folder.
- Designed for iPhone and iPad (Safari) first, and works on laptops and Android too.
- Collects no student data. There are no logins, analytics or cookies. The game uses `localStorage` (if the browser allows it) only for the player's own settings and personal best, and works normally without it.

## Project structure

```
index.html              The game page
css/style.css           All styles (colours are CSS custom properties in :root)
js/spec.js              Specification map: sections and topics (used by the game and the validator)
js/sprites.js           Pixel art: palettes, sprite grids, penitent generator, scenes, candles
js/game.js              Engine: screens, scoring, strikes, shuffling, feedback, revision report
js/dilemmas/*.js        The dilemma banks, one file per section
fonts/                  Press Start 2P pixel font (SIL OFL) and its licence
tools/validate.js       Dilemma checker for Node:     node tools/validate.js
tools/validate.html     The same checker in a browser: open tools/validate.html
tools/validate-core.js  The checking rules shared by both
notes/to-verify.md      Teaching or references to check
notes/flagged.md        Topics where Catholic teaching is not clear-cut
CLAUDE.md               Project rules for future editing sessions
```

## How to add a dilemma

1. Open the file for the right section in `js/dilemmas/` (for example, `p1-s2.js` for Paper 1 Section 2, Life and death).
2. Copy an existing dilemma object (everything from `{` to `},`), paste it inside the `push(` brackets, and edit it:

```js
{
  id: 'p1s2-abortion-01',          // unique; never reuse an id
  paper: 1,                         // 1 or 2
  section: 2,                       // section within the paper
  specRef: '2.3',                   // content statement from the spec
  topic: 'Abortion',                // short name used in the revision report
  level: 2,                         // 1 easier, 2 medium, 3 subtle (difficulty uses this)
  look: { age: 'adult', hat: 'none', accessory: 'clipboard' },  // optional
  mood: 'worried',                  // worried | hopeful | neutral
  penitent: 'Name, a few words about them',
  scene: 'What they say. Simple English, 60 words at most.',
  options: [                        // exactly 4, about 20 words each at most
    'Option one',
    'Option two',
    'Option three',
    'Option four'
  ],
  correctIndex: 1,                  // 0-3: which option is the Catholic answer
  feedbackCorrect: '2-3 sentences. Put **key terms** in double stars to make them bold.',
  feedbackWrong: '2-3 sentences explaining the Catholic teaching.',
  keyTerms: ['Sanctity of life', 'Abortion'],
  viewsRepresentedByWrongOptions: [ // one per option; null for the correct one
    'This is closer to a Humanist view...',
    null,
    'Many Protestants would hold this, but...',
    'This is a half-truth...'
  ],
  sources: ['CCC 2270-2275']        // optional; only references you are sure of
}
```

3. Run the checker: `node tools/validate.js`. Or open `tools/validate.html` in a browser. Fix any errors it reports. It checks for:
   - exactly 4 options, with `correctIndex` in range
   - a valid `specRef` for the paper and section
   - a scene of 60 words or fewer, and options of about 20 words or fewer
   - no duplicate ids
   - a correct option that is **not** the longest option (it also reports where the correct option ranks by length, and warns if one position dominates)
   - a view note for every wrong option
   - balanced `**bold**` markers

   It also prints how many dilemmas there are for each spec topic, so you can see the gaps.

**Order of options.** The game shuffles the options every time, so `correctIndex` only says which item in your list is correct. Vary it anyway, so the data file is easy to read.

**Penitent looks.** Every `look` field is optional. Anything left out is chosen at random, seeded by the dilemma id, so the same dilemma always shows the same person. The options are listed at the top of `js/sprites.js`:
`age` (child, teen, adult, elder), `build` (slim, broad), `hat` (none, flatcap, beanie, headscarf, schoolcap, hardhat), `hair`, `hairColour`, `accessory` (glasses, guitar, oranges, scarf, clipboard, toddler, cane, headphones, flowers, satchel), `glasses: true`, `pattern`, `bottom` (trousers, skirt) and `skin` (0-7).

**New dilemma file.** If you add a new file, add a `<script>` tag for it in **both** `index.html` and `tools/validate.html`. The Node checker warns you if a tag is missing.

## How difficulty works

Each dilemma has a `level`:

| Level | Meaning |
|-------|---------|
| 1 | Wrong options are clearly different from Catholic teaching |
| 2 | Wrong options are plausible |
| 3 | Wrong options are subtle half-truths |

- **Novice** uses levels 1-2.
- **Priest** uses all levels.
- **Bishop** uses levels 2-3.

If a chosen section has fewer than 6 dilemmas at that difficulty, the game uses every level instead, and shows a short note to say so.

## How to publish on GitHub Pages

1. Commit and push your files to the `main` branch:

   ```bash
   git add -A
   git commit -m "Update The Confessional"
   git push origin main
   ```

2. On GitHub, open the repository and go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
5. Wait a minute or two. The game will then be live at `https://<your-username>.github.io/<repository-name>/`.

All paths in the project are relative (for example, `css/style.css`), so the game works from a project URL like this.

## Credits and licences

- Pixel art is drawn in code, in `js/sprites.js`. There are no image files.
- Press Start 2P font: SIL Open Font License 1.1. See `fonts/LICENSE-note.md` and `fonts/OFL.txt`.
- The Catholic positions follow the Catechism of the Catholic Church and standard Catholic teaching. See `notes/to-verify.md` for points still to be checked.
