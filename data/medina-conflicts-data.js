// Each case names the source that makes the claim. The accounts are not merged into a single causal chain.
const waqidi = 'https://www.emaanlibrary.com/wp-content/uploads/2024/11/The-life-of-prophet-Waqidis-Kitab-al-maghazi-Routledge-2011.pdf';
const nadirSira = 'https://www.islamweb.net/ar/library/content/58/1095/%D8%AE%D8%B1%D9%88%D8%AC-%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84-%D8%A5%D9%84%D9%89-%D8%A8%D9%86%D9%8A-%D8%A7%D9%84%D9%86%D8%B6%D9%8A%D8%B1-%D9%8A%D8%B3%D8%AA%D8%B9%D9%8A%D9%86%D9%87%D9%85-%D9%81%D9%8A-%D8%AF%D9%8A%D8%A9-%D9%82%D8%AA%D9%84%D9%89-%D8%A8%D9%86%D9%8A-%D8%B9%D8%A7%D9%85%D8%B1-%D9%88%D9%87%D9%85%D9%87%D9%85-%D8%A8%D8%A7%D9%84%D8%BA%D8%AF%D8%B1-%D8%A8%D9%87';
const qurayzaSira = 'https://www.islamweb.net/amp/ar/library/content/58/1164/%D9%86%D8%B2%D9%88%D9%84-%D8%A8%D9%86%D9%8A-%D9%82%D8%B1%D9%8A%D8%B8%D8%A9-%D8%B9%D9%84%D9%89-%D8%AD%D9%83%D9%85-%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84-%D9%88%D8%AA%D8%AD%D9%83%D9%8A%D9%85-%D8%B3%D8%B9%D8%AF';

