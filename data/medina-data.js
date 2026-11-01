// Narrative reports are kept distinct from contemporary evidence and from one another.
const tabari = 'https://quran.ksu.edu.sa/tafseer/tabary/sura2-aya85.html';
const pactText = 'https://islamweb.net/ar/library/content/58/586/%D9%83%D8%AA%D8%A7%D8%A8%D9%87-%D8%B5%D9%84%D9%89-%D8%A7%D9%84%D9%84%D9%87-%D8%B9%D9%84%D9%8A%D9%87-%D9%88%D8%B3%D9%84%D9%85-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D9%85%D9%87%D8%A7%D8%AC%D8%B1%D9%8A%D9%86-%D9%88%D8%A7%D9%84%D8%A3%D9%86%D8%B5%D8%A7%D8%B1-%D9%88%D9%85%D9%88%D8%A7%D8%AF%D8%B9%D8%A9-%D9%8A%D9%87%D9%88%D8%AF';

export const medinaPrelude = {
  kind: 'story', number: '11',
  eyebrow: { en: 'Yathrib before Muḥammad · later account', nl: 'Yathrib vóór Muḥammad · later verhaal' },
  title: { en: 'Who held power in Yathrib?', nl: 'Wie had de macht in Yathrib?' },
  intro: { en: 'Ibn al-Athīr tells a dramatic reversal of power. Read it as a later account of how Aws and Khazraj came to dominate, not a dated eyewitness record.', nl: 'Ibn al-Athīr vertelt over een dramatische machtswisseling. Lees dit als een later verhaal over hoe Aws en Khazraj dominant werden, niet als een gedateerd ooggetuigenverslag.' },
  steps: [
    { label: { en: 'The setting', nl: 'Het decor' }, title: { en: 'Aws and Khazraj arrive', nl: 'Aws en Khazraj komen aan' }, text: { en: 'In this account, Jewish groups already hold the upper hand in Yathrib when the Arab Aws and Khazraj settle there.', nl: 'In dit verhaal hebben Joodse groepen de overhand in Yathrib wanneer de Arabische Aws en Khazraj zich er vestigen.' }, kicker: { en: 'A claim within the account', nl: 'Een claim in het verhaal' } },
    { label: { en: 'The outrage', nl: 'De aanranding' }, title: { en: 'Al-Fiṭyawn’s claimed right', nl: 'De vermeende aanspraak van al-Fiṭyawn' }, text: { en: 'The ruler al-Fiṭyawn is said to have demanded access to brides before their husbands. The story is a “first night” motif; it cannot establish that such a right was actually practiced.', nl: 'Heerser al-Fiṭyawn zou toegang tot bruiden vóór hun echtgenoten hebben opgeëist. Dit is een motief van het “recht van de eerste nacht”; het verhaal bewijst niet dat zo’n recht werkelijk werd uitgeoefend.' }, kicker: { en: 'Narrative motif · not independent evidence', nl: 'Vertelmotief · geen onafhankelijk bewijs' } },
    { label: { en: 'The reversal', nl: 'De ommekeer' }, title: { en: 'Mālik ibn ʿAjlān acts', nl: 'Mālik ibn ʿAjlān handelt' }, text: { en: 'When Mālik’s sister is to marry, he kills al-Fiṭyawn, flees to the Ghassanid Abū Jubayla, and asks for help. Abū Jubayla then kills Jewish leaders. The account says Aws and Khazraj become Yathrib’s strongest groups.', nl: 'Wanneer Māliks zus gaat trouwen, doodt hij al-Fiṭyawn, vlucht naar de Ghassanid Abū Jubayla en vraagt om hulp. Abū Jubayla doodt vervolgens Joodse leiders. Volgens het verhaal worden Aws en Khazraj de machtigste groepen van Yathrib.' }, kicker: { en: 'Claimed change in the status quo', nl: 'Vermeende wijziging van de machtsverhouding' } },
  ],
  takeaway: { en: 'The account explains a political hierarchy by telling a moralized story of violence and reversal.', nl: 'Het verhaal verklaart een politieke machtsverhouding via een moreel geladen relaas van geweld en ommekeer.' },
  sources: [{ label: 'Ibn al-Athīr, al-Kāmil fī l-tārīkh', url: 'https://www.islamweb.net/ar/library/content/126/204/%D8%B0%D9%83%D8%B1-%D8%BA%D9%84%D8%A8%D8%A9-%D8%A7%D9%84%D8%A3%D9%86%D8%B5%D8%A7%D8%B1-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D9%88%D8%B6%D8%B9%D9%81-%D8%A3%D9%85%D8%B1-%D8%A7%D9%84%D9%8A%D9%87%D9%88%D8%AF-%D8%A8%D9%87%D8%A7-%D9%88%D9%82%D8%AA%D9%84-%D8%A7%D9%84%D9%81%D8%B7%D9%8A%D9%88%D9%86' }],
};

