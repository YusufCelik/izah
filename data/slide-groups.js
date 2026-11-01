// Navigation chapters are presentation data. Keep every slide in exactly one group, in deck order.
export const slideGroups = [
  {
    id: 'method',
    label: { en: 'The task and its sources', nl: 'De taak en de bronnen' },
    tone: 'sage',
    slides: ['timeline', 'argument', 'sources'],
  },
  {
    id: 'challenges',
    label: { en: 'The challenges facing reconstruction', nl: 'Uitdagingen voor reconstructie' },
    tone: 'signal',
    slides: ['versus', 'prayer', 'focus', 'hazm'],
  },
  {
    id: 'arabia',
    label: { en: 'Jewish Arabia', nl: 'Joods Arabië' },
    tone: 'plum',
    slides: ['geo', 'inscription', 'origins'],
  },
  {
    id: 'medina',
    label: { en: 'Medina and its alliances', nl: 'Medina en haar bondgenootschappen' },
    tone: 'sage',
    slides: ['prelude', 'sumayr', 'brothers', 'blood', 'pact'],
  },
  {
    id: 'conflicts',
    label: { en: 'Conflict and its outcomes', nl: 'Conflict en de afloop' },
    tone: 'signal',
    slides: ['qaynuqa', 'nadir', 'qurayza', 'khaybar'],
  },
  {
    id: 'library',
    label: { en: 'Further reading', nl: 'Verder lezen' },
    tone: 'plum',
    slides: ['reading'],
  },
];
