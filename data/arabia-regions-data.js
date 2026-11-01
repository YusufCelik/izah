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
      ],
      detail: {
        en: 'Ḥimyar ruled much of south Arabia in late antiquity. South Arabian inscriptions and outside accounts attest a Jewish dimension to its rulers and religious life.',
        nl: 'Ḥimyar beheerste in de late oudheid een groot deel van Zuid-Arabië. Zuid-Arabische inscripties en externe berichten getuigen van een Joodse dimensie in het koningschap en religieuze leven.',
      },
      source: { label: 'Lindstedt, pp. 57, 65–73', url: 'https://brill.com/downloadpdf/display/title/69380.pdf' },
    },
  ],
  mapSource: { label: 'Map outline: Natural Earth', url: 'https://www.naturalearthdata.com/about/terms-of-use/' },
  mapCaveat: { en: 'Modern coastlines and approximate markers; colored focus areas are not ancient borders.', nl: 'Hedendaagse kustlijnen en benaderde locaties; de gekleurde zones zijn geen antieke grenzen.' },
};