export const sumayrAlliances = {
  kind: 'matrix', number: '12',
  eyebrow: { en: 'Ḥarb Sumayr · competing alignments', nl: 'Ḥarb Sumayr · verschillende bondgenootschappen' },
  title: { en: 'Whose allies fought beside whom?', nl: 'Welke bondgenoten vochten met wie?' },
  intro: { en: 'Al-Ṭabarī preserves two alliance patterns while explaining Qurʾān 2:85. His al-Suddī report explicitly names the war of Sumayr; the Ibn Isḥāq report speaks of Aws–Khazraj warfare more generally.', nl: 'Al-Ṭabarī bewaart twee patronen van bondgenootschappen bij Qurʾān 2:85. Zijn bericht van al-Suddī noemt de oorlog van Sumayr expliciet; dat van Ibn Isḥāq spreekt algemener over strijd tussen Aws en Khazraj.' },
  context: { en: 'In Ibn al-Athīr’s later account, Sumayr of Aws kills a client of Mālik ibn ʿAjlān. A dispute over whether the victim deserves a full or half blood payment develops into the first war between Aws and Khazraj.', nl: 'In Ibn al-Athīrs latere verhaal doodt Sumayr van Aws een cliënt van Mālik ibn ʿAjlān. Een geschil over volledig of half bloedgeld voor het slachtoffer mondt uit in de eerste oorlog tussen Aws en Khazraj.' },
  columns: [
    { label: 'Ibn Isḥāq → Ibn ʿAbbās', note: { en: 'Aws–Khazraj war; Sumayr not named', nl: 'Oorlog Aws–Khazraj; Sumayr niet genoemd' }, khazraj: 'Banū Qaynuqāʿ', aws: 'Banū al-Naḍīr + Banū Qurayẓa' },
    { label: 'al-Suddī / Ibn Zayd', note: { en: 'al-Suddī names Ḥarb Sumayr; Ibn Zayd gives the same pairing', nl: 'al-Suddī noemt Ḥarb Sumayr; Ibn Zayd geeft dezelfde indeling' }, khazraj: 'Banū al-Naḍīr', aws: 'Banū Qurayẓa' },
  ],
  takeaway: { en: 'Qurayẓa stays with Aws in these reports; the disputed alignment is al-Naḍīr, and Qaynuqāʿ drops out of the second account.', nl: 'Qurayẓa blijft in deze berichten bij Aws; de plaats van al-Naḍīr verschilt, en Qaynuqāʿ ontbreekt in het tweede bericht.' },
  sources: [{ label: 'al-Ṭabarī on Qurʾān 2:85, reports 1471–1473', url: tabari }, { label: 'Ibn al-Athīr, Ḥarb Sumayr', url: 'https://www.islamweb.net/ar/library/content/126/205/%D8%AD%D8%B1%D8%A8-%D8%B3%D9%85%D9%8A%D8%B1' }],
};

