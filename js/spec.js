/*
 * spec.js - The Edexcel International GCSE Religious Studies (4RS1)
 * Christianity content map used by the game and by the validator.
 *
 * Keys are "P<paper>-<specRef>", e.g. "P1-2.3".
 * Paper 1 = Christianity (Beliefs and values), Paper 2 = Option B Christianity.
 * The game uses this to show section tags, spec references and the
 * revision report. tools/validate.js uses it to print topic coverage.
 */
(function (global) {
  'use strict';

  var SPEC = {
    sections: [
      { paper: 1, section: 1, key: 'P1-S1', name: 'Universe, creation and the place of human beings', short: 'Creation and humanity' },
      { paper: 1, section: 2, key: 'P1-S2', name: 'Life and death', short: 'Life and death' },
      { paper: 1, section: 3, key: 'P1-S3', name: 'Peace and conflict', short: 'Peace and conflict' },
      { paper: 1, section: 4, key: 'P1-S4', name: 'Rights, equality and social justice', short: 'Rights and justice' },
      { paper: 2, section: 1, key: 'P2-S1', name: 'Origins and impact on the community', short: 'Origins and community' },
      { paper: 2, section: 2, key: 'P2-S2', name: 'Celebration and pilgrimage', short: 'Celebration and pilgrimage' },
      { paper: 2, section: 3, key: 'P2-S3', name: 'Worship and practice', short: 'Worship and practice' }
    ],

    topics: {
      // Paper 1, Section 1
      'P1-1.1': 'Creation, stewardship and Imago Dei',
      'P1-1.2': 'Body, spirit and soul',
      'P1-1.3': 'Selfishness, greed, ignorance and sin',
      'P1-1.4': 'Free will and predestination',
      'P1-1.5': 'God as Trinity; Father, Creator and Judge; omnipotent, omniscient, benevolent',
      'P1-1.6': 'Belief, uncertainty and unbelief; Christian nurture',
      'P1-1.7': 'Evil, suffering and theodicy',
      // Paper 1, Section 2
      'P1-2.1': 'Heaven, hell, judgment, resurrection and the Last Judgment',
      'P1-2.2': 'Eternal life, Kingdom of God, salvation, grace, faith and works',
      'P1-2.3': 'Sanctity of life, abortion and euthanasia',
      'P1-2.4': 'Human relationships and sexual relationships',
      'P1-2.5': 'Marriage, its purposes, vows, monogamy, cohabitation and same-sex marriage',
      'P1-2.6': 'Annulment, divorce and remarriage',
      'P1-2.7': 'Family life and the role of local churches',
      'P1-2.8': 'Childlessness, genetic engineering, contraception and celibacy',
      // Paper 1, Section 3
      'P1-3.1': 'Causes of conflict, Just War and holy war',
      'P1-3.2': 'Peace, reconciliation, forgiveness and a Christian peace group',
      'P1-3.3': 'Bullying',
      'P1-3.4': 'Sin and crime; Prison Fellowship and Street Pastors',
      'P1-3.5': 'Aims of punishment; Galatians 6:1-5',
      'P1-3.6': 'Capital punishment',
      // Paper 1, Section 4
      'P1-4.1': 'Human rights',
      'P1-4.2': 'Equal rights and the role of women in religious communities',
      'P1-4.3': 'Racial harmony',
      'P1-4.4': 'Multi-faith society; interfaith and interdenominational relationships',
      'P1-4.5': 'Rich and poor; practical generosity',
      // Paper 2, Section 1
      'P2-1.1': 'Jesus as the incarnate Son of God; his life and ministry',
      'P2-1.2': 'The Bible: structure and authority; Bible and conscience',
      'P2-1.3': 'Priests, bishops, the pope, leaders and laity',
      'P2-1.4': 'One important Christian other than Jesus',
      // Paper 2, Section 2
      'P2-2.1': 'Christmas, Advent, Epiphany, Easter, Lent and Holy Week',
      'P2-2.2': 'Pilgrimage to Bethlehem, Jerusalem and one other place',
      // Paper 2, Section 3
      'P2-3.1': 'Church architecture: font, lectern, altar and cross',
      'P2-3.2': 'Liturgical and non-liturgical worship; prayer; the Eucharist',
      'P2-3.3': 'Rites of passage: baptism, confirmation, marriage and funerals'
    }
  };

  /** Returns the section object for a paper/section pair, or null. */
  SPEC.findSection = function (paper, section) {
    for (var i = 0; i < SPEC.sections.length; i++) {
      var s = SPEC.sections[i];
      if (s.paper === paper && s.section === section) { return s; }
    }
    return null;
  };

  /** Returns the topic title for a dilemma, e.g. "Sanctity of life, abortion and euthanasia". */
  SPEC.topicTitle = function (paper, specRef) {
    return SPEC.topics['P' + paper + '-' + specRef] || '';
  };

  global.SPEC = SPEC;
})(typeof window !== 'undefined' ? window : this);
