// These are textual witnesses to a reported pact, not a dated list of enacted laws.
// A missing clause does not amount to permission to teach or learn the Qur'an.
// The 2006 printed edition is a page-image PDF; page fragments open the relevant report.
const ibnZabrEdition = 'https://s2.ketabonline.com/uploads/2020/04/1026752633801983392.pdf';

export const pactVariants = {
  number: '22',
  eyebrow: { en: 'The Pact of ʿUmar · six textual witnesses', nl: 'De voorwaarden van ʿUmar · zes tekstgetuigen' },
  title: { en: 'One rule, several versions', nl: 'Eén bepaling, meerdere versies' },
  intro: {
    en: 'Later texts attributed rules for Christians to early Muslim leaders. Compare one clause: could Christians learn the Qurʾān themselves, or teach it to their children? The surviving versions do not give the same wording.',
    nl: 'Latere teksten schrijven regels voor christenen toe aan vroege islamitische leiders. Vergelijk één bepaling: mochten christenen zelf de Koran leren of die aan hun kinderen onderwijzen? De overgeleverde versies formuleren dit niet hetzelfde.',
  },
  columns: {
    witness: { en: 'Text · collection date', nl: 'Tekst · datering verzameling' },
    attributed: { en: 'Attributed to', nl: 'Toegeschreven aan' },
    clause: { en: 'Qurʾān teaching clause', nl: 'Bepaling over koranonderwijs' },
  },
  rows: [
    {
      id: 'abu-yusuf', witness: 'Abū Yūsuf · Kitāb al-kharāj', date: { en: 'before 798 CE', nl: 'vóór 798 n.Chr.' },
      attributed: 'Abū ʿUbayda', status: 'absent',
      detail: {
        en: 'Abū Yūsuf summarizes a settlement attributed to Abū ʿUbayda. This comparison finds no clause here about learning or teaching the Qurʾān; silence does not establish permission.',
        nl: 'Abū Yūsuf vat een aan Abū ʿUbayda toegeschreven regeling samen. In deze vergelijking ontbreekt een bepaling over het leren of onderwijzen van de Koran; stilzwijgen bewijst geen toestemming.',
      },
      excerpt: 'أن أبا عبيدة بن الجراح صالحهم بالشام واشترط عليهم حين دخلها على أن تترك كنائسهم وبيعهم',
      excerptTranslation: {
        en: 'Abū ʿUbayda ibn al-Jarrāḥ made a settlement with them in Syria and stipulated, when he entered it, that their churches and places of worship would be left to them.',
        nl: 'Abū ʿUbayda ibn al-Jarrāḥ sloot in Syrië een overeenkomst met hen en bedong bij zijn komst dat hun kerken en gebedshuizen voor hen behouden zouden blijven.',
      },
      source: { label: 'Abū Yūsuf · Kitāb al-kharāj, p. 138', url: 'https://ablibrary.net/book_content/b/14801/138?lang=ar' },
    },
    {
      id: 'ibn-zabr-9', witness: 'Ibn Zabr · report 9', date: { en: 'collected by 940 CE', nl: 'verzameld vóór 940 n.Chr.' },
      attributed: 'ʿUmar via Ibn Ghanm', status: 'both',
      detail: {
        en: 'This recension adds a broader pledge: the Christians would neither learn the Qurʾān themselves nor teach it to their children.',
        nl: 'Deze versie bevat een ruimere belofte: de christenen zouden de Koran zelf niet leren en die ook niet aan hun kinderen onderwijzen.',
      },
      excerpt: 'ولا نتعلم القرآن ولا نعلمه أولادنا',
      excerptTranslation: {
        en: 'And we shall neither learn the Qurʾān nor teach it to our children.',
        nl: 'En wij zullen de Koran niet leren en die niet aan onze kinderen onderwijzen.',
      },
      source: { label: 'Ibn Zabr · Shurūṭ al-naṣārā, report 9, p. 22', url: `${ibnZabrEdition}#page=22` },
    },
    {
      id: 'ibn-zabr-10', witness: 'Ibn Zabr · report 10', date: { en: 'collected by 940 CE', nl: 'verzameld vóór 940 n.Chr.' },
      attributed: 'ʿUmar via Ibn Ghanm', status: 'children',
      detail: {
        en: 'The restriction concerns teaching children. The text does not separately prohibit adults from learning the Qurʾān.',
        nl: 'Het verbod betreft het onderwijzen van kinderen. De tekst verbiedt volwassenen niet afzonderlijk om de Koran te leren.',
      },
      excerpt: 'ولا نعلم أولادنا القرآن',
      excerptTranslation: {
        en: 'And we shall not teach our children the Qurʾān.',
        nl: 'En wij zullen onze kinderen de Koran niet onderwijzen.',
      },
      source: { label: 'Ibn Zabr · Shurūṭ al-naṣārā, report 10, p. 24', url: `${ibnZabrEdition}#page=24` },
    },
    {
      id: 'ibn-zabr-13', witness: 'Ibn Zabr · report 13', date: { en: 'collected by 940 CE', nl: 'verzameld vóór 940 n.Chr.' },
      attributed: 'ʿIyāḍ ibn Ghanm', status: 'children',
      detail: {
        en: 'Here the reported agreement is attributed to ʿIyāḍ ibn Ghanm. Its Qurʾān clause is limited to teaching children.',
        nl: 'Hier wordt de overgeleverde afspraak aan ʿIyāḍ ibn Ghanm toegeschreven. De koranbepaling gaat alleen over het onderwijzen van kinderen.',
      },
      excerpt: 'ولا نعلم أولادنا القرآن',
      excerptTranslation: {
        en: 'And we shall not teach our children the Qurʾān.',
        nl: 'En wij zullen onze kinderen de Koran niet onderwijzen.',
      },
      source: { label: 'Ibn Zabr · Shurūṭ al-naṣārā, report 13, p. 27', url: `${ibnZabrEdition}#page=27` },
    },
    {
      id: 'ibn-zabr-15', witness: 'Ibn Zabr · report 15', date: { en: 'collected by 940 CE', nl: 'verzameld vóór 940 n.Chr.' },
      attributed: 'ʿIyāḍ ibn Ghanm · Edessa', status: 'absent',
      detail: {
        en: 'The Edessa account is connected to ʿIyāḍ ibn Ghanm. The Qurʾān teaching clause is absent in this report.',
        nl: 'Het bericht over Edessa wordt verbonden met ʿIyāḍ ibn Ghanm. Een bepaling over koranonderwijs ontbreekt in dit bericht.',
      },
      excerpt: 'إني أمنتهم على دمائهم وأموالهم وذراريهم ونسائهم ومدينتهم وطواحينهم، إذا أدوا الحق الذي عليهم',
      excerptTranslation: {
        en: 'I granted them security for their lives, property, children, women, city and mills, provided they pay what is due from them.',
        nl: 'Ik verleende hun veiligheid voor hun leven, bezittingen, kinderen, vrouwen, stad en molens, mits zij betalen wat zij verschuldigd zijn.',
      },
      source: { label: 'Ibn Zabr · Shurūṭ al-naṣārā, report 15, pp. 28–29', url: `${ibnZabrEdition}#page=29` },
    },
    {
      id: 'ibn-asakir', witness: 'Ibn ʿAsākir · via Abū Mikhnaf', date: { en: 'collected by 1176 CE', nl: 'verzameld vóór 1176 n.Chr.' },
      attributed: 'Abū ʿUbayda', status: 'children',
      detail: {
        en: 'Ibn ʿAsākir preserves a version via Abū Mikhnaf that attributes the agreement to Abū ʿUbayda and forbids teaching children the Qurʾān.',
        nl: 'Ibn ʿAsākir bewaart via Abū Mikhnaf een versie die de afspraak aan Abū ʿUbayda toeschrijft en het onderwijzen van de Koran aan kinderen verbiedt.',
      },
      excerpt: 'ولا نطلع عليهم في منازلهم ولا نعلم أولادنا القرآن',
      excerptTranslation: {
        en: 'And we shall not look in on them in their homes, nor teach our children the Qurʾān.',
        nl: 'En wij zullen niet bij hen thuis naar binnen kijken en onze kinderen de Koran niet onderwijzen.',
      },
      source: { label: 'Ibn ʿAsākir · Tārīkh Madīnat Dimashq 2:120–121', url: 'https://ablibrary.net/book_content/b/6292/121?lang=ar' },
    },
  ],
  takeaway: {
    en: 'The most striking difference is within Ibn Zabr’s own collection: one version bars both learning and teaching, others bar only teaching children, and the Edessa report has no such clause.',
    nl: 'Het opvallendste verschil zit al in Ibn Zabrs eigen verzameling: één versie verbiedt leren én onderwijzen, andere verbieden alleen onderwijs aan kinderen, en het bericht over Edessa bevat de bepaling niet.',
  },
  caveat: {
    en: 'The dates above belong to the collectors, not the alleged agreements. These are differences between transmitted texts; they do not by themselves show a sequence of policy changes or how a rule was enforced.',
    nl: 'De dateringen horen bij de verzamelaars, niet bij de vermeende afspraken. Dit zijn verschillen tussen overgeleverde teksten; ze tonen op zichzelf geen opeenvolging van beleidswijzigingen of hoe een regel werd gehandhaafd.',
  },
  study: { label: 'El-Wakil, Zein & Rane (2024), pp. 435–440 · comparison of recensions', url: 'https://journals.iiu.edu.pk/index.php/islamicstudies/article/view/3433' },
};