export const brothersReport = {
  kind: 'report', number: '13',
  eyebrow: { en: 'A report read alongside a verse', nl: 'Een bericht gelezen naast een vers' },
  title: { en: 'Brothers on opposite sides', nl: 'Broeders aan weerszijden' },
  intro: { en: 'Ibn Zayd’s explanation of Qurʾān 2:85 makes the split itself the point: related communities fought each other despite possessing Scripture.', nl: 'In Ibn Zayds uitleg van Qurʾān 2:85 staat de verdeeldheid centraal: verwante gemeenschappen bevochten elkaar terwijl zij de Schrift bezaten.' },
  report: {
    en: '“Banū Qurayẓa and Banū al-Naḍīr were brothers [related communities], and they were in this same situation, while the Scripture was in their possession. Likewise, the Aws and Khazraj were brothers, but they became divided. Qurayẓa and al-Naḍīr also became divided. Al-Naḍīr were with the Khazraj, while Qurayẓa were with the Aws. They consequently fought one another, and some of them killed others. Then God, exalted is His praise, said: ‘Then here you are, killing one another and expelling a group of yourselves from their homes...’ [Qurʾān 2:85], to the end of the verse.”',
    nl: '‘Banū Qurayẓa en Banū al-Naḍīr waren broeders [verwante gemeenschappen] en verkeerden in dezelfde situatie, terwijl de Schrift in hun bezit was. Ook Aws en Khazraj waren broeders, maar zij raakten verdeeld. Qurayẓa en al-Naḍīr raakten eveneens verdeeld. Al-Naḍīr stonden aan de kant van Khazraj, Qurayẓa aan die van Aws. Zo vochten zij tegen elkaar en doodden sommigen anderen. Toen zei God, verheven is Zijn lof: “Daar zijn jullie dan: jullie doden elkaar en verdrijven een groep van jullie uit hun huizen...” [Qurʾān 2:85], tot het einde van het vers.’',
  },
  verse: {
    ar: 'ثُمَّ أَنتُمْ هَٰؤُلَاءِ تَقْتُلُونَ أَنفُسَكُمْ وَتُخْرِجُونَ فَرِيقًا مِّنكُم مِّن دِيَارِهِمْ تَظَاهَرُونَ عَلَيْهِم بِالْإِثْمِ وَالْعُدْوَانِ وَإِن يَأْتُوكُمْ أُسَارَىٰ تُفَادُوهُمْ وَهُوَ مُحَرَّمٌ عَلَيْكُمْ إِخْرَاجُهُمْ ۚ أَفَتُؤْمِنُونَ بِبَعْضِ الْكِتَابِ وَتَكْفُرُونَ بِبَعْضٍ ۚ فَمَا جَزَاءُ مَن يَفْعَلُ ذَٰلِكَ مِنكُمْ إِلَّا خِزْيٌ فِي الْحَيَاةِ الدُّنْيَا ۖ وَيَوْمَ الْقِيَامَةِ يُرَدُّونَ إِلَىٰ أَشَدِّ الْعَذَابِ ۗ وَمَا اللَّهُ بِغَافِلٍ عَمَّا تَعْمَلُونَ',
    en: 'Then here you are, killing one another and driving a group of your own from their homes, joining against them in sin and aggression. Yet if they come to you as captives, you ransom them, although their expulsion was forbidden to you. Do you believe in part of the Scripture and reject part? The recompense for those of you who do so is disgrace in this life; on the Day of Resurrection they will be returned to the severest punishment. God is not unaware of what you do.',
    nl: 'Daar zijn jullie dan: jullie doden elkaar en verdrijven een groep van jullie uit hun huizen, terwijl jullie elkaar tegen hen helpen in zonde en vijandschap. Maar als zij als gevangenen bij jullie komen, kopen jullie hen vrij, hoewel hun verdrijving jullie verboden was. Geloven jullie dan in een deel van de Schrift en verwerpen jullie een ander deel? Wie van jullie zo handelt, krijgt schande in dit leven; op de Dag van de Opstanding wordt hij teruggebracht naar de zwaarste bestraffing. God ontgaat niet wat jullie doen.',
  },
  takeaway: { en: 'The report applies the verse to a divided local alliance system; it does not independently date the fighting.', nl: 'Het bericht betrekt het vers op een verdeeld lokaal bondgenootschap; het dateert de strijd niet onafhankelijk.' },
  sources: [{ label: 'al-Ṭabarī on Qurʾān 2:85, Ibn Zayd report 1473', url: tabari }, { label: 'Qurʾān 2:85', url: 'https://quran.com/2/85' }],
};

export const bloodMoney = {
  kind: 'measure', number: '14',
  eyebrow: { en: 'Muḥammad in Medina · an appeal for judgment', nl: 'Muḥammad in Medina · beroep op zijn oordeel' },
  title: { en: 'One life, two blood-money rates', nl: 'Eén leven, twee bloedgeldtarieven' },
  intro: { en: 'In one transmitted explanation of Qurʾān 5:50, Banū Qurayẓa bring an unequal settlement before Muḥammad. A wasq is a unit of measure; the report counts wasqs of dates.', nl: 'In één overgeleverde uitleg van Qurʾān 5:50 legt Banū Qurayẓa een ongelijke regeling aan Muḥammad voor. Een wasq is een maateenheid; het bericht telt wasqs dadels.' },
  amounts: [
    { group: 'Banū al-Naḍīr', amount: 140, label: { en: 'if Qurayẓa killed a Naḍīr member', nl: 'als Qurayẓa iemand van al-Naḍīr doodde' } },
    { group: 'Banū Qurayẓa', amount: 70, label: { en: 'if Naḍīr killed a Qurayẓa member', nl: 'als al-Naḍīr iemand van Qurayẓa doodde' } },
  ],
  judgment: { en: 'The account says Muḥammad ruled that neither group had a superior claim in blood money or retaliation.', nl: 'Volgens het bericht oordeelde Muḥammad dat geen van beide groepen meer aanspraak had op bloedgeld of vergelding.' },
  caveat: { en: 'This exact 140:70 wording is from Muqātil’s tafsīr. Other reports preserve the unequal “double versus half” relation without these numbers.', nl: 'De precieze verhouding 140:70 komt uit Muqātils tafsīr. Andere berichten bewaren het verschil “dubbel tegenover half” zonder deze getallen.' },
  sources: [{ label: 'Muqātil b. Sulaymān on Qurʾān 5:50', url: 'https://tafsir.app/mathoor/5/50' }, { label: 'Sunan al-Nasāʾī 4733', url: 'https://sunnah.com/nasai:4733' }],
};