export const qaynuqaConflict = {
  number: '16', era: { en: 'After Badr · 2 AH', nl: 'Na Badr · 2 AH' },
  title: 'Banū Qaynuqāʿ',
  intro: {
    en: 'Banū Qaynuqāʿ were a Jewish group in Medina allied with people of Khazraj. After the Muslim victory at Badr, later sources give different reasons for their conflict with Muḥammad’s community. Both accounts need to be read as reports.',
    nl: 'Banū Qaynuqāʿ was een Joodse groep in Medina met bondgenoten binnen Khazraj. Na de moslimoverwinning bij Badr geven latere bronnen verschillende redenen voor hun conflict met Muḥammads gemeenschap. Beide zijn overgeleverde berichten.',
  },
  alliance: {
    side: 'khazraj', result: { en: 'Intercession succeeds', nl: 'Bemiddeling slaagt' },
    heading: { en: 'Khazraj connection: two choices', nl: 'Khazraj: twee keuzes' },
    text: {
      en: 'Ibn Isḥāq calls Qaynuqāʿ allies of the Khazraj. The Khazraj leader ʿAbd Allāh ibn Ubayy presses Muḥammad to spare them; ʿUbāda ibn al-Ṣāmit, also of Khazraj, renounces his alliance with them. The link is political, not a single tribal response.',
      nl: 'Ibn Isḥāq noemt Qaynuqāʿ bondgenoten van de Khazraj. De Khazraj-leider ʿAbd Allāh ibn Ubayy dringt erop aan hen te sparen; ʿUbāda ibn al-Ṣāmit, ook van Khazraj, verbreekt juist zijn bondgenootschap met hen. De band is politiek, zonder eensgezinde reactie van de stam.',
    },
    source: { label: 'Ibn Isḥāq via Ibn Hishām, Qaynuqāʿ account', url: 'https://www.islamweb.net/ar/library/content/58/918/%D8%AA%D8%A8%D8%B1%D8%A4-%D8%A7%D8%A8%D9%86-%D8%A7%D9%84%D8%B5%D8%A7%D9%85%D8%AA-%D9%85%D9%86-%D8%AD%D9%84%D9%81%D9%87%D9%85-%D9%88%D9%85%D8%A7-%D9%86%D8%B2%D9%84-%D9%81%D9%8A%D9%87-%D9%88%D9%81%D9%8A-%D8%A7%D8%A8%D9%86-%D8%A3%D8%A8%D9%8A' },
  },
  cases: [
    {
      id: 'challenge', label: { en: 'Public challenge', nl: 'Openbare uitdaging' },
      heading: { en: '“You have not fought men like us”', nl: '‘Je hebt nog niet tegen ons gevochten’' },
      text: {
        en: 'In Ibn Isḥāq’s account, Muḥammad gathers them in their market after Badr and warns them. They answer that Quraysh were inexperienced fighters and that a fight with them would be different. This report frames a hostile exchange; it does not mention the woman in the market.',
        nl: 'Volgens Ibn Isḥāq verzamelt Muḥammad hen na Badr op hun markt en waarschuwt hij hen. Zij antwoorden dat de Quraysh onervaren strijders waren en dat een gevecht met hen anders zou zijn. Dit bericht beschrijft een vijandige woordenwisseling; de vrouw op de markt komt er niet in voor.',
      },
      source: { label: 'Ibn Isḥāq via Ibn Hishām, Sīra II:47', url: 'https://www.islamweb.net/ar/library/content/58/915/%D9%86%D8%B5%D9%8A%D8%AD%D8%A9-%D8%A7%D9%84%D8%B1%D8%B3%D9%88%D9%84-%D9%84%D9%87%D9%85-%D9%88%D8%B1%D8%AF%D9%87%D9%85-%D8%B9%D9%84%D9%8A%D9%87' },
      reading: { en: 'A political and military confrontation after Badr.', nl: 'Een politieke en militaire confrontatie na Badr.' },
    },
    {
      id: 'market', label: { en: 'Market violence', nl: 'Geweld op de markt' },
      heading: { en: 'A woman, a goldsmith, two deaths', nl: 'Een vrouw, een goudsmid, twee doden' },
      text: {
        en: 'In the account added by Ibn Hishām and also told by al-Wāqidī, a goldsmith fastens a woman’s garment so that she is exposed when she stands. A Muslim kills him; members of Qaynuqāʿ kill the Muslim. The incident becomes the immediate occasion for open conflict.',
        nl: 'In het door Ibn Hishām toegevoegde verhaal, ook verteld door al-Wāqidī, maakt een goudsmid de kleding van een vrouw vast zodat zij ontbloot raakt wanneer zij opstaat. Een moslim doodt hem; leden van Qaynuqāʿ doden de moslim. Het incident wordt de directe aanleiding voor openlijke strijd.',
      },
      source: { label: 'Ibn Hishām citing Abū ʿAwn, Sīra II:48', url: 'https://islamweb.net/ar/library/index.php?ID=916&bk_no=58&flag=1&page=bookcontents' },
      reading: { en: 'A narrated incident, not a detail in Ibn Isḥāq’s market speech.', nl: 'Een verteld incident, geen detail uit de markttoespraak van Ibn Isḥāq.' },
    },
  ],
  outcome: {
    heading: { en: 'Siege → intercession → exile', nl: 'Belegering → bemiddeling → verbanning' },
    text: {
      en: 'After surrender, ʿAbd Allāh ibn Ubayy intercedes for his allies. The account says the men are spared and the group leaves Medina; their weapons and property are taken. Al-Wāqidī reports that they pass through Wādī al-Qurā toward Adhriʿāt.',
      nl: 'Na de overgave bemiddelt ʿAbd Allāh ibn Ubayy voor zijn bondgenoten. Volgens het bericht worden de mannen gespaard en verlaat de groep Medina; hun wapens en bezit worden ingenomen. Al-Wāqidī vermeldt een route via Wādī al-Qurā naar Adhriʿāt.',
    },
    source: { label: 'al-Wāqidī, Maghāzī, pp. 177–180', url: waqidi },
  },
};

