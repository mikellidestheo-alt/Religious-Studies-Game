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

/* ---------------- Stage 2 ---------------- */
window.DILEMMAS.push(
  /* ---------- 4.1 Human rights ---------- */
  {
    id: "p1s4-rights-basis-01",
    paper: 1, section: 4, specRef: "4.1",
    topic: "Human rights",
    level: 2,
    look: { age: "teen", hair: "short", accessory: "glasses", pattern: "tie" },
    mood: "neutral",
    penitent: "Samuel, debate club captain",
    scene: "Our debate motion is 'Human rights are just whatever governments decide.' I'm arguing against it, but my opponent says rights are only laws that countries invent. As a Catholic, where do I believe human rights come from?",
    options: [
      "Rights are simply whatever the law of your own country chooses to grant its people.",
      "From the dignity God gives every person. Governments must respect rights, not invent them.",
      "Rights belong only to citizens who obey the law; criminals give up all of their rights completely.",
      "Human rights are a modern political idea that Christianity has nothing to say about."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe **human rights** come from the **dignity** of every person, made in the image of God. Governments do not create these rights; their job is to recognise and protect them. That is why the Church supports documents like the Universal Declaration of Human Rights (1948).",
    feedbackWrong: "Catholic teaching says **human rights** are rooted in human **dignity**, given by God to every person. Laws should protect rights, but they do not create them, and even people who break the law keep their basic dignity. The Church strongly supports human rights for all.",
    keyTerms: ["Human rights", "Dignity", "Imago Dei", "Common good"],
    viewsRepresentedByWrongOptions: [
      "This is called legal positivism: rights are only what the law says. Catholics believe rights come from human dignity.",
      null,
      "This is wrong. Catholics believe everyone keeps their basic dignity and rights, including prisoners.",
      "This is wrong. Catholic teaching has a lot to say about human rights, based on the dignity of every person."
    ],
    sources: ["Genesis 1:27", "CCC 1929-1933", "CCC 2273"]
  },
  {
    id: "p1s4-refugees-01",
    paper: 1, section: 4, specRef: "4.1",
    topic: "Human rights: refugees",
    level: 2,
    look: { age: "elder", hat: "flatcap", accessory: "cane" },
    mood: "worried",
    penitent: "Bert, a long-time parishioner",
    scene: "Our parish has started helping asylum seekers: English classes, clothes, meals after Mass. I'm not sure about it. We have plenty of poor people of our own round here. Shouldn't charity begin at home?",
    options: [
      "Charity begins at home: our own people should always be helped before any strangers.",
      "Countries should have no borders or rules at all, and everyone should be let in.",
      "This is politics, and churches should stay well out of it. It isn't a religious matter.",
      "Welcome the stranger: we can help local people and refugees alike."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe every person has the **right** to life and safety, including those fleeing danger. Jesus said that welcoming a stranger is welcoming him (Matthew 25:35), and the Church calls wealthier nations to welcome **refugees** as far as they can. Helping refugees doesn't mean forgetting local people in need: Christian love has room for both.",
    feedbackWrong: "Catholic teaching says nations should welcome **refugees** and migrants as far as they are able, while governments may also make fair rules (CCC 2241). Jesus taught that welcoming the stranger is welcoming him (Matthew 25:35). Caring for refugees and for local people in need go together.",
    keyTerms: ["Human rights", "Refugees", "Welcoming the stranger", "Dignity"],
    viewsRepresentedByWrongOptions: [
      "This is a common view, but Catholics believe Christian love reaches strangers too, as well as our own community.",
      "This goes too far. Catholic teaching says governments may make fair rules about migration.",
      "This is a secular view that faith is private. Catholics see caring for refugees as part of the Gospel.",
      null
    ],
    sources: ["Matthew 25:35", "Leviticus 19:33-34", "CCC 2241"]
  },
  {
    id: "p1s4-workers-rights-01",
    paper: 1, section: 4, specRef: "4.1",
    topic: "Human rights: workers",
    level: 1,
    look: { age: "adult", build: "broad", hat: "hardhat", accessory: "clipboard" },
    mood: "worried",
    penitent: "Wiktor, a factory supervisor",
    scene: "My boss has told me to make the workers stay late every night without paying them for it. Many of them are migrants who are afraid to complain. He says that's just business. If I refuse, I might lose my job. What should I do?",
    options: [
      "Business is business. Profit decides what's fair, so do what your boss tells you to do.",
      "Workers have a right to fair pay and decent conditions. Don't take part in exploiting them.",
      "Do what you're told. All the responsibility belongs to your boss, so you're not to blame.",
      "Workers' rights are a matter for trade unions, not something religion has anything to say about."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholic teaching says workers have a **right** to just wages and decent conditions, and that cheating them of fair pay is a serious injustice (CCC 2434). The Church has taught this since Pope Leo XIII's letter Rerum Novarum (1891). Standing up for the workers is hard, but it is right; seek advice, perhaps from a trade union.",
    feedbackWrong: "Catholic teaching says workers have the **right** to a just wage and fair treatment, and that exploiting vulnerable workers is a serious wrong (CCC 2434). Following orders does not remove our own responsibility. The Church has supported **workers' rights**, including trade unions, since Rerum Novarum (1891).",
    keyTerms: ["Human rights", "Just wage", "Workers' rights", "Social justice"],
    viewsRepresentedByWrongOptions: [
      "This puts profit before people. Catholic teaching says the economy should serve human dignity.",
      null,
      "This is wrong. Catholics believe each person is responsible for their own actions, even under orders.",
      "This is a secular view. The Catholic Church has taught about workers' rights for over a century."
    ],
    sources: ["Rerum Novarum (1891)", "CCC 2428", "CCC 2434"]
  },

  /* ---------- 4.2 Equal rights and the role of women ---------- */
  {
    id: "p1s4-equal-pay-01",
    paper: 1, section: 4, specRef: "4.2",
    topic: "Equal rights for women",
    level: 1,
    look: { age: "adult", hair: "bob", accessory: "glasses", pattern: "stripes" },
    mood: "worried",
    penitent: "Elena, a software engineer",
    scene: "I've just found out the men in my team are paid much more than me for exactly the same job. When I raised it, my manager said that's just how it is. A man at church said a woman's real place is at home anyway. Does my faith say anything about this?",
    options: [
      "Women's main place is at home, so you shouldn't worry too much about your pay at work.",
      "Equality is a political issue. The Church stays neutral on matters like this one.",
      "Accept it humbly. Fighting for yourself would be selfish and proud for a Christian.",
      "Men and women have equal dignity, so equal pay is a matter of justice."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholic teaching says men and women are created with **equal dignity** (CCC 2334), so unfair discrimination at work is unjust. The Church supports women's **equal rights** in work and public life. Speaking up for fair pay is not selfish; it is standing up for justice.",
    feedbackWrong: "Catholic teaching says men and women have **equal dignity** as made in God's image (Genesis 1:27; CCC 2334). Paying women less for the same work is **discrimination** and an injustice. The Church supports women in the workplace and in public life, as well as at home.",
    keyTerms: ["Equality", "Equal rights", "Discrimination", "Dignity"],
    viewsRepresentedByWrongOptions: [
      "This is a traditionalist view, but Catholic teaching supports women's equal rights at work.",
      "This is wrong. The Church speaks out clearly about justice and equal dignity.",
      "This misunderstands humility. Seeking justice for yourself and others is not selfish.",
      null
    ],
    sources: ["Genesis 1:27", "Galatians 3:28", "CCC 2334"]
  },
  {
    id: "p1s4-women-leadership-01",
    paper: 1, section: 4, specRef: "4.2",
    topic: "Women in religious communities",
    level: 2,
    look: { age: "elder", hat: "headscarf", accessory: "clipboard", bottom: "skirt" },
    mood: "neutral",
    penitent: "Mrs Mensah, parish council member",
    scene: "Our parish council is choosing a new chair. Mrs Lopez is the best person for it, but one member says women shouldn't lead anything in the Catholic Church. Another says she could even lead Mass if there's no priest. What's right?",
    options: [
      "Women may come to Mass, but they should not hold any leadership roles in the parish.",
      "Yes. Women can lead councils, schools and ministries; only ordination is for men.",
      "Yes, and she could also celebrate Mass whenever there isn't a priest available to do it.",
      "Only religious sisters should lead in the Church. Laywomen ought to stay in the background."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholic women serve in many leadership roles: chairing parish councils, leading schools and charities, working in dioceses and serving as readers and Eucharistic ministers. Only **ordination** as deacon, priest or bishop is reserved to men, so only a priest can celebrate Mass. Mrs Lopez can certainly be the chair.",
    feedbackWrong: "Catholic teaching says men and women have **equal dignity**, and women hold many **leadership** roles in the Church: in parishes, schools, dioceses and charities. Only **ordination** is reserved to men, which is why only a priest can celebrate Mass. A woman can certainly chair the parish council.",
    keyTerms: ["Role of women", "Leadership", "Laity", "Ordination"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. Catholic women lead in many areas of Church life.",
      null,
      "This goes too far. Only an ordained priest can celebrate Mass in the Catholic Church.",
      "This is wrong. Laywomen as well as religious sisters hold leadership roles in the Church."
    ],
    sources: ["CCC 1577", "CCC 2334"]
  },

  /* ---------- 4.3 Racial harmony ---------- */
  {
    id: "p1s4-racism-family-01",
    paper: 1, section: 4, specRef: "4.3",
    topic: "Racism",
    level: 1,
    look: { age: "teen", hat: "beanie", accessory: "headphones" },
    mood: "worried",
    penitent: "Freya, Year 10 student",
    scene: "At family dinners my grandad tells jokes about people from other countries, and some of them are really racist. Everyone laughs awkwardly. My best friend is Black, and it makes me feel sick. Mum says he's old and just ignore it. Should I?",
    options: [
      "Racism is a sin against human dignity. Gently but clearly tell Grandad why it hurts.",
      "He's old and doesn't mean anything by it, so it's harmless. It's best to let it go.",
      "Cut him out of your life completely until he finally learns to change his attitudes.",
      "Racist jokes only matter if they break the law, and jokes at home are not illegal."
    ],
    correctIndex: 0,
    feedbackCorrect: "Catholics believe all people are made in **God's image**, with equal dignity, so **racism** is a sin. St Paul taught that in Christ there is no division between races (Galatians 3:28). Challenging racism gently but clearly, with respect for your grandad, helps build **racial harmony**.",
    feedbackWrong: "Catholic teaching says **racism** goes against the dignity of people made in **God's image** (CCC 1935). Staying silent can let it continue, but Christians should challenge it with love, not hatred. Every family conversation is a chance to build **racial harmony**.",
    keyTerms: ["Racism", "Racial harmony", "Imago Dei", "Prejudice"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is a common excuse. Catholics believe racist jokes hurt people's dignity, whoever tells them.",
      "This goes too far. Catholics challenge racism, but also keep loving the person and hoping they change.",
      "This confuses law and morality. Something can be legal and still be wrong."
    ],
    sources: ["Galatians 3:28", "Acts 10:34-35", "CCC 1934-1935"]
  },
  {
    id: "p1s4-welcome-parish-01",
    paper: 1, section: 4, specRef: "4.3",
    topic: "Racial harmony in the parish",
    level: 1,
    look: { age: "adult", hair: "short", accessory: "oranges", pattern: "check" },
    mood: "worried",
    penitent: "Graham, a parish volunteer",
    scene: "Lots of new families have joined our parish recently, from the Philippines, Nigeria and Poland. Some long-standing parishioners grumble that 'our parish isn't ours any more'. As the welcome team leader, I'm not sure what to say to them. What should I do?",
    options: [
      "The Church is 'catholic', meaning universal. Welcome everyone and enjoy the gifts they bring.",
      "Suggest that the new families find parishes of their own, with people from their own countries.",
      "Ask the newcomers to give up their own cultures and traditions so that they can fit in.",
      "Leave them to settle in by themselves. Welcoming new people isn't really the parish's job."
    ],
    correctIndex: 0,
    feedbackCorrect: "The word **catholic** means 'universal': the Church is one family made up of every nation and culture (Revelation 7:9). Welcoming people from different backgrounds builds **racial harmony**, and their traditions enrich the whole parish. You could help everyone get to know each other, for example with a shared parish meal.",
    feedbackWrong: "Catholic teaching says the Church is **catholic**, or universal: one family drawn from every nation (Revelation 7:9). **Racial harmony** means welcoming newcomers fully, and respecting their cultures rather than asking them to hide them. Parishes should actively welcome everyone.",
    keyTerms: ["Racial harmony", "Catholic (universal)", "Welcome", "Community"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is a form of segregation. Catholics believe all races belong together in one Church.",
      "This is forced assimilation. Catholics believe different cultures enrich the Church.",
      "This is wrong. Welcoming everyone is a key part of parish life."
    ],
    sources: ["Revelation 7:9", "Galatians 3:28", "CCC 830-831"]
  },
  {
    id: "p1s4-football-racism-01",
    paper: 1, section: 4, specRef: "4.3",
    topic: "Challenging racism",
    level: 1,
    look: { age: "teen", hair: "buzz", accessory: "scarf" },
    mood: "worried",
    penitent: "Jamal, Year 11 student",
    scene: "At the match on Saturday, some fans near us were making racist chants at a player. A few people laughed, and most just looked away. I said nothing, and I feel ashamed. What should a Catholic do in a situation like that?",
    options: [
      "Chants are just part of football culture. People don't really mean them, so it's not serious.",
      "Report it to stewards and support the player. Christians must challenge racism.",
      "Shout abuse back at the racist fans so they know exactly how it feels to be targeted.",
      "Racism in football is the clubs' problem to sort out, not something for ordinary fans."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe **racism** is a sin against people made in **God's image**. Staying silent can let it continue, so reporting it safely to stewards or the club is a good, practical response. Supporting the player shows that **racial harmony** matters to everyone.",
    feedbackWrong: "Catholic teaching says **racism** attacks human dignity and must be challenged, not ignored. The best response is safe and practical: report it to stewards and support the player, without repaying abuse with abuse. Everyone has a part to play in **racial harmony**.",
    keyTerms: ["Racism", "Racial harmony", "Dignity", "Discrimination"],
    viewsRepresentedByWrongOptions: [
      "This is a common excuse. Catholics believe racist chants are seriously wrong.",
      null,
      "This repays harm with harm. Catholics challenge racism without abusing others.",
      "This is a half-truth. Clubs must act, but Catholics believe everyone shares responsibility."
    ],
    sources: ["Galatians 3:28", "CCC 1935"]
  },

  /* ---------- 4.4 Multi-faith society; interfaith and interdenominational relationships ---------- */
  {
    id: "p1s4-interfaith-eid-01",
    paper: 1, section: 4, specRef: "4.4",
    topic: "Interfaith relationships",
    level: 1,
    look: { age: "teen", hair: "long", accessory: "flowers" },
    mood: "hopeful",
    penitent: "Charlotte, Year 9 student",
    scene: "My best friend Aisha has invited me to her family's Eid celebration. I'd love to go, but my aunt says Catholics shouldn't take part in other religions' festivals because it could weaken my faith. Is she right?",
    options: [
      "Yes, go and enjoy it. The Church respects other faiths and encourages friendship.",
      "No. Spending time at other religions' festivals will weaken your faith, so stay away.",
      "Go, and it doesn't matter anyway: all religions are exactly the same underneath.",
      "Only go if you plan to use the evening to try to convert her family to Christianity."
    ],
    correctIndex: 0,
    feedbackCorrect: "The Catholic Church teaches respect for other religions and rejects nothing that is true and holy in them (Nostra Aetate, 1965). It speaks with special respect of **Muslims**, who worship the one God. Sharing in a friend's celebration builds **interfaith** friendship and understanding.",
    feedbackWrong: "Catholic teaching encourages **interfaith dialogue** and friendship with people of other religions (Nostra Aetate, 1965). Going to a friend's Eid celebration as a guest shows respect, and it doesn't mean you stop being Catholic. Catholics keep their own faith while respecting others.",
    keyTerms: ["Interfaith dialogue", "Multi-faith society", "Respect", "Nostra Aetate"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is a fearful view. The Church encourages friendship and dialogue with people of other faiths.",
      "This is called relativism. Catholics respect other faiths but do not believe all religions are the same.",
      "This misunderstands dialogue. Catholics share their faith by example, not by using friendships to convert."
    ],
    sources: ["Nostra Aetate (1965)", "CCC 841-843"]
  },
  {
    id: "p1s4-ecumenism-communion-01",
    paper: 1, section: 4, specRef: "4.4",
    topic: "Interdenominational relationships",
    level: 3,
    look: { age: "teen", hair: "bun", accessory: "satchel" },
    mood: "worried",
    penitent: "Megan, Year 11 student",
    scene: "My Anglican friend has invited me to her confirmation service. She says everyone is welcome to receive communion there, and that it's basically the same as Mass. I want to support her, but I'm not sure what Catholics should do. Can I receive?",
    options: [
      "Yes, receive communion there. Communion in every church is exactly the same thing.",
      "Don't go at all. Catholics should never set foot inside the churches of any other denomination.",
      "Only go if you're planning to persuade her to become a Catholic afterwards.",
      "Go and pray with them, but don't receive communion; our churches aren't yet fully united."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics are encouraged to pray and worship alongside other Christians (**ecumenism**). But receiving communion expresses full unity of faith, which Catholics and Anglicans do not yet share, so Catholics normally do not receive communion in Protestant churches. Going to support your friend is a lovely thing to do.",
    feedbackWrong: "Catholic teaching encourages friendship and shared prayer between Christian denominations (**ecumenism**). But because communion is a sign of full unity, which the Catholic and Anglican churches do not yet share, Catholics normally don't receive it in Anglican churches. You can go, pray and support your friend.",
    keyTerms: ["Ecumenism", "Interdenominational relationships", "Eucharist", "Christian unity"],
    viewsRepresentedByWrongOptions: [
      "Many Anglicans welcome all baptised Christians to communion, but Catholic teaching differs.",
      "This is wrong. The Catholic Church encourages praying with other Christians.",
      "This misunderstands ecumenism, which is about friendship and shared prayer, not winning converts.",
      null
    ],
    sources: ["John 17:21", "CCC 820-821", "CCC 1400"]
  },
  {
    id: "p1s4-mixed-faith-marriage-01",
    paper: 1, section: 4, specRef: "4.4",
    topic: "Multi-faith society: marrying across faiths",
    level: 3,
    look: { age: "adult", hair: "long", accessory: "none", pattern: "dots" },
    mood: "worried",
    penitent: "Natalie, who is engaged",
    scene: "Ravi and I want to get married. He's Hindu, and I'm Catholic. We respect each other's faith. My aunt says the Church will never allow it, and Ravi's cousin says I should just convert to keep the peace. What's the truth?",
    options: [
      "Your aunt is right: Catholics are never allowed to marry someone of another religion.",
      "Convert to Hinduism to keep the peace. In the end, religion doesn't matter when you're in love.",
      "With permission the Church can allow it, if you respect each other's faith and keep yours.",
      "Just ignore religion completely in your marriage, so that it never causes any arguments."
    ],
    correctIndex: 2,
    feedbackCorrect: "In a **multi-faith society**, Catholics sometimes marry people of other religions. The Church can give permission for this, as long as the Catholic keeps practising their faith and promises to do all they can to bring up their children as Catholics, while respecting their spouse's beliefs. A priest will help you both prepare.",
    feedbackWrong: "Catholic teaching allows a Catholic to marry someone of another faith with the Church's permission, as long as both respect each other's beliefs. The Catholic partner keeps practising their faith and promises to do all they can to raise any children as Catholics. Faith matters in marriage, so it should be talked about openly, not ignored.",
    keyTerms: ["Multi-faith society", "Interfaith marriage", "Respect", "Dialogue"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. The Church can give permission for a Catholic to marry someone of another religion.",
      "This treats faith as unimportant. Catholics believe faith matters deeply, in marriage as well.",
      null,
      "This avoids the issue. Couples of different faiths are encouraged to talk openly about religion."
    ],
    sources: ["CCC 1633-1637"]
  },

  /* ---------- 4.5 Rich and poor; practical generosity ---------- */
  {
    id: "p1s4-homeless-01",
    paper: 1, section: 4, specRef: "4.5",
    topic: "Practical generosity",
    level: 1,
    look: { age: "teen", hat: "beanie", accessory: "headphones" },
    mood: "worried",
    penitent: "Theo, Year 11 student",
    scene: "I've just started a Saturday job. There's a homeless man outside the station every morning. My mate says giving him money is pointless because he'll only waste it. I feel bad just walking past. What should I do?",
    options: [
      "Don't give him anything. He'll probably just waste it, and it isn't your problem anyway.",
      "Treat him with dignity: say hello, and give food, money or time as you can.",
      "Give away everything you earn, or else you can't call yourself a real Christian.",
      "Just pray for homeless people. Actually giving anything isn't really necessary."
    ],
    correctIndex: 1,
    feedbackCorrect: "Jesus taught that whatever we do for people in need, we do for him (Matthew 25:40). **Practical generosity** can mean food, money, your time or simply treating someone with **dignity**: saying hello and looking them in the eye. Supporting local homeless charities is another good way to help.",
    feedbackWrong: "Catholic teaching says caring for the poor is a duty for every Christian, because Christ is present in them (Matthew 25:40). **Practical generosity** means giving what you can (food, money, time or friendship) and treating people with **dignity**. Prayer matters, and it should lead to action.",
    keyTerms: ["Practical generosity", "Poverty", "Dignity", "Charity"],
    viewsRepresentedByWrongOptions: [
      "This is a common excuse. Catholics believe we should help, while choosing wisely how to help.",
      null,
      "This goes too far. Catholics are called to generosity, not to give away everything they have.",
      "This is a half-truth. Prayer is important, but Jesus calls us to practical help too (James 2:15-16)."
    ],
    sources: ["Matthew 25:31-46", "James 2:15-16", "CCC 2443-2447"]
  },
  {
    id: "p1s4-charity-justice-01",
    paper: 1, section: 4, specRef: "4.5",
    topic: "Rich and poor: charity and justice",
    level: 2,
    look: { age: "adult", hair: "ponytail", accessory: "clipboard", pattern: "dots" },
    mood: "hopeful",
    penitent: "Lucia, parish justice and peace group",
    scene: "Our parish raises money every Lent for poor communities abroad. I want us to campaign about unfair trade and debt too, but someone on the committee said that's politics, and our job is only to give to charity. Should we do both?",
    options: [
      "Charity is enough. Politics and economics aren't really things that Christians should get involved in.",
      "Poverty is usually people's own fault, so they should be left to help themselves.",
      "Only governments can solve poverty, so parish fundraising is really quite pointless.",
      "Both. Give generously now, and also work to change unfair systems that keep people poor."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholic teaching says Christians should help the poor through **charity**, giving to meet urgent needs, and through **justice**, changing unfair systems that cause poverty. Supporting fair trade and campaigning on debt are part of **social justice**. The Church calls this a **preferential option for the poor**.",
    feedbackWrong: "Catholic teaching says **charity** and **justice** go together: we meet people's needs now, and also work to change the structures that keep them poor. This is part of Catholic **social justice** teaching. Christians are called to both give generously and speak up.",
    keyTerms: ["Charity", "Social justice", "Fair trade", "Preferential option for the poor"],
    viewsRepresentedByWrongOptions: [
      "This is a half-truth. Charity matters, but Catholic teaching also calls for justice and changing unfair systems.",
      "This is wrong. Catholics believe much poverty is caused by injustice, and we should help.",
      "This is a half-truth. Governments matter, but Catholics believe everyone has a part to play.",
      null
    ],
    sources: ["Amos 5:24", "CCC 2443-2449"]
  }
);
