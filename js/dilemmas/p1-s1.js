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

/* ---------------- Stage 2 ---------------- */
window.DILEMMAS.push(
  /* ---------- 1.1 Creation, stewardship and Imago Dei ---------- */
  {
    id: "p1s1-creation-science-01",
    paper: 1, section: 1, specRef: "1.1",
    topic: "Creation: Genesis and science",
    level: 2,
    look: { age: "teen", accessory: "satchel", glasses: true },
    mood: "worried",
    penitent: "Mateus, Year 10 student",
    scene: "In science we learned about the Big Bang and evolution. My friend from youth club says real Christians must believe the world was made in six days, exactly as Genesis says. Now I feel like I have to choose between science and my faith. Do I?",
    options: [
      "Yes. Genesis is a literal scientific record, so the Big Bang and evolution must be wrong.",
      "No. Catholics can accept good science; Genesis teaches that God created everything, not how.",
      "Science has shown Genesis is just an old myth, so it has nothing true to teach you any more.",
      "Believe the science at school and Genesis at church. Just keep the two completely separate."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe **Genesis** teaches religious truth: God freely **created** everything, and it is good. It is not a science textbook, so Catholics can accept scientific theories such as the Big Bang and evolution. In fact, the Big Bang theory was first proposed by a Catholic priest, Fr Georges Lemaître.",
    feedbackWrong: "Catholic teaching says faith and science do not contradict each other, because the same God is the source of both. **Genesis** tells us why the world exists (God **created** it out of love), not exactly how. Catholics may accept the Big Bang and evolution, while believing God is the **Creator** behind them.",
    keyTerms: ["Creation", "Genesis", "Creator", "Faith and science"],
    viewsRepresentedByWrongOptions: [
      "This is **creationism**, held by some evangelical Christians who read Genesis literally. Catholic teaching does not require this.",
      null,
      "This is closer to some atheist views. Catholics believe Genesis teaches deep truths about God and humans, even if it is not science.",
      "This is a half-truth. Catholics see faith and science as working together, not as two separate worlds that never meet."
    ],
    sources: ["Genesis 1-2", "CCC 282-289", "CCC 159"]
  },
  {
    id: "p1s1-imagodei-01",
    paper: 1, section: 1, specRef: "1.1",
    topic: "Imago Dei and human dignity",
    level: 1,
    look: { age: "teen", hat: "beanie", accessory: "headphones" },
    mood: "neutral",
    penitent: "Precious, Year 11 student",
    scene: "I volunteer at a day centre for adults with severe disabilities. Some of them can't speak or walk. A boy in my class said there's no point, because they can't really do anything or give anything back. It made me so angry. What does the Church say?",
    options: [
      "A person's value depends on what they can contribute to society, so he has a point.",
      "Every person is made in God's image, so each one has equal dignity, whatever they can do.",
      "Only people who are baptised share God's image, so it depends whether they are Christians.",
      "It's kind of you, but caring for them is no different from looking after any other living creature."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe every human being is made in the **image of God** (**Imago Dei**, Genesis 1:27). This gives each person a **dignity** that does not depend on their abilities, health or usefulness. Your volunteering shows that love in action.",
    feedbackWrong: "Catholic teaching says every human being, without exception, is made in the **image of God** (**Imago Dei**). Human **dignity** comes from God, not from what a person can do or give back. That is why the Church values the care of disabled people so highly.",
    keyTerms: ["Imago Dei", "Human dignity", "Sanctity of life"],
    viewsRepresentedByWrongOptions: [
      "This is a utilitarian view that judges people by usefulness. Catholic teaching rejects it: dignity comes from God.",
      null,
      "This is wrong. Catholics believe every human being is made in God's image, whatever their faith.",
      "Catholics value all creatures, but believe humans are unique: only humans are made in God's image."
    ],
    sources: ["Genesis 1:27", "CCC 1700-1702"]
  },

  /* ---------- 1.2 Body, spirit and soul ---------- */
  {
    id: "p1s1-body-soul-01",
    paper: 1, section: 1, specRef: "1.2",
    topic: "Body and soul",
    level: 1,
    look: { age: "teen", hair: "short", accessory: "scarf" },
    mood: "worried",
    penitent: "Callum, Year 10 student",
    scene: "My mate has started vaping a lot and eating rubbish all day. When I said it was bad for him, he laughed and said the body is just a shell, and it's only the soul that goes to heaven anyway. Is he right that the body doesn't matter?",
    options: [
      "He's right: the body is only a temporary shell, and it's the soul that really matters to God.",
      "There's no such thing as a soul; we are just our bodies and brains, nothing more.",
      "It's his body and his choice. Faith has nothing to say about health or lifestyle.",
      "We're body and soul together, and the body is a temple of the Holy Spirit, so care for it."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe a human person is a unity of **body** and **soul**, not a soul trapped in a shell. St Paul calls the body a 'temple of the Holy Spirit' (1 Corinthians 6:19), and Catholics believe in the **resurrection of the body**. So looking after your health is part of respecting God's gift.",
    feedbackWrong: "Catholic teaching says the **body** and **soul** together make one human person. The body is a 'temple of the Holy Spirit' (1 Corinthians 6:19), and God will raise our bodies at the **resurrection**. So caring for our health matters to God.",
    keyTerms: ["Body", "Soul", "Temple of the Holy Spirit", "Resurrection of the body"],
    viewsRepresentedByWrongOptions: [
      "This is a dualist view, like some ancient Greek ideas. Catholics believe body and soul belong together.",
      "This is a materialist or atheist view. Catholics believe each person has a spiritual, immortal soul.",
      "This is a secular view of personal freedom. Catholics believe our bodies are a gift to look after.",
      null
    ],
    sources: ["1 Corinthians 6:19-20", "CCC 362-365"]
  },
  {
    id: "p1s1-soul-unique-01",
    paper: 1, section: 1, specRef: "1.2",
    topic: "The human soul",
    level: 2,
    look: { age: "teen", hair: "afro", accessory: "guitar" },
    mood: "neutral",
    penitent: "Kwame, Year 11 student",
    scene: "We watched a documentary about chimpanzees using tools and grieving for each other. My biology teacher said humans are just clever apes. I love animals, but I'm not sure that's the whole story. What do Catholics believe makes humans different?",
    options: [
      "Humans are just evolved animals with bigger brains. There is no soul.",
      "Humans have a spiritual soul from God, able to know and love him and to live for ever.",
      "Animals have exactly the same kind of soul as people, so there's no real difference at all.",
      "Only the soul is truly you. Your body is a kind of prison that you'll escape from at death."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe humans share a lot with animals, but each person also has a **spiritual soul**, created directly by God. The soul makes us able to think, choose freely, love and know God, and it is **immortal**. Animals are God's creatures and deserve kindness, but only humans are made in his image.",
    feedbackWrong: "Catholic teaching says each human being has a **spiritual soul** created by God, which is **immortal**. This makes humans unique among creatures: able to know and love God. Body and soul together make the person, so the body is not a prison.",
    keyTerms: ["Soul", "Spirit", "Immortal soul", "Imago Dei"],
    viewsRepresentedByWrongOptions: [
      "This is an atheist or materialist view. Catholics believe humans also have a spiritual soul.",
      null,
      "This is a popular idea, but Catholics believe only humans have a spiritual, immortal soul made in God's image.",
      "This is a dualist view, close to the ancient Greek thinker Plato. Catholics believe body and soul belong together."
    ],
    sources: ["Genesis 2:7", "CCC 362-368"]
  },
  {
    id: "p1s1-reincarnation-01",
    paper: 1, section: 1, specRef: "1.2",
    topic: "The soul and life after death",
    level: 3,
    look: { age: "adult", hair: "long", accessory: "none", pattern: "dots" },
    mood: "neutral",
    penitent: "Sienna, a yoga instructor",
    scene: "I'm Catholic, but in my yoga classes people often talk about souls being reborn many times until they reach perfection. It sounds quite beautiful. A friend from church says the soul just sleeps after death until the end of the world. What do Catholics actually believe happens to the soul?",
    options: [
      "Souls are reborn in new bodies many times until they become perfect.",
      "When we die, that's simply the end. 'Soul' is just a way of talking about our personality.",
      "The soul sleeps after death and knows nothing at all until the end of the world.",
      "Each person has one unique soul and one earthly life; after death comes God's judgment."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe God creates each person's **soul** individually, and that we have **one earthly life**. At death the soul is separated from the body and faces God's **judgment** straight away, and at the end of time the body will be raised. So Catholics do not believe in reincarnation.",
    feedbackWrong: "Catholic teaching says each person has one **soul**, created by God, and one earthly life. At death the soul meets God in **judgment**, and the body will be raised at the end of time. Reincarnation is not part of Christian belief.",
    keyTerms: ["Soul", "Immortality", "Judgment", "Resurrection"],
    viewsRepresentedByWrongOptions: [
      "This is closer to Hindu and Buddhist beliefs about rebirth. Catholics believe we have one earthly life.",
      "This is an atheist or Humanist view. Catholics believe the soul is real and lives on after death.",
      "This is called 'soul sleep', held by some Christian groups such as Seventh-day Adventists. Catholic teaching differs.",
      null
    ],
    sources: ["Hebrews 9:27", "CCC 1013", "CCC 1021-1022"]
  },

  /* ---------- 1.3 Selfishness, greed, ignorance and sin ---------- */
  {
    id: "p1s1-sin-confession-01",
    paper: 1, section: 1, specRef: "1.3",
    topic: "Sin",
    level: 1,
    look: { age: "teen", hat: "schoolcap", accessory: "satchel" },
    mood: "neutral",
    penitent: "Jun, Year 9 student",
    scene: "My mum makes me come to confession, but honestly I'm a good person. I don't steal or hurt anyone. My friends say sin is just an old-fashioned idea to make people feel guilty. Why do I even need to be here?",
    options: [
      "If you've never broken the law, then you haven't really sinned, so you don't need confession at all.",
      "Sin is just an old idea. Feeling guilty is the only real problem, so try not to worry.",
      "Everyone sins, even good people. Confession heals our friendship with God and helps us grow.",
      "Only confess big sins. Small ones like unkindness don't matter to God at all."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe all people **sin**: we sometimes choose selfishness over love, even in small ways (Romans 3:23). Sin damages our relationship with God and others. The **Sacrament of Reconciliation** brings God's forgiveness and **grace** to help us grow, even when we are trying to be good.",
    feedbackWrong: "Catholic teaching says everyone **sins**, because we all sometimes choose selfishness over love (Romans 3:23). Sin is not just breaking the law; it harms our relationship with God and others. The **Sacrament of Reconciliation** heals that relationship and gives **grace** to do better.",
    keyTerms: ["Sin", "Reconciliation", "Grace", "Selfishness"],
    viewsRepresentedByWrongOptions: [
      "This mixes up sin and crime. A crime breaks the law of the land; a sin is a wrong against God and others.",
      "This is a secular view. Catholics believe sin is real, and that God offers forgiveness for it.",
      null,
      "This is a misunderstanding. Smaller (venial) sins still matter, and confessing them helps us grow."
    ],
    sources: ["Romans 3:23", "CCC 1849-1850", "CCC 1458"]
  },
  {
    id: "p1s1-greed-01",
    paper: 1, section: 1, specRef: "1.3",
    topic: "Greed",
    level: 2,
    look: { age: "adult", build: "slim", accessory: "clipboard", pattern: "tie" },
    mood: "worried",
    penitent: "Marcus, a sales rep",
    scene: "At work, everyone adds a bit extra to their travel expenses: an extra few miles, a lunch that was really for family. My manager says the company expects it and it's basically a perk. I've started doing it too. It's only small amounts. Is it really a sin?",
    options: [
      "Small amounts don't really matter. A big company won't even notice, so it isn't actually stealing.",
      "It's only wrong if you get caught, so be careful and keep the claims believable.",
      "Being a bit greedy is natural, and it's what drives business. Everyone does it.",
      "It's stealing, even if everyone does it. Greed puts money before God and people. Be honest."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe **greed** is a sin because it puts money and possessions before God and other people (Luke 12:15). Taking what isn't yours is **stealing**, even if it is small and common (the seventh commandment, Exodus 20:15). Honesty at work is part of living your faith.",
    feedbackWrong: "Catholic teaching says **greed** puts money before God and others (Luke 12:15), and taking what isn't yours breaks the commandment 'You shall not steal' (Exodus 20:15). Something does not become right just because many people do it. The Catholic response is to stop, and to put things right where possible.",
    keyTerms: ["Greed", "Sin", "Stealing", "Honesty"],
    viewsRepresentedByWrongOptions: [
      "This is a common excuse. Catholic teaching says taking what isn't yours is wrong, whatever the amount.",
      "This treats morality as avoiding punishment. Catholics believe wrong is wrong, caught or not.",
      "This is closer to a 'greed is good' business view. Catholic teaching sees greed as a sin.",
      null
    ],
    sources: ["Exodus 20:15", "Luke 12:15", "CCC 2408-2409"]
  },
  {
    id: "p1s1-ignorance-01",
    paper: 1, section: 1, specRef: "1.3",
    topic: "Ignorance and sin",
    level: 3,
    look: { age: "teen", hair: "bob", accessory: "headphones" },
    mood: "worried",
    penitent: "Hana, Year 10 student",
    scene: "I shared a post online about a girl at school. I thought it was true and funny. Now I've found out it was a lie, and she's really upset. I honestly didn't know. Did I still sin? What should I do now?",
    options: [
      "Ignorance never excuses anything. You've committed a very serious sin either way.",
      "You didn't know, so it doesn't matter at all. Just forget about it and move on.",
      "Not knowing lessens your guilt, but now you know, you should help put it right.",
      "Sin is whatever you personally feel bad about, so it depends on how guilty you feel."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholic teaching says that if we truly did not know something was wrong, our guilt is reduced (**ignorance** can lessen responsibility). But we still have a duty to inform our **conscience**, and to repair harm once we know about it. Taking the post down and apologising would be a good way to put things right.",
    feedbackWrong: "Catholics believe genuine **ignorance** reduces guilt, because sin needs knowledge and free choice. But once we know harm has been done, we should **repair** it: take the post down, apologise and support her. We should also keep forming our **conscience** so we are less likely to make the same mistake.",
    keyTerms: ["Ignorance", "Sin", "Conscience", "Reparation"],
    viewsRepresentedByWrongOptions: [
      "This is too harsh. Catholic teaching says serious sin needs full knowledge, so genuine ignorance reduces guilt.",
      "This is a half-truth. Ignorance can reduce guilt, but we still need to repair harm once we know.",
      null,
      "This makes sin purely a feeling. Catholics believe right and wrong are real, and that conscience needs forming."
    ],
    sources: ["CCC 1857-1860", "CCC 1793"]
  },

  /* ---------- 1.4 Free will and predestination ---------- */
  {
    id: "p1s1-predestination-01",
    paper: 1, section: 1, specRef: "1.4",
    topic: "Predestination",
    level: 3,
    look: { age: "teen", hair: "short", accessory: "glasses" },
    mood: "worried",
    penitent: "Oskar, Year 11 student",
    scene: "My friend goes to a Reformed church. He says God decided before the world began who would be saved and who wouldn't, so nothing we choose changes anything. It's really bothering me. If that's true, why try to be good at all?",
    options: [
      "God chose who would be saved before the world began, and nothing you can do will ever change that.",
      "God wants everyone to be saved and offers grace freely, but you're free to accept or refuse it.",
      "Free will is an illusion. Brain chemistry decides everything we do, so no one is to blame.",
      "God doesn't know what you'll choose. He just waits to see what happens, like everyone else."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe God wants everyone to be saved (1 Timothy 2:4) and gives **grace** to all. Humans have **free will** to accept or reject God's love, so our choices really matter. The Church teaches that God **predestines** no one to hell.",
    feedbackWrong: "Catholic teaching says God wants all people to be saved (1 Timothy 2:4) and offers everyone **grace**. We have real **free will** to respond, so trying to be good matters. The Church rejects the idea that God **predestines** anyone to hell.",
    keyTerms: ["Predestination", "Free will", "Grace", "Salvation"],
    viewsRepresentedByWrongOptions: [
      "This is close to the view of John Calvin, held in some Reformed churches. Catholic teaching rejects predestination to hell.",
      null,
      "This is a determinist view held by some atheists. Catholics believe humans have real free will.",
      "This is sometimes called 'open theism', a minority Protestant view. Catholics believe God knows all things."
    ],
    sources: ["1 Timothy 2:4", "CCC 600", "CCC 1037"]
  },
  {
    id: "p1s1-freewill-fate-01",
    paper: 1, section: 1, specRef: "1.4",
    topic: "Free will and responsibility",
    level: 1,
    look: { age: "teen", hat: "beanie", accessory: "none" },
    mood: "worried",
    penitent: "Ryan, Year 9 student",
    scene: "I took a phone charger from a shop for a dare. I got caught and my parents are furious. I keep telling myself it was meant to be, like God made it happen to teach me a lesson. Is that true? Was it really my fault?",
    options: [
      "God gave you free will. He didn't make you do it, but he forgives you and helps you change.",
      "It was simply fate. Everything happens for a reason, so none of it was really your fault at all.",
      "God planned it all to teach you a lesson, so you don't need to feel bad about it.",
      "Because you chose to do it freely, God can't forgive it. You'll have to carry it alone."
    ],
    correctIndex: 0,
    feedbackCorrect: "Catholics believe God gives us **free will**, which means we are **responsible** for our choices. God does not make anyone sin, but he is always ready to **forgive** us and help us change. Owning up, saying sorry and paying for the charger are good first steps.",
    feedbackWrong: "Catholic teaching says God gives humans **free will**, so we are **responsible** for our actions; God never causes anyone to sin. But God's **forgiveness** is always offered when we are truly sorry. Taking responsibility is the first step to making things right.",
    keyTerms: ["Free will", "Responsibility", "Forgiveness", "Sin"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is a popular fatalist idea. Catholics believe we make real choices and are responsible for them.",
      "This is a half-truth. God can bring good from our mistakes, but he does not plan or cause our sins.",
      "This is wrong. Catholics believe God's forgiveness is offered for every sin when we are truly sorry."
    ],
    sources: ["Sirach 15:14-15", "CCC 1730-1734"]
  },
  {
    id: "p1s1-freewill-omniscience-01",
    paper: 1, section: 1, specRef: "1.4",
    topic: "Free will and God's knowledge",
    level: 2,
    look: { age: "adult", hair: "bun", accessory: "glasses", pattern: "cardigan" },
    mood: "neutral",
    penitent: "Dr Adebayo, a maths teacher",
    scene: "My Year 11s asked me something I couldn't answer. If God already knows everything we will do, how can we really be free? Aren't our choices already fixed? I'm a Catholic, but I didn't know what to tell them.",
    options: [
      "If God already knows what you'll do, your choices are fixed, so you aren't really responsible.",
      "God deliberately chooses not to know the future, so that people can stay free.",
      "God knowing your choices doesn't cause them. You still choose freely and are responsible.",
      "Free will only matters for big decisions. God controls all the small, everyday ones."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe God is **omniscient** (all-knowing) and exists outside time, seeing all of history at once. Knowing something will happen is not the same as making it happen. So we still have real **free will** and are **responsible** for our choices.",
    feedbackWrong: "Catholic teaching says God is **omniscient**, but his knowledge does not force our choices: knowing is not causing. God is outside time, so he sees our free choices without fixing them. We still have **free will** and are **responsible** for what we do.",
    keyTerms: ["Free will", "Omniscient", "Responsibility", "Predestination"],
    viewsRepresentedByWrongOptions: [
      "This is a determinist argument. Catholics believe God's knowledge does not take away our freedom.",
      "This is close to 'open theism', a minority Protestant view. Catholics believe God knows all things.",
      null,
      "This is a misunderstanding. Catholics believe we are free and responsible in small choices as well as big ones."
    ],
    sources: ["Psalm 139:1-4", "CCC 600", "CCC 1730"]
  },

  /* ---------- 1.5 God as Trinity; Father, Creator, Judge; omnipotent, omniscient, benevolent ---------- */
  {
    id: "p1s1-trinity-01",
    paper: 1, section: 1, specRef: "1.5",
    topic: "The Trinity",
    level: 2,
    look: { age: "teen", hair: "ponytail", accessory: "satchel" },
    mood: "worried",
    penitent: "Grace, Year 10 student",
    scene: "My best friend is Muslim. She asked me, really kindly, how Christians can say there is only one God if we pray to the Father, Jesus and the Holy Spirit. I tried to explain, but I got muddled. What should I say?",
    options: [
      "There are three separate gods who always agree and work together as a team.",
      "One God shows himself in three different forms at different times, like an actor changing masks.",
      "Only the Father is truly God. Jesus and the Spirit are special beings that he created.",
      "There is one God in three persons: Father, Son and Holy Spirit, equal and eternal."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe in the **Trinity**: **one God in three persons**, the Father, the Son and the Holy Spirit. The three persons are distinct, but each is fully God, equal and eternal, so Christians worship one God, not three. It is a mystery we can explore, but never fully explain.",
    feedbackWrong: "Catholic teaching says there is **one God in three persons**: Father, Son and Holy Spirit (the **Trinity**). They are not three gods, nor one God wearing masks; each person is fully God. Your friend's question is a good one, and the Church encourages respectful conversation like this.",
    keyTerms: ["Trinity", "Father, Son and Holy Spirit", "Monotheism"],
    viewsRepresentedByWrongOptions: [
      "This is called tritheism (belief in three gods). Christians reject it: there is only one God.",
      "This is called modalism, an early idea that the Church rejected. The three persons are really distinct.",
      "This is like the ancient Arian view, and close to what Jehovah's Witnesses believe. Catholics believe Jesus and the Spirit are fully God.",
      null
    ],
    sources: ["Matthew 28:19", "CCC 253-255"]
  },
  {
    id: "p1s1-god-judge-01",
    paper: 1, section: 1, specRef: "1.5",
    topic: "God as Judge and Father",
    level: 2,
    look: { age: "adult", hat: "hardhat", accessory: "none" },
    mood: "worried",
    penitent: "Dariusz, a builder",
    scene: "I haven't been to confession in fifteen years. I've done things I'm really ashamed of. My gran always said God sees everything and punishes every sin. Honestly, I'm scared of him. I'm not sure he even wants me back.",
    options: [
      "God is only love, so sin and judgment don't really matter. There's nothing to worry about.",
      "God keeps a careful record of every single sin, and he makes sure each one is punished in the end.",
      "God is a just judge, and also a loving Father who longs to forgive you. You're very welcome back.",
      "There's no divine judge. Right and wrong are simply whatever society decides they are."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe God is a just **Judge**: sin really matters. But God is also a loving **Father**, like the father in the parable of the Prodigal Son, who runs to welcome his child home (Luke 15:11-32). In the Sacrament of **Reconciliation**, God's **mercy** is always greater than our sins.",
    feedbackWrong: "Catholic teaching holds God's **justice** and **mercy** together. God is a **Judge**, so sin matters, but he is also a loving **Father** who longs to forgive, like the father of the Prodigal Son (Luke 15:11-32). No one is too far gone to come back through **Reconciliation**.",
    keyTerms: ["God as Judge", "God as Father", "Mercy", "Reconciliation"],
    viewsRepresentedByWrongOptions: [
      "This is a half-truth. God is love, but Catholics believe sin is real and God is also a just judge.",
      "This is a legalistic picture of God. Catholic teaching stresses that God's mercy is greater than our sins.",
      null,
      "This is a secular view of morality. Catholics believe God is our judge and the source of right and wrong."
    ],
    sources: ["Luke 15:11-32", "CCC 1846-1848"]
  },
  {
    id: "p1s1-omnipotence-01",
    paper: 1, section: 1, specRef: "1.5",
    topic: "God: omnipotent, omniscient and benevolent",
    level: 1,
    look: { age: "child", hat: "schoolcap", accessory: "satchel" },
    mood: "hopeful",
    penitent: "Leo, Year 7 student",
    scene: "My tests are next week. If God can do anything and loves me, can he just make me pass if I pray really, really hard? Then I wouldn't need to revise.",
    options: [
      "God can do anything and loves you, but he works with your efforts. Pray, and revise too!",
      "Yes. If you pray hard enough and have enough faith, God has to give you what you ask for.",
      "God is far too busy running the universe to care about small things like your tests.",
      "God made the world and then stepped back. He doesn't get involved in our lives now."
    ],
    correctIndex: 0,
    feedbackCorrect: "Catholics believe God is **omnipotent** (all-powerful), **omniscient** (all-knowing) and **benevolent** (all-loving), so he cares about even small things in your life. But God usually works through our own efforts and gifts. Praying for calm and focus, and then revising, is a great plan.",
    feedbackWrong: "Catholic teaching says God is **omnipotent**, **omniscient** and **benevolent**: he can do anything and cares about every part of your life. But prayer isn't a magic button. God usually works with our efforts, so pray, and revise as well!",
    keyTerms: ["Omnipotent", "Omniscient", "Benevolent", "Prayer"],
    viewsRepresentedByWrongOptions: [
      null,
      "This treats prayer like magic. Catholics believe God always hears prayer, but answers it in the way that is truly best.",
      "This is wrong. Catholics believe God is benevolent and cares about every part of our lives.",
      "This is called deism. Catholics believe God is still active and present in the world."
    ],
    sources: ["Matthew 10:29-31", "CCC 268-271", "CCC 2735-2737"]
  },

  /* ---------- 1.6 Belief, uncertainty and unbelief; Christian nurture ---------- */
  {
    id: "p1s1-doubt-01",
    paper: 1, section: 1, specRef: "1.6",
    topic: "Uncertainty and doubt",
    level: 2,
    look: { age: "teen", hair: "long", accessory: "headphones" },
    mood: "worried",
    penitent: "Maya, Year 11 student",
    scene: "Lately I keep wondering whether God is even real. Sometimes I'm sure, and sometimes I just feel nothing. I feel guilty even saying this in church. Does having doubts mean I've lost my faith?",
    options: [
      "Doubting is a serious sin. Push those thoughts away and never ask any questions about your faith.",
      "Questions are part of growing in faith. Keep praying, talk them through and keep coming to Mass.",
      "If you have doubts, faith obviously isn't for you. Stop pretending and be honest with yourself.",
      "Belief doesn't really matter anyway. As long as you're a kind person, nothing else counts."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics see faith as a journey, and honest **questions** can help it grow: 'faith seeking understanding'. Many saints went through times of **uncertainty**. Keep praying, keep coming to Mass, and talk your questions through with someone you trust.",
    feedbackWrong: "Catholic teaching says having questions and feelings of **uncertainty** is not the same as rejecting God. Faith can grow through honest questioning, and many saints struggled with doubt. The Church encourages you to keep praying and keep exploring, not to hide your questions.",
    keyTerms: ["Belief", "Uncertainty", "Faith", "Doubt"],
    viewsRepresentedByWrongOptions: [
      "This is too harsh. Catholics distinguish honest questions from deliberately rejecting God.",
      null,
      "This is a popular view, but Catholics believe faith can include struggles and questions.",
      "This is closer to a Humanist view. Catholics believe faith in God matters, as well as kindness."
    ],
    sources: ["Mark 9:24", "CCC 162", "CCC 2088"]
  },
  {
    id: "p1s1-nurture-01",
    paper: 1, section: 1, specRef: "1.6",
    topic: "Christian nurture",
    level: 1,
    look: { age: "adult", accessory: "toddler", hair: "short" },
    mood: "neutral",
    penitent: "Tomás, dad of three-year-old Ana",
    scene: "My wife and I had Ana baptised, but now we're not sure what to do next. My brother says we shouldn't influence her at all. He says we should let her choose a religion herself when she's eighteen. Is he right?",
    options: [
      "Yes. Don't influence her at all; let her choose for herself when she is an adult.",
      "Leave faith to her Catholic school later on. Teaching religion is the school's job.",
      "You're her first teachers of faith: pray together, come to Mass, and welcome her questions.",
      "Make her follow every rule strictly. Asking questions about faith is just a sign of weakness."
    ],
    correctIndex: 2,
    feedbackCorrect: "Catholics believe parents are the **first teachers of the faith**; at baptism they promised to bring their child up in it. This **Christian nurture** happens through family prayer, coming to Mass and living the faith at home. Children still keep their freedom, and their questions are welcome.",
    feedbackWrong: "Catholic teaching says parents are the **first teachers of the faith**, as they promised at baptism. **Christian nurture** means sharing faith lovingly at home, through prayer, Mass and example, not forcing it or leaving it all to others. As she grows, Ana will make her own free response to God.",
    keyTerms: ["Christian nurture", "Parents as first teachers", "Baptism", "Family prayer"],
    viewsRepresentedByWrongOptions: [
      "This is a common secular view. Catholics believe sharing faith with children is a gift, not a restriction.",
      "This is a half-truth. Catholic schools help, but parents are the first and most important teachers of faith.",
      null,
      "This is too strict. Catholic nurture is loving, and children's questions are welcome."
    ],
    sources: ["CCC 1653", "CCC 2223-2226"]
  },
  {
    id: "p1s1-unbelief-01",
    paper: 1, section: 1, specRef: "1.6",
    topic: "Unbelief",
    level: 2,
    look: { age: "teen", hat: "beanie", accessory: "scarf" },
    mood: "worried",
    penitent: "Niamh, Year 10 student",
    scene: "My best friend Sam is an atheist. He's honestly the kindest person I know. Someone at youth group said all atheists will go to hell, and now I can't stop worrying about him. What should I think?",
    options: [
      "Yes, anyone who doesn't believe in God is definitely going to hell.",
      "It doesn't matter what anyone believes. All beliefs are equally true, so there's no need to worry.",
      "End the friendship before his unbelief starts to affect your own faith.",
      "Only God judges hearts. Respect Sam, live your faith joyfully and keep him in your prayers."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe only God can judge a person's heart. The Church teaches that people who do not know Christ, through no fault of their own, but who sincerely seek what is good, may still be saved by God's grace. Respecting Sam, sharing your **faith** through your example and praying for him is the Catholic way.",
    feedbackWrong: "Catholic teaching says we must not judge anyone's eternal destiny: only God knows a person's heart. The Church teaches that those who sincerely seek the good, even without knowing Christ, can be saved by God's grace. Catholics respect people of no faith, while sharing their own **belief** through love and example.",
    keyTerms: ["Unbelief", "Atheism", "Judgment", "Salvation"],
    viewsRepresentedByWrongOptions: [
      "Some Christians hold this, but Catholic teaching says only God judges, and his grace can reach sincere people of no faith.",
      "This is called relativism. Catholics believe truth matters, while still respecting others.",
      "This is wrong. Catholics are encouraged to keep friendships with people of all beliefs.",
      null
    ],
    sources: ["Matthew 7:1", "CCC 847", "CCC 2125"]
  },

  /* ---------- 1.7 Evil, suffering and theodicy ---------- */
  {
    id: "p1s1-natural-evil-01",
    paper: 1, section: 1, specRef: "1.7",
    topic: "Natural evil",
    level: 1,
    look: { age: "child", hair: "braids", accessory: "flowers" },
    mood: "worried",
    penitent: "Esther, Year 7 student",
    scene: "On the news there was a huge earthquake. Lots of people lost their homes, and some children died. My cousin said it was God punishing that country. That can't be true, can it? Why do earthquakes even happen?",
    options: [
      "Your cousin is right: disasters like this are God's way of punishing places full of sinful people.",
      "God doesn't send disasters as punishment. Pray for the people affected and help them if you can.",
      "It proves that God either doesn't exist or doesn't care about people.",
      "It's just bad luck. There's nothing anyone can do, so it's best not to think about it."
    ],
    correctIndex: 1,
    feedbackCorrect: "An earthquake is an example of **natural evil**: suffering caused by nature, not by human choices. Catholics believe God does not send disasters as punishment (Luke 13:1-5), and the world is still 'on a journey' towards its perfection. Christians respond with prayer and practical help, and this is one way God's love reaches people in need.",
    feedbackWrong: "Catholic teaching says **natural evil**, like earthquakes, is not God punishing people; Jesus himself rejected that idea (Luke 13:1-5). Catholics believe God can bring good even out of suffering, often through people's compassion. The Christian response is to pray, and to help the victims.",
    keyTerms: ["Natural evil", "Suffering", "Theodicy", "Compassion"],
    viewsRepresentedByWrongOptions: [
      "Some people say this, but Jesus rejected the idea that disasters punish people for being worse sinners (Luke 13:1-5).",
      null,
      "This is the atheist 'problem of evil' argument. Catholics answer it with a theodicy and by helping those who suffer.",
      "This is a fatalist view. Catholics believe we should respond to suffering with prayer and practical help."
    ],
    sources: ["Luke 13:1-5", "CCC 310", "CCC 312"]
  },
  {
    id: "p1s1-moral-evil-01",
    paper: 1, section: 1, specRef: "1.7",
    topic: "Moral evil and free will",
    level: 2,
    look: { age: "adult", hat: "flatcap", accessory: "oranges" },
    mood: "worried",
    penitent: "Kenji, a shop owner",
    scene: "My shop was broken into last week. The window was smashed, and the stock was gone. I keep asking God why he didn't stop them. If he loves us and can do anything, why does he let people do such terrible things to each other?",
    options: [
      "God made those people break in. It was part of his plan for your life.",
      "God is not strong enough to stop every evil. He tries his best, but sometimes bad people still win.",
      "God gave people free will so they can truly love, but that means they can also choose evil.",
      "Evil isn't really real. 'Good' and 'bad' are just opinions that people have."
    ],
    correctIndex: 2,
    feedbackCorrect: "This is **moral evil**: suffering caused by human choices. Catholics believe God gave people **free will** so that love can be real, but this means people can also choose to do wrong. God does not want evil, but he respects our freedom, and he can bring good out of even bad situations.",
    feedbackWrong: "Catholic teaching says **moral evil** comes from humans misusing their **free will**, not from God's plan or from God being weak. Love must be freely chosen, so God allows people the freedom to choose wrong too. This is a key part of the Christian **theodicy**.",
    keyTerms: ["Moral evil", "Free will", "Theodicy", "Omnipotent"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. Catholics believe God never causes or wants evil; people freely choose it.",
      "This denies that God is omnipotent. Catholics believe God is all-powerful but respects our freedom.",
      null,
      "This is called moral relativism. Catholics believe good and evil are real."
    ],
    sources: ["CCC 311", "CCC 1730"]
  }
);
