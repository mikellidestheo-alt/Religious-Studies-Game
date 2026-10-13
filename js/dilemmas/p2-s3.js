/*
 * Paper 2 (Option B Christianity), Section 3: Worship and practice
 * See the comment at the top of p1-s1.js (or README.md) for the format.
 */
window.DILEMMAS = window.DILEMMAS || [];

window.DILEMMAS.push(
  {
    id: 'p2s3-baptism-01',
    paper: 2,
    section: 3,
    specRef: '3.3',
    topic: 'Infant and believer\'s baptism',
    level: 2,
    look: { age: 'adult', accessory: 'toddler', hair: 'bun' },
    mood: 'worried',
    penitent: 'Grace, mum of 18-month-old Mia',
    scene: "My husband grew up Baptist. He says Mia should wait and choose baptism herself when she's older and believes. I grew up Catholic and want her baptised now. We keep arguing about it. What should we do?",
    options: [
      'Wait. Baptism should only ever follow a personal choice and a public declaration of faith by the believer.',
      "If she isn't baptised soon and something happens to her, she will definitely be shut out of heaven.",
      "Baptism is God's free gift of grace, even for babies. Baptise her now and raise her in faith together.",
      "It's really just a naming ceremony and a family party, so do whatever keeps the peace with both families."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics practise **infant baptism**: baptism washes away **original sin** and welcomes a child into the Church as God's free gift of **grace**, not something earned. Parents and **godparents** promise to bring the child up in the faith, and she can affirm that faith herself later at **Confirmation**. Many Baptists practise **believer's baptism** instead.",
    feedbackWrong: "In Catholic teaching, **infant baptism** is a gift of **grace** that removes **original sin** and makes a child part of the Church, even before she can understand. Parents and **godparents** make promises for her, and she can affirm her faith at **Confirmation**. Baptists and some other Protestants practise **believer's baptism**, for people old enough to profess their faith.",
    keyTerms: ['Infant baptism', "Believer's baptism", 'Original sin', 'Grace', 'Godparents', 'Confirmation'],
    viewsRepresentedByWrongOptions: [
      "This is **believer's baptism**, practised by Baptists and some other Protestant churches. Catholic teaching differs.",
      "This is too harsh. The Church urges baptism, but entrusts children who die unbaptised to God's mercy (CCC 1261).",
      null,
      'This is a secular view. For Catholics, baptism is a **sacrament**, not just a naming ceremony.'
    ],
    sources: ['CCC 1250-1252', 'CCC 1261']
  },

  {
    id: 'p2s3-altar-01',
    paper: 2,
    section: 3,
    specRef: '3.1',
    topic: 'Church architecture: the altar',
    level: 2,
    look: { age: 'elder', hat: 'none', accessory: 'clipboard', glasses: true, skin: 6 },
    mood: 'neutral',
    penitent: 'Mrs Adeyemi, parish council chair',
    scene: "Our church is being refurbished. Some council members want to move the altar to a side corner to make room for a stage and a big screen for the youth band. Others want the pulpit in the middle instead. What should be at the heart of our church?",
    options: [
      'Put the pulpit in the centre instead. Preaching God\'s Word is the most important part of any worship service.',
      'Move it to the corner. A stage and a screen will attract young people, and that matters most.',
      'Remove the altar and other furnishings completely, so the church is plain and nothing distracts from God.',
      'Keep the altar central: at Mass, Christ\'s sacrifice is made present there, and Catholics gather round it.'
    ],
    correctIndex: 3,
    feedbackCorrect: "For Catholics the **altar** is the focal point of the church, because the **Eucharist** is celebrated there and Christ's sacrifice is made present at Mass. The **lectern** (ambo), where the Bible is read, is important too, but the altar is central. Churches are designed so the people gather round the altar as one community.",
    feedbackWrong: "In Catholic churches the **altar** is the focal point: it is where the **Eucharist** is celebrated and Christ's sacrifice is made present at Mass. The **lectern** (ambo) for reading the Bible matters too, while many Protestant churches give the **pulpit** the central place. Music and screens can help worship, but should not push the altar aside.",
    keyTerms: ['Altar', 'Lectern', 'Pulpit', 'Eucharist', 'Church architecture'],
    viewsRepresentedByWrongOptions: [
      'Many Protestant churches put the pulpit at the centre to stress preaching. In Catholic churches, the **altar** is central.',
      'Reaching young people matters, but this puts convenience before worship. The altar is central to Catholic worship.',
      'This is closer to a **Quaker** meeting house or some plain Reformed churches. Catholic churches keep an altar at their heart.',
      null
    ],
    sources: ['CCC 1182', 'CCC 1383']
  }
);
