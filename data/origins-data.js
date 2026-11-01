// These are different kinds of origin stories and proposals, not a single settled migration route.
export const originsInquiry = {
  eyebrow: { en: 'Origins · competing explanations', nl: 'Oorsprong · verschillende verklaringen' },
  title: { en: 'How long had they been there?', nl: 'Hoe lang waren zij er al?' },
  intro: {
    en: 'The inscription shows Jewish festival language in Arabia by 302/303 CE. But how did Jewish communities first arrive? These five answers range from later stories to modern hypotheses; none is a dated record of first arrival.',
    nl: 'De inscriptie toont Joodse feesttaal in Arabië rond 302/303 n.Chr. Maar hoe kwamen Joodse gemeenschappen er voor het eerst? Deze vijf antwoorden lopen uiteen van latere verhalen tot moderne hypotheses; geen ervan dateert de eerste aankomst.',
  },
  steps: [
    {
      id: 'temples', number: '01', type: { en: 'Retrospective account', nl: 'Terugblikkend verhaal' },
      heading: { en: 'After the temples?', nl: 'Na de tempels?' },
      text: {
        en: 'A familiar account connects migration to the Babylonian destruction of the First Temple and the Roman destruction of the Second Temple in 70 CE. Those destructions are historical; a route from either event to a particular Arabian oasis still needs its own evidence.',
        nl: 'Een bekend verhaal verbindt migratie met de Babylonische verwoesting van de Eerste Tempel en de Romeinse verwoesting van de Tweede Tempel in 70 n.Chr. Die verwoestingen zijn historisch; een route van een van beide gebeurtenissen naar een specifieke Arabische oase vraagt eigen bewijs.',
      },
      source: { label: 'Ancient Arabia, Jewish origins in the northwest', url: 'https://doi.org/10.60667/tdaa-0170' },
    },
    {
      id: 'goitein', number: '02', type: { en: 'Historical hypothesis', nl: 'Historische hypothese' },
      heading: { en: 'Goitein: priestly settlements', nl: 'Goitein: priesterlijke nederzettingen' },
      quote: {
        en: 'As the late Professor S. Klein showed, towns inhabited only or mainly by priests remained common for many centuries after the Temple was destroyed, because the detailed rules of priestly purity were easier to observe in close communities.',
        nl: 'Zoals wijlen professor S. Klein heeft aangetoond, waren steden die uitsluitend of voornamelijk door priesters werden bewoond nog vele eeuwen na de verwoesting van de Tempel gebruikelijk, omdat de uitgebreide wetten inzake priesterlijke reinheid gemakkelijker konden worden nageleefd in hechte gemeenschappen.',
      },
      text: {
        en: 'Goitein connects this pattern to reports that two Jewish tribes of Medina were called priestly. The comparison makes a settlement history plausible to him; it is not a contemporary record of migration into Medina.',
        nl: 'Goitein verbindt dit patroon met berichten die twee Joodse stammen van Medina priesterlijk noemen. Voor hem maakt die vergelijking een nederzettingsgeschiedenis aannemelijk; zij is geen eigentijds verslag van migratie naar Medina.',
      },
      source: { label: 'Goitein, Jews and Arabs, p. 48', url: 'https://books.google.com/books?id=phG7AAAAIAAJ' },
    },
    {
      id: 'rabin', number: '03', type: { en: 'Scholarly conjecture', nl: 'Wetenschappelijke veronderstelling' },
      heading: { en: 'Rabin: where did Qumran go?', nl: 'Rabin: waar bleef Qumran?' },
      quote: {
        en: 'What became of the group after it left Qumran?',
        nl: 'Wat is er met de groep gebeurd nadat zij Qumran had verlaten?',
      },
      text: {
        en: 'Rabin tested a possible Arabian afterlife for Qumran traditions. He noted that Goitein had considered, then rejected, an offshoot of the Dead Sea Scrolls group because he saw too little affinity with Talmudic literature. Rabin argued that Qumran was closer to rabbinic Judaism than that objection allowed.',
        nl: 'Rabin onderzocht of Qumrantradities in Arabië konden voortleven. Hij merkte op dat Goitein een aftakking van de Dode-Zeerollengroep had overwogen, maar verworpen wegens te weinig verwantschap met talmoedische literatuur. Volgens Rabin stond Qumran dichter bij het rabbijnse jodendom dan dat bezwaar toeliet.',
      },
      source: { label: 'Rabin, Islam and the Qumran Sect, pp. 1–3', url: 'https://almuslih.org/wp-content/uploads/2024/12/Rabin-C-Islam-and-the-Qumran-sect-.pdf' },
    },
    {
      id: 'rule', number: '04', type: { en: 'Ancient community text', nl: 'Oude gemeenschapstekst' },
      heading: { en: 'The Community Rule', nl: 'De Gemeenschapsregel' },
      quote: {
        en: 'In the wilderness prepare the way of the LORD; make straight in the desert a highway for our God.',
        nl: 'Bereid de weg van de HEERE, maak recht in de wildernis een gebaande weg voor onze God.',
      },
      text: {
        en: '1QS 8:13–15 calls the community to separate into the wilderness and quotes Isaiah 40:3. The sons of Aaron have authority elsewhere in the Rule (1QS 9:7). The text does not say that this community migrated to Arabia.',
        nl: '1QS 8:13–15 roept de gemeenschap op zich in de woestijn af te zonderen en citeert Jesaja 40:3. De zonen van Aäron hebben elders in de Regel gezag (1QS 9:7). De tekst zegt niet dat deze gemeenschap naar Arabië trok.',
      },
      source: { label: 'Community Rule, 1QS 8:13–15; 9:7', url: 'https://intertextual.bible/read/1qs/9' },
    },
    {
      id: 'urwah', number: '05', type: { en: 'Later origin legend', nl: 'Latere oorsprongslegende' },
      heading: { en: 'ʿUrwa’s Amalekites', nl: 'De ʿAmālīq van ʿUrwa' },
      quote: {
        en: 'The ʿAmālīq had spread through the lands and settled in Mecca, Medina, and the whole Ḥijāz …',
        nl: 'De ʿAmālīq (Amalekieten) hadden zich over de landen verspreid en woonden in Mekka, Medina en de hele Ḥijāz …',
      },
      text: {
        en: 'The report attributed to ʿUrwa continues with Moses sending Israelites against the ʿAmālīq; it ends by explaining Jewish settlement in the Ḥijāz. It reaches us through Ibn Zabāla as preserved by al-Samhūdī. It is a tradition about origins, not direct evidence for events in Moses’s time.',
        nl: 'Het aan ʿUrwa toegeschreven verhaal gaat verder met Israëlieten die Mozes tegen de ʿAmālīq uitstuurt; zo verklaart het de Joodse vestiging in de Ḥijāz. Het bereikt ons via Ibn Zabāla, bewaard door al-Samhūdī. Het is een herkomstverhaal, geen direct bewijs voor gebeurtenissen in de tijd van Mozes.',
      },
      source: { label: 'al-Samhūdī, Wafāʾ al-wafāʾ, 1:296–297', url: 'https://sites.dlib.nyu.edu/viewer/books/aub_aco001201/display?lang=en' },
    },
  ],
  closing: {
    en: 'A dated inscription establishes presence by 302/303 CE. None of these later explanations alone establishes the first arrival.',
    nl: 'Een gedateerde inscriptie toont aanwezigheid in 302/303 n.Chr. Geen van deze latere verklaringen bepaalt op zichzelf de eerste aankomst.',
  },
};
