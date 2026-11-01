// Content lives here; the timeline component only knows how to present source claims.
// `year` / `endYear` are plotting positions in CE, never a substitute for the
// source's own wording in `date`. A claim belongs to one source. Add another
// claim for another source, even when both give the same date.
export const timelineData = {
  sources: {
    met: { title: { en: 'The Met · The Birth of Islam', nl: 'The Met · The Birth of Islam' }, url: 'https://www.metmuseum.org/essays/the-birth-of-islam' },
    oxfordOrigins: { title: { en: 'Oxford · The Evolution of the Book, ch. 6', nl: 'Oxford · The Evolution of the Book, hfst. 6' }, url: 'https://academic.oup.com/book/47415/chapter-abstract/422395930' },
    cambridgeOverview: { title: { en: 'Cambridge · The Rise of Islam', nl: 'Cambridge · The Rise of Islam' }, url: 'https://www.cambridge.org/core/books/abs/standard-arabic/rise-of-islam/0BDFB555E8BD85845FF1A9BBB2DFB386' },
    cambridgeHistory: { title: { en: 'Cambridge · New Cambridge History of Islam', nl: 'Cambridge · New Cambridge History of Islam' }, url: 'https://www.cambridge.org/core/books/abs/new-cambridge-history-of-islam/rise-of-islam-600705/597D4B95CB90B058D31415DF6CC272FBF' },
    lecker: { title: { en: 'Michael Lecker · Constitution of Medina', nl: 'Michael Lecker · Constitutie van Medina' }, url: 'https://academic.oup.com/reference/62361/reference-article-abstract/554576238' },
    arjomand: { title: { en: 'S. A. Arjomand · Constitution of Medina', nl: 'S. A. Arjomand · Constitutie van Medina' }, url: 'https://www.cambridge.org/core/journals/international-journal-of-middle-east-studies/article/constitution-of-medina-a-sociolegal-interpretation-of-muhammads-acts-of-foundation-of-the-umma/244CE1507A7C425A388949E545C1F019' },
    oxfordBattles: { title: { en: 'Oxford · Muhammad’s Military Expeditions, ch. 3', nl: 'Oxford · Muhammad’s Military Expeditions, hfst. 3' }, url: 'https://academic.oup.com/book/57350/chapter-abstract/464644817' },
    michigan: { title: { en: 'University of Michigan · Narrating Early Islamic History', nl: 'Universiteit van Michigan · Narrating Early Islamic History' }, url: 'https://deepblue.lib.umich.edu/bitstream/handle/2027.42/102483/ksamji_1.pdf' },
    diyanet: { title: { en: 'Diyanet · Siyer chronology', nl: 'Diyanet · Siyer-chronologie' }, url: 'https://dijital.diyanet.gov.tr/File/Download?id=5113&path=5113_1.pdf' },
    belleten: { title: { en: 'Belleten · The Jews of Khaibar', nl: 'Belleten · The Jews of Khaibar' }, url: 'https://www.belleten.gov.tr/eng/abstarct/67/eng' },
    muslim: { title: { en: 'Ṣaḥīḥ Muslim 1218a · Farewell pilgrimage', nl: 'Ṣaḥīḥ Muslim 1218a · Afscheidsbedevaart' }, url: 'https://sunnah.com/muslim/15/159' },
  },
  events: [
    {
      id: 'first-revelation', displayDate: { en: 'c. 610', nl: 'ca. 610' }, period: { en: 'MECCAN YEARS', nl: 'MEKKAANSE JAREN' }, location: { en: 'MECCA · 01', nl: 'MEKKA · 01' },
      title: { en: 'The first revelation', nl: 'De eerste openbaring' }, shortTitle: { en: 'First revelation', nl: 'Eerste openbaring' },
      summary: { en: 'According to Islamic tradition, Muhammad began receiving revelations near Mecca. This marks the beginning of his prophetic mission.', nl: 'Volgens de islamitische overlevering begon Muhammad bij Mekka openbaringen te ontvangen. Dit geldt als het begin van zijn profetische missie.' },
      claims: [
        { sourceId: 'met', year: 610, date: { en: '610 CE', nl: '610 n.Chr.' } },
        { sourceId: 'cambridgeOverview', year: 610, date: { en: 'c. 610 CE', nl: 'ca. 610 n.Chr.' } },
      ],
    },
    {
      id: 'public-preaching', displayDate: { en: 'c. 613', nl: 'ca. 613' }, period: { en: 'MECCAN YEARS', nl: 'MEKKAANSE JAREN' }, location: { en: 'MECCA · 02', nl: 'MEKKA · 02' },
      title: { en: 'The message goes public', nl: 'De boodschap wordt openbaar' }, shortTitle: { en: 'Public preaching', nl: 'Openbare prediking' },
      summary: { en: 'After an initial private phase, Muhammad began preaching openly in Mecca. The approximate year comes from a modern chronology.', nl: 'Na een eerste besloten fase begon Muhammad openlijk in Mekka te prediken. Het jaartal is bij benadering en komt uit een moderne chronologie.' },
      claims: [{ sourceId: 'oxfordOrigins', year: 613, date: { en: 'about 613 CE', nl: 'rond 613 n.Chr.' } }],
    },
    {
      id: 'abyssinia', displayDate: '615', period: { en: 'MECCAN YEARS', nl: 'MEKKAANSE JAREN' }, location: { en: 'ABYSSINIA · 03', nl: 'ABESSINIË · 03' },
      title: { en: 'Refuge in Abyssinia', nl: 'Toevlucht in Abessinië' }, shortTitle: { en: 'Abyssinia', nl: 'Abessinië' },
      summary: { en: 'A group of Muhammad’s followers left Mecca for the Christian kingdom across the Red Sea, seeking refuge from opposition at home.', nl: 'Een groep volgelingen van Muhammad verliet Mekka voor het christelijke koninkrijk aan de overkant van de Rode Zee, op zoek naar bescherming.' },
      claims: [{ sourceId: 'cambridgeOverview', year: 615, date: { en: '615 CE', nl: '615 n.Chr.' } }],
    },
    {
      id: 'hijra', displayDate: '622', period: { en: 'MEDINAN YEARS', nl: 'MEDINASE JAREN' }, location: { en: 'MECCA → MEDINA · 04', nl: 'MEKKA → MEDINA · 04' },
      title: { en: 'The migration to Medina', nl: 'De emigratie naar Medina' }, shortTitle: { en: 'Medina / Hijra', nl: 'Medina / hidjra' },
      summary: { en: 'Muḥammad and his followers moved from Mecca to Yathrib, later called Medina. This migration is the Hijra. Years marked AH are counted from it; 1 AH began in 622 CE.', nl: 'Muḥammad en zijn volgelingen trokken van Mekka naar Yathrib, later Medina genoemd. Deze verhuizing heet de hidjra. Jaren met AH worden vanaf die gebeurtenis geteld; 1 AH begon in 622 n.Chr.' },
      claims: [
        { sourceId: 'cambridgeOverview', year: 622, date: { en: '622 CE', nl: '622 n.Chr.' } },
        { sourceId: 'cambridgeHistory', year: 622, date: { en: '622 CE', nl: '622 n.Chr.' } },
      ],
    },
    {
      id: 'medina-pact', displayDate: '622–627', period: { en: 'MEDINAN YEARS', nl: 'MEDINASE JAREN' }, location: { en: 'MEDINA · 05', nl: 'MEDINA · 05' },
      title: { en: 'A pact for Medina', nl: 'Een verbond voor Medina' }, shortTitle: { en: 'Medina pact', nl: 'Verbond van Medina' },
      summary: { en: 'A document preserved in later biographies sets out relations among Muḥammad’s followers and named Jewish groups in Medina. Scholars differ over whether it records one early pact or several agreements made over time.', nl: 'Een oorkonde uit latere biografieën beschrijft de verhoudingen tussen Muḥammads volgelingen en genoemde Joodse groepen in Medina. Onderzoekers verschillen van mening of zij één vroeg verbond vastlegt of meerdere afspraken uit verschillende jaren.' },
      claims: [
        { sourceId: 'lecker', year: 622, date: { en: 'c. 622 CE', nl: 'ca. 622 n.Chr.' }, note: { en: 'Lecker places the treaty soon after the Hijra.', nl: 'Lecker plaatst het verbond kort na de hidjra.' } },
        { sourceId: 'arjomand', year: 622, endYear: 627, date: { en: '622–627 CE', nl: '622–627 n.Chr.' }, note: { en: 'Arjomand reads the document as three related deeds written across these years.', nl: 'Arjomand leest de tekst als drie verwante documenten uit deze jaren.' } },
      ],
    },
    {
      id: 'badr', displayDate: '624', period: { en: 'MEDINAN YEARS', nl: 'MEDINASE JAREN' }, location: { en: 'BADR · 06', nl: 'BADR · 06' },
      title: { en: 'The battle of Badr', nl: 'De slag bij Badr' }, shortTitle: { en: 'Badr', nl: 'Badr' },
      summary: { en: 'The Medinan community defeated a Meccan force at Badr, a major turning point in the traditional account of the early community.', nl: 'De gemeenschap in Medina versloeg bij Badr een leger uit Mekka, een belangrijk keerpunt in de traditionele geschiedenis van de vroege gemeenschap.' },
      claims: [
        { sourceId: 'oxfordBattles', year: 624, date: { en: '2 AH / 624 CE', nl: '2 AH / 624 n.Chr.' } },
        { sourceId: 'cambridgeOverview', year: 624, date: { en: '624 CE', nl: '624 n.Chr.' } },
      ],
    },
    {
      id: 'qaynuqa', displayDate: '624', period: { en: 'MEDINAN YEARS', nl: 'MEDINASE JAREN' }, location: { en: 'MEDINA · 07', nl: 'MEDINA · 07' },
      title: { en: 'Banū Qaynuqāʿ', nl: 'Banū Qaynuqāʿ' }, shortTitle: { en: 'Banū Qaynuqāʿ', nl: 'Banū Qaynuqāʿ' },
      summary: { en: 'Banū means a family or descent group. After Badr, this Jewish group in Medina was besieged and expelled. Later narratives differ over what led to the conflict.', nl: 'Banū duidt een familie of afstammingsgroep aan. Na Badr werd deze Joodse groep in Medina belegerd en verdreven. Latere verhalen verschillen over de aanleiding.', },
      claims: [
        { sourceId: 'michigan', year: 624, date: { en: 'April 624 CE', nl: 'april 624 n.Chr.' } },
        { sourceId: 'diyanet', year: 624, date: { en: '2 AH / 624 CE', nl: '2 AH / 624 n.Chr.' } },
      ],
    },
    {
      id: 'uhud', displayDate: '625', period: { en: 'MEDINAN YEARS', nl: 'MEDINASE JAREN' }, location: { en: 'UḤUD · 08', nl: 'UḤUD · 08' },
      title: { en: 'The battle of Uḥud', nl: 'De slag bij Uḥud' }, shortTitle: { en: 'Uḥud', nl: 'Uḥud' },
      summary: { en: 'A Meccan force confronted the Muslims near Medina. Unlike Badr, the outcome was a setback for Muhammad’s community.', nl: 'Een leger uit Mekka vocht bij Medina tegen de moslims. Anders dan bij Badr betekende de uitkomst een tegenslag voor Muhammads gemeenschap.' },
      claims: [
        { sourceId: 'oxfordBattles', year: 625, date: { en: '3 AH / 625 CE', nl: '3 AH / 625 n.Chr.' } },
        { sourceId: 'cambridgeOverview', year: 625, date: { en: '625 CE', nl: '625 n.Chr.' } },
      ],
    },
    {
      id: 'nadir', displayDate: '625/626', period: { en: 'MEDINAN YEARS', nl: 'MEDINASE JAREN' }, location: { en: 'MEDINA · 09', nl: 'MEDINA · 09' },
      title: { en: 'Banū al-Naḍīr', nl: 'Banū al-Naḍīr' }, shortTitle: { en: 'Banū al-Naḍīr', nl: 'Banū al-Naḍīr' },
      summary: { en: 'The Jewish group Banū al-Naḍīr was expelled from Medina. Modern chronologies place the episode in different years; both datings are shown here.', nl: 'De Joodse groep Banū al-Naḍīr werd uit Medina verdreven. Moderne chronologieën plaatsen de gebeurtenis in verschillende jaren; beide dateringen staan hier.' },
      claims: [
        { sourceId: 'diyanet', year: 625, date: { en: '625 CE', nl: '625 n.Chr.' } },
        { sourceId: 'cambridgeOverview', year: 626, date: { en: '626 CE', nl: '626 n.Chr.' } },
      ],
    },
    {
      id: 'qurayza', displayDate: '627', period: { en: 'MEDINAN YEARS', nl: 'MEDINASE JAREN' }, location: { en: 'MEDINA · 10', nl: 'MEDINA · 10' },
      title: { en: 'Banū Qurayẓa', nl: 'Banū Qurayẓa' }, shortTitle: { en: 'Banū Qurayẓa', nl: 'Banū Qurayẓa' },
      summary: { en: 'After besieging armies withdrew from Medina, Banū Qurayẓa surrendered to Muḥammad’s forces. Later accounts describe killings and captivity; historians continue to study the details and scale.', nl: 'Nadat belegerende legers zich uit Medina hadden teruggetrokken, gaf Banū Qurayẓa zich over aan Muḥammads troepen. Latere bronnen beschrijven doden en gevangenneming; historici onderzoeken nog de details en omvang.' },
      claims: [{ sourceId: 'cambridgeOverview', year: 627, date: { en: '627 CE', nl: '627 n.Chr.' } }],
    },
    {
      id: 'khaybar', displayDate: '628', period: { en: 'MEDINAN YEARS', nl: 'MEDINASE JAREN' }, location: { en: 'KHAYBAR · 11', nl: 'KHAYBAR · 11' },
      title: { en: 'A new arrangement at Khaybar', nl: 'Een nieuwe regeling in Khaybar' }, shortTitle: { en: 'Khaybar pact', nl: 'Verbond van Khaybar' },
      summary: { en: 'After the conquest of Khaybar, an agreement allowed many Jewish inhabitants to remain and cultivate the oasis, delivering half its produce to the new rulers.', nl: 'Na de verovering van Khaybar konden veel Joodse inwoners volgens een overeenkomst blijven en de oase bewerken, tegen afdracht van de helft van de oogst.' },
      claims: [{ sourceId: 'belleten', year: 628, date: { en: '7 AH / 628 CE', nl: '7 AH / 628 n.Chr.' } }],
    },
    {
      id: 'mecca', displayDate: '630', period: { en: 'LATER YEARS', nl: 'LATERE JAREN' }, location: { en: 'MECCA · 12', nl: 'MEKKA · 12' },
      title: { en: 'The conquest of Mecca', nl: 'De inname van Mekka' }, shortTitle: { en: 'Conquest of Mecca', nl: 'Inname van Mekka' },
      summary: { en: 'Muhammad and his followers took control of Mecca. The city and its sanctuary became central to the expanding Muslim community.', nl: 'Muhammad en zijn volgelingen namen Mekka in. De stad en haar heiligdom kregen een centrale plaats in de groeiende moslimgemeenschap.' },
      claims: [
        { sourceId: 'oxfordOrigins', year: 630, date: { en: '630 CE', nl: '630 n.Chr.' } },
        { sourceId: 'cambridgeOverview', year: 630, date: { en: '630 CE', nl: '630 n.Chr.' } },
      ],
    },
    {
      id: 'farewell', displayDate: '632', period: { en: 'LATER YEARS', nl: 'LATERE JAREN' }, location: { en: 'ʿARAFĀT · 13', nl: 'ʿARAFĀT · 13' },
      title: { en: 'The farewell address', nl: 'De afscheidsrede' }, shortTitle: { en: 'Farewell address', nl: 'Afscheidsrede' },
      summary: { en: 'During Muhammad’s final pilgrimage, tradition records an address at ʿArafāt. The surviving versions should be read as transmitted reports, not one fixed verbatim text.', nl: 'Tijdens Muhammads laatste bedevaart vermelden de overleveringen een rede bij ʿArafāt. De bewaarde versies zijn overgeleverde berichten, geen eenduidig letterlijk verslag.' },
      claims: [{ sourceId: 'cambridgeOverview', year: 632, date: { en: '632 CE', nl: '632 n.Chr.' }, note: { en: 'For the speech itself, see the account in Ṣaḥīḥ Muslim 1218a.', nl: 'Zie voor de rede zelf het verslag in Ṣaḥīḥ Muslim 1218a.' }, relatedSourceId: 'muslim' }],
    },
    {
      id: 'death', displayDate: '632', period: { en: 'LATER YEARS', nl: 'LATERE JAREN' }, location: { en: 'MEDINA · 14', nl: 'MEDINA · 14' },
      title: { en: 'Muhammad’s death', nl: 'Het overlijden van Muhammad' }, shortTitle: { en: 'Passing of the Prophet', nl: 'Overlijden van de profeet' },
      summary: { en: 'Muhammad died in Medina a few months after his final pilgrimage. His community continued under new leadership.', nl: 'Muhammad overleed in Medina, enkele maanden na zijn laatste bedevaart. Zijn gemeenschap ging verder onder nieuw leiderschap.' },
      claims: [
        { sourceId: 'cambridgeOverview', year: 632, date: { en: '8 June 632 CE', nl: '8 juni 632 n.Chr.' } },
        { sourceId: 'met', year: 632, date: { en: '632 CE', nl: '632 n.Chr.' } },
      ],
    },
  ],
};
