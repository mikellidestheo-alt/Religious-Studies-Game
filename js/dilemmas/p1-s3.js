/*
 * Paper 1, Section 3: Peace and conflict
 * See the comment at the top of p1-s1.js (or README.md) for the format.
 */
window.DILEMMAS = window.DILEMMAS || [];

window.DILEMMAS.push(
  {
    id: 'p1s3-capital-01',
    paper: 1,
    section: 3,
    specRef: '3.6',
    topic: 'Capital punishment',
    level: 2,
    look: { age: 'teen', accessory: 'headphones' },
    mood: 'neutral',
    penitent: 'Kofi, Year 11 student',
    scene: "We're debating the death penalty in class. My uncle is an atheist and says murderers deserve to die. My friend says the Bible supports it: 'an eye for an eye'. Our textbook says Christians disagree. What does the Catholic Church actually teach?",
    options: [
      "The Bible says 'an eye for an eye', so executing a murderer is simply fair justice.",
      "It's acceptable in rare cases, if it is the only way to protect society from a dangerous criminal.",
      "Religion shouldn't get involved. Punishment is the government's job, so Christians should simply accept whatever the law says.",
      'The Church teaches it is never acceptable today: even a murderer keeps their God-given dignity and can change.'
    ],
    correctIndex: 3,
    feedbackCorrect: "In 2018 Pope Francis revised the Catechism (CCC 2267) to say the **death penalty** is **inadmissible**, because it attacks the dignity of the person. Prisons can protect society, and every offender keeps the chance to **reform**. Many atheists and Humanists also oppose **capital punishment**, though some, like your uncle, support it.",
    feedbackWrong: "Catholic teaching now says **capital punishment** is **inadmissible** (CCC 2267, revised in 2018), because every human life has God-given dignity. Society can be protected by prison, and offenders should have the chance to **reform**. Jesus taught mercy instead of 'an eye for an eye' (Matthew 5:38-39).",
    keyTerms: ['Capital punishment', 'Sanctity of life', 'Reformation', 'Retribution'],
    viewsRepresentedByWrongOptions: [
      "Some Christians use Exodus 21:24 ('an eye for an eye') to support the death penalty. Catholic teaching points to Jesus' teaching on mercy (Matthew 5:38-39).",
      'This was the Catholic position in the past. In 2018 Pope Francis changed the Catechism to say the death penalty is **inadmissible**.',
      'This is a secular view that separates religion from law. Catholics believe faith should shape our views on justice.',
      null
    ],
    sources: ['CCC 2267 (revised 2018)', 'Exodus 21:24', 'Matthew 5:38-39']
  },

  {
    id: 'p1s3-punishment-01',
    paper: 1,
    section: 3,
    specRef: '3.5',
    topic: 'Aims of punishment and Galatians 6:1-5',
    level: 2,
    look: { age: 'adult', accessory: 'clipboard', pattern: 'stripes', hair: 'braids' },
    mood: 'worried',
    penitent: 'Ms Okafor, youth football coach',
    scene: "One of my under-14 players, Jake, stole money from his teammates' bags. He has admitted it and seems ashamed. Some parents want him thrown off the team to set an example. Others say we should just forget it. As a Catholic coach, what should I do?",
    options: [
      "Throw him off the team. The others need to see that stealing is punished, or they'll do it too.",
      'Give a fair consequence, like paying it back, then gently help him change and stay part of the team.',
      'Christians must always forgive, so forget it happened and let him carry on with no consequence at all.',
      'He did wrong, so he deserves to suffer. Make the punishment as tough as you possibly can.'
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe punishment should be fair, protect others and help the wrongdoer **reform**. Galatians 6:1-5 teaches that Christians should gently restore someone who has done wrong, while each person takes responsibility for their own actions. **Justice** and **forgiveness** work together.",
    feedbackWrong: "Catholic teaching says punishment should aim at justice, protection and **reformation**, not revenge. Galatians 6:1-5 teaches Christians to restore a wrongdoer gently, while each person carries responsibility for their own actions. **Forgiveness** does not mean pretending nothing happened.",
    keyTerms: ['Aims of punishment', 'Reformation', 'Deterrence', 'Retribution', 'Forgiveness'],
    viewsRepresentedByWrongOptions: [
      'This focuses only on **deterrence**. Deterrence is one aim of punishment, but Catholics also stress **reformation** and gentle restoration.',
      null,
      'This is a half-truth. Christians are called to forgive, but forgiveness does not cancel fair consequences or justice.',
      'This is pure **retribution** (revenge). Catholic teaching says punishment should never aim to make someone suffer for its own sake.'
    ],
    sources: ['Galatians 6:1-5', 'CCC 2266']
  }
);
