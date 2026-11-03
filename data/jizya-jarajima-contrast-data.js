// A Qur'anic command and a later conquest account speak in different genres and settings.
export const jizyaJarajimaContrast = {
  id: 'jizya-and-the-jarajima',
  layout: 'reading',
  eyebrow: { en: 'Sources in tension · jizya and frontier service', nl: 'Bronnen op gespannen voet · jizya en grensdienst' },
  title: { en: 'When was jizya waived?', nl: 'Wanneer verviel de jizya?' },
  intro: {
    en: 'Qurʾān 9:29 names payment of jizya as a condition. A later historian reports a settlement in which a Christian frontier community served the Muslim army and did not pay it.',
    nl: 'Qurʾān 9:29 noemt betaling van jizya als voorwaarde. Een latere historicus beschrijft een regeling waarin een christelijke grensgemeenschap het islamitische leger hielp en geen jizya betaalde.',
  },
  sides: [
    {
      id: 'quran-9-29',
      label: { en: 'Qurʾān · 9:29', nl: 'Koran · 9:29' },
      heading: { en: '“Until they pay the jizya”', nl: '‘Totdat zij de jizya betalen’' },
      original: 'قَاتِلُوا الَّذِينَ لَا يُؤْمِنُونَ بِاللَّهِ وَلَا بِالْيَوْمِ الْآخِرِ وَلَا يُحَرِّمُونَ مَا حَرَّمَ اللَّهُ وَرَسُولُهُ وَلَا يَدِينُونَ دِينَ الْحَقِّ مِنَ الَّذِينَ أُوتُوا الْكِتَابَ حَتَّىٰ يُعْطُوا الْجِزْيَةَ عَنْ يَدٍ وَهُمْ صَاغِرُونَ',
      originalLang: 'ar',
      originalDirection: 'rtl',
      translationLabel: { en: 'Full verse · new translation', nl: 'Volledig vers · nieuwe vertaling' },
      translation: {
        en: '“Fight those among the People of the Book who do not believe in God or the Last Day, do not forbid what God and His messenger have forbidden, and do not follow the religion of truth, until they pay the jizya by hand while they are subdued.”',
        nl: '‘Strijd tegen degenen onder de Mensen van het Boek die niet in God en de Laatste Dag geloven, niet verbieden wat God en Zijn boodschapper verboden hebben en de ware godsdienst niet volgen, totdat zij de jizya uit eigen hand betalen terwijl zij onderworpen zijn.’',
      },
      context: {
        en: 'The verse addresses People of the Book and makes jizya part of its stated endpoint. “By hand” and “subdued” translate terms whose interpretation is debated.',
        nl: 'Het vers spreekt over Mensen van het Boek en noemt jizya als onderdeel van de genoemde uitkomst. Over de uitleg van de woorden voor ‘uit eigen hand’ en ‘onderworpen’ bestaat discussie.',
      },
      sources: [{ label: 'Qurʾān 9:29 · Arabic and translations', url: 'https://quran.com/at-tawbah/29' }],
    },
    {
      id: 'baladhuri-jarajima',
      label: { en: 'al-Balādhurī (d. 279/892) · Futūḥ al-buldān · Amr al-Jarājima', nl: 'al-Balādhurī (ov. 279/892) · Futūḥ al-buldān · Amr al-Jarājima' },
      heading: { en: '“No jizya is to be taken”', nl: '‘Van hen wordt geen jizya geheven’' },
      original: 'فصالحوه على أن يكونوا أعوانا للمسلمين وعيونا ومسالح في جبل اللكام، وأن لا يؤخذوا بالجزية',
      originalLang: 'ar',
      originalDirection: 'rtl',
      translationLabel: { en: 'The reported terms · new translation', nl: 'De overgeleverde voorwaarden · nieuwe vertaling' },
      translation: {
        en: '“They made peace with him on the condition that they would be auxiliaries to the Muslims, scouts and frontier guards in Mount al-Lukkām, and that jizya would not be taken from them.”',
        nl: '‘Zij sloten vrede met hem op voorwaarde dat zij de moslims zouden helpen als hulptroepen, verkenners en grensbewakers in het gebergte al-Lukkām, en dat van hen geen jizya zou worden geheven.’',
      },
      context: {
        en: 'Al-Balādhurī says the Jarājima sought a settlement with Ḥabīb ibn Maslama rather than fighting him. He wrote centuries after the events he describes; this is his report of the terms, not a surviving treaty document.',
        nl: 'Volgens al-Balādhurī zochten de Jarājima een regeling met Ḥabīb ibn Maslama in plaats van tegen hem te vechten. Hij schreef eeuwen na de beschreven gebeurtenissen; dit is zijn verslag van de voorwaarden, geen bewaard gebleven verdrag.',
      },
      sources: [{ label: 'Futūḥ al-buldān · Amr al-Jarājima · report 424', url: 'https://ablibrary.net/book_content/b/2660/229' }],
    },
  ],
  reading: {
    label: { en: 'The historical question', nl: 'De historische vraag' },
    title: { en: 'A negotiated exception?', nl: 'Een onderhandelde uitzondering?' },
    text: {
      en: 'The Jarājima report makes frontier service part of a settlement that waives jizya. What does that arrangement tell us about how a tax named in Qurʾān 9:29 could be applied in a particular place?',
      nl: 'In het bericht over de Jarājima hoort grensdienst bij een regeling zonder jizya. Wat zegt die afspraak over de toepassing van een belasting die Qurʾān 9:29 noemt, op een bepaalde plaats?',
    },
    caveat: {
      en: 'The verse is a Qurʾanic text; the settlement is a later historian’s account. One reported exception cannot establish a general rule for every Christian community or every period.',
      nl: 'Het vers is een korantekst; de regeling komt uit het verslag van een latere historicus. Eén overgeleverde uitzondering toont geen algemene regel voor elke christelijke gemeenschap of elke periode aan.',
    },
    source: { label: 'al-Balādhurī · report 424', url: 'https://ablibrary.net/book_content/b/2660/229' },
  },
};
