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

/* ---------------- Stage 2 ---------------- */
window.DILEMMAS.push(
  /* ---------- 3.1 Church architecture: font, lectern, altar and cross ---------- */
  {
    id: "p2s3-font-01",
    paper: 2, section: 3, specRef: "3.1",
    topic: "Church architecture: the font",
    level: 1,
    look: { age: "adult", build: "broad", hair: "short", accessory: "clipboard", pattern: "stripes" },
    mood: "neutral",
    penitent: "Mr Barros, parish building committee",
    scene: "We're redesigning the church entrance. Someone suggested moving the old stone font into a side room, because baptisms only happen once a month and it takes up space. Others want it to stay by the door. Does it matter where the font goes?",
    options: [
      "Put it away in a side room. Baptisms are quite rare, so the font doesn't need to be seen.",
      "Keep the font near the entrance: it shows that baptism is how we enter the Church.",
      "The font is mostly decoration, so put a nice flower display in its place instead.",
      "Move it right up next to the altar, because fonts are only used during Sunday Mass."
    ],
    correctIndex: 1,
    feedbackCorrect: "The **font** holds the water for **baptism**, the sacrament by which people become members of the Church. That is why it is often placed near the church entrance: we enter the Church through baptism. Many Catholics also bless themselves with **holy water** as they come in, to remember their baptism.",
    feedbackWrong: "In Catholic **church architecture**, the **font** is often near the entrance because **baptism** is the doorway into the Church. Seeing it reminds everyone of their own baptism, as does blessing themselves with **holy water** at the door. It is a sacred object, not just decoration.",
    keyTerms: ["Font", "Baptism", "Church architecture", "Holy water"],
    viewsRepresentedByWrongOptions: [
      "This treats the font as unimportant. Catholics see it as a reminder of baptism for everyone.",
      null,
      "This is wrong. The font is a sacred object, used for one of the seven sacraments.",
      "This misunderstands the font. Baptisms are often held outside Mass, and the font's place near the door is symbolic."
    ],
    sources: ["CCC 1213", "CCC 1185"]
  },
  {
    id: "p2s3-crucifix-01",
    paper: 2, section: 3, specRef: "3.1",
    topic: "Church architecture: the cross and crucifix",
    level: 2,
    look: { age: "teen", hair: "long", accessory: "satchel" },
    mood: "neutral",
    penitent: "Abigail, Year 10 student",
    scene: "My friend goes to a Baptist church with a plain, empty cross. She visited my church and asked why Catholics have a crucifix with Jesus on it. She thought it meant Catholics believe Jesus is still dead. How should I explain it?",
    options: [
      "Catholics think Jesus is still dead on the cross, which is why he is shown there.",
      "All images of Jesus are forbidden idols, so the crucifix should be taken down.",
      "The cross is a lucky charm that protects the church building and everyone inside it.",
      "It recalls Jesus' sacrifice of love. Catholics believe he rose again too."
    ],
    correctIndex: 3,
    feedbackCorrect: "A **crucifix** is a cross with a figure of Jesus on it. It reminds Catholics of Jesus' **sacrifice**: his love in giving his life to save us. Catholics firmly believe he rose again; many Protestant churches use an empty **cross** to stress the Resurrection, but both point to the same faith.",
    feedbackWrong: "Catholics display a **crucifix** to remember Jesus' loving **sacrifice** on the cross, especially near the altar where the Mass is celebrated. It does not mean they think Jesus is still dead: the Resurrection is at the heart of Catholic faith. Many Protestant churches prefer a plain **cross**, which points to the Resurrection.",
    keyTerms: ["Cross", "Crucifix", "Sacrifice", "Church architecture"],
    viewsRepresentedByWrongOptions: [
      "This is a misunderstanding. Catholics believe Jesus rose from the dead.",
      "Some Reformed Christians have opposed religious images. Catholics believe images can help prayer, as long as they are not worshipped.",
      "This is superstition. The cross is a sign of faith, not a charm.",
      null
    ],
    sources: ["1 Corinthians 1:18-23", "CCC 1159-1162"]
  },
  {
    id: "p2s3-lectern-01",
    paper: 2, section: 3, specRef: "3.1",
    topic: "Church architecture: the lectern",
    level: 1,
    look: { age: "teen", hair: "braids", accessory: "headphones" },
    mood: "worried",
    penitent: "Blessing, Year 9 new reader",
    scene: "I've been asked to read at Mass for the first time. I'm terrified of standing at the lectern in front of everyone. My brother says no one really listens to the readings anyway, so I should just read them fast and get it over with. Does it really matter?",
    options: [
      "It's where God's word is proclaimed. God speaks to his people as you read.",
      "The readings are just background before the important part of Mass, so read quickly.",
      "Only priests are allowed to read from the lectern, so you shouldn't really be doing it.",
      "Read as fast as you can. Nobody listens to the readings, so speed is what counts."
    ],
    correctIndex: 0,
    feedbackCorrect: "The **lectern** (or **ambo**) is where the **Word of God** is proclaimed at Mass. Catholics believe Christ speaks when the Scriptures are read, so the reader has an important ministry. Read slowly and clearly, and pray before you begin.",
    feedbackWrong: "Catholic teaching says the **Liturgy of the Word** is a key part of the Mass: Christ is present in his word when the Scriptures are read. The **lectern** (ambo) has an important place in the church for this reason. Lay readers are a valued ministry, so take your time and read clearly.",
    keyTerms: ["Lectern", "Ambo", "Word of God", "Liturgy of the Word"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is wrong. The Liturgy of the Word is an essential part of the Mass.",
      "This is wrong. Lay readers often proclaim the readings, though the Gospel is read by a priest or deacon.",
      "This is wrong. Catholics believe Christ speaks through the readings, so they deserve care."
    ],
    sources: ["CCC 1088", "CCC 1184", "CCC 1349"]
  },

  /* ---------- 3.2 Liturgical and non-liturgical worship; prayer; the Eucharist ---------- */
  {
    id: "p2s3-real-presence-01",
    paper: 2, section: 3, specRef: "3.2",
    topic: "The Eucharist: real presence",
    level: 3,
    look: { age: "teen", hair: "short", accessory: "glasses" },
    mood: "neutral",
    penitent: "Rafael, Year 11 student",
    scene: "My Baptist friend says communion is just a symbol to help us remember Jesus. My Lutheran cousin says Christ is present 'in, with and under' the bread, which stays bread. I'm making my exam notes. What exactly do Catholics believe about the Eucharist?",
    options: [
      "The bread and wine are only symbols that help Christians to remember Jesus' death.",
      "Christ is present together with the bread and wine, which still remain bread and wine.",
      "The bread and wine truly become Christ's Body and Blood: transubstantiation.",
      "The bread becomes Christ's body only for people who personally feel his presence."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe in the **Real Presence**: at Mass, by the power of the Holy Spirit, the bread and wine truly become the **Body and Blood of Christ**, while still looking and tasting the same. This change is called **transubstantiation**. That is why the **Eucharist** is called the 'source and summit' of Christian life.",
    feedbackWrong: "Catholic teaching says that at the consecration the bread and wine become the **Body and Blood of Christ**, even though they still look like bread and wine: this is **transubstantiation**. Many Protestants, including most Baptists, see communion as a memorial, and Lutherans hold that Christ is present together with the bread. Catholic teaching differs from both.",
    keyTerms: ["Eucharist", "Real Presence", "Transubstantiation", "Mass"],
    viewsRepresentedByWrongOptions: [
      "This is a memorial view, held by many Protestants including most Baptists. Catholic teaching differs.",
      "This is close to the Lutheran view. Catholics believe the bread and wine are changed into Christ.",
      null,
      "This is wrong. Catholics believe Christ is truly present, whatever we feel."
    ],
    sources: ["John 6:51-58", "1 Corinthians 11:23-26", "CCC 1374-1376"]
  },
  {
    id: "p2s3-liturgical-worship-01",
    paper: 2, section: 3, specRef: "3.2",
    topic: "Liturgical and non-liturgical worship",
    level: 2,
    look: { age: "teen", hat: "beanie", accessory: "guitar" },
    mood: "worried",
    penitent: "Josh, Year 11 student",
    scene: "I love the youth praise night: loud music, spontaneous prayer, people raising their hands. My dad says only the Mass is proper Catholic worship. My friend says set prayers are boring and fake. I want to go to the praise night instead of Sunday Mass. Who's right?",
    options: [
      "Only formal liturgy is real worship. Other ways of praying aren't really Catholic at all.",
      "Set prayers are empty; spontaneous prayer is the only kind that's truly sincere.",
      "Worship is about how it makes you feel, so choose the praise night instead of Mass.",
      "Both matter: Mass is central, and informal prayer can enrich it."
    ],
    correctIndex: 3,
    feedbackCorrect: "**Liturgical worship** follows the Church's set form, above all the **Mass**, which Catholics celebrate together every Sunday. **Non-liturgical worship**, like praise nights, spontaneous prayer or Bible study, can deepen faith too. Catholics value both, but praise nights add to Sunday Mass rather than replace it.",
    feedbackWrong: "Catholic teaching says the **Mass** is the most important form of **liturgical worship**, and Sunday Mass is a serious duty. **Non-liturgical worship**, such as spontaneous prayer and praise music, is also good and can enrich faith. They work together.",
    keyTerms: ["Liturgical worship", "Non-liturgical worship", "Mass", "Prayer"],
    viewsRepresentedByWrongOptions: [
      "This goes too far. Catholics value many forms of prayer alongside the liturgy.",
      "Some Christians prefer only spontaneous prayer. Catholics value set prayers like the Our Father as well.",
      "This makes feelings the test of worship. Catholics believe Sunday Mass is central, whatever we feel.",
      null
    ],
    sources: ["CCC 1324", "CCC 2177-2181", "CCC 2700-2704"]
  },
  {
    id: "p2s3-types-prayer-01",
    paper: 2, section: 3, specRef: "3.2",
    topic: "Types of prayer",
    level: 1,
    look: { age: "child", hair: "ponytail", accessory: "flowers" },
    mood: "worried",
    penitent: "Poppy, Year 7 student",
    scene: "When I pray, I mostly just ask God for things: for my nan to get better, or for a good mark in maths. My friend says that's selfish, and real prayer is only praising God. Is it OK to ask God for things?",
    options: [
      "No. Asking for things is selfish, so you should only ever praise God when you pray.",
      "Prayer only works if you say the exact right words, so learn some set prayers by heart.",
      "Yes, asking is good! Praise, thanks and sorry are good prayers too.",
      "Only priests' prayers can really reach God, so ask Father to pray on your behalf."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe there are several **types of prayer**: **adoration** and praise, **thanksgiving**, saying sorry, **petition** (asking for our own needs) and **intercession** (praying for others). Jesus taught us to ask: in the Our Father we ask God for our daily bread. Praying for your nan is intercession, and it's a loving thing to do.",
    feedbackWrong: "Catholic teaching says asking God for things (**petition**) and praying for others (**intercession**) are good kinds of prayer; Jesus himself taught us to ask (Matthew 7:7). There are other **types of prayer** too: **adoration**, **thanksgiving** and saying sorry. Anyone can pray, in their own words or with set prayers.",
    keyTerms: ["Types of prayer", "Adoration", "Thanksgiving", "Petition", "Intercession"],
    viewsRepresentedByWrongOptions: [
      "This goes too far. Catholics believe asking God for help is a good kind of prayer.",
      "This treats prayer like magic. Set prayers help, but God hears every sincere prayer.",
      null,
      "This is wrong. God hears everyone's prayers, though it's good to ask others to pray too."
    ],
    sources: ["Matthew 6:9-13", "Matthew 7:7", "CCC 2626-2643"]
  },
  {
    id: "p2s3-sunday-mass-01",
    paper: 2, section: 3, specRef: "3.2",
    topic: "The Eucharist: Sunday Mass",
    level: 1,
    look: { age: "teen", hair: "spiky", accessory: "scarf" },
    mood: "worried",
    penitent: "Kai, Year 10 student",
    scene: "I've just joined a football team, and our matches are on Sunday mornings, the same time as Mass. My mum is cross, but I love football. My coach says God is everywhere, even on the pitch. What should I do?",
    options: [
      "Missing Mass for football is fine. God is everywhere, including on the football pitch.",
      "Sunday Mass is a serious duty. A Saturday evening Vigil Mass lets you do both.",
      "Give up football for good. Sport is a distraction from God and isn't good for Christians.",
      "You only really need to go to Mass at the big festivals, at Christmas and at Easter."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics have a duty to take part in **Mass** every Sunday (and on holy days), because the **Eucharist** is the heart of Christian life. A Saturday evening **Vigil Mass** counts as Sunday Mass. So you can keep both your faith and your football.",
    feedbackWrong: "Catholic teaching says going to **Mass** on Sundays is a serious obligation, not an optional extra, because the **Eucharist** is the centre of Christian life. But you don't have to give up football: a Saturday evening **Vigil Mass** fulfils the Sunday obligation. Sport is good, but it shouldn't replace Mass.",
    keyTerms: ["Mass", "Eucharist", "Sunday obligation", "Vigil Mass"],
    viewsRepresentedByWrongOptions: [
      "This is a half-truth. God is everywhere, but Catholics believe Sunday Mass is a serious duty.",
      null,
      "This goes too far. Catholics see sport as good, as long as it doesn't replace worship.",
      "This is wrong. The Sunday obligation applies every week, not just at big festivals."
    ],
    sources: ["Exodus 20:8", "CCC 2180-2181"]
  },

  /* ---------- 3.3 Rites of passage: baptism, confirmation, marriage and funerals ---------- */
  {
    id: "p2s3-confirmation-01",
    paper: 2, section: 3, specRef: "3.3",
    topic: "Confirmation",
    level: 1,
    look: { age: "teen", hair: "bob", accessory: "satchel" },
    mood: "worried",
    penitent: "Leila, Year 9 student",
    scene: "My confirmation class starts next month. Some friends are doing it just for the party and the presents. Others say it's only when you finally become a real Christian. I'm not sure I'm ready. What is confirmation actually about?",
    options: [
      "It's a coming-of-age party. Do it for the celebration and the presents, like everyone else.",
      "It's when you finally become a Christian for the very first time, after years of waiting.",
      "It strengthens you with the Holy Spirit and completes your baptism. Choose it freely.",
      "You can skip it. Confirmation doesn't really change anything about your faith or life."
    ],
    correctIndex: 2,
    feedbackCorrect: "**Confirmation** is a sacrament that completes the grace of **baptism**. The bishop anoints the person with **chrism** (holy oil), and they receive the **gifts of the Holy Spirit** to live and witness to their faith. It's right to choose it freely, so talk your doubts through with your catechist.",
    feedbackWrong: "Catholic teaching says **confirmation** is a **sacrament**, not just a party. You already became a Christian at **baptism**; confirmation strengthens you with the **gifts of the Holy Spirit**, sealed with **chrism**. It is a real step in faith, so it should be chosen freely and thoughtfully.",
    keyTerms: ["Confirmation", "Gifts of the Holy Spirit", "Chrism", "Baptism"],
    viewsRepresentedByWrongOptions: [
      "This is a secular view. Catholics believe confirmation is a sacrament that gives the Holy Spirit's gifts.",
      "This is wrong. Catholics become Christians at baptism; confirmation strengthens that faith.",
      null,
      "This is wrong. Catholics believe confirmation gives real grace and strength from the Holy Spirit."
    ],
    sources: ["Acts 8:14-17", "CCC 1285", "CCC 1302-1305"]
  },
  {
    id: "p2s3-funeral-ashes-01",
    paper: 2, section: 3, specRef: "3.3",
    topic: "Funerals and cremation",
    level: 3,
    look: { age: "adult", hair: "bun", accessory: "flowers" },
    mood: "worried",
    penitent: "Beatriz, whose mother has just died",
    scene: "Mum wanted to be cremated. My sister wants to scatter her ashes on the beach where she grew up. My brother wants to divide them so we each keep some at home. An older relative says Catholics aren't even allowed cremation. What should we do?",
    options: [
      "Catholics are not allowed to be cremated, so you must arrange a burial for her instead.",
      "Scatter them on the beach. Once the soul has gone, the body doesn't matter any more.",
      "Divide the ashes between you, so that each of you can keep part of her close at home.",
      "Cremation is allowed, but bury the ashes in a sacred place, in hope of resurrection."
    ],
    correctIndex: 3,
    feedbackCorrect: "The Catholic Church allows **cremation**, as long as it is not chosen to deny belief in the **resurrection**. It asks that the ashes be kept together in a sacred place, such as a cemetery, rather than scattered, divided or kept at home. This shows respect for the body and **hope** that God will raise it.",
    feedbackWrong: "Catholic teaching has allowed **cremation** since 1963, but asks that ashes are buried or placed in a sacred place, not scattered, divided or kept at home (2016 guidance). This expresses respect for the body and belief in the **resurrection of the body**. A Catholic **funeral** Mass can be celebrated before the cremation.",
    keyTerms: ["Funeral", "Cremation", "Resurrection of the body", "Rites of passage"],
    viewsRepresentedByWrongOptions: [
      "This was the rule in the past. Since 1963 the Church has allowed cremation.",
      "This is a dualist view. Catholics believe the body matters and will be raised.",
      "This is a popular practice, but the Church asks that ashes be kept together in a sacred place.",
      null
    ],
    sources: ["CCC 2300-2301", "Ad resurgendum cum Christo (2016)"]
  },
  {
    id: "p2s3-wedding-rite-01",
    paper: 2, section: 3, specRef: "3.3",
    topic: "Marriage ceremony",
    level: 3,
    look: { age: "adult", hair: "long", accessory: "flowers", pattern: "dots" },
    mood: "hopeful",
    penitent: "Alexis, a bride-to-be",
    scene: "My fiancé and I are both Catholic. We'd love a barefoot beach wedding with a friend leading it and no priest. My aunt says the priest is the one who 'marries' you, so our own words don't matter. What makes a Catholic wedding a sacrament?",
    options: [
      "Any celebrant and any location will do; it's the party afterwards that really counts.",
      "You need no vows at all: simply signing the register makes the marriage a sacrament.",
      "Only the priest can marry you. The couple's own promises and words don't really matter at all.",
      "You marry each other through your vows, normally in church before a priest."
    ],
    correctIndex: 3,
    feedbackCorrect: "In Catholic teaching the couple themselves are the ministers of the **sacrament of marriage**: they marry each other through their **vows** of lifelong, faithful love. The priest or deacon, with two **witnesses**, receives the vows on behalf of the Church, and Catholics normally marry in church. Permission for another place is possible, but it is rare.",
    feedbackWrong: "Catholic teaching says the bride and groom give the **sacrament of marriage** to each other through their **vows**. For Catholics, this normally takes place in church, before a priest or deacon and two **witnesses**, who receive the vows for the Church. The vows, not the party or the paperwork, are the heart of the ceremony.",
    keyTerms: ["Marriage", "Vows", "Sacrament", "Witnesses", "Rites of passage"],
    viewsRepresentedByWrongOptions: [
      "This is a secular view. For Catholics, the vows before God and the Church are what matter most.",
      "This is wrong. The vows exchanged by the couple are the heart of the sacrament.",
      "This is a common misunderstanding. In Catholic teaching the couple give the sacrament to each other.",
      null
    ],
    sources: ["CCC 1623", "CCC 1630-1631"]
  },
  {
    id: "p2s3-adult-baptism-01",
    paper: 2, section: 3, specRef: "3.3",
    topic: "Baptism of adults",
    level: 2,
    look: { age: "adult", build: "broad", hair: "buzz", accessory: "none", pattern: "hivis" },
    mood: "hopeful",
    penitent: "Kemal, a delivery driver",
    scene: "I wasn't brought up with any religion, but I've been coming to Mass for a year and I want to become Catholic. A friend says baptism is only for babies, so it's too late for me. Another says I should just start going up for Communion. What do I do?",
    options: [
      "Adults can't be baptised; it's only for babies. It's too late for you now.",
      "Just start receiving Communion. Baptism is optional for adults who already believe.",
      "Adults can be baptised after preparing through the RCIA, usually at the Easter Vigil.",
      "You'll need to be baptised again every time you have doubts or drift away from faith."
    ],
    correctIndex: 2,
    feedbackCorrect: "Adults are welcome to become Catholic through the **RCIA** (Rite of Christian Initiation of Adults), a time of learning and prayer with the parish. Usually at the **Easter Vigil**, they receive **baptism**, **confirmation** and first **Holy Communion** together. This adult **believer's baptism** is a joyful moment for the whole parish.",
    feedbackWrong: "Catholic teaching welcomes adults to **baptism** after preparation through the **RCIA**. They are usually baptised, confirmed and receive first **Holy Communion** at the **Easter Vigil**. Baptism happens only once, and it comes before receiving Communion.",
    keyTerms: ["Baptism", "Believer's baptism", "RCIA", "Easter Vigil"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. The Catholic Church baptises adults as well as infants.",
      "This is wrong. Baptism is the first sacrament, and it comes before receiving Holy Communion.",
      null,
      "This is wrong. Catholics believe baptism happens only once; confession heals our faith afterwards."
    ],
    sources: ["Acts 2:38-41", "CCC 1247-1249", "CCC 1272"]
  }
);