export const medinaPact = {
  kind: 'clauses', number: '15',
  eyebrow: { en: 'The Medina document · Muslims and Jews', nl: 'De oorkonde van Medina · moslims en Joden' },
  title: { en: '“One community with the believers”', nl: '‘Eén gemeenschap met de gelovigen’' },
  intro: { en: 'The text preserved by Ibn Isḥāq through Ibn Hishām sets terms for Jewish groups and the believers. Select a clause to read its wording.', nl: 'De tekst van Ibn Isḥāq via Ibn Hishām regelt de verhouding tussen Joodse groepen en de gelovigen. Kies een bepaling om de formulering te lezen.' },
  clauses: [
    { label: { en: 'Community', nl: 'Gemeenschap' }, arabic: 'وإن يهود بني عوف أمة مع المؤمنين، لليهود دينهم، وللمسلمين دينهم، مواليهم وأنفسهم', translation: { en: '“The Jews of Banū ʿAwf are a community with the believers. The Jews have their religion and the Muslims have theirs, their clients and themselves.”', nl: '‘De Joden van Banū ʿAwf vormen een gemeenschap met de gelovigen. De Joden hebben hun godsdienst en de moslims de hunne, hun cliënten en zijzelf.’' }, note: { en: 'The wording is “with the believers” (maʿa l-muʾminīn); it also preserves separate religious identities.', nl: 'De formulering is “met de gelovigen” (maʿa l-muʾminīn); zij behoudt ook afzonderlijke religieuze identiteiten.' } },
    { label: { en: 'Other Jewish groups', nl: 'Andere Joodse groepen' }, arabic: 'وإن ليهود بني النجار مثل ما ليهود بني عوف ... وإن ليهود بني الأوس مثل ما ليهود بني عوف', translation: { en: '“The Jews of Banū al-Najjār have what the Jews of Banū ʿAwf have … and the Jews of Banū al-Aws have what the Jews of Banū ʿAwf have.”', nl: '‘De Joden van Banū al-Najjār hebben hetzelfde als de Joden van Banū ʿAwf … en de Joden van Banū al-Aws hebben hetzelfde als de Joden van Banū ʿAwf.’' }, note: { en: 'The text extends this formula to several groups named after Arab clans. It does not name Qaynuqāʿ, Naḍīr, or Qurayẓa in this list.', nl: 'De tekst breidt deze formule uit tot meerdere groepen met namen van Arabische clans. Qaynuqāʿ, Naḍīr en Qurayẓa worden in deze lijst niet genoemd.' } },
    { label: { en: 'Costs and defense', nl: 'Kosten en verdediging' }, arabic: 'وإن على اليهود نفقتهم وعلى المسلمين نفقتهم؛ وإن بينهم النصر على من حارب أهل هذه الصحيفة', translation: { en: '“The Jews bear their expenses and the Muslims bear theirs. Between them there is mutual aid against whoever fights the people of this document.”', nl: '‘De Joden dragen hun kosten en de moslims de hunne. Zij helpen elkaar tegen wie de mensen van deze oorkonde bestrijdt.’' }, note: { en: 'Shared defense does not erase separate financial responsibility.', nl: 'Gezamenlijke verdediging heft de afzonderlijke verantwoordelijkheid voor kosten niet op.' } },
    { label: { en: 'Disputes', nl: 'Geschillen' }, arabic: 'وإنه ما كان بين أهل هذه الصحيفة من حدث أو اشتجار يخاف فساده، فإن مرده إلى الله عز وجل، وإلى محمد رسول الله', translation: { en: '“Any incident or dispute among the people of this document whose harm is feared is referred to God and to Muḥammad, the Messenger of God.”', nl: '‘Elk voorval of geschil tussen de mensen van deze oorkonde waarvan schade wordt gevreesd, wordt voorgelegd aan God en aan Muḥammad, de boodschapper van God.’' }, note: { en: 'The document gives Muḥammad a role in settling dangerous disputes.', nl: 'De oorkonde geeft Muḥammad een rol bij de beslechting van gevaarlijke geschillen.' } },
  ],
  takeaway: { en: 'The document describes a negotiated political community: religious distinction, shared defense, separate costs, and a route for disputes.', nl: 'De oorkonde beschrijft een overeengekomen politieke gemeenschap: verschillende religies, gezamenlijke verdediging, afzonderlijke kosten en een route voor geschillen.' },
  sources: [{ label: 'Ibn Hishām, Sīra, Medina document', url: pactText }],
};