export const nadirConflict = {
  number: '17', era: { en: 'After Biʾr Maʿūna · 4 AH', nl: 'Na Biʾr Maʿūna · 4 AH' },
  title: 'Banū al-Naḍīr',
  intro: {
    en: 'Banū al-Naḍīr were another Jewish group in Medina. Later reports allege a plot against Muḥammad but disagree about its setting. The group was ordered to leave; a promised intervention from Khazraj did not come.',
    nl: 'Banū al-Naḍīr was een andere Joodse groep in Medina. Latere berichten spreken van een complot tegen Muḥammad, maar verschillen over de omstandigheden. De groep moest vertrekken; de beloofde hulp uit Khazraj bleef uit.',
  },
  alliance: {
    side: 'khazraj', result: { en: 'Promised aid fails', nl: 'Toegezegde hulp blijft uit' },
    heading: { en: 'A Khazraj pledge, then no rescue', nl: 'Een belofte van Khazraj, geen redding' },
    text: {
      en: 'Ibn Isḥāq says ʿAbd Allāh ibn Ubayy and other men of Banū ʿAwf of Khazraj promised al-Naḍīr that they would fight beside them or leave with them. They did neither. Earlier reports disagree on whether al-Naḍīr had been aligned with Aws or Khazraj.',
      nl: 'Volgens Ibn Isḥāq beloofden ʿAbd Allāh ibn Ubayy en andere mannen van Banū ʿAwf van Khazraj om met al-Naḍīr te vechten of met hen te vertrekken. Zij deden geen van beide. Oudere bondgenootschappen worden verschillend weergegeven: met Aws of met Khazraj.',
    },
    source: { label: 'Ibn Isḥāq via Ibn Hishām, Naḍīr account', url: nadirSira },
    additionalSource: { label: 'al-Ṭabarī on Qurʾān 2:85, alliance variants', url: 'https://quran.ksu.edu.sa/tafseer/tabary/sura2-aya85.html' },
  },
  cases: [
    {
      id: 'blood-money', label: { en: 'Blood-money visit', nl: 'Bezoek voor bloedgeld' },
      heading: { en: 'The stone above the wall', nl: 'De steen boven de muur' },
      text: {
        en: 'After a Muslim kills two men under Muḥammad’s protection, he visits al-Naḍīr for help paying blood money. Ibn Isḥāq relates that some leaders plan to drop a stone on him while he sits by a wall. He leaves before the plan is carried out.',
        nl: 'Nadat een moslim twee mannen onder Muḥammads bescherming heeft gedood, bezoekt hij al-Naḍīr voor hulp bij het bloedgeld. Ibn Isḥāq vertelt dat enkele leiders een steen op hem willen laten vallen terwijl hij bij een muur zit. Hij vertrekt voordat het plan wordt uitgevoerd.',
      },
      source: { label: 'Ibn Isḥāq via Ibn Hishām, Naḍīr account', url: nadirSira },
      reading: { en: 'The blood-money request is the setting; the alleged assassination plan is the stated rupture.', nl: 'Het verzoek om bloedgeld is de context; het vermeende moordplan vormt volgens dit bericht de breuk.' },
    },
    {
      id: 'invitation', label: { en: 'Invitation trap', nl: 'Valstrik bij uitnodiging' },
      heading: { en: 'An invitation under Quraysh pressure', nl: 'Een uitnodiging onder druk van Quraysh' },
      text: {
        en: 'Sunan Abī Dāwūd 3004 instead says Quraysh threatened the Jews after Badr. Al-Naḍīr then proposed a meeting between Muḥammad with thirty companions and thirty of their scholars. The report abbreviates the intervening episode, then says he besieged them after they refused a new pact.',
        nl: 'Sunan Abī Dāwūd 3004 zegt daarentegen dat Quraysh de Joden na Badr bedreigden. Al-Naḍīr stelde vervolgens een ontmoeting voor tussen Muḥammad met dertig metgezellen en dertig van hun geleerden. Het bericht kort de tussenliggende gebeurtenis af en zegt daarna dat hij hen belegert wanneer zij een nieuw verbond weigeren.',
      },
      source: { label: 'Sunan Abī Dāwūd 3004', url: 'https://sunnah.com/abudawud:3004' },
      reading: { en: 'A different prelude; the surviving hadith does not spell out the proposed method of attack.', nl: 'Een andere aanloop; de overgeleverde hadith werkt de voorgestelde aanvalsmethode niet uit.' },
    },
  ],
  outcome: {
    heading: { en: 'Exile · possessions carried, arms left', nl: 'Verbanning · bezit mee, wapens achter' },
    text: {
      en: 'The transmitted settlement lets them take what their camels can carry, excluding weapons. Some go to Khaybar and some toward Syria. Their Medina property passes to Muḥammad’s control and is distributed.',
      nl: 'Volgens de overgeleverde regeling mogen zij meenemen wat hun kamelen kunnen dragen, met uitzondering van wapens. Sommigen gaan naar Khaybar, anderen richting Syrië. Hun bezit in Medina komt onder Muḥammads beheer en wordt verdeeld.',
    },
    source: { label: 'Ibn Isḥāq via Ibn Hishām, Naḍīr account', url: nadirSira },
    vignette: {
      label: { en: 'The departure as al-Wāqidī tells it', nl: 'Het vertrek volgens al-Wāqidī' },
      text: {
        en: 'The procession passes through Medina with women in silk and green and red velvet, wearing gold jewelry. A reported onlooker remembers two women by name and says he had never seen beauty like theirs. The display reads as a public show of composure amid expulsion.',
        nl: 'De stoet trekt door Medina met vrouwen in zijde en groen en rood fluweel, met gouden sieraden. Een opgevoerde toeschouwer noemt twee vrouwen bij naam en zegt nooit eerder zulke schoonheid te hebben gezien. De vertoning wordt beschreven als een openbaar teken van zelfbeheersing tijdens de verbanning.',
      },
      source: { label: 'al-Wāqidī, Maghāzī, pp. 374–376', url: waqidi },
    },
  },
};

