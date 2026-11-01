// Each entry is a source category, with an illustrative artifact and its image record.
// Keep claims and asset credits here; source-path owns only layout and interaction.
const commons = filename => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
const image = (filename, page) => `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(filename)}?width=550${page ? `&page=${page}` : ''}`;

export const sourceTypes = {
  id: 'sources-for-reconstruction',
  eyebrow: { en: 'The archive is plural', nl: 'Het archief is veelzijdig' },
  title: { en: 'What are our sources?', nl: 'Welke bronnen hebben we?' },
  intro: {
    en: 'There is no single archive for seventh-century Arabia. We compare objects, the Qurʾān, later Muslim reports, and records kept by Jewish and Christian communities.',
    nl: 'Voor het Arabië van de zevende eeuw bestaat geen enkel volledig archief. We vergelijken voorwerpen, de Koran, latere islamitische berichten en bronnen uit Joodse en christelijke gemeenschappen.',
  },
  note: {
    en: 'These images are examples of source types, not photographs of the events. A manuscript can be much later than the account it preserves.',
    nl: 'De beelden zijn voorbeelden van brontypen, geen foto’s van de gebeurtenissen. Een handschrift kan veel jonger zijn dan het verhaal dat erin staat.',
  },
  items: [
    {
      id: 'inscriptions',
      title: { en: 'Inscriptions', nl: 'Inscripties' },
      example: { en: 'Zuhayr inscription · c. 645', nl: 'Inscriptie van Zuhayr · ca. 645' },
      detail: {
        en: 'Text cut into stone can preserve names, dates, and public formulas close to the period itself.',
        nl: 'In steen gehakte tekst kan namen, dateringen en publieke formuleringen uit de periode zelf bewaren.',
      },
      image: image('Zuhayr inscription.png'),
      record: commons('Zuhayr inscription.png'),
      credit: 'Wikimedia Commons · public domain',
    },
    {
      id: 'quran',
      title: { en: 'Qur’an', nl: 'Koran' },
      example: { en: 'Birmingham Qur’an folios · 7th c.', nl: 'Koranfolia van Birmingham · 7e eeuw' },
      detail: {
        en: 'The Qur’an is an early textual witness. Manuscripts help us study its written transmission.',
        nl: 'De Koran is een vroege tekstuele getuige. Handschriften helpen ons zijn schriftelijke overlevering te bestuderen.',
      },
      image: image('Birmingham Quran manuscript.jpg'),
      record: commons('Birmingham Quran manuscript.jpg'),
      credit: 'Wikimedia Commons · public domain',
    },
    {
      id: 'hadith',
      title: { en: 'Hadith', nl: 'Hadith' },
      example: { en: 'Copy of al-Bukhārī · 13th c.', nl: 'Afschrift van al-Bukhārī · 13e eeuw' },
      detail: {
        en: 'A hadith is a report of what the Prophet said or did. It names a chain of people said to have passed the report on; accounts can differ.',
        nl: 'Een hadith is een bericht over wat de profeet zei of deed. Het noemt een keten van mensen die het zouden hebben doorgegeven; berichten kunnen verschillen.',
      },
      image: image('Hadith al-Bukhari manuscript.jpg'),
      record: commons('Hadith al-Bukhari manuscript.jpg'),
      credit: 'Danieliness / Wikimedia Commons · CC BY-SA 4.0',
    },
    {
      id: 'sira',
      title: { en: 'Prophet biography', nl: 'Biografie van de profeet' },
      example: { en: 'Ibn Hishām sīra tradition · later manuscript', nl: 'Sīra-traditie van Ibn Hishām · later handschrift' },
      detail: {
        en: 'A sīra is a narrative of Muḥammad’s life and the first Muslim community. The written versions we have were assembled later.',
        nl: 'Een sīra is een verhaal over Muḥammads leven en de eerste moslimgemeenschap. De bewaarde schriftelijke versies zijn later samengesteld.',
      },
      image: image('Nubdha Mukhtasara min al-Shi al-Waqi` fi Sirat Ibn Hisham Or. 14.087.pdf', 2),
      record: commons('Nubdha Mukhtasara min al-Shi al-Waqi` fi Sirat Ibn Hisham Or. 14.087.pdf'),
      credit: 'Leiden University Libraries / Wikimedia Commons · CC BY 4.0',
    },
    {
      id: 'tabaqat',
      title: { en: 'Biographies · ṭabaqāt', nl: 'Biografieën · ṭabaqāt' },
      example: { en: 'Ibn Saʿd’s Ṭabaqāt · manuscript', nl: 'Ṭabaqāt van Ibn Saʿd · handschrift' },
      detail: {
        en: 'Ṭabaqāt collect biographies by generation. They help us ask who knew whom and how later writers remembered them.',
        nl: 'Ṭabaqāt verzamelen levensbeschrijvingen per generatie. Ze helpen ons vragen wie wie kende en hoe latere schrijvers hen herinnerden.',
      },
      image: image('Tabaqat001.jpg'),
      record: commons('Tabaqat001.jpg'),
      credit: 'Bakkouz / Wikimedia Commons · public domain',
    },
    {
      id: 'jurisprudence',
      title: { en: 'Jurisprudence', nl: 'Rechtsgeleerdheid' },
      example: { en: 'Mālik’s Muwaṭṭaʾ · 1326 copy', nl: 'Muwaṭṭaʾ van Mālik · kopie uit 1326' },
      detail: {
        en: 'Legal writings preserve arguments about practice, precedent, and what later communities considered authoritative.',
        nl: 'Juridische teksten bewaren discussies over gebruiken, precedenten en wat latere gemeenschappen als gezaghebbend zagen.',
      },
      image: image('Muwatta (Malik ibn Anas) 1326 Salé Morocco Marinid manuscript.png'),
      record: commons('Muwatta (Malik ibn Anas) 1326 Salé Morocco Marinid manuscript.png'),
      credit: 'Bibliothèque royale Hassaniya / Wikimedia Commons · public domain',
    },
    {
      id: 'responsa',
      title: { en: 'Jewish responsa', nl: 'Joodse responsa' },
      example: { en: 'Maimonides’ responsa · 1765 edition', nl: 'Responsa van Maimonides · editie uit 1765' },
      detail: {
        en: 'Responsa are written answers by rabbis to questions from communities. They can reveal the places, problems, and people behind a question.',
        nl: 'Responsa zijn schriftelijke antwoorden van rabbijnen op vragen uit gemeenschappen. Ze kunnen plaatsen, problemen en mensen achter een vraag zichtbaar maken.',
      },
      image: image("Pe'er ha-dor.jpg"),
      record: commons("Pe'er ha-dor.jpg"),
      credit: 'Wikimedia Commons · public domain',
    },
    {
      id: 'geniza',
      title: { en: 'Cairo Geniza', nl: 'Geniza van Caïro' },
      example: { en: 'Letter of Abraham Maimonides · 13th c.', nl: 'Brief van Abraham Maimonides · 13e eeuw' },
      detail: {
        en: 'The Cairo Geniza is a collection of discarded manuscripts preserved in a synagogue. Its letters and documents bring us close to later social life.',
        nl: 'De Geniza van Caïro is een verzameling afgedankte handschriften die in een synagoge bewaard bleven. De brieven en documenten tonen later dagelijks leven van dichtbij.',
      },
      image: image('Cairo Genizah Fragment.jpg'),
      record: commons('Cairo Genizah Fragment.jpg'),
      credit: '1906 Jewish Encyclopedia / Wikimedia Commons · public domain',
    },
    {
      id: 'christian',
      title: { en: 'Christian historians', nl: 'Christelijke kroniekschrijvers' },
      example: { en: 'Theophanes’ Chronographia · later copy', nl: 'Chronographia van Theophanes · latere kopie' },
      detail: {
        en: 'Christian chronicles offer accounts written from other communities and viewpoints, to compare with Islamic narratives.',
        nl: 'Christelijke kronieken bieden verslagen uit andere gemeenschappen en perspectieven, te vergelijken met islamitische verhalen.',
      },
      image: image('Supplément grec 327 - btv1b110047233 (1088 of 1105).jpg'),
      record: commons('Supplément grec 327 - btv1b110047233 (1088 of 1105).jpg'),
      credit: 'Bibliothèque nationale de France / Wikimedia Commons · public domain',
    },
  ],
};
