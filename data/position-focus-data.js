// One contested attribution, then the claimants' affiliations, then the narrator's position.
export const positionFocus = {
  id: 'mosque-and-narrator',
  eyebrow: { en: 'Focus · positionality', nl: 'Focus · positie van de verteller' },
  title: { en: 'Who tells the winning story?', nl: 'Wie vertelt het winnende verhaal?' },
  intro: {
    en: 'Qurʾān 9:108 contrasts the mosque just condemned in verse 107 with one founded on piety. The praised mosque is unnamed.',
    nl: 'Koran 9:108 stelt de moskee uit vers 107 tegenover een moskee die op godsvrucht is gegrond. De geprezen moskee blijft naamloos.',
  },
  verse: {
    reference: 'Qurʾān 9:108',
    arabic: 'لَا تَقُمْ فِيهِ أَبَدًا ۚ لَمَسْجِدٌ أُسِّسَ عَلَى التَّقْوَىٰ مِنْ أَوَّلِ يَوْمٍ أَحَقُّ أَنْ تَقُومَ فِيهِ ۚ فِيهِ رِجَالٌ يُحِبُّونَ أَنْ يَتَطَهَّرُوا ۚ وَاللَّهُ يُحِبُّ الْمُطَّهِّرِينَ',
    translation: {
      en: 'Never stand in it. A mosque founded on devotion to God from its first day is more deserving of your standing in it. In it are men who love to purify themselves, and God loves those who purify themselves.',
      nl: 'Sta er nooit in. Een moskee die vanaf haar eerste dag op godsvrucht is gegrond, verdient het meer dat jij erin staat. Daarin zijn mannen die zich graag reinigen, en God houdt van wie zich reinigen.',
    },
    source: { label: 'Quran.com · 9:108', url: 'https://quran.com/9/108' },
  },
  prompt: { en: 'Which mosque does the verse mean?', nl: 'Welke moskee bedoelt het vers?' },
  claims: [
    {
      id: 'quba',
      marker: 'A',
      title: { en: 'Qubāʾ Mosque', nl: 'Moskee van Qubāʾ' },
      witness: { en: 'ʿUrwa’s migration report · al-Bukhārī 3906', nl: 'ʿUrwa’s bericht over de hidjra · al-Bukhārī 3906' },
      affiliation: { en: 'Banū ʿAmr ibn ʿAwf · Aws', nl: 'Banū ʿAmr ibn ʿAwf · Aws' },
      context: {
        en: 'Qubāʾ was founded during Muhammad’s stay among this clan. ʿUrwa, the Qubāʾ report’s transmitter, was Qurashī—not Aws.',
        nl: 'Qubāʾ werd gesticht tijdens Muhammads verblijf bij deze clan. ʿUrwa, de overleveraar van het Qubāʾ-bericht, was Qurashī—niet Aws.',
      },
    },
    {
      id: 'prophets-mosque',
      marker: 'B',
      title: { en: 'The Prophet’s Mosque', nl: 'De Moskee van de Profeet' },
      witness: { en: 'Abū Saʿīd’s dispute report · al-Tirmidhī 323', nl: 'Abū Saʿīds bericht over het geschil · al-Tirmidhī 323' },
      affiliation: { en: 'Banū Khudra · Khazraj', nl: 'Banū Khudra · Khazraj' },
      context: {
        en: 'The Prophet’s Mosque stood on Banū al-Najjār land; no Khudra building tie is shown.',
        nl: 'De Moskee van de Profeet stond op grond van Banū al-Najjār; een bouwband met Khudra blijkt niet.',
      },
    },
  ],
  stages: [
    {
      label: { en: '01 · The disagreement', nl: '01 · Het verschil' },
      title: { en: 'One verse. Two identifications.', nl: 'Eén vers. Twee toewijzingen.' },
      text: {
        en: 'ʿUrwa’s migration report identifies the praised mosque with Qubāʾ. Abū Saʿīd’s dispute report says the Prophet identified it as his own mosque. Al-Ṭabarī preserves both identifications.',
        nl: 'ʿUrwa’s bericht over de hidjra wijst Qubāʾ aan. Volgens Abū Saʿīds bericht over een geschil wees de Profeet zijn eigen moskee aan. Al-Ṭabarī bewaart beide toewijzingen.',
      },
      sources: [
        { label: 'al-Bukhārī 3906 · ʿUrwa’s report', url: 'https://sunnah.com/bukhari:3906' },
        { label: 'al-Tirmidhī 323 · Abū Saʿīd’s report', url: 'https://sunnah.com/tirmidhi:323' },
        { label: 'al-Ṭabarī · both identifications', url: 'https://quran.ksu.edu.sa/tafseer/tabary/sura9-aya108.html' },
      ],
    },
    {
      label: { en: '02 · The claimants', nl: '02 · De voorstanders' },
      title: { en: 'A local clan is not the narrator.', nl: 'Een lokale clan is niet de overleveraar.' },
      text: {
        en: 'ʿUrwa, who transmits the Qubāʾ identification in al-Bukhārī, belonged to Quraysh’s Banū Asad, not Aws. In a separate dispute reported by Abū Saʿīd, the Qubāʾ claimant is from its local Banū ʿAmr ibn ʿAwf. The other claimant is Khudra; the Prophet’s Mosque stood on Banū al-Najjār land.',
        nl: 'ʿUrwa, die bij al-Bukhārī de toewijzing aan Qubāʾ overlevert, behoorde tot de Quraysh-clan Banū Asad, niet tot Aws. In een afzonderlijk geschil dat Abū Saʿīd overlevert, komt de voorstander van Qubāʾ uit de plaatselijke Banū ʿAmr ibn ʿAwf. De andere voorstander is Khudra; de Moskee van de Profeet stond op grond van Banū al-Najjār.',
      },
      sources: [
        { label: 'al-Tirmidhī 323 · the named claimants', url: 'https://sunnah.com/tirmidhi:323' },
        { label: 'al-Bukhārī 3906 · Qubāʾ and Banū ʿAmr ibn ʿAwf', url: 'https://sunnah.com/bukhari:3906' },
        { label: 'ʿUrwa’s lineage · TDV İslâm Ansiklopedisi', url: 'https://islamansiklopedisi.org.tr/urve-b-zubeyr' },
        { label: 'al-Bukhārī 2774 · Banū al-Najjār land', url: 'https://sunnah.com/bukhari:2774' },
      ],
    },
    {
      label: { en: '03 · The narrator', nl: '03 · De overleveraar' },
      title: { en: 'The narrator belongs to one side.', nl: 'De overleveraar hoort bij één partij.' },
      text: {
        en: 'Abū Saʿīd al-Khudrī transmits the report that says the Prophet affirmed the Khudra claimant’s answer. He was himself Khudra. A Qurʾānic commendation of that mosque could carry clan prestige; that possible stake makes the report worth comparing with the Qubāʾ reports.',
        nl: 'Abū Saʿīd al-Khudrī levert het bericht over waarin de Profeet volgens de tekst de Khudra-voorstander gelijk geeft. Hij behoorde zelf ook tot Banū Khudra. Koranische lof voor die moskee kon aanzien voor de clan opleveren; die mogelijke inzet vraagt om vergelijking met de Qubāʾ-berichten.',
      },
      connection: { en: 'Abū Saʿīd al-Khudrī → Banū Khudra → claim B', nl: 'Abū Saʿīd al-Khudrī → Banū Khudra → claim B' },
      caveat: {
        en: 'This is a question about how the story was transmitted, not proof that the report was invented.',
        nl: 'Dit roept een vraag op over de overlevering van het verhaal, geen bewijs dat het bericht is verzonnen.',
      },
      sources: [
        { label: 'al-Tirmidhī 323 · Abū Saʿīd’s report', url: 'https://sunnah.com/tirmidhi:323' },
        { label: 'Abū Saʿīd’s lineage · TDV İslâm Ansiklopedisi', url: 'https://islamansiklopedisi.org.tr/ebu-said-el-hudri' },
        { label: 'al-Ṭabarī 9:108, report 17224', url: 'https://quran.ksu.edu.sa/tafseer/tabary/sura9-aya108.html' },
      ],
    },
  ],
};