export const qurayzaConflict = {
  number: '18', era: { en: 'After the Trench · 5 AH', nl: 'Na de Slag bij de Greppel · 5 AH' },
  title: 'Banū Qurayẓa',
  intro: {
    en: 'After besieging armies withdrew from Medina, Banū Qurayẓa surrendered to Muḥammad’s forces. Accounts differ on how the conflict began; later reports describe the killing of fighting men and captivity of women and children. We also follow their Aws allies’ unsuccessful appeal for mercy.',
    nl: 'Nadat belegerende legers zich uit Medina hadden teruggetrokken, gaf Banū Qurayẓa zich over aan Muḥammads troepen. De bronnen verschillen over het begin van het conflict; latere berichten beschrijven het doden van strijdende mannen en de gevangenneming van vrouwen en kinderen. We volgen ook de vergeefse vraag om genade van hun bondgenoten van Aws.',
  },
  alliance: {
    side: 'aws', result: { en: 'Intercession fails', nl: 'Bemiddeling faalt' },
    heading: { en: 'Aws asks for the Qaynuqāʿ precedent', nl: 'Aws beroept zich op het precedent van Qaynuqāʿ' },
    text: {
      en: 'Ibn Isḥāq says Aws appealed for their Qurayẓa allies, recalling the clemency won by Khazraj’s Ibn Ubayy for Qaynuqāʿ. Muḥammad assigned judgment to their own leader Saʿd ibn Muʿādh. Aws urged him to show mercy; he did not.',
      nl: 'Volgens Ibn Isḥāq pleitte Aws voor hun bondgenoten van Qurayẓa, met verwijzing naar de clementie die Ibn Ubayy van Khazraj voor Qaynuqāʿ verkreeg. Muḥammad liet hun eigen leider Saʿd ibn Muʿādh oordelen. Aws drong bij hem aan op genade; die verleende hij niet.',
    },
    source: { label: 'Ibn Isḥāq via Ibn Hishām, Qurayẓa account', url: qurayzaSira },
  },
  cases: [
    {
      id: 'huyayy', label: { en: 'Ibn Isḥāq’s narrative', nl: 'Verhaal van Ibn Isḥāq' },
      heading: { en: 'Ḥuyayy persuades Kaʿb', nl: 'Ḥuyayy overtuigt Kaʿb' },
      text: {
        en: 'During the Trench, Ḥuyayy of al-Naḍīr approaches Kaʿb ibn Asad, holder of Qurayẓa’s pact. Kaʿb initially refuses, recalling Muḥammad’s fidelity, but is persuaded to break the agreement after Ḥuyayy promises to share their fate if the confederates withdraw.',
        nl: 'Tijdens de Slag bij de Greppel benadert Ḥuyayy van al-Naḍīr Kaʿb ibn Asad, beheerder van Qurayẓa’s verbond. Kaʿb weigert eerst en herinnert zich Muḥammads trouw, maar laat zich overhalen nadat Ḥuyayy belooft hun lot te delen als de coalitie zich terugtrekt.',
      },
      source: { label: 'Ibn Isḥāq via Ibn Hishām, Sīra II:220–221', url: 'https://islamweb.net/ar/library/content/58/1136/%D8%AD%D9%85%D9%84-%D8%AD%D9%8A%D9%8A-%D9%83%D8%B9%D8%A8%D8%A7-%D8%B9%D9%84%D9%89-%D9%86%D9%82%D8%B6-%D8%B9%D9%87%D8%AF%D9%87-%D9%84%D9%84%D8%B1%D8%B3%D9%88%D9%84' },
      reading: { en: 'A detailed retrospective account of a breach during the siege.', nl: 'Een gedetailleerd terugblikkend verhaal over een verdragsbreuk tijdens de belegering.' },
    },
    {
      id: 'quran', label: { en: 'Qurʾānic framing', nl: 'Qurʾānische duiding' },
      heading: { en: '“Those who supported them”', nl: '‘Zij die hen steunden’' },
      text: {
        en: 'Qurʾān 33:26 speaks of People of the Book who supported the confederates and were brought down from their fortresses. The verse does not name Qurayẓa or narrate Kaʿb’s decision; later tafsīr identifies the group as Qurayẓa.',
        nl: 'Qurʾān 33:26 spreekt over Mensen van het Boek die de coalitie steunden en uit hun vestingen werden gehaald. Het vers noemt Qurayẓa niet en vertelt Kaʿbs besluit niet; latere tafsīr identificeert de groep als Qurayẓa.',
      },
      source: { label: 'Qurʾān 33:26; al-Ṭabarī on 33:26', url: 'https://quran.ksu.edu.sa/tafseer/tabary/sura33-aya26.html' },
      reading: { en: 'A shorter charge of support, without the negotiation scene.', nl: 'Een kortere beschuldiging van steun, zonder de onderhandelingsscène.' },
    },
    {
      id: 'gabriel', label: { en: 'Why march at once?', nl: 'Waarom direct optrekken?' },
      heading: { en: 'The command after the Trench', nl: 'Het bevel na de Greppel' },
      text: {
        en: 'In ʿĀʾisha’s report in al-Bukhārī, Gabriel tells Muḥammad not to put down his arms after the confederates leave and points toward Qurayẓa. It explains the immediate expedition, but does not describe the alleged breach itself.',
        nl: 'In ʿĀʾisha’s bericht bij al-Bukhārī zegt Gabriël tegen Muḥammad dat hij na het vertrek van de coalitie zijn wapens niet moet neerleggen en wijst hij naar Qurayẓa. Dit verklaart de onmiddellijke expeditie, maar beschrijft de vermeende verdragsbreuk zelf niet.',
      },
      source: { label: 'Ṣaḥīḥ al-Bukhārī 2813', url: 'https://sunnah.com/bukhari:2813' },
      reading: { en: 'A report about the timing of the campaign, not an independent breach narrative.', nl: 'Een bericht over het tijdstip van de veldtocht, geen zelfstandig verhaal over de verdragsbreuk.' },
    },
  ],
  outcome: {
    heading: { en: 'Siege → Saʿd’s judgment', nl: 'Belegering → oordeel van Saʿd' },
    text: {
      en: 'After surrender, Saʿd ibn Muʿādh judges that the fighting men be killed and the offspring taken captive. Ibn Isḥāq’s fuller account also names women as captives and property as spoils. The hadith gives no total number.',
      nl: 'Na de overgave oordeelt Saʿd ibn Muʿādh dat de strijdende mannen worden gedood en hun kinderen gevangengenomen. Ibn Isḥāqs uitvoeriger verslag noemt ook vrouwen als gevangenen en bezit als buit. De hadith noemt geen totaal aantal.',
    },
    source: { label: 'Ṣaḥīḥ al-Bukhārī 4121', url: 'https://sunnah.com/bukhari:4121' },
    additionalSource: { label: 'Ibn Isḥāq via Ibn Hishām, Qurayẓa account', url: qurayzaSira },
  },
  legalComparison: {
    heading: { en: 'Did Saʿd judge by Jewish law?', nl: 'Oordeelde Saʿd volgens Joods recht?' },
    report: {
      en: 'Saʿd: “Kill their fighting men and take their offspring captive.” Muḥammad: “You have judged according to God’s judgment” (or “the King’s judgment”).',
      nl: 'Saʿd: ‘Dood hun strijdende mannen en neem hun kinderen gevangen.’ Muḥammad: ‘Je hebt geoordeeld volgens Gods oordeel’ (of ‘het oordeel van de Koning’).',
    },
    reportSource: { label: 'Ṣaḥīḥ al-Bukhārī 4121', url: 'https://sunnah.com/bukhari:4121' },
    laterClaim: {
      en: 'A modern Diyanet teaching text explicitly says Saʿd judged by their Torah and cites Deuteronomy 20:10–14.',
      nl: 'Een hedendaagse onderwijstekst van Diyanet stelt uitdrukkelijk dat Saʿd volgens hun Thora oordeelde en verwijst naar Deuteronomium 20:10–14.',
    },
    laterClaimSource: { label: 'Diyanet, Siyer, p. 141', url: 'https://dijital.diyanet.gov.tr/File/Download?id=5113&path=5113_1.pdf' },
    verses: [
      { number: 10, text: { en: 'When you approach a city to fight against it, offer it peace.', nl: 'Wanneer je een stad nadert om ertegen te strijden, bied haar dan vrede aan.' } },
      { number: 11, text: { en: 'If it answers in peace and opens to you, all the people in it shall become subject to forced service and serve you.', nl: 'Als zij vreedzaam antwoordt en haar poorten opent, moeten alle inwoners dwangdiensten voor je verrichten en je dienen.' } },
      { number: 12, text: { en: 'If it does not make peace with you but wages war against you, then besiege it.', nl: 'Als zij geen vrede met je sluit maar oorlog tegen je voert, beleger haar dan.' } },
      { number: 13, text: { en: 'When the LORD your God gives it into your hand, put every male in it to the sword.', nl: 'Wanneer de HEER, je God, haar in je hand geeft, dood dan elke man daarin met het zwaard.' } },
      { number: 14, text: { en: 'But the women, the children, the livestock, and everything in the city—all its spoil—you may take as booty for yourself and use the spoil of your enemies that the LORD your God has given you.', nl: 'Maar de vrouwen, de kinderen, het vee en alles in de stad — al haar buit — mag je voor jezelf buitmaken en de buit van je vijanden gebruiken die de HEER, je God, je heeft gegeven.' } },
      { number: 15, text: { en: 'This is how you shall treat all cities very far away from you, which do not belong to the cities of these nations.', nl: 'Zo moet je handelen met alle steden die zeer ver van je vandaan liggen en die niet tot de steden van deze volken behoren.' } },
    ],
    scriptureSource: { label: 'Deuteronomy 20:10–15 · JPS 1917; deck translation', url: 'https://mechon-mamre.org/e/et/et0520.htm' },
    reading: {
      en: 'The resemblance is strongest in verses 13–14. The comparison has limits: Deuteronomy first requires an offer of peace, verse 15 specifies distant cities, and it says “every male” where the hadith says “fighting men.” Neither al-Bukhārī nor Ibn Isḥāq says Saʿd cited the Torah.',
      nl: 'De overeenkomst is het sterkst in verzen 13–14. De vergelijking heeft grenzen: Deuteronomium vraagt eerst een vredesaanbod, vers 15 spreekt over verre steden en de tekst zegt ‘elke man’ waar de hadith ‘strijdende mannen’ zegt. Noch al-Bukhārī noch Ibn Isḥāq zegt dat Saʿd de Thora aanhaalde.',
    },
  },
};
