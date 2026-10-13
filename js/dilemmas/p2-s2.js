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

/* ---------------- Stage 2 ---------------- */
window.DILEMMAS.push(
  /* ---------- 2.1 Christmas, Advent, Epiphany, Easter, Lent and Holy Week ---------- */
  {
    id: "p2s2-advent-01",
    paper: 2, section: 2, specRef: "2.1",
    topic: "Advent",
    level: 1,
    look: { age: "adult", accessory: "toddler", hat: "beanie" },
    mood: "hopeful",
    penitent: "Kasia, mum of two",
    scene: "The shops have had Christmas music on since October, and my kids want the tree up now. My husband says Advent is just a chocolate countdown to presents anyway. I'd like our family to keep Advent properly this year. What is it really for?",
    options: [
      "Advent is just the countdown to presents, so open the calendar doors and enjoy the build-up.",
      "Advent is a strict fast just like Lent, so the family should have no celebrations at all.",
      "Advent is four weeks of getting ready to welcome Christ. Try an Advent wreath and prayer.",
      "Advent celebrates Jesus rising from the dead, so it is a time of great joy and feasting."
    ],
    correctIndex: 2,
    feedbackCorrect: "**Advent** is the four weeks before Christmas, and the start of the Church's year. Catholics prepare to celebrate Jesus' birth, and look forward to his **second coming** at the end of time. Lighting an **Advent wreath** with prayer each week is a lovely family tradition.",
    feedbackWrong: "Catholics keep **Advent** as a season of hopeful waiting and preparation for Christmas, and for Christ's **second coming**. It is quieter than Christmas, but not a strict fast like Lent. Traditions like the **Advent wreath** help families pray together.",
    keyTerms: ["Advent", "Advent wreath", "Second coming", "Christmas"],
    viewsRepresentedByWrongOptions: [
      "This is a popular secular view. For Catholics, Advent is a spiritual time of preparation.",
      "This goes too far. Advent is a time of joyful preparation, not a strict fast like Lent.",
      null,
      "This mixes up festivals. The Resurrection is celebrated at Easter."
    ],
    sources: ["Isaiah 9:2-7", "CCC 524"]
  },
  {
    id: "p2s2-christmas-01",
    paper: 2, section: 2, specRef: "2.1",
    topic: "Christmas",
    level: 1,
    look: { age: "teen", hat: "beanie", accessory: "scarf" },
    mood: "hopeful",
    penitent: "Tyler, Year 9 student",
    scene: "My family isn't religious, but my Catholic friend has invited me to Midnight Mass on Christmas Eve. I've always thought Christmas was about presents, family and a big dinner. What exactly do Catholics celebrate at Christmas?",
    options: [
      "It celebrates the wise men arriving with their gifts of gold, frankincense and myrrh.",
      "The Incarnation: God the Son born as a human baby, Jesus, to save us.",
      "It's mainly a winter festival about family, kindness and giving presents to each other.",
      "Christmas marks the day Jesus was baptised and began his public ministry of teaching."
    ],
    correctIndex: 1,
    feedbackCorrect: "At **Christmas**, Catholics celebrate the **Incarnation**: God becoming human in Jesus, born in Bethlehem (Luke 2:1-20). Midnight Mass celebrates the joy of the angels' message to the shepherds. Family and gifts are good parts of Christmas, but Christ is at its centre.",
    feedbackWrong: "Catholics believe **Christmas** celebrates the **Incarnation**: the birth of Jesus, the Son of God, in Bethlehem (Luke 2:1-20). The wise men's visit is celebrated later, at **Epiphany**. Family and gifts are part of the celebration, but Jesus' birth is the heart of it.",
    keyTerms: ["Christmas", "Incarnation", "Nativity", "Epiphany"],
    viewsRepresentedByWrongOptions: [
      "This mixes up festivals. The wise men's visit is celebrated at Epiphany.",
      null,
      "This is a secular view of Christmas. Catholics celebrate the birth of Jesus, the Son of God.",
      "This mixes up events. Jesus' baptism and the start of his ministry came about thirty years later."
    ],
    sources: ["Luke 2:1-20", "CCC 525-526"]
  },
  {
    id: "p2s2-epiphany-01",
    paper: 2, section: 2, specRef: "2.1",
    topic: "Epiphany",
    level: 2,
    look: { age: "child", hair: "afro", accessory: "none" },
    mood: "hopeful",
    penitent: "Kofi, Year 7 altar server",
    scene: "On 6 January Father wrote chalk letters over our church door, and my nan said it was for Epiphany. My friend says Epiphany is just the day you have to take the decorations down. What are we actually celebrating?",
    options: [
      "It's the day when the shepherds visited the stable after the angels had told them the news.",
      "It's simply the day when Christmas decorations must come down, and nothing more than that.",
      "It celebrates Jesus being born in Bethlehem, just like Christmas Day itself does.",
      "Jesus being revealed to the whole world, shown by the Magi, who weren't Jewish."
    ],
    correctIndex: 3,
    feedbackCorrect: "**Epiphany** means 'showing' or 'revealing'. It celebrates the visit of the **Magi** (wise men) from the East, who were not Jewish (Matthew 2:1-12). This shows that Jesus came for **all nations**, not just one people.",
    feedbackWrong: "Catholics celebrate **Epiphany** as the revealing of Jesus to the whole world. The **Magi** followed a star and brought gifts (Matthew 2:1-12); as foreigners, they represent all the nations coming to Christ. Chalking the door is a traditional blessing of homes and churches at Epiphany.",
    keyTerms: ["Epiphany", "Magi", "Revelation to the Gentiles"],
    viewsRepresentedByWrongOptions: [
      "This mixes up events. The shepherds' visit is part of the Christmas story (Luke 2).",
      "This is a popular custom, but Catholics see Epiphany as an important feast in its own right.",
      "This mixes up festivals. Jesus' birth is celebrated at Christmas.",
      null
    ],
    sources: ["Matthew 2:1-12", "CCC 528"]
  },
  {
    id: "p2s2-holy-week-01",
    paper: 2, section: 2, specRef: "2.1",
    topic: "Holy Week",
    level: 1,
    look: { age: "teen", hair: "bob", accessory: "headphones" },
    mood: "neutral",
    penitent: "Chloe, Year 10 student",
    scene: "My mum wants us to go to every service in Holy Week this year: Palm Sunday, Holy Thursday, Good Friday and the Easter Vigil. That's loads! My friend says only Easter Sunday really matters. Why are all these services important?",
    options: [
      "Only Easter Sunday really matters. The rest are just optional, sad services.",
      "Holy Week follows Jesus' last days: his entry, the Last Supper and his death.",
      "Good Friday is called 'good' simply because it is a public holiday for everyone.",
      "Holy Week remembers Jesus' birth and childhood, ready for celebrations at Easter."
    ],
    correctIndex: 1,
    feedbackCorrect: "**Holy Week** recalls Jesus' last days: his entry into Jerusalem (**Palm Sunday**), the **Last Supper** (**Holy Thursday**), and his death on the cross (**Good Friday**). It leads to the joy of the **Easter Vigil**. Walking through each day helps Catholics enter into the meaning of Easter.",
    feedbackWrong: "Catholics believe **Holy Week** is the most important week of the year. **Palm Sunday** recalls Jesus entering Jerusalem, **Holy Thursday** the **Last Supper**, and **Good Friday** his death on the cross; then the **Easter Vigil** celebrates his rising. Good Friday is 'good' because Jesus' death brings salvation.",
    keyTerms: ["Holy Week", "Palm Sunday", "Holy Thursday", "Good Friday", "Easter Vigil"],
    viewsRepresentedByWrongOptions: [
      "This is a half-truth. Easter is the high point, but Holy Week helps us understand it.",
      null,
      "This is wrong. Catholics call it 'good' because Jesus' death on the cross brings salvation.",
      "This mixes up festivals. Jesus' birth and childhood are celebrated at Christmas."
    ],
    sources: ["Mark 11:1-11", "Mark 14-15", "CCC 1168-1169"]
  },
  {
    id: "p2s2-easter-01",
    paper: 2, section: 2, specRef: "2.1",
    topic: "Easter",
    level: 1,
    look: { age: "teen", hat: "schoolcap", accessory: "satchel" },
    mood: "hopeful",
    penitent: "Daniel, Year 8 student",
    scene: "My little brother thinks Christmas is the most important Christian festival because of the presents. My teacher says Easter is more important. And some kids think Easter is just about chocolate eggs and bunnies. Who's right?",
    options: [
      "Christmas is more important, because Jesus' birth came first and is the start of everything.",
      "Easter is mainly a spring festival about new life, chocolate eggs and the Easter bunny.",
      "Easter celebrates Jesus rising from the dead, defeating death. It's the greatest feast.",
      "Easter remembers Jesus going up into heaven, forty days after he rose from the dead."
    ],
    correctIndex: 2,
    feedbackCorrect: "**Easter** celebrates Jesus' **Resurrection**: rising from the dead on the third day after his crucifixion. Catholics believe this shows his victory over sin and death and gives hope of **eternal life**, so it is the greatest feast of the Church's year. Easter eggs are a symbol of new life from the empty tomb.",
    feedbackWrong: "Catholics believe **Easter** is the most important Christian festival, because it celebrates Jesus' **Resurrection** from the dead (Mark 16:1-8). Without the Resurrection, Christmas would not have the same meaning. Jesus going up into heaven is celebrated separately, at the **Ascension**.",
    keyTerms: ["Easter", "Resurrection", "Eternal life", "Ascension"],
    viewsRepresentedByWrongOptions: [
      "This is a popular view. Christmas is very important, but Catholics see Easter as the greatest feast.",
      "This is a secular view. Easter eggs can be a symbol, but Easter celebrates Jesus rising from the dead.",
      null,
      "This mixes up festivals. Jesus going up into heaven is the Ascension, forty days after Easter."
    ],
    sources: ["Mark 16:1-8", "1 Corinthians 15:3-4", "CCC 1169"]
  },

  /* ---------- 2.2 Pilgrimage to Bethlehem, Jerusalem and one other place (Lourdes) ---------- */
  {
    id: "p2s2-bethlehem-01",
    paper: 2, section: 2, specRef: "2.2",
    topic: "Pilgrimage to Bethlehem",
    level: 2,
    look: { age: "elder", hat: "headscarf", accessory: "glasses", bottom: "skirt" },
    mood: "hopeful",
    penitent: "Mrs Nowak, a parish volunteer",
    scene: "I've saved for years to go on a parish pilgrimage to the Holy Land, including Bethlehem. My son says it's really just a holiday with lots of churches. My friend says going on pilgrimage will guarantee me a place in heaven. What is pilgrimage really about?",
    options: [
      "It's really just a holiday with churches, and you can tick off all the famous sights.",
      "Going on pilgrimage earns you a guaranteed place in heaven, so it's well worth the money.",
      "It's a prayerful journey. In Bethlehem you can reflect on God becoming human for us.",
      "Every Catholic is obliged to go on pilgrimage to the Holy Land at least once in their life."
    ],
    correctIndex: 2,
    feedbackCorrect: "A **pilgrimage** is a journey to a holy place, made in prayer, to grow closer to God. In **Bethlehem**, pilgrims visit the Church of the Nativity, built over the place where tradition says Jesus was born, and reflect on the **Incarnation**. It is a spiritual journey, not just sightseeing.",
    feedbackWrong: "Catholic teaching sees **pilgrimage** as a prayerful journey that helps people grow in faith. It is not compulsory, and it doesn't 'earn' heaven, which is God's free gift. In **Bethlehem**, pilgrims pray at the Church of the Nativity and reflect on Jesus' birth.",
    keyTerms: ["Pilgrimage", "Bethlehem", "Church of the Nativity", "Incarnation"],
    viewsRepresentedByWrongOptions: [
      "This is a secular view. Catholics see pilgrimage as a spiritual journey of prayer.",
      "This is wrong. Catholics believe salvation is God's free gift, not something we earn by travelling.",
      null,
      "This is wrong. Pilgrimage is valued, but it is not compulsory for Catholics."
    ],
    sources: ["Luke 2:1-7", "CCC 2691"]
  },
  {
    id: "p2s2-jerusalem-01",
    paper: 2, section: 2, specRef: "2.2",
    topic: "Pilgrimage to Jerusalem",
    level: 2,
    look: { age: "elder", hair: "bald", accessory: "cane" },
    mood: "worried",
    penitent: "Mr Haddad senior, a retired tailor",
    scene: "All my life I've dreamed of walking the Via Dolorosa in Jerusalem, where Jesus carried his cross. But I'm too old and too poor to travel now. A friend says that without going to Jerusalem I'm missing something essential. Am I?",
    options: [
      "Pilgrimage is valuable, not essential. Pray the Stations of the Cross here instead.",
      "Yes. Every Catholic must visit Jerusalem at least once to be a full member of the Church.",
      "Pilgrimage is pointless anyway, because God can be found anywhere you happen to be.",
      "Send money to the church in Jerusalem instead; paying for someone else's trip earns forgiveness."
    ],
    correctIndex: 0,
    feedbackCorrect: "**Jerusalem** is where Jesus died and rose again; pilgrims walk the **Via Dolorosa** and pray at the **Church of the Holy Sepulchre**. But pilgrimage is not essential for salvation. The **Stations of the Cross**, found in every Catholic church, let you follow Jesus' way to the cross in prayer, wherever you are.",
    feedbackWrong: "Catholic teaching values **pilgrimage** to **Jerusalem**, but it is not required, and it cannot be bought. The **Stations of the Cross**, found in Catholic churches, developed so that people could follow Jesus' journey to the cross in prayer, without travelling. God is close to you here.",
    keyTerms: ["Pilgrimage", "Jerusalem", "Via Dolorosa", "Stations of the Cross"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is wrong. Pilgrimage is a valuable practice, but it is not compulsory.",
      "Some Protestants and secular people think this. Catholics agree God is everywhere, but value holy places too.",
      "This is wrong. Forgiveness is God's free gift and cannot be paid for."
    ],
    sources: ["John 19:16-42", "CCC 2691"]
  },
  {
    id: "p2s2-lourdes-01",
    paper: 2, section: 2, specRef: "2.2",
    topic: "Pilgrimage to Lourdes",
    level: 2,
    look: { age: "adult", hair: "short", accessory: "glasses", pattern: "cardigan" },
    mood: "hopeful",
    penitent: "Siobhan, who has multiple sclerosis",
    scene: "My parish is taking a group of sick people to Lourdes, where Mary appeared to St Bernadette. My brother says miracles don't happen and it's all superstition. My aunt says that if my faith is strong enough I'll definitely be cured. What should I expect?",
    options: [
      "If your faith is strong enough, you are guaranteed to be cured when you visit Lourdes.",
      "It's all superstition. Miracles don't happen, so there's no point going at all.",
      "The water itself has magical powers to cure people, whatever they believe.",
      "Go with hope and an open heart. A few are cured, but many receive peace and strength."
    ],
    correctIndex: 3,
    feedbackCorrect: "In 1858, St **Bernadette** said that Mary appeared to her at **Lourdes** in France, and it became a great place of **pilgrimage**, especially for the sick. The Church has recognised a small number of cures as miracles, but most pilgrims find spiritual healing: peace, hope and strength to live with illness. Many also find joy in helping and being helped by others.",
    feedbackWrong: "Catholics believe God can heal, and the Church has recognised some cures at **Lourdes** as miracles. But healing is never guaranteed, and the water is not magic; it is a sign of prayer and trust in God. Most pilgrims receive spiritual healing: peace, hope and strength.",
    keyTerms: ["Pilgrimage", "Lourdes", "St Bernadette", "Healing"],
    viewsRepresentedByWrongOptions: [
      "This is wrong and can be hurtful. Healing is God's gift, not a reward for having 'enough' faith.",
      "This is a sceptical view. Catholics believe God can work miracles, and that pilgrimage brings many blessings.",
      "This is superstition. Catholics see the water as a sign of prayer, not magic.",
      null
    ],
    sources: ["CCC 2691", "James 5:14-15"]
  }
);
