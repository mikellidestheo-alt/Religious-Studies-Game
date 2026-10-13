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

/* ---------------- Stage 2 ---------------- */
window.DILEMMAS.push(
  /* ---------- 3.1 Causes of conflict, Just War and holy war ---------- */
  {
    id: "p1s3-just-war-01",
    paper: 1, section: 3, specRef: "3.1",
    topic: "Just War",
    level: 2,
    look: { age: "adult", build: "broad", hair: "buzz", accessory: "none", pattern: "check" },
    mood: "worried",
    penitent: "Corporal Nkemelu, an army reservist",
    scene: "I've been called up to serve with my unit. My Quaker neighbour says real Christians should never fight. My sergeant says soldiers just follow orders, whatever they are. I want to serve my country and my God. Can a Catholic be a soldier?",
    options: [
      "No. All Christians must be pacifists and refuse to take part in any fighting at all.",
      "Yes. A nation may defend itself in a just war, and soldiers can serve with honour.",
      "Yes, and a good soldier always obeys every order, even ones that seem clearly wrong.",
      "Yes. War is always right whenever your country's interests or its wealth are under any threat."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholic teaching says a nation may use force in self-defence if the **Just War** conditions are met: for example, a just cause, a last resort, proportionate force and protecting civilians. Soldiers who serve rightly can be 'servants of peace' (CCC 2310). But they must never obey orders to commit clearly evil acts, such as attacking civilians.",
    feedbackWrong: "Catholic teaching accepts that a nation may defend itself in a **Just War**, and that soldiers can serve with honour. War must meet strict conditions: a just cause, a last resort, proportionate force and protection of civilians. Soldiers must also follow their **conscience** and refuse orders to do clearly evil things.",
    keyTerms: ["Just War", "Pacifism", "Conscience", "Self-defence"],
    viewsRepresentedByWrongOptions: [
      "This is **pacifism**, held by Quakers and some other Christians. Catholics respect it, but accept just self-defence.",
      null,
      "This is wrong. Catholic teaching says soldiers must refuse orders that are clearly evil (CCC 2313).",
      "This fails the Just War conditions. War is only allowed as a last resort for a just cause, not for gain."
    ],
    sources: ["CCC 2307-2314"]
  },
  {
    id: "p1s3-holy-war-01",
    paper: 1, section: 3, specRef: "3.1",
    topic: "Holy war",
    level: 2,
    look: { age: "teen", hair: "long", accessory: "glasses" },
    mood: "worried",
    penitent: "Farah, Year 11 student",
    scene: "In history we studied the Crusades. Someone in class said that if a war is fought for God, it's automatically right. Another boy said religion causes most wars, so the world would be better without it. As a Catholic, I didn't know what to say.",
    options: [
      "Wars fought for God are always justified, just as the Crusades were in their time.",
      "Religion causes most wars, so it would be better if all religion were simply abolished.",
      "If a war is fought to defend Christians, then any kind of weapon may be used to win it.",
      "Catholics today reject 'holy war': no one may kill in God's name. Peace is God's will."
    ],
    correctIndex: 3,
    feedbackCorrect: "A **holy war** is a war believed to be fought for God. Today the Catholic Church rejects using violence in God's name: any war must meet the strict **Just War** conditions, and peace is always the goal. In 2000, Pope John Paul II asked forgiveness for wrongs done by Christians in the past.",
    feedbackWrong: "Catholic teaching today rejects the idea of **holy war**: no one may kill in God's name. Any use of force must meet the **Just War** conditions, including proportion and protecting civilians. Religion is one of many **causes of conflict**, but faith can also be a strong force for peace.",
    keyTerms: ["Holy war", "Just War", "Causes of conflict", "Peace"],
    viewsRepresentedByWrongOptions: [
      "This is the idea of holy war. The Catholic Church today rejects violence in God's name.",
      "This is a common atheist criticism. Catholics accept religion has been misused, but see faith as a force for peace.",
      "This breaks the Just War rule of proportionality. Weapons that kill civilians indiscriminately are never allowed.",
      null
    ],
    sources: ["CCC 2307-2309", "CCC 2314"]
  },
  {
    id: "p1s3-causes-conflict-01",
    paper: 1, section: 3, specRef: "3.1",
    topic: "Causes of conflict",
    level: 1,
    look: { age: "adult", hat: "flatcap", accessory: "none", pattern: "check" },
    mood: "worried",
    penitent: "Seamus, a farmer",
    scene: "Since Dad died, my brother and I have been fighting over who gets the family farm. We've said terrible things, and now we only speak through lawyers. Our mum is heartbroken. I know I'm right, but I hate this. What should I do?",
    options: [
      "Take what is rightfully yours. Justice matters more than keeping the peace in a family.",
      "Greed and pride cause many conflicts. Talk honestly, share fairly and seek peace.",
      "Just avoid each other for good. Some family conflicts can never really be fixed.",
      "Let the lawyers sort it all out. Faith doesn't have anything to say about property."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe many **conflicts** come from **greed**, pride and selfishness, whether between nations or within families. Jesus taught his followers to be peacemakers and to put relationships before possessions (Luke 12:13-15). Honest talk, fairness and **reconciliation** honour your dad and your mum.",
    feedbackWrong: "Catholic teaching says **greed**, pride and selfishness are common **causes of conflict**. When a man asked Jesus to make his brother share an inheritance, Jesus warned against greed (Luke 12:13-15). Catholics are called to seek fairness and **reconciliation**, not to win at any cost.",
    keyTerms: ["Causes of conflict", "Greed", "Reconciliation", "Peacemaker"],
    viewsRepresentedByWrongOptions: [
      "This is a half-truth. Justice matters, but Catholics believe reconciliation matters too.",
      null,
      "This gives up too easily. Catholics believe reconciliation is always worth seeking.",
      "This is a secular view. Jesus himself spoke about greed and inheritance (Luke 12:13-15)."
    ],
    sources: ["Luke 12:13-15", "Matthew 5:9", "CCC 2302"]
  },

  /* ---------- 3.2 Peace, reconciliation, forgiveness, a Christian peace group ---------- */
  {
    id: "p1s3-forgiveness-01",
    paper: 1, section: 3, specRef: "3.2",
    topic: "Forgiveness",
    level: 2,
    look: { age: "adult", hair: "bob", accessory: "flowers" },
    mood: "worried",
    penitent: "Margaret, whose son was badly injured",
    scene: "My son was badly hurt by a driver who had been drinking. The driver has written to say he's deeply sorry. People at church keep telling me I have to forgive him. But I'm so angry, and I want him punished. Am I a bad Catholic?",
    options: [
      "You must forgive him straight away and forget it ever happened, or God won't forgive you either.",
      "Some things can never be forgiven, and hating him is natural in a case like this.",
      "Forgiving him means the court should let him go free without any punishment.",
      "Forgiveness is a journey, and it doesn't cancel justice. Ask for grace."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe Jesus calls us to **forgive**, as we pray in the Lord's Prayer and as Jesus taught Peter: not seven times, but seventy-seven times (Matthew 18:21-22). But forgiveness is often a slow journey, and it does not mean forgetting, or cancelling **justice**. You can ask God for the grace to forgive, one step at a time.",
    feedbackWrong: "Catholic teaching says **forgiveness** is central to the Christian life (Matthew 18:21-22), but it is a choice and a process, not an instant feeling. Forgiving someone does not mean they escape **justice**, or that you must forget. Your anger is understandable, and God's grace can help you on the journey.",
    keyTerms: ["Forgiveness", "Justice", "Reconciliation", "Grace"],
    viewsRepresentedByWrongOptions: [
      "This is too harsh. Forgiveness is often a slow process, and it never means forgetting.",
      "This is a common view. Catholics believe that, with God's grace, any wrong can be forgiven.",
      "This mixes up forgiveness and justice. A person can be forgiven and still face fair consequences.",
      null
    ],
    sources: ["Matthew 6:12", "Matthew 18:21-22", "CCC 2843"]
  },
  {
    id: "p1s3-reconciliation-01",
    paper: 1, section: 3, specRef: "3.2",
    topic: "Reconciliation",
    level: 1,
    look: { age: "teen", hat: "beanie", accessory: "headphones" },
    mood: "worried",
    penitent: "Isla, Year 9 student",
    scene: "My best friend and I had a massive argument. We both said hurtful things, and we haven't spoken for two weeks. It was mostly her fault, honestly. I miss her, but I don't want to look weak. What should I do?",
    options: [
      "Wait until she apologises first. It was mostly her fault, and you have every right to your pride.",
      "Make the first move towards peace, even if it wasn't all your fault. Jesus calls us to reconcile.",
      "Just pray about it quietly. There's really no need to actually speak to her.",
      "Find some new friends. It's much easier than trying to fix things with her."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe **reconciliation** means restoring broken relationships. Jesus taught that making peace with others is so important it should come even before offering a gift at the altar (Matthew 5:23-24). Taking the first step isn't weakness; it takes real courage and love.",
    feedbackWrong: "Catholic teaching says Christians should actively seek **reconciliation**: Jesus said to go and make peace with others, even before worship (Matthew 5:23-24). Waiting for the other person to move first can let hurt grow. Making the first move is a sign of strength.",
    keyTerms: ["Reconciliation", "Forgiveness", "Peace"],
    viewsRepresentedByWrongOptions: [
      "This puts pride first. Jesus calls his followers to take the first step towards peace.",
      null,
      "This is a half-truth. Prayer helps, but Jesus asks us to actually go and make peace.",
      "This avoids the problem. Catholics believe relationships are worth repairing."
    ],
    sources: ["Matthew 5:23-24", "Colossians 3:13"]
  },
  {
    id: "p1s3-peace-group-01",
    paper: 1, section: 3, specRef: "3.2",
    topic: "Working for peace: Pax Christi",
    level: 1,
    look: { age: "teen", hair: "braids", accessory: "clipboard" },
    mood: "hopeful",
    penitent: "Amani, Year 10 student",
    scene: "Our school has a Pax Christi group. We run peace vigils, learn about conflicts around the world and campaign against nuclear weapons. My dad says it's naive, and that Christians should leave peace to politicians. Is working for peace really part of my faith?",
    options: [
      "Peace only matters inside your own heart. Campaigning isn't a Christian's business.",
      "Real peace only ever comes when one side wins a war, so support strong armies and nothing else.",
      "Yes. Jesus blessed peacemakers, so praying, learning and acting for peace is part of faith.",
      "Only priests and bishops should work for peace. Young laypeople like you should stay out of it."
    ],
    correctIndex: 2,
    feedbackCorrect: "Jesus said peacemakers are blessed (Matthew 5:9), so Catholics see working for **peace** as part of their faith. **Pax Christi** is an international Catholic peace movement that promotes peace through prayer, education and action. Your group is following Jesus' call.",
    feedbackWrong: "Catholic teaching says every Christian is called to be a **peacemaker** (Matthew 5:9), through prayer, learning and action. **Pax Christi** is an international Catholic peace movement that works for peace, reconciliation and disarmament. Working for peace is not naive; it is part of the Gospel.",
    keyTerms: ["Peace", "Peacemaker", "Pax Christi", "Christian peace group"],
    viewsRepresentedByWrongOptions: [
      "This is a half-truth. Inner peace matters, but Catholics are also called to work for peace in the world.",
      "This is a view based on force alone. Catholics believe true peace needs justice and reconciliation.",
      null,
      "This is wrong. Every baptised Catholic, young or old, is called to be a peacemaker."
    ],
    sources: ["Matthew 5:9", "CCC 2304-2306"]
  },

  /* ---------- 3.3 Bullying ---------- */
  {
    id: "p1s3-bullied-01",
    paper: 1, section: 3, specRef: "3.3",
    topic: "Being bullied",
    level: 1,
    look: { age: "child", hat: "schoolcap", accessory: "satchel" },
    mood: "worried",
    penitent: "Noah, Year 7 student",
    scene: "Some older kids keep sending me horrible messages online and calling me names in the corridor. I haven't told anyone, because I don't want to be a snitch. I keep thinking Jesus said to turn the other cheek. What should I do?",
    options: [
      "Turn the other cheek and keep it secret. Christians should never complain or tell on people.",
      "Get them back with something worse, and then they'll finally leave you alone.",
      "Bullying is just a normal part of growing up. Ignore it, and it will probably stop.",
      "You don't deserve this; you're made in God's image. Tell a trusted adult and don't hit back."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholics believe every person is made in **God's image**, so **bullying** attacks a person's dignity and is always wrong. Telling a trusted adult isn't 'snitching'; it's the right way to stop harm. Not hitting back follows Jesus' teaching, but 'turning the other cheek' never means suffering in silence.",
    feedbackWrong: "Catholic teaching says **bullying** is wrong because it attacks the **dignity** of someone made in God's image. Jesus taught us not to take revenge, but that does not mean keeping bullying secret. Tell a parent, teacher or another trusted adult so that it can be stopped.",
    keyTerms: ["Bullying", "Dignity", "Imago Dei", "Turn the other cheek"],
    viewsRepresentedByWrongOptions: [
      "This misunderstands Jesus' teaching. Not taking revenge doesn't mean keeping harm secret.",
      "This is revenge. Jesus taught us not to repay harm with harm (Matthew 5:38-39).",
      "This is a common view, but Catholics believe bullying is serious and must be stopped.",
      null
    ],
    sources: ["Genesis 1:27", "Matthew 5:38-39"]
  },
  {
    id: "p1s3-bystander-01",
    paper: 1, section: 3, specRef: "3.3",
    topic: "Responding to bullying",
    level: 1,
    look: { age: "teen", hair: "ponytail", accessory: "headphones" },
    mood: "worried",
    penitent: "Lily, Year 10 student",
    scene: "A new girl joined our class. She's a refugee and her English isn't great yet. My friends keep mocking her accent and leaving her out on purpose. I don't join in, but I don't stop them either. Is staying quiet OK?",
    options: [
      "Stay out of it so you don't become a target yourself. It's not really your problem.",
      "Be kind and speak up safely: include her and tell a teacher.",
      "Confront your friends angrily in front of everyone. Bullies deserve to be humiliated.",
      "Just pray for her quietly. That's the most that a Christian can really be expected to do."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe we must love our neighbour, as in the parable of the **Good Samaritan** (Luke 10:25-37), who helped a stranger others walked past. Staying silent can let **bullying** continue. Including her, and telling a teacher, are brave and practical ways to help.",
    feedbackWrong: "Catholic teaching says we should not walk by when someone is being hurt, like those who passed by in the parable of the **Good Samaritan** (Luke 10:25-37). Kindness and speaking up, safely and wisely, can stop **bullying**. Prayer matters too, but it should lead to action.",
    keyTerms: ["Bullying", "Good Samaritan", "Neighbour", "Dignity"],
    viewsRepresentedByWrongOptions: [
      "This is the 'bystander' response. Jesus' parable of the Good Samaritan calls us to help, not to walk past.",
      null,
      "This repays harm with harm. Catholics are called to stand up for others without humiliating anyone.",
      "This is a half-truth. Prayer is good, but Christians are also called to take action."
    ],
    sources: ["Luke 10:25-37", "Matthew 25:35"]
  },
  {
    id: "p1s3-bully-sorry-01",
    paper: 1, section: 3, specRef: "3.3",
    topic: "Bullying: making amends",
    level: 2,
    look: { age: "teen", hair: "spiky", accessory: "scarf" },
    mood: "worried",
    penitent: "Jayden, Year 9 student",
    scene: "I've been teasing a boy in my class about his weight. It was just banter, and everyone laughed. But yesterday he cried and didn't come to school. I've come to confession, so I'm forgiven now, aren't I? Do I need to do anything else?",
    options: [
      "If it hurt him, it's bullying, not banter. Say sorry to him, change, and put it right.",
      "You didn't mean any harm, so it isn't really a sin, and there's nothing to worry about.",
      "Confession wipes it clean, so there's no need to say sorry to him in person as well.",
      "He should toughen up a bit. Words can't really hurt anyone, so it's not that serious."
    ],
    correctIndex: 0,
    feedbackCorrect: "Catholics believe God forgives us in **confession**, but true sorrow also means repairing the harm we've done (**reparation**). If teasing hurts someone, it is **bullying**, whatever we call it. Apologising to him, and changing how you act, is part of real repentance.",
    feedbackWrong: "Catholic teaching says the Sacrament of **Reconciliation** brings God's forgiveness, but we should also try to repair the harm we've caused (**reparation**). Words can wound deeply, and teasing that hurts is **bullying**. Saying sorry to him and changing your behaviour shows true repentance.",
    keyTerms: ["Bullying", "Reparation", "Reconciliation", "Repentance"],
    viewsRepresentedByWrongOptions: [
      null,
      "This is a half-truth. Intention matters, but now you know you hurt him, you should put it right.",
      "This misunderstands confession. True sorrow includes trying to repair the harm we've done.",
      "This is wrong. Catholics believe words can hurt deeply and that bullying attacks a person's dignity."
    ],
    sources: ["CCC 1459", "James 3:5-10"]
  },

  /* ---------- 3.4 Sin and crime; Prison Fellowship and Street Pastors ---------- */
  {
    id: "p1s3-sin-crime-01",
    paper: 1, section: 3, specRef: "3.4",
    topic: "Sin and crime",
    level: 2,
    look: { age: "teen", hat: "schoolcap", accessory: "glasses" },
    mood: "neutral",
    penitent: "Zoe, Year 10 student",
    scene: "We're studying crime in RE. My friend says that if something's legal, it can't be a sin, and if it's illegal, it must be. But lying to your parents isn't against the law, and some laws seem unfair. What's the difference between sin and crime?",
    options: [
      "If something is legal, it can't be a sin. The law decides what's right and wrong.",
      "A crime breaks the law of the land; a sin breaks God's law. Many sins aren't crimes.",
      "Every crime is a sin, so breaking any law, however unjust, is always wrong before God.",
      "Sin is an old-fashioned idea. Only crimes really matter in a modern society like ours."
    ],
    correctIndex: 1,
    feedbackCorrect: "Catholics believe a **crime** is an action that breaks the law of the land, while a **sin** is an action that goes against God's will and damages our relationship with God and others. Many sins, like cruel lies, are not crimes. And in rare cases an unjust law should not be obeyed, so breaking it is not a sin.",
    feedbackWrong: "Catholic teaching distinguishes **sin** (going against God's law) from **crime** (breaking the law of the land). Many sins, such as lying or selfishness, are not crimes. Laws should protect the common good, but if a law is clearly unjust, Catholics are not bound to obey it.",
    keyTerms: ["Sin", "Crime", "Law", "Conscience"],
    viewsRepresentedByWrongOptions: [
      "This makes the law the judge of right and wrong. Catholics believe God's law is higher than human law.",
      null,
      "This is a half-truth. Most crimes are wrong, but Catholics believe an unjust law does not bind conscience.",
      "This is a secular view. Catholics believe sin is real, even when the law does not punish it."
    ],
    sources: ["Acts 5:29", "CCC 1849", "CCC 1902-1903"]
  },
  {
    id: "p1s3-prison-fellowship-01",
    paper: 1, section: 3, specRef: "3.4",
    topic: "Prison Fellowship",
    level: 1,
    look: { age: "elder", hat: "none", accessory: "glasses", pattern: "cardigan" },
    mood: "hopeful",
    penitent: "Mr Achterberg, a retired headteacher",
    scene: "I'm thinking of volunteering with Prison Fellowship, the Christian charity that supports prisoners and their families. My friend says prisoners chose to commit crimes, so they don't deserve our help. Is he right?",
    options: [
      "He's right: prisoners chose to commit crimes, so they have given up any right to kindness.",
      "Only help prisoners who have already become Christians. The rest aren't ready for help.",
      "Jesus said visiting prisoners is like visiting him. Helping them change shows God's love.",
      "Visiting prisoners is a job for trained professionals, not for churches or volunteers."
    ],
    correctIndex: 2,
    feedbackCorrect: "Jesus taught that whatever we do for people in need, including prisoners, we do for him (Matthew 25:36-40). **Prison Fellowship** is a Christian charity in which volunteers visit and support prisoners and their families, helping them to change and rebuild their lives. It is a practical way of showing that no one is beyond God's love.",
    feedbackWrong: "Catholic teaching says prisoners keep their God-given dignity, and Jesus named visiting prisoners as a way of serving him (Matthew 25:36-40). **Prison Fellowship** is a Christian charity whose volunteers support prisoners and their families. This helps **reformation**, so that people can turn their lives around.",
    keyTerms: ["Prison Fellowship", "Reformation", "Dignity", "Works of mercy"],
    viewsRepresentedByWrongOptions: [
      "This is a retributive view. Catholics believe prisoners keep their dignity and deserve compassion.",
      "This is wrong. Christian charity is for everyone, whatever their faith.",
      null,
      "This is a secular view. Professionals matter, but Jesus called all his followers to visit prisoners."
    ],
    sources: ["Matthew 25:36-40", "CCC 2447"]
  },
  {
    id: "p1s3-street-pastors-01",
    paper: 1, section: 3, specRef: "3.4",
    topic: "Street Pastors",
    level: 2,
    look: { age: "adult", hair: "afro", accessory: "none", pattern: "hivis" },
    mood: "hopeful",
    penitent: "Chidi, a nurse",
    scene: "Some friends have invited me to become a Street Pastor. We'd go out late at night in the town centre to look after people who are drunk, lost or in danger. My dad says it's a Protestant thing, so Catholics shouldn't join. Should I?",
    options: [
      "Catholics should only ever work with Catholic groups, so it's best to decline.",
      "Street Pastors should preach at drunk people to convert them, so it isn't for you.",
      "Crime and safety on the streets are only the police's job, not something for churches to get involved in.",
      "Christians from many churches, Catholics included, join Street Pastors to care for people."
    ],
    correctIndex: 3,
    feedbackCorrect: "**Street Pastors** is an interdenominational Christian project: volunteers from many churches go out at night to listen, help vulnerable people and calm trouble. Catholics can take part, working with other Christians in **practical love**. It also helps to reduce **crime** and harm.",
    feedbackWrong: "**Street Pastors** brings together Christians from different churches, including Catholics, to care for people in town centres at night. They mostly listen, help and keep people safe, rather than preach. This kind of shared Christian service is encouraged by the Catholic Church.",
    keyTerms: ["Street Pastors", "Crime", "Interdenominational", "Practical love"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. The Catholic Church encourages Christians from different churches to work together.",
      "This misunderstands Street Pastors. Volunteers mainly listen and help; they don't preach at people.",
      "This is a secular view. Churches can help reduce crime and care for people, alongside the police.",
      null
    ],
    sources: ["CCC 821", "Matthew 25:35-36"]
  },

  /* ---------- 3.5 Aims of punishment; Galatians 6:1-5 ---------- */
  {
    id: "p1s3-restorative-01",
    paper: 1, section: 3, specRef: "3.5",
    topic: "Restorative justice and reformation",
    level: 2,
    look: { age: "elder", hat: "flatcap", accessory: "cane" },
    mood: "worried",
    penitent: "Errol, a retired postman",
    scene: "A young man burgled my flat. He's been caught, and now the police have asked whether I'd meet him for 'restorative justice', to talk about the harm he caused. My neighbour says criminals deserve punishment, not cosy chats. I don't know what to do.",
    options: [
      "Refuse to meet him. Criminals deserve punishment, not friendly conversations.",
      "You must meet him, because refusing would mean you haven't really forgiven him.",
      "Meeting him might help him change and help you heal. The choice is yours.",
      "If you meet him, it means he won't be punished at all for what he did to you."
    ],
    correctIndex: 2,
    feedbackCorrect: "**Restorative justice** brings offenders face to face with the harm they have caused, which can help their **reformation** and help victims heal. Catholics believe punishment should help the wrongdoer change, as Galatians 6:1-5 teaches. It is still your free choice, and the offender is still held responsible.",
    feedbackWrong: "Catholic teaching values **reformation**: helping offenders change, as Galatians 6:1-5 encourages. **Restorative justice** can help a victim heal and an offender understand the harm caused, and it usually happens alongside other punishment. Taking part is a free choice, never something to feel guilty about refusing.",
    keyTerms: ["Aims of punishment", "Reformation", "Restorative justice", "Retribution"],
    viewsRepresentedByWrongOptions: [
      "This is a purely retributive view. Catholics believe reformation is a key aim of punishment.",
      "This is too much pressure. Forgiveness doesn't require meeting the offender; it is your free choice.",
      null,
      "This is a misunderstanding. Restorative justice usually happens alongside other consequences."
    ],
    sources: ["Galatians 6:1-5", "CCC 2266"]
  },
  {
    id: "p1s3-magistrate-01",
    paper: 1, section: 3, specRef: "3.5",
    topic: "The aims of punishment",
    level: 3,
    look: { age: "adult", hair: "short", accessory: "glasses", pattern: "tie" },
    mood: "neutral",
    penitent: "Mr Delgado, a magistrate",
    scene: "As a magistrate I sentence people every week. Some colleagues say harsh sentences are best because they scare others off. Others say offenders should never really be punished, only helped. As a Catholic, what should I be aiming for?",
    options: [
      "Only reformation matters. Offenders should be helped, never actually punished.",
      "Deterrence matters most: the harsher the sentence, the less crime there will be.",
      "Make offenders suffer as much as their victims did. That is what real justice actually means.",
      "Seek justice that fits the crime, protects people and helps reform."
    ],
    correctIndex: 3,
    feedbackCorrect: "Catholic teaching says punishment should fit the crime and repair the harm it caused (**retribution** as justice, never revenge), protect society (**protection**), and help the offender **reform** (CCC 2266). Deterrence can be a part of this, but it is never the only aim. Galatians 6:1-5 reminds Christians to restore wrongdoers gently.",
    feedbackWrong: "Catholic teaching balances the **aims of punishment**: a just penalty that fits the crime, **protection** of the public and the **reformation** of the offender (CCC 2266). No single aim should crowd out the others, and punishment should never be revenge. Galatians 6:1-5 asks Christians to restore wrongdoers gently.",
    keyTerms: ["Aims of punishment", "Retribution", "Deterrence", "Protection", "Reformation"],
    viewsRepresentedByWrongOptions: [
      "This is a half-truth. Reformation matters, but Catholics believe a just penalty and protection matter too.",
      "This focuses only on **deterrence**. Catholics see it as one aim among several.",
      "This is revenge, not justice. Catholics believe punishment should never aim to make people suffer.",
      null
    ],
    sources: ["CCC 2266", "Galatians 6:1-5"]
  },

  /* ---------- 3.6 Capital punishment ---------- */
  {
    id: "p1s3-capital-humanist-01",
    paper: 1, section: 3, specRef: "3.6",
    topic: "Capital punishment: religious and non-religious views",
    level: 3,
    look: { age: "teen", hair: "bob", accessory: "satchel" },
    mood: "neutral",
    penitent: "Ruby, Year 11 student",
    scene: "My best friend is a Humanist. She's against the death penalty too, so she said Humanists and Catholics believe the same thing about it. Is that right? I want to explain the difference in my exam answer.",
    options: [
      "No. Humanists support the death penalty; only religious people are against it.",
      "Yes. All Christians and all Humanists agree completely about it, and for exactly the same reasons.",
      "Catholics oppose it only because there's a risk an innocent person might be executed by mistake.",
      "Many Humanists oppose it for human rights; Catholics oppose it because all life is sacred."
    ],
    correctIndex: 3,
    feedbackCorrect: "Many **Humanists** oppose **capital punishment** for reasons such as human rights and the risk of executing innocent people. Catholics agree, but their main reason is that every human life is sacred and has God-given dignity, so the death penalty is **inadmissible** (CCC 2267). So the conclusion is shared, but the reasons differ.",
    feedbackWrong: "Catholics and many **Humanists** both oppose **capital punishment**, but for different reasons. Humanists usually point to human rights and the risk of mistakes. Catholics stress the **sanctity of life**: every person keeps their God-given dignity and the chance to reform.",
    keyTerms: ["Capital punishment", "Humanism", "Sanctity of life", "Human rights"],
    viewsRepresentedByWrongOptions: [
      "This is wrong. Many Humanists oppose capital punishment, as do many religious people.",
      "This is wrong. Some Christians support the death penalty, and reasons differ between groups.",
      "This is a half-truth. Mistakes are a concern, but Catholics' main reason is the sanctity of every life.",
      null
    ],
    sources: ["CCC 2267"]
  },
  {
    id: "p1s3-capital-victim-01",
    paper: 1, section: 3, specRef: "3.6",
    topic: "Capital punishment and justice for victims",
    level: 2,
    look: { age: "adult", build: "broad", hat: "flatcap", accessory: "none" },
    mood: "worried",
    penitent: "Mr Okonjo, a bereaved father",
    scene: "My daughter was murdered while working abroad, in a country that still has the death penalty. The man has been found guilty. Part of me wants him executed. People say the Church is against it, but they don't know what this feels like. What should I do?",
    options: [
      "You're right: justice for your daughter means that he must pay with his own life.",
      "Your anger is natural, but the Church teaches execution is wrong. Prison can still bring justice.",
      "Christians must never feel angry. Forgive him immediately and forget about justice.",
      "Set the Church's teaching aside for now; it surely doesn't apply in cases as terrible as this one."
    ],
    correctIndex: 1,
    feedbackCorrect: "Your grief and anger are natural, and God is close to you in them. The Church teaches that **capital punishment** is **inadmissible** in every case, because even a murderer keeps his human dignity (CCC 2267). **Justice** can still be done through a long prison sentence, which also protects others.",
    feedbackWrong: "Catholic teaching says **capital punishment** is **inadmissible** (CCC 2267), even for the most terrible crimes, because every life is sacred. That does not mean ignoring **justice**: a long prison sentence punishes the crime and protects society. Feeling angry is human; forgiveness, if it comes, is a journey.",
    keyTerms: ["Capital punishment", "Justice", "Sanctity of life", "Forgiveness"],
    viewsRepresentedByWrongOptions: [
      "This is the retributive argument for the death penalty. Catholic teaching rejects it today.",
      null,
      "This is too harsh. Anger at injustice is natural, and forgiveness does not cancel justice.",
      "This is wrong. Catholic teaching on the death penalty applies in every case."
    ],
    sources: ["CCC 2267", "Psalm 34:18"]
  }
);
