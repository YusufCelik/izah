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
      id: 'jewish-literature',
      title: { en: 'Jewish literature', nl: 'Joodse literatuur' },
      example: { en: 'Nistarot · 1855 printed edition', nl: 'Nistarot · gedrukte editie uit 1855' },
      detail: {
        en: 'Jewish writings include responsa, letters, and apocalyptic visions. In this later vision, an Ishmaelite ruler is imagined as a friend of Israel.',
        nl: 'Joodse teksten omvatten responsa, brieven en apocalyptische visioenen. In dit latere visioen wordt een Ismaëlitische heerser voorgesteld als een vriend van Israël.',
      },
      image: 'assets/sources/nistarot-jellinek-1855-p79.jpg',
      record: commons('Adolph Jellinek. Bet Ha-Midrasch. Vol.III.pdf'),
      credit: 'Jellinek, Bet ha-Midrash III (1855), p. 79 / Wikimedia Commons · public domain',
      reading: {
        label: { en: 'A Jewish apocalypse · 8th c.', nl: 'Een Joodse apocalyps · 8e eeuw' },
        title: { en: 'The “second king” and Jerusalem', nl: 'De ‘tweede koning’ en Jeruzalem' },
        context: {
          en: 'The Nistarot de-Rabbi Shimon bar Yochai (Secrets of Rabbi Shimʿon) is attributed to him, but took written form centuries after his lifetime. Scholars commonly read the “second king” as ʿUmar. The passage expresses a hope about Jerusalem; it is not a record of construction work.',
          nl: 'De Nistarot de-Rabbi Shimon bar Yochai (Geheimen van rabbi Shimʿon) wordt aan hem toegeschreven, maar kreeg pas eeuwen na zijn leven een schriftelijke vorm. Onderzoekers herkennen in de ‘tweede koning’ meestal ʿUmar. De passage verwoordt een verwachting over Jeruzalem; zij documenteert geen bouwwerkzaamheden.',
        },
        note: {
          en: 'This text shows how its writer imagined an Ishmaelite ruler, not what happened on the Temple Mount. The quotation follows Reeves’s translation with Yishmael/Yisrael spellings.',
          nl: 'Deze tekst laat zien hoe de schrijver zich een Ismaëlitische heerser voorstelde, niet wat er op de Tempelberg gebeurde. De Engelse versie volgt Reeves met de spellingen Yishmael/Yisrael.',
        },
        paragraphs: {
          en: [
            'The second king who will arise from Yishmael will be a friend of Yisrael. He will repair their breaches and (fix) the breaches of the Temple and shape Mt. Moriah and make the whole of it a level plain.',
          ],
          nl: [
            'De tweede koning die uit Ismaël zal opstaan, zal een vriend van Israël zijn. Hij zal hun bressen herstellen en (ook) de bressen van de Tempel herstellen, de berg Moria vormgeven en die helemaal tot een vlak terrein maken.',
          ],
        },
        source: {
          label: 'Nistarot (נסתרות), trans. John C. Reeves, p. 36',
          url: 'https://almuslih.org/wp-content/uploads/2024/11/Reeves-J-%E2%80%93-The-Secrets-.pdf#page=6',
        },
      },
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
      example: { en: 'Sebeos · later printed edition', nl: 'Sebeos · latere gedrukte editie' },
      detail: {
        en: 'A Christian chronicler describes Muḥammad, Jewish refugees, and Arab-Jewish cooperation. Read his account as a perspective to investigate, not a transcript of events.',
        nl: 'Een christelijke kroniekschrijver beschrijft Muḥammad, Joodse vluchtelingen en samenwerking tussen Arabieren en Joden. Lees zijn verslag als een te onderzoeken perspectief, niet als een letterlijk verslag van de gebeurtenissen.',
      },
      image: 'assets/sources/sebeos-1879.jpg',
      record: 'https://digitale-sammlungen.ulb.uni-bonn.de/content/pageview/329524',
      credit: 'University and State Library Bonn · 1879 edition · public domain',
      reading: {
        label: { en: 'An outside account · c. 660s', nl: 'Een verslag van buitenaf · ca. 660' },
        title: { en: 'Sebeos on Jews, Arabs, and “Mahmet”', nl: 'Sebeos over Joden, Arabieren en “Mahmet”' },
        context: {
          en: 'The Armenian chronicler describes Jewish refugees leaving Edessa after the Byzantine–Persian war. This is his account of how they encountered the Arabs and Muḥammad.',
          nl: 'De Armeense kroniekschrijver beschrijft Joodse vluchtelingen die Edessa verlaten na de Byzantijns-Perzische oorlog. Dit is zijn verslag van hun ontmoeting met de Arabieren en Muḥammad.',
        },
        note: {
          en: 'Sebeos wrote decades after the events. This narrative should be compared with other sources, not read as an eyewitness transcript.',
          nl: 'Sebeos schreef tientallen jaren na de gebeurtenissen. Vergelijk dit verhaal met andere bronnen; het is geen ooggetuigenverslag.',
        },
        paragraphs: {
          en: [
            'They set out into the desert and came to Arabia, among the children of Ishmael; they sought their help and explained that they were kinsmen according to the Bible. Although they (the Arabs) were willing to accept this close kinship, they (the Jews) nevertheless could not convince the mass of the people because their cults were different.',
            'At this time there was an Ishmaelite called Mahmet, a merchant; he presented himself to them as though at God’s command, as a preacher, as the way of truth, and taught them to know the God of Abraham, for he was very well informed and very well acquainted with the story of Moses. As the command came from on high, they all united under the authority of a single man, under a single law and, abandoning vain cults, returned to the living God who had revealed himself to their father Abraham…',
            'Then they all gathered together from Havila unto Shur and before Egypt; they came out of the desert of Pharan divided into twelve tribes according to the lineages of their patriarchs. They distributed among their tribes the twelve thousand Israelites, a thousand per tribe, to guide them into the land of Israel… All that remained of the peoples of the children of Israel came to join them, and they constituted a mighty army.',
          ],
          nl: [
            'Zij trokken de woestijn in en kwamen in Arabië, bij de kinderen van Ismaël; zij vroegen hun om hulp en legden uit dat zij volgens de Bijbel verwanten waren. Hoewel zij (de Arabieren) bereid waren deze nauwe verwantschap te aanvaarden, konden zij (de Joden) de grote massa van het volk toch niet overtuigen, omdat hun religieuze gebruiken verschilden.',
            'In die tijd was er een Ismaëliet genaamd Mahmet, een koopman; hij trad voor hen op alsof hij op Gods bevel handelde, als prediker van de ware weg, en leerde hun de God van Abraham kennen, want hij was goed ingelicht en zeer vertrouwd met het verhaal van Mozes. Omdat het bevel van boven kwam, verenigden zij zich allen onder het gezag van één man, onder één wet, en keerden zij, nadat zij ijdele culten hadden verlaten, terug naar de levende God die zich aan hun vader Abraham had geopenbaard…',
            'Daarna kwamen zij allen bijeen van Havila tot Shur en voor Egypte; zij trokken de woestijn van Pharan uit, verdeeld in twaalf stammen volgens de afstamming van hun aartsvaders. Zij verdeelden de twaalfduizend Israëlieten over hun stammen, duizend per stam, om hen naar het land Israël te leiden… Al wat er van de volken van de kinderen van Israël over was, sloot zich bij hen aan, en zij vormden een machtig leger.',
          ],
        },
        source: {
          label: 'Sebeos, quoted in Robert Hoyland, “Sebeos, the Jews and the Rise of Islam,” p. 89',
          url: 'https://almuslih.org/wp-content/uploads/Library/Hoyland%2C%20R%20-%20Sebeos%2C%20the%20Jews%20and%20the%20Rise%20of%20Islam.pdf#page=1',
        },
      },
    },
  ],
};
