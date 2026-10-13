/*
 * Paper 2 (Option B Christianity), Section 2: Celebration and pilgrimage
 * See the comment at the top of p1-s1.js (or README.md) for the format.
 */
window.DILEMMAS = window.DILEMMAS || [];

window.DILEMMAS.push(
  {
    id: 'p2s2-lent-01',
    paper: 2,
    section: 2,
    specRef: '2.1',
    topic: 'Lent',
    level: 1,
    look: { age: 'teen', hair: 'braids', hat: 'beanie', accessory: 'none' },
    mood: 'hopeful',
    penitent: 'Ellie, Year 10 student',
    scene: "Lent starts next week. My friends say it's basically a diet where you give up chocolate, and it doesn't really matter. My gran says it's important. What is Lent actually for, and what should I do?",
    options: [
      "It's a nice old tradition, but what you actually do doesn't matter, as long as you feel more spiritual.",
      'Forty days of prayer, fasting and giving before Easter. Give something up to grow closer to God.',
      "It's a time to pay for your sins by suffering, so that God will finally agree to forgive you.",
      "Lent's rules are only for adults. Teenagers don't need to do anything until they are grown up."
    ],
    correctIndex: 1,
    feedbackCorrect: "**Lent** is the forty days before Easter, recalling Jesus' forty days in the desert (Matthew 4:1-11). Catholics prepare through **prayer**, **fasting** and **almsgiving** (giving to those in need), starting on **Ash Wednesday**. Giving something up is good when it helps you turn towards God and other people.",
    feedbackWrong: "Catholics keep **Lent** as forty days of **prayer**, **fasting** and **almsgiving**, from **Ash Wednesday** to Easter, remembering Jesus' forty days in the desert. It is not about earning forgiveness: God's forgiveness is a free gift, and Lent helps us turn back to him. Everyone can take part, even though the strict fasting rules are for adults.",
    keyTerms: ['Lent', 'Ash Wednesday', 'Fasting', 'Almsgiving', 'Easter'],
    viewsRepresentedByWrongOptions: [
      'This is a popular secular view of Lent. For Catholics, what you do in Lent matters because it is about changing your heart.',
      null,
      "This misunderstands **grace**. Catholics believe forgiveness is God's free gift; Lenten penance is a response, not a payment.",
      'This is a half-truth. The Church\'s fasting rules apply to adults, but everyone, including young people, is invited to keep Lent.'
    ],
    sources: ['Matthew 4:1-11', 'CCC 538-540', 'CCC 1438']
  }
);
