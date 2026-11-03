// A general-sounding hadith and a reported administrative instruction are distinct source forms.
// Keep the quoted wording, transmission note, and Abu Ubayd's interpretation visible as separate claims.
export const fightingYemenContrast = {
  id: 'fighting-and-yemen-letter',
  layout: 'reading',
  density: 'compact',
  eyebrow: { en: 'Sources in tension · scope of fighting', nl: 'Bronnen op gespannen voet · reikwijdte van strijd' },
  title: { en: 'Who are “the people”?', nl: 'Wie zijn “de mensen”?' },
  intro: {
    en: 'One report attributes a broad command to fight “the people” to Muḥammad. Another reports an instruction to his envoy in Yemen that Jews should remain free to practise Judaism under a tax arrangement.',
    nl: 'Eén bericht schrijft Muḥammad een breed bevel toe om tegen “de mensen” te strijden. Een ander bericht schrijft hem een instructie aan zijn gezant in Jemen toe: Joden mochten hun geloof behouden binnen een belastingregeling.',
  },
  sides: [
    {
      id: 'muslim-22',
      label: { en: 'Ibn ʿUmar · Ṣaḥīḥ Muslim 22', nl: 'Ibn ʿUmar · Ṣaḥīḥ Muslim 22' },
      heading: { en: '“I have been commanded to fight”', nl: '‘Mij is bevolen te strijden’' },
      translationLabel: { en: 'Full report · English wording as supplied', nl: 'Volledig bericht · nieuwe vertaling' },
      translation: {
        en: '“I have been commanded to fight against people till they testify that there is no god but Allah, that Muhammad is the messenger of Allah, and they establish prayer, and pay Zakat and if they do it, their blood and property are guaranteed protection on my behalf except when justified by law, and their affairs rest with Allah.”',
        nl: '‘Mij is bevolen tegen de mensen te strijden totdat zij getuigen dat er geen god is dan Allah en dat Muḥammad de boodschapper van Allah is, het gebed verrichten en de zakat betalen. Als zij dat doen, zijn hun leven en bezit tegenover mij beschermd, behalve wanneer het recht anders vereist. Over hun innerlijk oordeelt Allah.’',
      },
      context: {
        en: 'The report says “the people” (al-nās). It does not itself list every community meant by that phrase.',
        nl: 'Het bericht zegt “de mensen” (al-nās). Het noemt niet zelf elke gemeenschap waarop die uitdrukking zou slaan.',
      },
      sources: [{ label: 'Ṣaḥīḥ Muslim 22 · Arabic and English', url: 'https://sunnah.com/muslim:22' }],
    },
    {
      id: 'amwal-65',
      label: { en: 'Abū ʿUbayd · al-Amwāl 65', nl: 'Abū ʿUbayd · al-Amwāl 65' },
      heading: { en: '“No Jew is to be pressured”', nl: '‘Geen Jood mag onder druk worden gezet’' },
      original: '٦٥ - حدثنا جرير، عن منصور، عن الحكم، قال: كتب رسول الله صلى الله عليه وسلم إلى معاذ وهو باليمن:\n«إن فيما سقت السماء أو سقي غيلا العشر، وفيما سقي بالغرب نصف العشر، وفي الحالم أو الحالمة دينارا أو عدله من المعافر، ولا يفتن يهودي عن يهوديته»',
      originalLang: 'ar',
      originalDirection: 'rtl',
      translationLabel: { en: 'Complete reported instruction · new translation', nl: 'Volledige overgeleverde instructie · nieuwe vertaling' },
      translation: {
        en: 'Jarīr transmitted from Manṣūr, from al-Ḥakam: “The Messenger of God wrote to Muʿādh while he was in Yemen: On crops watered by rain or flowing water, a tenth; on crops watered by a bucket, half a tenth. For an adult man or woman, a dinar or its equivalent in Maʿāfir cloth. No Jew is to be pressured to leave Judaism.”',
        nl: 'Jarīr leverde over via Manṣūr, via al-Ḥakam: ‘De Boodschapper van God schreef aan Muʿādh, toen die in Jemen was: Van gewassen die door regen of stromend water worden bevloeid, een tiende; van gewassen die met een emmer worden bevloeid, een half tiende. Voor een volwassen man of vrouw een dinar, of de tegenwaarde in stof uit Maʿāfir. Geen Jood mag onder druk worden gezet om het jodendom te verlaten.’',
      },
      isnad: {
        en: 'Jarīr → Manṣūr → al-Ḥakam. In this version, the named chain stops with al-Ḥakam; no eyewitness to the letter is named.',
        nl: 'Jarīr → Manṣūr → al-Ḥakam. In deze versie eindigt de genoemde keten bij al-Ḥakam; er wordt geen ooggetuige van de brief genoemd.',
      },
      context: {
        en: 'Abū ʿUbayd places the report in a chapter on jizya (a tax on non-Muslim communities) and reads it as allowing Yemen’s Jews to remain Jewish.',
        nl: 'Abū ʿUbayd plaatst het bericht in een hoofdstuk over jizya (een belasting voor niet-islamitische gemeenschappen) en leest het als toestemming voor Joden in Jemen om Joods te blijven.',
      },
      sources: [
        { label: 'al-Amwāl 65 · Arabic text', url: 'https://ablibrary.net/book_content/b/14235/35?lang=ar' },
        { label: 'al-Amwāl · scanned edition', url: 'https://baitalzakat.com/files/zakat-book/baitalzakat.com-B100069.pdf' },
      ],
    },
  ],
  reading: {
    label: { en: 'The historical question', nl: 'De historische vraag' },
    title: { en: 'How wide is the command?', nl: 'Hoe ruim is het bevel?' },
    text: {
      en: 'If “the people” meant every non-Muslim in every setting, why does the Yemen report allow Jews to keep their religion while paying a tax? Abū ʿUbayd’s surrounding discussion distinguishes Arab idolaters from Jews and Christians who could pay jizya.',
      nl: 'Als “de mensen” in elke situatie alle niet-moslims betekende, waarom laat het bericht uit Jemen Joden dan hun geloof behouden tegen betaling van een belasting? Abū ʿUbayd onderscheidt in de omringende tekst Arabische afgodendienaren van Joden en christenen die jizya konden betalen.',
    },
    caveat: {
      en: 'These reports differ in setting and transmission. Al-Amwāl 65 reports a letter; it is not the original letter, and its named chain ends with al-Ḥakam. The comparison tests the scope of the first report; it does not prove one universal policy.',
      nl: 'De berichten verschillen in context en overlevering. Al-Amwāl 65 meldt een brief; het is niet de oorspronkelijke brief en de genoemde keten eindigt bij al-Ḥakam. De vergelijking onderzoekt de reikwijdte van het eerste bericht; zij bewijst geen algemeen geldend beleid.',
    },
    source: { label: 'al-Amwāl 62–66 · Abu ʿUbayd’s context', url: 'https://baitalzakat.com/files/zakat-book/baitalzakat.com-B100069.pdf' },
  },
};
