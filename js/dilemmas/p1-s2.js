/*
 * Paper 1, Section 2: Life and death
 * See the comment at the top of p1-s1.js (or README.md) for the format.
 */
window.DILEMMAS = window.DILEMMAS || [];

window.DILEMMAS.push(
  {
    id: 'p1s2-euthanasia-01',
    paper: 1,
    section: 2,
    specRef: '2.3',
    topic: 'Euthanasia',
    level: 2,
    look: { age: 'adult', accessory: 'flowers' },
    mood: 'worried',
    penitent: 'Daniel, whose dad is very ill',
    scene: "My dad has terminal cancer and is in a lot of pain. My Humanist friend says that if Dad asks for help to end his life, helping him would be the kindest thing. Dad's scared of being a burden. What should I do?",
    options: [
      'If your dad freely and clearly chooses to die, helping him respects his dignity and his right to decide.',
      'Insist that doctors use every possible treatment to keep him alive for as long as they can, however painful.',
      'Deliberately ending his life is wrong, but he may refuse burdensome treatment and have strong pain relief.',
      'Christians disagree about this, so just follow your heart. God will understand whatever you both decide in the end.'
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe in the **sanctity of life**: life is a gift from God, so deliberately ending it by **euthanasia** is wrong. But the Church does not require burdensome treatment that only prolongs dying, and strong pain relief is allowed even if it might shorten life. Good **palliative care**, as in a hospice, helps people die with dignity.",
    feedbackWrong: "Catholic teaching says **euthanasia** is wrong because of the **sanctity of life**: life is God's gift. But it is not wrong to refuse treatment that is overly burdensome, or to give strong pain relief. The Church supports **palliative care** so that no one has to face death alone or in pain.",
    keyTerms: ['Sanctity of life', 'Euthanasia', 'Palliative care', 'Hospice'],
    viewsRepresentedByWrongOptions: [
      'This is closer to a **Humanist** view, which supports assisted dying when a person freely chooses it.',
      'This goes too far. Catholic teaching does not require every possible treatment if it is burdensome and only prolongs dying.',
      null,
      'Some Christians do disagree about euthanasia, but the Catholic Church gives clear teaching, and this answer ignores it.'
    ],
    sources: ['CCC 2276-2279']
  },

  {
    id: 'p1s2-annulment-01',
    paper: 1,
    section: 2,
    specRef: '2.6',
    topic: 'Divorce, annulment and remarriage',
    level: 2,
    look: { age: 'adult', hat: 'headscarf', accessory: 'oranges', bottom: 'skirt' },
    mood: 'worried',
    penitent: 'Bernadette, a café owner',
    scene: "My husband left me five years ago and we're legally divorced. Now I've met a kind man who wants to marry me in church. My Anglican cousin remarried in her church after a divorce. Can I do the same here?",
    options: [
      "Yes. Once your legal divorce is final, the first marriage has ended, so you're free to remarry in church.",
      "Civil divorce can't end a sacramental marriage, but a Church tribunal could examine it for an annulment.",
      "Your cousin's church allows it, so the Catholic Church will too, as long as the priest agrees.",
      'No. Because you are divorced, you can no longer receive Holy Communion or take part in parish life.'
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe a valid sacramental marriage is lifelong and cannot be ended by **divorce** (Mark 10:9). But a Church tribunal can examine whether something essential was missing from the start; if so, it may grant an **annulment**, a declaration that no valid marriage existed. Divorced Catholics who have not remarried are full members of the parish and can receive Communion.",
    feedbackWrong: "In Catholic teaching marriage is **indissoluble**: a civil **divorce** ends the legal contract but not a valid sacramental marriage. If a Church tribunal finds the marriage was never valid, it can grant an **annulment**, and then **remarriage** in church is possible. Divorced Catholics are still welcome, and can receive Communion if they have not remarried.",
    keyTerms: ['Annulment', 'Divorce', 'Remarriage', 'Indissoluble', 'Sacrament of marriage'],
    viewsRepresentedByWrongOptions: [
      'This is a common secular view. The law can end a civil marriage, but Catholics believe it cannot end a sacramental one.',
      null,
      "The Church of England allows remarriage after divorce in some cases, at the priest's discretion. Catholic teaching differs.",
      'This is a misunderstanding. Divorced Catholics who have not remarried can still receive Communion and are fully welcome.'
    ],
    sources: ['Mark 10:9', 'CCC 1629', 'CCC 1650']
  }
);

/* ---------------- Stage 2 ---------------- */
window.DILEMMAS.push(
  /* ---------- 2.1 Heaven, hell, judgment, resurrection, Last Judgment ---------- */
  {
    id: "p1s2-purgatory-01",
    paper: 1, section: 2, specRef: "2.1",
    topic: "Judgment, heaven and praying for the dead",
    level: 2,
    look: { age: "child", hair: "short", accessory: "flowers" },
    mood: "worried",
    penitent: "Joseph, Year 8 student",
    scene: "My grandad died last month. At the funeral, people said he's an angel now, watching over me. My friend from a different church says praying for him is pointless, because his fate was sealed when he died. Is Grandad in heaven? Should I pray for him?",
    options: [
      "When you die, you simply stop existing. Grandad lives on only in your memories now.",
      "He has become an angel, and now he's watching over you from up in the sky.",
      "Praying for him is pointless, because everyone's fate is completely sealed at the moment they die.",
      "Trust him to God's mercy, and pray for him: the dead may need purifying before heaven."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe each person meets God in **judgment** at death. Those who die in God's friendship but still need cleansing are purified in **purgatory** before entering **heaven**, so Catholics **pray for the dead**. Praying for Grandad is a loving way to stay close to him.",
    feedbackWrong: "Catholic teaching says that at death each soul is **judged** by God. Those who need it are purified (**purgatory**) before **heaven**, and our prayers can help them, so Catholics pray for the dead, especially at Mass. People do not become angels: they stay themselves, now with God.",
    keyTerms: ["Judgment", "Heaven", "Purgatory", "Praying for the dead"],
    viewsRepresentedByWrongOptions: [
      "This is an atheist or Humanist view. Catholics believe the soul lives on after death.",
      "This is a popular idea, but Catholics believe humans and angels are different; the dead do not become angels.",
      "Many Protestants hold this view. Catholics believe prayers can help those being purified in purgatory.",
      null
    ],
    sources: ["2 Maccabees 12:44-46", "CCC 1030-1032"]
  },
  {
    id: "p1s2-hell-01",
    paper: 1, section: 2, specRef: "2.1",
    topic: "Hell",
    level: 3,
    look: { age: "teen", hair: "spiky", accessory: "headphones" },
    mood: "neutral",
    penitent: "Aiden, Year 11 student",
    scene: "In RE we were debating hell. My mate says a loving God would never send anyone there, so it can't exist. Another girl said hell is a fiery place for anyone who breaks God's rules. I don't know who's right. What do Catholics believe?",
    options: [
      "Hell isn't real. A God who is truly loving would never allow anyone to end up there.",
      "God sends no one to hell; it's the state of freely and finally refusing God's love.",
      "Hell is a place of fire that God sends people to whenever they break one of his rules.",
      "Hell is just a story that was invented long ago to scare people into behaving well."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe **hell** is real, but God does not want anyone to go there. Hell is the state of **self-exclusion** from God: freely and finally choosing to reject his love, and dying without repenting of serious sin. Images of fire in the Bible point to how painful it is to lose God for ever.",
    feedbackWrong: "Catholic teaching says **hell** is real, but it is not God punishing people for small slips. It is the state of definitively **refusing God's love** by our own free choice, and God predestines no one to it. God's mercy is always offered, right up to the end.",
    keyTerms: ["Hell", "Judgment", "Free will", "Self-exclusion"],
    viewsRepresentedByWrongOptions: [
      "This is called universalism. Catholics believe hell is a real possibility because human freedom is real.",
      null,
      "This is a legalistic picture of hell. Catholics believe hell is the result of freely and finally rejecting God.",
      "This is an atheist view. Catholics believe hell is real, though God wants everyone to be saved."
    ],
    sources: ["CCC 1033-1037"]
  },
  {
    id: "p1s2-resurrection-body-01",
    paper: 1, section: 2, specRef: "2.1",
    topic: "Resurrection and the Last Judgment",
    level: 2,
    look: { age: "elder", accessory: "cane", hat: "headscarf", bottom: "skirt" },
    mood: "hopeful",
    penitent: "Mrs Kowalski, a retired nurse",
    scene: "My knees are worn out and my eyes aren't what they were. My grandson says that in heaven we'll be spirits floating about on clouds, with no bodies at all. I always thought we said 'the resurrection of the body' in the Creed. What will it really be like?",
    options: [
      "In heaven we'll all be spirits floating on clouds, with no bodies, for ever and ever.",
      "'Resurrection' just means that our memory will live on in the people who loved us.",
      "Our earthly bodies come back exactly as they were, bad knees and all, at the end of time.",
      "At the end of time God will raise our bodies, transformed, like the risen Jesus."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe in the **resurrection of the body**: at the end of time, at the **Last Judgment**, God will raise our bodies and reunite them with our souls. Like Jesus' risen body, they will be **transformed**: no longer weak or in pain (1 Corinthians 15:42-44). So your hope is well placed.",
    feedbackWrong: "Catholic teaching says that at the **Last Judgment** God will raise our bodies and reunite them with our souls. They will be **transformed** and glorious, like Jesus' risen body, not ghostly and not simply restored as they were (1 Corinthians 15:42-44). This is the **resurrection of the body** that Catholics profess in the Creed.",
    keyTerms: ["Resurrection of the body", "Last Judgment", "Heaven", "Creed"],
    viewsRepresentedByWrongOptions: [
      "This is a popular image, but Catholics believe in the resurrection of the body, not just a spirit life.",
      "This is closer to a Humanist or liberal view. Catholics believe in a real resurrection.",
      "This is too literal. Catholics believe the risen body will be transformed, like Jesus' risen body.",
      null
    ],
    sources: ["1 Corinthians 15:42-44", "CCC 997-1001", "CCC 1038-1041"]
  },

  /* ---------- 2.2 Eternal life, Kingdom of God, salvation, grace, faith and works ---------- */
  {
    id: "p1s2-faith-works-01",
    paper: 1, section: 2, specRef: "2.2",
    topic: "Salvation: faith and works",
    level: 3,
    look: { age: "teen", hair: "bob", accessory: "satchel" },
    mood: "worried",
    penitent: "Olivia, Year 11 student",
    scene: "My friend at an evangelical church says we're saved by faith alone, so good works make no difference to God. My uncle says that if you do enough good deeds, you earn your place in heaven. They can't both be right. What does the Catholic Church teach?",
    options: [
      "We're saved by faith alone, so any good works that you do make no difference at all to God.",
      "If you do enough good deeds in your life, you will earn yourself a place in heaven.",
      "Salvation is a free gift of grace, received in faith, and real faith shows itself in love.",
      "Being a good person is all that matters in the end. What you believe is up to you."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe **salvation** is a free gift of God's **grace**: no one can earn it. We receive it through **faith**, and true faith shows itself in love and good **works**; James 2:17 says faith without works is 'dead'. Works do not buy salvation; they are how a living faith responds.",
    feedbackWrong: "Catholic teaching says **salvation** comes from God's free **grace**, which we cannot earn by good deeds. But real **faith** is never alone: it shows itself in love and good **works** (James 2:17). Catholics hold faith and works together, rather than choosing one.",
    keyTerms: ["Salvation", "Grace", "Faith and works", "Sola fide"],
    viewsRepresentedByWrongOptions: [
      "This simplifies the Protestant idea of 'faith alone' (sola fide). Catholics believe faith must show itself in works.",
      "This is the idea of earning heaven. Catholics believe salvation is a free gift of grace that cannot be earned.",
      null,
      "This is closer to a Humanist view. Catholics believe faith in God and goodness go together."
    ],
    sources: ["Ephesians 2:8-10", "James 2:14-17", "CCC 1987", "CCC 2007-2011"]
  },
  {
    id: "p1s2-kingdom-01",
    paper: 1, section: 2, specRef: "2.2",
    topic: "The Kingdom of God",
    level: 2,
    look: { age: "adult", hair: "afro", accessory: "clipboard", pattern: "stripes" },
    mood: "hopeful",
    penitent: "Tunde, a youth group leader",
    scene: "Our youth group is running a food bank. One of the teens said that the 'Kingdom of God' is just heaven after we die, so this world doesn't really matter. I'd love to give him a better answer. What does 'Kingdom of God' mean for Catholics?",
    options: [
      "It's only about heaven after death. This world will pass away, so it doesn't really matter.",
      "It's a political kingdom that Christians must set up by taking power and running countries.",
      "It's only a nice way of describing a fairer society. There is no God behind it.",
      "God's Kingdom began with Jesus and grows now wherever love, justice and peace are lived."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe the **Kingdom of God** began with Jesus and is already growing whenever people live God's love, **justice** and peace, like your food bank. It will be complete only at the end of time. So it is both 'now' and 'not yet'.",
    feedbackWrong: "Catholic teaching says the **Kingdom of God** is God's reign of love, **justice** and peace. It began in Jesus' life and ministry, grows now through the actions of his followers, and will be completed at the end of time. So this world matters: your food bank helps the Kingdom grow.",
    keyTerms: ["Kingdom of God", "Justice", "Eternal life", "Salvation"],
    viewsRepresentedByWrongOptions: [
      "This is a half-truth. The Kingdom will be complete in heaven, but Catholics believe it starts here and now.",
      "This is a political misreading. Jesus said his Kingdom is not a worldly kingdom of power (John 18:36).",
      "This is a secular view. Catholics believe the Kingdom is God's work, not just a human project.",
      null
    ],
    sources: ["Mark 1:15", "Luke 17:20-21", "CCC 541-546"]
  },
  {
    id: "p1s2-grace-deathbed-01",
    paper: 1, section: 2, specRef: "2.2",
    topic: "Grace and eternal life",
    level: 1,
    look: { age: "elder", hair: "bald", accessory: "glasses", pattern: "cardigan" },
    mood: "worried",
    penitent: "Mick, recently diagnosed with a serious illness",
    scene: "The doctors say I haven't got long. I've not been to church in forty years, and I've done plenty I'm not proud of. It feels far too late to make up for a whole lifetime now. Is there any point in me even being here?",
    options: [
      "It's never too late. God's grace is a free gift; turn to him with sorrow and trust.",
      "You can't make up for a whole lifetime in a few months. I'm afraid it really is too late.",
      "Everyone goes to heaven in the end anyway, so there's no need to worry or to change anything.",
      "Try to do as many good deeds as possible in the time you have left, to balance out the bad."
    ],
    correctIndex: 0,
    feedbackCorrect: "Catholics believe God's **grace** and mercy are offered right up to the moment of death. On the cross, Jesus promised paradise to the thief who turned to him at the very end (Luke 23:42-43). Through the sacraments of **Reconciliation** and the Anointing of the Sick, you can receive God's forgiveness and peace.",
    feedbackWrong: "Catholic teaching says **eternal life** is a gift of God's **grace**, not a reward we earn by balancing good against bad. God's mercy is offered until the very end: Jesus promised paradise to the repentant thief on the cross (Luke 23:42-43). It is never too late to turn back to God through **Reconciliation**.",
    keyTerms: ["Grace", "Eternal life", "Salvation", "Reconciliation"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is too harsh. Catholics believe God's mercy is offered to everyone until the moment of death.",
      "This is called universalism. Catholics believe we must freely accept God's offer of mercy.",
      "This treats salvation as earned. Catholics believe it is a free gift of grace."
    ],
    sources: ["Luke 23:39-43", "CCC 1846-1847", "CCC 1499-1532"]
  },

  /* ---------- 2.3 Sanctity of life, abortion and euthanasia ---------- */
  {
    id: "p1s2-abortion-01",
    paper: 1, section: 2, specRef: "2.3",
    topic: "Abortion",
    level: 2,
    look: { age: "teen", hair: "braids", accessory: "none" },
    mood: "worried",
    penitent: "Chiara, Year 11 student",
    scene: "My older sister is twenty and has just found out she's pregnant. Her boyfriend has left, and she's terrified. She's thinking about having an abortion. My Humanist teacher says it's entirely her choice. I want to help her, but I don't know what to say.",
    options: [
      "It's her body, so it's entirely her choice. Faith shouldn't have anything to say about it.",
      "Life begins at conception, so abortion is wrong. Support her with love and practical help.",
      "Abortion is acceptable because the law allows it, so legally it's not a moral question at all.",
      "Tell her that abortion is murder, and stop speaking to her until she changes her mind."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe in the **sanctity of life** from **conception**, so **abortion** is seen as gravely wrong. But the Church also teaches deep compassion: your sister needs love, practical support and hope, not judgment. Many Catholic charities help women in her situation, during pregnancy and afterwards.",
    feedbackWrong: "Catholic teaching says human life is sacred from **conception**, so **abortion** is wrong (the **sanctity of life**). Just as important, the Church calls Christians to support women facing difficult pregnancies with compassion, never condemnation. God's forgiveness is also always offered to anyone who has had an abortion.",
    keyTerms: ["Sanctity of life", "Abortion", "Conception", "Compassion"],
    viewsRepresentedByWrongOptions: [
      "This is a pro-choice view held by many Humanists and some liberal Christians. Catholic teaching differs.",
      null,
      "This confuses the law with morality. Something can be legal and still be wrong.",
      "This is un-pastoral. Catholic teaching opposes abortion but calls for love and support, not rejection."
    ],
    sources: ["Jeremiah 1:5", "CCC 2270-2275"]
  },
  {
    id: "p1s2-quality-of-life-01",
    paper: 1, section: 2, specRef: "2.3",
    topic: "Sanctity of life and quality of life",
    level: 1,
    look: { age: "adult", hat: "flatcap", accessory: "oranges" },
    mood: "worried",
    penitent: "Deepak, whose dad has dementia",
    scene: "Dad has advanced dementia. Most days he doesn't know who I am. A colleague said that when someone has lost so much, their life isn't really worth living any more. It upset me, but sometimes I wonder too. What does the Church teach?",
    options: [
      "When someone no longer knows who they are or who you are, their life has lost most of its value.",
      "Every life is sacred, whatever its quality, because it's God's gift. Keep caring for him.",
      "Only God decides, so you should never use any medicine to ease his symptoms.",
      "His life only matters as long as he can still do something useful for the family."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe in the **sanctity of life**: every human life is a gift from God and keeps its **dignity**, whatever its **quality** or abilities. Your love and care for your dad, and good medical and **palliative care**, honour that dignity. Feeling worn out is normal, so look for support too.",
    feedbackWrong: "Catholic teaching says human **dignity** does not depend on memory, ability or **quality of life**: every life is sacred (the **sanctity of life**). Medicine to ease suffering is good and right. Your dad's life still has great value, and so does your care for him.",
    keyTerms: ["Sanctity of life", "Quality of life", "Dignity", "Palliative care"],
    viewsRepresentedByWrongOptions: [
      "This is a 'quality of life' argument used by some secular thinkers. Catholics believe dignity never depends on ability.",
      null,
      "This is a misunderstanding. Catholic teaching supports medicine and pain relief that ease suffering.",
      "This is a utilitarian view that judges people by usefulness. Catholics reject it."
    ],
    sources: ["Genesis 1:27", "CCC 2276-2279"]
  },

  /* ---------- 2.4 Human relationships and sexual relationships ---------- */
  {
    id: "p1s2-sex-before-marriage-01",
    paper: 1, section: 2, specRef: "2.4",
    topic: "Sexual relationships before marriage",
    level: 2,
    look: { age: "adult", build: "slim", hair: "long", accessory: "headphones" },
    mood: "worried",
    penitent: "Leah, 19, a university student",
    scene: "My boyfriend and I have been together for two years. He says that if we love each other, sex before marriage is fine. My Humanist flatmate agrees, as long as we're both adults and we're careful. I want to do what's right. What does the Church teach?",
    options: [
      "If you are both consenting adults who love and respect each other, it is completely fine.",
      "Sex is shameful, so even thinking about it is sinful. Try to avoid the subject altogether.",
      "Sex before marriage is fine as long as you are both careful and no pregnancy results.",
      "Sex is a gift meant for marriage, expressing a lifelong commitment. Real love can wait."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe **sex** is a good gift from God, meant to be shared within **marriage**, where it expresses lifelong, faithful love and is open to new life. Living by this is called **chastity**, and it is about respect, not shame. Waiting can be a strong sign of real love.",
    feedbackWrong: "Catholic teaching says **sex** is a good gift that belongs within **marriage**, where it expresses a lifelong commitment and is open to children. This is the virtue of **chastity**: respecting yourself and the other person. Many **Humanists** believe consenting adults can decide for themselves, but Catholic teaching differs.",
    keyTerms: ["Sexual relationships", "Chastity", "Marriage", "Consent"],
    viewsRepresentedByWrongOptions: [
      "This is closer to a **Humanist** view, and some liberal Christians hold it too. Catholic teaching differs.",
      "This is wrong. Catholics believe sex is a good gift from God, not something shameful.",
      "This is a popular secular view. Catholics believe sex belongs in marriage, whatever the risk of pregnancy.",
      null
    ],
    sources: ["CCC 2337", "CCC 2353", "CCC 2360-2363"]
  },
  {
    id: "p1s2-chastity-pressure-01",
    paper: 1, section: 2, specRef: "2.4",
    topic: "Human relationships and chastity",
    level: 1,
    look: { age: "teen", hair: "buzz", accessory: "scarf" },
    mood: "worried",
    penitent: "Ethan, Year 11 student",
    scene: "My mates keep teasing me because I've never had a girlfriend, and because I've said I want to wait for sex until I'm married. They say I'm weird and old-fashioned. It's getting to me. Should I just go along with them?",
    options: [
      "Go along with them, so you don't stand out. Fitting in matters a lot at your age.",
      "Relationships are a distraction, so Christians shouldn't really date anyone at all.",
      "Waiting is really old-fashioned now. Sex is just a normal part of growing up, at whatever age.",
      "Chastity isn't weird: it's respect for yourself and others. True friends accept that."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe **chastity** means respecting yourself and others, and keeping sex for marriage. It is a positive choice about how to love, not something to be embarrassed about. Good **relationships** and friendships are based on respect, and true friends will accept your choice.",
    feedbackWrong: "Catholic teaching values **chastity**: respecting yourself and others, and keeping sex for marriage. Friendships and dating are good parts of **human relationships**, but no one should be pressured into anything. Standing firm with kindness takes real courage.",
    keyTerms: ["Chastity", "Human relationships", "Respect", "Peer pressure"],
    viewsRepresentedByWrongOptions: [
      "This is giving in to peer pressure. Catholics believe your choices should come from your values, not from fear.",
      "This goes too far. Catholics see friendships and dating as good parts of human relationships.",
      "This is a popular secular view. Catholics believe sex belongs within marriage.",
      null
    ],
    sources: ["CCC 2337-2347"]
  },
  {
    id: "p1s2-same-sex-respect-01",
    paper: 1, section: 2, specRef: "2.4",
    topic: "Respect in relationships: same-sex attraction",
    level: 1,
    look: { age: "teen", hair: "afro", accessory: "satchel" },
    mood: "worried",
    penitent: "Bella, Year 10 student",
    scene: "My friend Josh just told our class he's gay. Some boys have started making nasty comments, and one said Catholics shouldn't even be friends with him. I want to do the right thing. How should a Catholic respond?",
    options: [
      "Stand by him. The Church says everyone must be treated with respect and compassion.",
      "Keep your distance, because being his friend would mean approving of everything he does.",
      "Stay out of it. Faith is private, so it's not your place to stand up for anyone in public.",
      "Tell him the Church won't let him receive any of the sacraments now that he's gay."
    ],
    correctIndex: 0,
    feedbackCorrect: "The Catechism teaches that people who experience **same-sex attraction** must be treated with **respect**, compassion and sensitivity, and that every sign of unjust discrimination should be avoided. Bullying is always wrong. Standing by Josh is exactly what a Catholic friend should do.",
    feedbackWrong: "Catholic teaching says everyone with **same-sex attraction** must be accepted with **respect**, compassion and sensitivity (CCC 2358). Being someone's friend does not mean agreeing with everything; it means loving them. Bullying and mean comments are always wrong.",
    keyTerms: ["Human relationships", "Respect", "Same-sex attraction", "Dignity"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is wrong. Catholics are called to love and befriend everyone; friendship is not the same as approval.",
      "This is a secular view that faith is private. Catholics should speak up against bullying.",
      "This is a misunderstanding. Being gay does not stop anyone receiving the sacraments."
    ],
    sources: ["CCC 2357-2359"]
  },

  /* ---------- 2.5 Marriage: purposes, vows, monogamy, cohabitation, same-sex marriage ---------- */
  {
    id: "p1s2-cohabitation-01",
    paper: 1, section: 2, specRef: "2.5",
    topic: "Cohabitation and marriage",
    level: 1,
    look: { age: "adult", hair: "ponytail", accessory: "flowers" },
    mood: "hopeful",
    penitent: "Sofia, who lives with her partner",
    scene: "Jamie and I have lived together for three years. We're happy, and we've talked about getting married. But Jamie says marriage is 'just a piece of paper' and a very expensive party. I was brought up Catholic. Does it really make a difference?",
    options: [
      "Living together is just as good as being married. A wedding is only paperwork and a big party.",
      "Marriage is more than paper: it's a sacrament, a lifelong promise made before God.",
      "You're living in sin, so the Church won't agree to marry the two of you now.",
      "Marriage mainly matters for legal reasons, like tax and inheritance, rather than faith."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe **marriage** is a **sacrament**: a lifelong, faithful covenant between a man and a woman, made in public **vows** before God. **Cohabitation** lacks that public, permanent commitment. The Church warmly welcomes couples who live together to prepare for marriage.",
    feedbackWrong: "Catholic teaching says **marriage** is far more than a legal contract: it is a **sacrament**, with lifelong **vows** made before God and the community. The Church encourages couples who are **cohabiting** to marry, and welcomes them to prepare. A priest would be glad to help you both.",
    keyTerms: ["Marriage", "Cohabitation", "Sacrament", "Vows"],
    viewsRepresentedByWrongOptions: [
      "This is a common secular view. Catholics believe marriage is a sacrament, not just paperwork.",
      null,
      "This is wrong. The Church welcomes cohabiting couples who want to marry and helps them prepare.",
      "This sees marriage only as a legal contract. For Catholics, it is a sacred covenant before God."
    ],
    sources: ["Mark 10:6-9", "CCC 1601", "CCC 2390"]
  },
  {
    id: "p1s2-purposes-marriage-01",
    paper: 1, section: 2, specRef: "2.5",
    topic: "Purposes of marriage",
    level: 3,
    look: { age: "adult", build: "broad", hair: "short", accessory: "none", pattern: "tie" },
    mood: "neutral",
    penitent: "Liam, who is engaged",
    scene: "Hannah and I are getting married in church next year. We've decided we never want children: we'd rather travel and focus on our careers. At marriage preparation they mentioned being 'open to children', and it threw us. Does it matter?",
    options: [
      "That's fine. Having children is a private choice that has nothing to do with marriage.",
      "The only purpose of marriage is to have as many children as possible, so you must change your plans.",
      "Catholic marriage is for mutual love and openness to children. Let's talk about how you both feel.",
      "Couples who can't or won't have children aren't really married in the eyes of God."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe the **purposes of marriage** are the couple's mutual love and support (**unitive**) and openness to new life (**procreative**). At a Catholic wedding the couple promise to accept children lovingly from God. A priest would want to talk this through gently with you, rather than simply judge.",
    feedbackWrong: "Catholic teaching says marriage has two purposes that belong together: **unitive** (the couple's love) and **procreative** (being open to children). Deliberately ruling out children for ever goes against this, but couples who are unable to have children are fully married. That is why the Church takes time to talk with couples during **marriage preparation**.",
    keyTerms: ["Purposes of marriage", "Unitive", "Procreative", "Vows"],
    viewsRepresentedByWrongOptions: [
      "This is a common secular view. Catholics believe openness to children is part of what marriage is.",
      "This goes too far. Catholics value mutual love as a purpose of marriage, and allow responsible family planning.",
      null,
      "This is wrong. Couples who are unable to have children are truly married in Catholic teaching."
    ],
    sources: ["Genesis 1:28", "CCC 1652-1654", "CCC 2366"]
  },
  {
    id: "p1s2-same-sex-marriage-01",
    paper: 1, section: 2, specRef: "2.5",
    topic: "Same-sex marriage",
    level: 2,
    look: { age: "teen", hat: "beanie", accessory: "glasses" },
    mood: "worried",
    penitent: "Alesha, Year 10 student",
    scene: "My cousin Dan and his boyfriend want to get married. Same-sex marriage is legal here, and Dan was baptised Catholic. He asked if they could marry in our church, and the priest said no. Dan is hurt. Why can't they, and how should I treat him?",
    options: [
      "Since the law now allows same-sex marriage, the Catholic Church will soon have to allow it as well.",
      "The Church teaches marriage is between a man and a woman, but Dan deserves love and respect.",
      "Some churches hold same-sex weddings, so Catholic teaching must allow it as well.",
      "You should avoid Dan, so that no one thinks your family approves of his relationship."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholic teaching says **marriage** is a lifelong union between a man and a woman, open to children, so the Church does not celebrate **same-sex marriages**. It also teaches that gay people must be treated with **respect** and compassion. Loving and supporting Dan as your cousin is right.",
    feedbackWrong: "Catholic teaching defines **marriage** as between a man and a woman, so the Church does not conduct **same-sex marriages**, even where the law allows them. Some other churches do, so Christians disagree on this. Whatever the teaching on marriage, Catholics must treat Dan with **respect** and love.",
    keyTerms: ["Same-sex marriage", "Marriage", "Respect", "Civil law"],
    viewsRepresentedByWrongOptions: [
      "This confuses civil law with Church teaching. The Church's teaching on marriage does not change with the law.",
      null,
      "Some churches, such as the Methodist Church in Britain, do conduct same-sex weddings. Catholic teaching differs.",
      "This is wrong. Catholics are called to love and respect gay family members."
    ],
    sources: ["CCC 1601", "CCC 2357-2359"]
  },

  /* ---------- 2.6 Annulment, divorce and remarriage ---------- */
  {
    id: "p1s2-separation-safety-01",
    paper: 1, section: 2, specRef: "2.6",
    topic: "Separation and divorce",
    level: 1,
    look: { age: "adult", hair: "bun", accessory: "toddler" },
    mood: "worried",
    penitent: "Rosa, a mum of two",
    scene: "My husband shouts at me, threatens me and has hurt me. I'm frightened for me and my children. But I made my vows for life. My mother says leaving would be a sin. What should I do?",
    options: [
      "Your vows are for life, so you must stay with him whatever happens, and pray that he changes.",
      "Your safety comes first. The Church allows separation when someone is in danger.",
      "Pray harder, and the problems will stop. This is simply a test of your faith in God.",
      "Divorce him straight away and remarry quickly, so your life can finally move on."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe marriage is lifelong, but the Church allows **separation** when a spouse or the children are in danger. Your safety and your children's safety come first, and leaving is not a sin. Please contact the police or a domestic abuse helpline, and your parish can support you too.",
    feedbackWrong: "Catholic teaching says that if someone is in danger, **separation** is allowed and can be necessary; a civil **divorce** can also be tolerated to protect you and your children legally. Abuse is never God's will. Please seek help from the police or a domestic abuse service straight away.",
    keyTerms: ["Separation", "Divorce", "Marriage vows", "Safety"],
    viewsRepresentedByWrongOptions: [
      "This is a dangerous misunderstanding. The Church allows separation when someone is at risk of harm.",
      null,
      "This is fatalistic. Abuse is never a test from God, and the Church wants you to be safe.",
      "This rushes past the Church's teaching. Separation is allowed, but remarriage needs an annulment first."
    ],
    sources: ["CCC 2383", "CCC 1649"]
  },
  {
    id: "p1s2-remarriage-01",
    paper: 1, section: 2, specRef: "2.6",
    topic: "Remarriage after divorce",
    level: 3,
    look: { age: "teen", hair: "short", accessory: "headphones" },
    mood: "worried",
    penitent: "Adam, Year 11 student",
    scene: "My dad divorced my mum years ago. Last summer he married his new partner at a register office. Someone at school said that means Dad isn't allowed to be a Catholic any more, and can't come to church. Is that true?",
    options: [
      "That's true. Remarrying after divorce means he's no longer a Catholic and can't come to church.",
      "Remarrying is fine as long as his first marriage was unhappy. Nothing has changed.",
      "In Catholic eyes, his new civil marriage is just as valid as any church wedding.",
      "The Church doesn't recognise his new marriage while the first stands, but he's still welcome."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholic teaching says a valid sacramental marriage lasts for life, so a **remarriage** after **divorce** is not recognised while the first marriage stands. But divorced and remarried Catholics are not cut off from the Church: they are welcome at Mass and in parish life. Your dad could also talk to a priest about whether an **annulment** might be possible.",
    feedbackWrong: "Catholic teaching says the Church cannot recognise a **remarriage** while a valid first marriage still exists. But that does not mean your dad is no longer Catholic: divorced and remarried people are still part of the Church and welcome at Mass. A priest can talk with him about his situation, including **annulment**.",
    keyTerms: ["Remarriage", "Divorce", "Annulment", "Indissoluble"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. Divorced and remarried Catholics are still members of the Church and are welcome at Mass.",
      "This is a popular view. Catholic teaching says an unhappy marriage is still a marriage unless it was never valid.",
      "This is a secular view. The Church does not recognise remarriage while a first valid marriage exists.",
      null
    ],
    sources: ["Mark 10:11-12", "CCC 1650-1651"]
  },

  /* ---------- 2.7 Family life and the role of local churches ---------- */
  {
    id: "p1s2-domestic-church-01",
    paper: 1, section: 2, specRef: "2.7",
    topic: "Family life",
    level: 1,
    look: { age: "adult", build: "broad", hat: "hardhat", accessory: "none" },
    mood: "worried",
    penitent: "Viktor, a construction manager",
    scene: "I work twelve-hour days, six days a week, to give my kids everything I never had. My wife says they barely see me, and my son told me I'm always too tired to play. I'm doing it for them. Am I getting it wrong?",
    options: [
      "Providing money is your main job as a father. Spending time together is a luxury.",
      "Quit your job completely. Work is much less holy than family life, so always put your family first.",
      "Your family is a 'domestic church'. Time and love together matter more than extra money.",
      "Family life is a private matter. Faith doesn't really have anything to say about it."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics call the family a **domestic church**: the first place where children learn love and faith. Providing for your family is good, but your presence, time and love matter more than extra money. Try to find a better balance, and pray and eat together as a family when you can.",
    feedbackWrong: "Catholic teaching says the family is a **domestic church**, where love, faith and values are first learned. Work is good and providing matters, but children need their parents' time and love most of all. **Family life** is something faith has a lot to say about.",
    keyTerms: ["Family life", "Domestic church", "Parents' roles"],
    viewsRepresentedByWrongOptions: [
      "This is a materialist view. Catholics believe children need love and time more than extra money.",
      "This goes too far. Catholics value work, but ask us to balance it with family life.",
      null,
      "This is a secular view. Catholic teaching says a lot about family life, calling it a domestic church."
    ],
    sources: ["CCC 1655-1658", "CCC 2204-2206"]
  },
  {
    id: "p1s2-parish-single-parent-01",
    paper: 1, section: 2, specRef: "2.7",
    topic: "The role of local churches in family life",
    level: 1,
    look: { age: "adult", accessory: "toddler", hair: "afro" },
    mood: "worried",
    penitent: "Abena, a single mum",
    scene: "I'm raising my two boys on my own and money is really tight. I stopped coming to Mass because I felt people were judging me for not being married. But I miss it, and the boys need something good in their lives. Is there a place for us here?",
    options: [
      "The Church is really only there to support married couples with children.",
      "Church is for Sunday worship. Family problems are really a job for social services, not the parish.",
      "Come back once your life is sorted out and you're in a more settled situation.",
      "You're very welcome. The parish should be a family that supports you, in prayer and practically."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe the **local church** (parish) is a family of families, and every family, including single-parent families, belongs. Parishes support families through worship, children's liturgy, youth groups, food banks and practical help. You and your boys are welcome just as you are.",
    feedbackWrong: "Catholic teaching says the **parish** should be a welcoming community for every kind of family. **Local churches** support families practically and spiritually: through Mass, sacraments, children's groups and help in hard times. Nobody needs to have a 'perfect' life before they come to church.",
    keyTerms: ["Role of local churches", "Parish", "Family life", "Community"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. The Church supports every kind of family, including single-parent families.",
      "This is a secular view. Catholics believe the parish should give practical as well as spiritual support.",
      "This is wrong. Jesus welcomed people as they were; the Church is for everyone, especially in hard times.",
      null
    ],
    sources: ["CCC 1655-1658", "CCC 2208"]
  },
  {
    id: "p1s2-honour-parents-01",
    paper: 1, section: 2, specRef: "2.7",
    topic: "Family life: caring for elderly parents",
    level: 2,
    look: { age: "adult", hair: "bob", accessory: "glasses", pattern: "cardigan" },
    mood: "worried",
    penitent: "Mei, an accountant",
    scene: "Mum has had several falls and can no longer live alone. My brother says the Bible commands us to look after her ourselves, so a care home would be wrong. I work full time and have three children. I feel so guilty. What does the Church teach?",
    options: [
      "Honouring her means making sure she's loved and well cared for, at home or in a good care home.",
      "You must care for her at home yourself, whatever it costs you and your children.",
      "Your own career comes first. She has had her life, and now it's your turn to live yours.",
      "Elderly people can be a real burden on families. Choose the cheapest option, and visit her when you can."
    ],
    correctIndex: 0,
    feedbackCorrect: "The commandment to **honour your father and mother** (Exodus 20:12) means making sure elderly parents are loved, respected and well cared for. That might be at home, or in a good care home if that is safest. What matters is that she is not abandoned, so keep visiting, and support her with love.",
    feedbackWrong: "Catholic teaching says adult children should **honour their parents** (Exodus 20:12) by caring for them in old age with love and respect. Catholic teaching does not insist that this must happen at home; a good care home can be the most loving choice. What matters is that elderly parents are never treated as a burden or forgotten.",
    keyTerms: ["Family life", "Honour your father and mother", "Care of the elderly"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is a legalistic reading. Catholics believe a good care home can be a loving way to honour a parent.",
      "This is an individualist view. Catholics believe we have a duty to care for our parents.",
      "This is wrong. Catholics believe elderly people have great dignity and must never be treated as a burden."
    ],
    sources: ["Exodus 20:12", "CCC 2218"]
  },

  /* ---------- 2.8 Childlessness, genetic engineering, contraception, celibacy ---------- */
  {
    id: "p1s2-ivf-01",
    paper: 1, section: 2, specRef: "2.8",
    topic: "Childlessness and IVF",
    level: 2,
    look: { age: "adult", hair: "long", accessory: "none", pattern: "dots" },
    mood: "worried",
    penitent: "Anna, married for six years",
    scene: "My husband and I have been trying for a baby for years. It's heartbreaking. The doctor has suggested IVF, and friends from other churches say it's a wonderful gift. But I've heard the Catholic Church has concerns. What does it teach?",
    options: [
      "The Church doesn't accept IVF, but supports treatment for natural conception, and adoption.",
      "Any method of having a baby is fine, because wanting a child is always a good and loving desire.",
      "Being childless is a punishment from God, so you should quietly accept it and move on.",
      "If you can't have children, your marriage isn't complete in the eyes of the Church."
    ],
    correctIndex: 0,
    feedbackCorrect: "Catholics understand the deep pain of **childlessness**. The Church teaches that **IVF** is not acceptable because it separates conception from the couple's act of love, and often involves spare embryos being destroyed. Medical treatment that helps natural conception is welcomed, and **adoption** is a beautiful way to give a child a loving home.",
    feedbackWrong: "Catholic teaching says **IVF** is not morally acceptable, because it separates making a baby from the marriage act and often leads to embryos being destroyed. But the Church supports treatments that help natural conception, and encourages **adoption**. A childless marriage is a full and fruitful marriage, and is never a punishment.",
    keyTerms: ["Childlessness", "IVF", "Adoption", "Sanctity of life"],
    viewsRepresentedByWrongOptions: [
      null,
      "Many Protestant Christians and secular people accept IVF, but Catholic teaching does not.",
      "This is wrong. Catholics believe childlessness is not a punishment from God.",
      "This is wrong. A childless couple is fully married in the eyes of the Church."
    ],
    sources: ["CCC 2374-2379"]
  },
  {
    id: "p1s2-contraception-01",
    paper: 1, section: 2, specRef: "2.8",
    topic: "Contraception",
    level: 2,
    look: { age: "adult", hair: "short", accessory: "toddler", pattern: "check" },
    mood: "neutral",
    penitent: "Ben, married with three young children",
    scene: "My wife and I have three children under five, and we can't cope with another baby right now. Friends at work say it's obvious we should use contraception. My Anglican sister says her church accepts it. What does the Catholic Church say?",
    options: [
      "It's a private decision, and the Church has no business in your bedroom.",
      "Many other churches accept contraception, so married Catholics are free to use it too.",
      "Have as many children as God sends. Planning your family in any way is selfish.",
      "Artificial contraception isn't accepted, but natural family planning can be used."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholic teaching (Humanae Vitae, 1968) says **artificial contraception** is wrong, because sex in marriage should stay open to new life. But the Church supports **responsible parenthood**: for serious reasons, couples may use **natural family planning**, which works with the natural cycle of fertility. Your concern to care well for your family is a good one.",
    feedbackWrong: "Catholic teaching says **artificial contraception** is not acceptable, but it does not ask couples to have as many children as possible. For serious reasons, couples may space births using **natural family planning**. The Anglican Church and many others accept contraception, but Catholic teaching differs.",
    keyTerms: ["Contraception", "Natural family planning", "Responsible parenthood", "Humanae Vitae"],
    viewsRepresentedByWrongOptions: [
      "This is a secular view. Catholics believe faith has something to say about every part of life, including sex.",
      "The Anglican Church accepted contraception in some circumstances in 1930, and many churches do today. Catholic teaching differs.",
      "This goes too far. The Church supports responsible parenthood and natural family planning.",
      null
    ],
    sources: ["Humanae Vitae (1968)", "CCC 2368-2370"]
  },
  {
    id: "p1s2-genetic-engineering-01",
    paper: 1, section: 2, specRef: "2.8",
    topic: "Genetic engineering",
    level: 3,
    look: { age: "teen", hair: "bun", accessory: "glasses" },
    mood: "hopeful",
    penitent: "Priya, Year 11 student",
    scene: "I want to study genetics at university and maybe work on curing inherited diseases. My aunt says all genetic engineering is 'playing God' and Catholics can't do it. A friend says scientists should do whatever parents want, even design their babies. Who's right?",
    options: [
      "Your aunt is right: any change to human genes is playing God and is always forbidden.",
      "Anything that science can do should be allowed, as long as the parents are the ones who want it.",
      "Choosing the embryos with the best genes is fine, because it reduces suffering in the future.",
      "Gene therapy that heals disease can be good, but not designing babies or destroying embryos."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics welcome science that heals, so **gene therapy** to treat disease in a patient can be morally good. But the Church opposes **genetic engineering** to 'design' babies, and any process that destroys human embryos, because each human life has dignity from **conception**; a Catholic geneticist can do great good.",
    feedbackWrong: "Catholic teaching supports **gene therapy** that cures or treats disease, so not all **genetic engineering** is 'playing God'. But it opposes designing babies for chosen traits, and any method that destroys embryos, because human life is sacred from **conception**. Catholics can work in genetics, guided by these principles.",
    keyTerms: ["Genetic engineering", "Gene therapy", "Designer babies", "Sanctity of life"],
    viewsRepresentedByWrongOptions: [
      "This goes too far. Catholic teaching supports gene therapy that heals disease.",
      "This is a secular view that whatever science can do is acceptable. Catholics believe some limits protect human dignity.",
      "This is a utilitarian argument. Catholics oppose selecting and destroying embryos.",
      null
    ],
    sources: ["Dignitas Personae (2008)", "CCC 2274-2275"]
  },
  {
    id: "p1s2-celibacy-01",
    paper: 1, section: 2, specRef: "2.8",
    topic: "Celibacy",
    level: 2,
    look: { age: "adult", build: "slim", hair: "buzz", accessory: "guitar" },
    mood: "worried",
    penitent: "Gabriel, 22, thinking about becoming a priest",
    scene: "I feel God might be calling me to be a priest. But my friends say celibacy is unnatural and means I'll never really love anyone. My Anglican cousin is a married vicar. I'm confused. Why do Catholic priests stay unmarried?",
    options: [
      "Celibacy is a gift: giving up marriage to love God and serve everyone, as Jesus did.",
      "Celibacy is just an old rule with no meaning, and all priests would be better off married.",
      "Celibate people are holier than married people, which is why priests can't marry.",
      "Celibacy means you must avoid all friendships and affection, so as to focus only on God."
    ],
    correctIndex: 0,
    feedbackCorrect: "Catholics see **celibacy** as a gift: a priest gives up marriage for the sake of God's Kingdom (Matthew 19:12), following Jesus, to love God and serve everyone freely. Celibate people still have deep friendships and love; their love is simply given in a different way. Marriage and celibacy are both holy **vocations**.",
    feedbackWrong: "Catholic teaching says **celibacy** is a free gift, following Jesus' example (Matthew 19:12), not a rejection of love or a sign of being holier. Priests in the Latin Catholic Church are usually celibate, while Anglican and Orthodox churches allow married clergy. Both marriage and celibacy are holy **vocations**.",
    keyTerms: ["Celibacy", "Vocation", "Priesthood"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is a common criticism. Anglican and most Protestant clergy can marry, but Catholics see celibacy as a gift.",
      "This is a misunderstanding. Catholics believe marriage and celibacy are both holy vocations.",
      "This is wrong. Celibate priests are called to love deeply and to have good friendships."
    ],
    sources: ["Matthew 19:12", "1 Corinthians 7:32-35", "CCC 1579"]
  }
);
