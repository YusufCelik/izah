// Approximate site markers on a modern coastline base map. Regions are teaching aids, not ancient borders.
export const arabiaRegions = {
  eyebrow: { en: 'The Jewish landscape of late antique Arabia', nl: 'Het Joodse landschap van laatantiek Arabië' },
  title: { en: 'Two regions, different records', nl: 'Twee regio’s, andere bronnen' },
  intro: {
    en: 'Jewish life in Arabia was not confined to Medina. The northern oases and the southern kingdom of Ḥimyar had different histories and left different kinds of evidence.',
    nl: 'Joods leven in Arabië beperkte zich niet tot Medina. De noordelijke oasen en het zuidelijke koninkrijk Ḥimyar hadden verschillende geschiedenissen en lieten andere soorten bronnen na.',
  },
  regions: [
    {
      id: 'north',
      number: '01',
      name: { en: 'Northern Arabia', nl: 'Noord-Arabië' },
      subtitle: { en: 'Oases of the Ḥijāz', nl: 'Oasen van de Ḥijāz' },
      sites: [
        { id: 'wadi', name: 'Wādī al-Qurā', lon: 37.9, lat: 26.6, labelDx: -13, labelDy: -13, textAnchor: 'end' },
        { id: 'medina', name: 'Medina', lon: 39.6, lat: 24.47, labelDx: 14, labelDy: 5, textAnchor: 'start' },
      ],
      detail: {
        en: 'Jewish communities are reported in Medina and Wādī al-Qurā. Inscriptions add contemporary material evidence for the northwest.',
        nl: 'Joodse gemeenschappen worden vermeld in Medina en Wādī al-Qurā. Inscripties leveren daarnaast eigentijds materieel bewijs voor het noordwesten.',
      },
      source: { label: 'Lindstedt, pp. 57–63', url: 'https://brill.com/downloadpdf/display/title/69380.pdf' },
    },
    {
      id: 'south',
      number: '02',
      name: { en: 'Southern Arabia', nl: 'Zuid-Arabië' },
      subtitle: { en: 'Ḥimyar and Yemen', nl: 'Ḥimyar en Jemen' },
      sites: [
        { id: 'himyar', name: 'Ẓafār · Ḥimyar', lon: 44.403, lat: 14.211, labelDx: 15, labelDy: 5, textAnchor: 'start' },
        { id: 'hima', name: 'Biʾr Ḥimā · Ja 1028', lon: 44.451, lat: 18.251, labelDx: 15, labelDy: 5, textAnchor: 'start' },
      ],
      detail: {
        en: 'Ḥimyar ruled much of south Arabia in late antiquity. South Arabian inscriptions and outside accounts attest a Jewish dimension to its rulers and religious life.',
        nl: 'Ḥimyar beheerste in de late oudheid een groot deel van Zuid-Arabië. Zuid-Arabische inscripties en externe berichten getuigen van een Joodse dimensie in het koningschap en religieuze leven.',
      },
      source: { label: 'Lindstedt, pp. 57, 65–73', url: 'https://brill.com/downloadpdf/display/title/69380.pdf' },
      inscription: {
        title: { en: 'A southern kingdom’s own record', nl: 'Een eigen bron uit het zuidelijke koninkrijk' },
        reference: 'Ja 1028 · Biʾr Ḥimā · 523 CE · line 3',
        // Sabaic is transliterated into Arabic letters here; the stone uses Ancient South Arabian script.
        original: 'خصرو مراهمو ملكن يوسف اسار يثار كدهر قلسن وهرج احبشن بظفر وعلي حرب اشعرن وركبن وفرسن',
        translation: {
          en: 'They stood with their lord, King Yūsuf Asʾar Yathʾar, when he burned the church and killed the Abyssinians at Ẓafār, and campaigned against Ashʿarān, Rakbān and Farasān…',
          nl: 'Zij stonden hun heer, koning Yūsuf Asʾar Yathʾar, bij toen hij de kerk verbrandde en de Abessijnen in Ẓafār doodde, en oorlog voerde tegen Ashʿarān, Rakbān en Farasān…',
        },
        note: {
          en: 'Carved near Najrān, it describes fighting farther south. This is the campaigners’ own account, and the list continues in line 4. “Dhū Nuwās” identifies the king but is not written in this line.',
          nl: 'De inscriptie werd bij Najrān uitgehouwen en beschrijft strijd verder naar het zuiden. Het is het eigen verslag van de strijders; de opsomming loopt door in regel 4. “Dhū Nuwās” duidt de koning aan, maar staat niet in deze regel.',
        },
        image: {
          src: 'assets/inscriptions/ja-1028.jpg',
          alt: { en: 'The Ja 1028 Sabaic inscription carved across a broad rock face at Biʾr Ḥimā', nl: 'De Sabeïsche inscriptie Ja 1028, uitgehouwen over een brede rotswand bij Biʾr Ḥimā' },
          credit: 'Ja 1028 · photograph: MAFSN, reproduced in Robin, fig. 8',
          url: 'https://books.openbookpublishers.com/10.11647/obp.0219.07.pdf',
        },
        source: { label: 'Ja 1028 · translation by Iwona Gajda', url: 'https://www.posenlibrary.com/entry/inscriptions-himyarite-high-officials' },
      },
    },
  ],
  mapSource: { label: 'Map outline: Natural Earth', url: 'https://www.naturalearthdata.com/about/terms-of-use/' },
  mapCaveat: { en: 'Modern coastlines and approximate markers; colored focus areas are not ancient borders.', nl: 'Hedendaagse kustlijnen en benaderde locaties; de gekleurde zones zijn geen antieke grenzen.' },
};
