// A comparison is content only. The reusable versus component controls reveal order.
export const arabiaContrast = {
  id: 'arabia-expulsion-and-wadi-al-qura',
  eyebrow: { en: 'Sources in tension', nl: 'Bronnen op gespannen voet' },
  title: { en: 'Who remained in Arabia?', nl: 'Wie bleef er in Arabië?' },
  intro: {
    en: 'A broad expulsion report meets a later record naming people of Wādī al-Qurā.',
    nl: 'Een breed verdrijvingsbericht staat naast een latere bron die mensen uit Wādī al-Qurā noemt.',
  },
  sides: [
    {
      id: 'muslim-report',
      label: { en: 'Muslim report', nl: 'Islamitische overlevering' },
      heading: { en: 'The peninsula', nl: 'Het schiereiland' },
      quote: {
        en: '“I will expel the Jews and Christians from the Arabian Peninsula and will not leave any but Muslim.”',
        nl: '“Ik zal de Joden en christenen van het Arabisch Schiereiland verdrijven en er alleen moslims laten.”',
      },
      attribution: { en: 'Attributed to Muhammad by ʿUmar', nl: 'Door ʿUmar aan Muhammad toegeschreven' },
      sources: [
        { label: 'Ṣaḥīḥ Muslim 1767a', url: 'https://sunnah.com/muslim:1767a' },
      ],
      context: {
        en: 'A related report says ʿUmar expelled Jews and Christians from the Ḥijāz, a narrower geographic term.',
        nl: 'Een verwante overlevering zegt dat ʿUmar Joden en christenen uit de Ḥijāz verdreef, een beperktere geografische term.',
      },
      contextSource: { label: 'Ṣaḥīḥ al-Bukhārī 3152', url: 'https://sunnah.com/bukhari:3152' },
    },
    {
      id: 'geonic-index',
      label: { en: 'Geonic responsa index', nl: 'Index van geonische responsa' },
      heading: { en: 'Wādī al-Qurā', nl: 'Wādī al-Qurā' },
      original: 'אלדרג׳ אלסאדס\n\nשאלות בני ואדי אלקרי לרבנו שרירא\nגאון והאי אב ז״ל',
      originalLang: 'he',
      originalDirection: 'rtl',
      translation: {
        en: 'The Sixth Bundle\n\nQuestions from the people of Wādī al-Qurā to our Rabbi Sherira Gaon and to Hai […] of blessed memory',
        nl: 'De zesde bundel\n\nVragen van de mensen van Wādī al-Qurā aan onze rabbijn Sherira Gaon en aan Hai […] zaliger gedachtenis',
      },
      sources: [
        { label: 'Princeton Geniza Project · T-S Misc. 35.90+', url: 'https://geniza.princeton.edu/en/documents/23457/' },
        { label: 'Ginzberg, Geonica II · 1909', url: 'https://commons.wikimedia.org/wiki/File:Geonica_(IA_geonicaginz02ginziala).pdf' },
        { label: 'Mazuz 2014 · appendix 2, p. 109', url: 'https://toc.library.ethz.ch/objects/pdf03/z01_978-90-04-25062-8_01.pdf' },
      ],
    },
  ],
  reading: {
    label: { en: 'The historical question', nl: 'De historische vraag' },
    title: { en: 'Scope, time, and survival', nl: 'Reikwijdte, tijd en voortbestaan' },
    text: {
      en: 'The hadith is in the future tense; the related Ḥijāz report describes an action under ʿUmar. The responsa index names questioners from Wādī al-Qurā. How broad was the expulsion, and for how long?',
      nl: 'De hadith staat in de toekomende tijd; het verwante bericht over de Ḥijāz beschrijft een handeling onder ʿUmar. De responsa-index noemt vraagstellers uit Wādī al-Qurā. Hoe ruim en hoe duurzaam was de verdrijving?',
    },
    caveat: {
      en: 'The index alone cannot establish uninterrupted residence or the exact date of the questions.',
      nl: 'De index alleen bewijst geen ononderbroken bewoning of een precieze datering van de vragen.',
    },
    source: { label: 'Harry Munt, “No two religions” (2015)', url: 'https://www.cambridge.org/core/journals/bulletin-of-the-school-of-oriental-and-african-studies/article/abs/no-two-religions-nonmuslims-in-the-early-islamic-hijaz/D77237D1182616BAEBC65501EA36F162' },
  },
};
