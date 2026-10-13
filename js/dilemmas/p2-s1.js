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

/* ---------------- Stage 2 ---------------- */
window.DILEMMAS.push(
  /* ---------- 1.1 Jesus as the incarnate Son of God; his life and ministry ---------- */
  {
    id: "p2s1-incarnation-01",
    paper: 2, section: 1, specRef: "1.1",
    topic: "The Incarnation",
    level: 3,
    look: { age: "teen", hair: "short", accessory: "headphones" },
    mood: "neutral",
    penitent: "Isaac, Year 11 student",
    scene: "My friend says Jesus was a brilliant teacher, like Gandhi, but obviously not God. Someone else in class said Jesus was God just pretending to be a man. I want to get this right for my exam. What do Catholics believe about who Jesus is?",
    options: [
      "Jesus was a wise and good human teacher, but he certainly wasn't God himself.",
      "Jesus was God, who only seemed to be human, rather like wearing a costume.",
      "Jesus was fully God and fully human: God the Son became man to save us.",
      "Jesus was an ordinary man who became God's Son as a reward at his baptism."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe in the **Incarnation**: God the Son became a real human being in Jesus, born of Mary (John 1:14). Jesus is **fully God and fully human**: one person with two natures. He became human to save us and to show us what God is like.",
    feedbackWrong: "Catholic teaching says Jesus is the **incarnate Son of God**: **fully God and fully human** (John 1:14). He was not just a good teacher, nor God in disguise. The Church defined this at the Council of Chalcedon in 451.",
    keyTerms: ["Incarnation", "Son of God", "Fully God and fully human"],
    viewsRepresentedByWrongOptions: [
      "Many people, including Humanists, see Jesus as a great teacher only. Christians believe he is also God.",
      "This is an early idea called Docetism, which the Church rejected. Jesus was truly human.",
      null,
      "This is an early idea called adoptionism, which the Church rejected. Jesus was always the Son of God."
    ],
    sources: ["John 1:1-14", "CCC 464-469"]
  },
  {
    id: "p2s1-ministry-outcasts-01",
    paper: 2, section: 1, specRef: "1.1",
    topic: "Jesus' ministry",
    level: 1,
    look: { age: "child", hair: "bob", accessory: "satchel" },
    mood: "hopeful",
    penitent: "Mia, Year 8 student",
    scene: "In RE we read about Jesus eating with tax collectors and touching people with leprosy. There's a girl in my class nobody talks to, and people say being friends with her would make you unpopular. What can Jesus' life teach me about this?",
    options: [
      "Jesus only mixed with sinners so that he could tell them off and make them change.",
      "Jesus welcomed outcasts to show God's love for all. Follow him: include those left out.",
      "Jesus' ministry was mainly about leading a political revolution against the Romans.",
      "Those stories were probably made up to make Jesus look good, so don't take them too seriously."
    ],
    correctIndex: 1,
    feedbackCorrect: "In his **ministry**, Jesus welcomed people others rejected: tax collectors, lepers and sinners (Mark 2:15-17; Mark 1:40-42). He showed that God's love is for everyone. Catholics follow his example by including and befriending people who are left out.",
    feedbackWrong: "Catholic teaching says Jesus' **ministry** showed God's love for everyone, especially outcasts (Mark 2:15-17). He welcomed sinners with love, which led many of them to change their lives. Christians follow him by reaching out to those who are left out.",
    keyTerms: ["Jesus' ministry", "Outcasts", "Love of neighbour"],
    viewsRepresentedByWrongOptions: [
      "This misreads the Gospels. Jesus welcomed sinners with love, which led them to change.",
      null,
      "This is a political misreading. Jesus said his Kingdom was not a worldly one (John 18:36).",
      "This is a sceptical view. Catholics believe the Gospels faithfully tell us about Jesus' life."
    ],
    sources: ["Mark 1:40-42", "Mark 2:15-17", "Luke 19:1-10"]
  },
  {
    id: "p2s1-resurrection-jesus-01",
    paper: 2, section: 1, specRef: "1.1",
    topic: "Jesus' resurrection",
    level: 2,
    look: { age: "adult", hair: "bun", accessory: "glasses", pattern: "stripes" },
    mood: "neutral",
    penitent: "Ms Ferreira, a new RE teacher",
    scene: "One of my students asked if Catholics have to believe Jesus really rose from the dead, or whether it's just a symbol of hope. A colleague told me it's fine to treat it as a lovely story. I want to give an accurate answer. What does the Church teach?",
    options: [
      "It's a symbol: the disciples simply felt that Jesus' spirit and teaching lived on.",
      "Yes. Jesus truly rose bodily from the dead; it's the heart of Christian faith.",
      "His body was probably taken from the tomb, so it's a lovely story but not true.",
      "Only Jesus' soul went to heaven. His body stayed in the tomb, as everyone's does."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe Jesus truly rose from the dead, bodily, on the third day: the **Resurrection**. St Paul wrote that without it, Christian faith would be empty (1 Corinthians 15:14). It shows Jesus' victory over sin and death, and gives hope of eternal life.",
    feedbackWrong: "Catholic teaching says the **Resurrection** is a real event: Jesus rose bodily from the dead and appeared to his disciples. St Paul said Christian faith would be pointless without it (1 Corinthians 15:14). It is central to Catholic belief, not just a symbol.",
    keyTerms: ["Resurrection", "Jesus' life and ministry", "Eternal life"],
    viewsRepresentedByWrongOptions: [
      "This is a liberal view held by some Christians. Catholics believe the Resurrection really happened.",
      null,
      "This is a sceptical theory. Catholics believe the Gospels report a real resurrection.",
      "This is wrong. Catholics believe Jesus rose bodily; the tomb was empty."
    ],
    sources: ["1 Corinthians 15:3-14", "Luke 24:36-43", "CCC 638-647"]
  },

  /* ---------- 1.2 The Bible: structure and authority; Bible and conscience ---------- */
  {
    id: "p2s1-bible-books-01",
    paper: 2, section: 1, specRef: "1.2",
    topic: "The structure of the Bible",
    level: 3,
    look: { age: "teen", hair: "braids", accessory: "glasses" },
    mood: "neutral",
    penitent: "Esi, Year 10 student",
    scene: "My Protestant friend and I compared Bibles, and mine has more books than hers! She has 66, and mine has 73. She thinks Catholics added extra books later to support their own ideas. Why are they different?",
    options: [
      "Catholics added extra books quite recently, to support some of their own teachings.",
      "They actually have exactly the same books; the only difference is the way they are translated.",
      "Catholic Bibles have a completely different New Testament from Protestant Bibles.",
      "Catholic Bibles keep seven Old Testament books that Christians have used since early times."
    ],
    correctIndex: 3,
    feedbackCorrect: "The Catholic **Bible** has 73 books: 46 in the **Old Testament** and 27 in the **New Testament**. It includes seven **deuterocanonical** books, such as Tobit and the Books of Maccabees, which the Church has used since early times. Protestants call these books the Apocrypha, so their Bibles have 66 books, with the same 27 in the New Testament.",
    feedbackWrong: "Catholic Bibles include seven **deuterocanonical** Old Testament books, such as Tobit, Judith and the Books of Maccabees, which the early Church used. At the Reformation, Protestants left them out of their main Bible (calling them the Apocrypha). The **New Testament** has the same 27 books in both.",
    keyTerms: ["Bible", "Old Testament", "New Testament", "Deuterocanonical books"],
    viewsRepresentedByWrongOptions: [
      "This is a common misunderstanding. These books were used by Christians long before the Reformation.",
      "This is wrong. There really is a difference in the number of Old Testament books.",
      "This is wrong. Catholic and Protestant Bibles have the same 27 New Testament books.",
      null
    ],
    sources: ["CCC 120", "CCC 138"]
  },
  {
    id: "p2s1-bible-interpretation-01",
    paper: 2, section: 1, specRef: "1.2",
    topic: "The authority of the Bible",
    level: 2,
    look: { age: "teen", hat: "beanie", accessory: "satchel" },
    mood: "worried",
    penitent: "Luca, Year 11 student",
    scene: "My uncle says every sentence of the Bible must be read as literal history and science, like Jonah living inside a big fish. My mate says it's just an old human book. I believe it's God's word, but I'm confused about how to read it.",
    options: [
      "Every single sentence must be read literally, as exact scientific and historical fact, or not at all.",
      "It's God's word in human words; read each book for its kind of writing, in light of Jesus.",
      "The Bible is just an ancient human book, with no special authority for us today.",
      "Ignore the Old Testament. Only the New Testament really matters for Christians."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe the **Bible** is God's word, **inspired** by the Holy Spirit and written by human authors. To understand it, we look at what kind of writing each book is (history, poetry, parable and so on) and read it all in the light of Jesus. This is how the Church reads **Scripture** with authority.",
    feedbackWrong: "Catholic teaching says the **Bible** is **inspired** by God and teaches truth for our salvation, but it was written by human authors using different kinds of writing. So Catholics read each book according to its style, and in the light of Christ and the Church's teaching. Both Testaments are God's word.",
    keyTerms: ["Bible", "Inspiration", "Authority", "Interpretation"],
    viewsRepresentedByWrongOptions: [
      "This is a fundamentalist reading, held by some Christians. Catholics consider the type of writing.",
      null,
      "This is a secular view. Catholics believe the Bible is inspired by God and has authority.",
      "This is an ancient idea the Church rejected. Catholics believe both Testaments are God's word."
    ],
    sources: ["2 Timothy 3:16", "Dei Verbum (1965)", "CCC 105-119"]
  },

  /* ---------- 1.3 Priests, bishops, the pope, leaders and laity ---------- */
  {
    id: "p2s1-pope-infallibility-01",
    paper: 2, section: 1, specRef: "1.3",
    topic: "The pope",
    level: 2,
    look: { age: "teen", hair: "spiky", accessory: "scarf" },
    mood: "neutral",
    penitent: "Dominic, Year 10 student",
    scene: "My friend says Catholics believe the pope can never be wrong about anything, even what he thinks about football. My Baptist cousin says no human leader has any real authority over Christians. What do Catholics actually believe about the pope?",
    options: [
      "Everything the pope says is without error, even his opinions about football and the weather.",
      "He leads the Church, but is infallible only when he solemnly defines faith or morals.",
      "The pope is just a figurehead, with no real authority over what Catholics believe.",
      "Only the Bible has authority. No human leader can teach for the whole Church."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe the **pope** is the successor of St Peter and leader of the Church on earth. He is **infallible** only in rare cases, when he solemnly defines a teaching on faith or morals for the whole Church; his everyday opinions can be wrong. This was defined at the First Vatican Council in 1870.",
    feedbackWrong: "Catholic teaching says the **pope**, as successor of St Peter (Matthew 16:18), has real authority to lead and teach the Church. But **infallibility** applies only when he solemnly defines a teaching on faith or morals, which is rare. His personal opinions are not infallible.",
    keyTerms: ["Pope", "Infallibility", "Authority", "Magisterium"],
    viewsRepresentedByWrongOptions: [
      "This is a common misunderstanding. Infallibility applies only to rare, solemn teachings on faith and morals.",
      null,
      "This is wrong. Catholics believe the pope has real authority to teach and lead.",
      "This is a Protestant view (sola scriptura). Catholics believe the pope and bishops teach with authority."
    ],
    sources: ["Matthew 16:18-19", "CCC 881-882", "CCC 891"]
  },
  {
    id: "p2s1-laity-01",
    paper: 2, section: 1, specRef: "1.3",
    topic: "The laity",
    level: 1,
    look: { age: "adult", hat: "flatcap", accessory: "oranges" },
    mood: "neutral",
    penitent: "Patrick, a greengrocer",
    scene: "The parish newsletter keeps asking for volunteers: readers, catechists, people to visit the sick. Surely all that is Father's job? I go to Mass every Sunday and put money in the collection. Isn't that enough for an ordinary Catholic like me?",
    options: [
      "Ministry is for priests and nuns. Laypeople just need to come to Mass and give money.",
      "Laypeople can do everything a priest can do now, including celebrating Mass.",
      "Through baptism every Catholic shares in the Church's mission, at work, home and church.",
      "Only very holy people should get involved in parish life, so it's best to leave it to them."
    ],
    correctIndex: 2,
    feedbackCorrect: "The **laity** are all the baptised members of the Church who are not ordained. Through **baptism**, every Catholic shares in Christ's mission: living the faith at work and at home, and serving in parish ministries such as reading, teaching and visiting the sick. Your gifts are needed!",
    feedbackWrong: "Catholic teaching says that by **baptism** all the **laity** (non-ordained members) share in the Church's mission. They bring Christ into their work and family life, and serve in many parish ministries. Only some things, like celebrating Mass, are reserved to priests.",
    keyTerms: ["Laity", "Baptism", "Ministry", "Vocation"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. The laity have a vital role in the Church's mission.",
      "This goes too far. Only an ordained priest can celebrate Mass.",
      null,
      "This is wrong. Every baptised Catholic is called to holiness and service."
    ],
    sources: ["1 Corinthians 12:4-27", "CCC 897-900"]
  },
  {
    id: "p2s1-bishops-priests-01",
    paper: 2, section: 1, specRef: "1.3",
    topic: "Bishops and priests",
    level: 2,
    look: { age: "teen", hair: "ponytail", accessory: "glasses" },
    mood: "hopeful",
    penitent: "Amelia, Year 9 confirmation candidate",
    scene: "The bishop is coming to confirm us next month. I asked why Father can't just do it, and my friend said bishops are basically senior managers elected by each parish. That doesn't sound right. What's the difference between a bishop and a priest?",
    options: [
      "Bishops are senior managers who are elected by the people of each parish to represent them.",
      "Priests and bishops are exactly the same; the title 'bishop' is just an honour for older priests.",
      "Bishops are chosen by the government to run the Church on behalf of the country.",
      "Bishops, the successors of the apostles, lead a diocese; priests serve parishes with them."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe **bishops** are successors of the apostles, with the fullness of Holy Orders. Each leads a **diocese**, ordains **priests** and normally celebrates Confirmation. Priests serve parishes as the bishop's co-workers, and bishops are appointed by the pope.",
    feedbackWrong: "Catholic teaching says **bishops** are the successors of the apostles. They lead a **diocese**, teach, and ordain **priests**, and they are appointed by the pope. Priests share in this ministry and lead parishes, working with their bishop.",
    keyTerms: ["Bishop", "Priest", "Diocese", "Apostolic succession"],
    viewsRepresentedByWrongOptions: [
      "Some churches choose leaders by election, but Catholic bishops are appointed by the pope.",
      "This is wrong. Bishops have the fullness of Holy Orders and can ordain priests.",
      "This is wrong for the Catholic Church, whose bishops are appointed by the pope.",
      null
    ],
    sources: ["CCC 861-862", "CCC 1555-1568"]
  },

  /* ---------- 1.4 One important Christian other than Jesus: St Teresa of Calcutta ---------- */
  {
    id: "p2s1-teresa-saints-01",
    paper: 2, section: 1, specRef: "1.4",
    topic: "St Teresa of Calcutta: why Catholics honour saints",
    level: 2,
    look: { age: "teen", hair: "long", accessory: "clipboard" },
    mood: "neutral",
    penitent: "Hannah, Year 10 student",
    scene: "I'm doing my RE project on St Teresa of Calcutta, often called Mother Teresa. My friend from an evangelical church asked why Catholics pray to saints. She thinks it's like worshipping them instead of God. How should I explain it?",
    options: [
      "Saints are a bit like minor gods, who can answer people's prayers in God's place.",
      "Praying to saints is wrong. Christians should only ever pray to God directly.",
      "Catholics honour saints as examples and ask them to pray for us, as friends do.",
      "She's a saint mainly because she was famous and won the Nobel Peace Prize."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics do not worship **saints**: worship belongs to God alone. They honour saints like **St Teresa of Calcutta** as examples of holy lives, and ask them to pray for us, just as we ask friends to pray for us. She was declared a saint in 2016, after the Church studied her life of faith and service.",
    feedbackWrong: "Catholic teaching says only God is worshipped. **Saints** are honoured as models of faith, and asked to pray for us, like friends in heaven. **St Teresa of Calcutta** was canonised in 2016 for her holiness and her service of the poorest, not for her fame or awards.",
    keyTerms: ["Saint", "Canonisation", "Intercession", "St Teresa of Calcutta"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. Catholics believe there is only one God; saints are honoured, not worshipped.",
      "Many Protestants hold this view. Catholics believe asking saints to pray for us is good.",
      null,
      "This is wrong. Canonisation recognises holiness, not fame. Her Nobel Prize (1979) was not the reason."
    ],
    sources: ["CCC 956-957", "CCC 2683"]
  },
  {
    id: "p2s1-teresa-example-01",
    paper: 2, section: 1, specRef: "1.4",
    topic: "St Teresa of Calcutta: her example",
    level: 1,
    look: { age: "teen", hat: "beanie", accessory: "flowers" },
    mood: "worried",
    penitent: "Jacob, Year 9 student",
    scene: "We learned about St Teresa of Calcutta, who founded the Missionaries of Charity and cared for dying people in the streets of Kolkata. It's inspiring, but I'm just a normal kid. I can't do anything like that. What can her life teach me?",
    options: [
      "Only nuns and priests can live like her. Ordinary people can't really follow her example.",
      "Follow her example in small ways: serve lonely or poor people near you, with great love.",
      "Her work only counts if you go to India, so wait until you're old enough to travel.",
      "Charity is a waste of time unless it completely ends poverty, so don't bother trying."
    ],
    correctIndex: 1,
    feedbackCorrect: "**St Teresa of Calcutta** founded the **Missionaries of Charity** in 1950 to serve 'the poorest of the poor'. She believed that what matters is the love with which we serve, not how big the task is. You can follow her by caring for lonely, sick or poor people around you.",
    feedbackWrong: "**St Teresa of Calcutta** showed that anyone can serve Christ in the poor (Matthew 25:40). She founded the **Missionaries of Charity** in 1950, and the Church honours her as a sign that any service, however small, matters when it is done with love. Ordinary Catholics can follow her example wherever they are.",
    keyTerms: ["St Teresa of Calcutta", "Missionaries of Charity", "Service", "Vocation"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. Every Christian is called to serve others with love.",
      null,
      "This is wrong. She encouraged people to serve those in need wherever they live.",
      "This is a cynical view. Catholics believe every act of love matters."
    ],
    sources: ["Matthew 25:40", "1 Corinthians 13:1-3"]
  },
  {
    id: "p2s1-teresa-darkness-01",
    paper: 2, section: 1, specRef: "1.4",
    topic: "St Teresa of Calcutta: faith in darkness",
    level: 2,
    look: { age: "adult", hair: "short", accessory: "glasses", pattern: "cardigan" },
    mood: "worried",
    penitent: "Gemma, a youth worker",
    scene: "For months I've prayed and felt nothing; God seems far away. I read that St Teresa of Calcutta felt the same for many years. If even she struggled, does that mean faith is just wishful thinking? Should I stop praying until the feeling comes back?",
    options: [
      "If you can't feel God at all, that proves he isn't really there. Faith is just a feeling.",
      "Real saints never struggle with faith, so you must be doing something badly wrong.",
      "Stop praying for now, and start again when the good feelings eventually come back.",
      "She kept serving and praying through years of darkness. Faith is more than feelings."
    ],
    correctIndex: 3,
    feedbackCorrect: "Letters published after her death show that **St Teresa of Calcutta** felt God was absent for many years, yet she kept praying and serving the poor. Catholics believe **faith** is trusting God even when we cannot feel him. Many saints describe times like this as a 'dark night'.",
    feedbackWrong: "Catholic teaching says **faith** is more than feelings: it is trust in God, even when he seems far away. **St Teresa of Calcutta** experienced this darkness for years, as her letters later showed, but she kept praying and serving. Keep praying, and talk to someone you trust.",
    keyTerms: ["St Teresa of Calcutta", "Faith", "Prayer", "Doubt"],
    viewsRepresentedByWrongOptions: [
      "This is a sceptical view. Catholics believe God is present even when we cannot feel him.",
      "This is wrong. Many saints struggled with darkness and doubt.",
      "This is a half-truth. Taking a break might feel easier, but Catholics encourage praying through dry times.",
      null
    ],
    sources: ["CCC 2731", "Mark 15:34"]
  }
);
