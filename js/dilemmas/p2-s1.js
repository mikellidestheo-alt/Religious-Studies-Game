/*
 * Paper 2 (Option B Christianity), Section 1: Origins and impact on the community
 * See the comment at the top of p1-s1.js (or README.md) for the format.
 */
window.DILEMMAS = window.DILEMMAS || [];

window.DILEMMAS.push(
  {
    id: 'p2s1-conscience-01',
    paper: 2,
    section: 1,
    specRef: '1.2',
    topic: 'The Bible and conscience in decision-making',
    level: 3,
    look: { age: 'teen', hair: 'spiky', accessory: 'guitar' },
    mood: 'worried',
    penitent: 'Tomasz, Year 11 student',
    scene: "A friend cheated in a test and wants me to lie for them. My Baptist friend says I should look only at what the Bible says. My sister says just follow your conscience, whatever the Church says. Who's right about how Catholics should decide?",
    options: [
      'Only the Bible has authority for Christians. Look up what it says about lying and ignore all other guidance.',
      'Your conscience is yours alone. If it feels right to protect your friend, then it is right, whatever anyone says.',
      "Don't think about it yourself. Just ask a priest and do exactly what he tells you, nothing more.",
      "Form your conscience with the Bible and Church teaching, pray, then follow it, so don't lie for them."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe **conscience** is a gift from God, but it must be formed (educated) by **Scripture**, the Church's teaching and prayer. Once well formed, a person must follow it. The Catholic Church finds authority in the Bible and **Tradition** together, taught by the **Magisterium**, unlike the Protestant idea of the Bible alone (**sola scriptura**).",
    feedbackWrong: "Catholic teaching says you must follow your **conscience**, but first it has to be formed by the Bible, Church teaching and prayer, because conscience can be mistaken. Catholics read the Bible together with **Tradition** and the **Magisterium**. A well-formed conscience would tell you not to lie for your friend.",
    keyTerms: ['Conscience', 'Bible', 'Tradition', 'Magisterium', 'Sola scriptura'],
    viewsRepresentedByWrongOptions: [
      'This is the Protestant principle of **sola scriptura** (the Bible alone), held by many Baptists. Catholics use Scripture and Tradition together.',
      'This is closer to a secular or liberal view. Catholics believe conscience must be educated, or it can lead us wrong.',
      'This goes too far. Catholics should seek advice, but each person must form and then follow their own conscience.',
      null
    ],
    sources: ['CCC 80-82', 'CCC 1776-1785']
  }
);
