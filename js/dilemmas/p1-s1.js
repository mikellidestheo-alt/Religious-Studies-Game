/*
 * Paper 1, Section 1: Universe, creation and the place of human beings
 *
 * HOW TO ADD A DILEMMA (full guide in README.md)
 * Copy one object below, give it a new unique id, and edit the fields:
 *   id            unique text, e.g. "p1s1-trinity-02"
 *   paper         1 or 2
 *   section       section number within the paper (1-4)
 *   specRef       spec content statement, e.g. "1.5"
 *   topic         short topic name shown in the report
 *   level         1 = easier, 2 = medium, 3 = subtle (used by difficulty)
 *   look          optional penitent appearance (see js/sprites.js for options)
 *   mood          "worried" | "hopeful" | "neutral"
 *   penitent      name and a few words about them
 *   scene         what they say: max 60 words, simple English
 *   options       exactly 4 answers, each about 20 words or fewer
 *   correctIndex  0-3: which option is the Catholic answer
 *   feedbackCorrect / feedbackWrong   2-3 sentences. Put key terms in **double stars**.
 *   keyTerms      words to revise
 *   viewsRepresentedByWrongOptions    4 entries, one per option. null for the
 *                 correct one; for the others, say whose view it is.
 *   sources       optional: Bible or Catechism (CCC) references
 * The correct option must not be the longest one. Run tools/validate.js after editing.
 */
window.DILEMMAS = window.DILEMMAS || [];

window.DILEMMAS.push(
  {
    id: 'p1s1-stewardship-01',
    paper: 1,
    section: 1,
    specRef: '1.1',
    topic: 'Stewardship and care for creation',
    level: 1,
    look: { age: 'teen', hat: 'beanie', accessory: 'clipboard' },
    mood: 'hopeful',
    penitent: 'Zara, Year 10 eco-club leader',
    scene: "My eco-club wants to run a litter-pick and a recycling drive. My brother says caring for the planet is just politics and has nothing to do with being Catholic. Is he right? Does the Church actually say anything about the environment?",
    options: [
      'God made the world good and gave us the job of stewards. Caring for creation is part of your faith.',
      "The Bible gives humans dominion over the Earth, so it's ours to use however we need.",
      'Nature is sacred in itself, so humans should treat every creature as exactly equal to people.',
      "Your brother's right: faith is about saving souls. The environment is a job for governments and scientists."
    ],
    correctIndex: 0,
    feedbackCorrect: "Catholics believe God created the world good and made humans in his image (**Imago Dei**) to care for it as **stewards** (Genesis 1:26-28; 2:15). Pope Francis' letter **Laudato Si'** (2015) says caring for our common home is part of Christian faith. Your eco-club is living out your faith.",
    feedbackWrong: "Catholic teaching says humans are **stewards** of **creation**, not its owners. 'Dominion' in Genesis means caring responsibility, not using the Earth however we like. Humans have a special dignity as **Imago Dei**, and that brings a duty to look after the rest of creation.",
    keyTerms: ['Stewardship', 'Creation', 'Imago Dei', "Laudato Si'"],
    viewsRepresentedByWrongOptions: [
      null,
      "This misreads 'dominion' in Genesis 1:28. Catholic teaching rejects the idea that the Earth is simply ours to use up.",
      'This is closer to some deep-ecology or pantheist views. Catholics value all creatures, but believe only humans are made in God\'s image.',
      'This is closer to a secular view that keeps faith private. Catholic teaching says caring for creation is a moral and spiritual duty.'
    ],
    sources: ['Genesis 1:26-28; 2:15', 'CCC 2415-2418', "Laudato Si' (2015)"]
  },

  {
    id: 'p1s1-suffering-01',
    paper: 1,
    section: 1,
    specRef: '1.7',
    topic: 'Evil, suffering and theodicy',
    level: 2,
    look: { age: 'elder', hat: 'flatcap', accessory: 'cane' },
    mood: 'worried',
    penitent: 'Arthur, a retired bus driver',
    scene: "My wife, Maureen, died last month after a long illness. We prayed every day. A friend says this proves there's no loving God. I don't know what to think any more. Why would God let her suffer like that?",
    options: [
      "Illness can be a punishment for sin, so pray hard that Maureen's sins are forgiven and she is at peace.",
      'Your friend has a point: a God who is all-loving and all-powerful would surely never allow suffering like this.',
      "It's right to grieve. God did not will her suffering; Jesus suffered too, and God can bring good from it.",
      'God planned her illness to test your faith. Strong faith means accepting it calmly, without grieving.'
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe God does not will suffering, but allows it in a world with **free will**, and can bring good out of evil, as he did through Jesus' death and **resurrection**. Trying to answer the **problem of evil** like this is called a **theodicy**. Grief is natural: Jesus himself wept for his friend Lazarus (John 11:35).",
    feedbackWrong: "Catholic teaching says suffering is not a direct punishment for a person's sins (John 9:1-3). God does not will evil, but allows it in a world with **free will**, and can bring good from it, as in Jesus' **resurrection**. Grieving is not a lack of faith: Jesus wept too (John 11:35).",
    keyTerms: ['Problem of evil', 'Theodicy', 'Free will', 'Moral and natural evil'],
    viewsRepresentedByWrongOptions: [
      'This is a popular but mistaken idea. Jesus rejected the view that illness is a punishment for sin (John 9:1-3).',
      "This is the atheist **problem of evil** argument. Catholics take it seriously, but answer it with a **theodicy**.",
      null,
      'This sounds faithful but is fatalistic. Catholics believe God does not will evil, and grief is a natural, loving response.'
    ],
    sources: ['CCC 309-314', 'John 9:1-3', 'John 11:35']
  }
);
