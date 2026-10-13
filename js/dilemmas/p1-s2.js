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
