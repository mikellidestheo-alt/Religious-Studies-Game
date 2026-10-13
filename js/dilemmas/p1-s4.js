/*
 * Paper 1, Section 4: Rights, equality and social justice
 * See the comment at the top of p1-s1.js (or README.md) for the format.
 */
window.DILEMMAS = window.DILEMMAS || [];

window.DILEMMAS.push(
  {
    id: 'p1s4-women-01',
    paper: 1,
    section: 4,
    specRef: '4.2',
    topic: 'The role of women in the Church',
    level: 1,
    look: { age: 'teen', hair: 'ponytail', accessory: 'satchel' },
    mood: 'hopeful',
    penitent: 'Sophie, Year 9 altar server',
    scene: "I love serving at Mass and I want to give my whole life to God. My Methodist friend's minister is a woman. Could I become a priest one day? If not, does that mean the Church thinks girls matter less?",
    options: [
      'Yes. The rules have changed, so women can now be ordained as Catholic priests if they finish the training.',
      'No. Scripture says women should keep silent in church, so leave reading, serving and leading to the men.',
      'Only men are ordained priests, but women and men have equal dignity, and your calling truly matters.',
      'Sadly yes: it shows the Church sees women as less important, which is why only men are allowed to lead.'
    ],
    correctIndex: 2,
    feedbackCorrect: "The Catholic Church teaches that only men can be **ordained** as priests, following Jesus' choice of twelve male apostles. But it also teaches that men and women have **equal dignity**, both made in God's image. Women serve as religious sisters, catechists, readers, Eucharistic ministers and parish and school leaders, and several women saints are honoured as great teachers of the faith.",
    feedbackWrong: "Catholic teaching says men and women have **equal dignity**, but **ordination** as a priest is reserved to men, following Jesus' choice of male apostles. Women have many vital roles: religious sisters, readers, altar servers, catechists, Eucharistic ministers and leaders. Some other churches, such as the Church of England and the Methodist Church, do ordain women.",
    keyTerms: ['Equality', 'Ordination', 'Role of women', 'Vocation'],
    viewsRepresentedByWrongOptions: [
      'This is not Catholic teaching. Churches such as the Church of England and the Methodist Church ordain women, but the Catholic Church does not.',
      'Some Christians read 1 Corinthians 14:34 this way, but Catholic women read, serve at the altar and lead in many ways.',
      null,
      'This is a common criticism of the Church. Catholic teaching rejects it: men and women are equal in dignity before God.'
    ],
    sources: ['CCC 1577', 'CCC 2334', 'Galatians 3:28']
  },

  {
    id: 'p1s4-wealth-01',
    paper: 1,
    section: 4,
    specRef: '4.5',
    topic: 'Rich and poor; practical generosity',
    level: 2,
    look: { age: 'adult', build: 'broad', hat: 'none', accessory: 'none', pattern: 'check' },
    mood: 'neutral',
    penitent: 'Mr Haddad, a bakery owner',
    scene: "My bakery has done really well this year and I've just bought a new car. A customer told me it's easier for a camel to go through the eye of a needle than for a rich man to enter heaven. Is it wrong for a Catholic to be rich?",
    options: [
      "Being rich isn't a sin, but wealth is for sharing: pay fair wages and give generously to those in need.",
      'Your success shows that God is rewarding you for your faith, so enjoy your money with a completely clear conscience.',
      'Yes. A true follower of Jesus must sell everything they own and give all of it to the poor.',
      'Your money is your own business. Helping the poor is what taxes and charities are for, not you.'
    ],
    correctIndex: 0,
    feedbackCorrect: "Catholic teaching says wealth is not sinful in itself, but the love of money is dangerous (1 Timothy 6:10). God made the earth's goods for everyone, so the rich have a duty of **practical generosity**, fair wages and care for the poor. This is part of **social justice** and the Church's **preferential option for the poor**.",
    feedbackWrong: "Catholics believe being wealthy is not a sin, but wealth brings responsibility, because God made the world's goods for everyone. Christians should give generously, pay fair wages and stand with the poor (**practical generosity** and **social justice**). Jesus' warning about the camel (Mark 10:25) is about letting money come before God.",
    keyTerms: ['Practical generosity', 'Social justice', 'Preferential option for the poor', 'Wealth'],
    viewsRepresentedByWrongOptions: [
      null,
      "This is the 'prosperity gospel', taught in some churches. Catholic teaching rejects the idea that wealth is a reward for faith.",
      'Jesus asked one rich young man to do this (Mark 10:21), but Catholic teaching does not require everyone to give up all property.',
      'This is closer to an individualist secular view. Catholic teaching says caring for the poor is a personal duty for every Christian.'
    ],
    sources: ['1 Timothy 6:10', 'Mark 10:17-27', 'CCC 2402-2406']
  }
);
