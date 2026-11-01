// The same author in two genres: theological refutation and an anecdote about love.
export const ibnHazmContrast = {
  id: 'ibn-hazm-polemic-and-almeria',
  mode: 'contrast',
  layout: 'reading',
  density: 'compact',
  eyebrow: { en: 'One author · two genres', nl: 'Eén auteur · twee genres' },
  title: { en: 'Ibn Ḥazm, twice', nl: 'Ibn Ḥazm, tweemaal' },
  intro: {
    en: 'Ibn Ḥazm was an eleventh-century Muslim writer in al-Andalus, in today’s Spain. He attacks the Torah in a religious argument, yet remembers a Jewish physician with respect in a book about love.',
    nl: 'Ibn Ḥazm was een islamitische schrijver uit de elfde eeuw in al-Andalus, het huidige Spanje. In een godsdienstig betoog valt hij de Thora aan; in een boek over liefde herinnert hij zich een Joodse arts met waardering.',
  },
  sides: [
    {
      id: 'al-fisal',
      label: { en: 'Theological polemic · al-Fiṣal', nl: 'Theologische polemiek · al-Fiṣal' },
      heading: { en: 'The Torah under attack', nl: 'De Thora onder vuur' },
      original: 'فصل في مناقضات ظاهرة وتكاذيب واضحة في الكتاب الذي تسميه اليهود التوراة',
      originalLang: 'ar',
      originalDirection: 'rtl',
      translationLabel: { en: 'Chapter heading · our translation', nl: 'Hoofdstuktitel · onze vertaling' },
      translation: {
        en: 'On evident contradictions and clear falsehoods in the book the Jews call the Torah.',
        nl: 'Over duidelijke tegenstrijdigheden en onmiskenbare onwaarheden in het boek dat de Joden de Thora noemen.',
      },
      context: {
        en: 'He treats what he sees as contradictions in the Jewish Torah as evidence that its text was altered and cannot be trusted as received revelation. The same chapter attacks the Christian Gospels.',
        nl: 'Wat hij als tegenstrijdigheden in de Joodse Thora ziet, gebruikt hij als bewijs dat de tekst is veranderd en niet als overgeleverde openbaring kan gelden. In hetzelfde hoofdstuk valt hij de christelijke evangeliën aan.',
      },
      sources: [
        { label: { en: 'al-Fiṣal · Arabic chapter', nl: 'al-Fiṣal · Arabisch hoofdstuk' }, url: 'https://www.islamarchive.cc/ketab_content/5267/p-86' },
      ],
    },
    {
      id: 'tawq-al-hamama',
      label: { en: 'Love treatise · Ṭawq al-Ḥamāma', nl: 'Liefdestraktaat · Ṭawq al-Ḥamāma' },
      heading: { en: 'At the physician’s shop', nl: 'In de winkel van de arts' },
      translationLabel: { en: 'Complete anecdote · new translation', nl: 'Volledige anekdote · aangeleverde vertaling' },
      translation: {
        en: 'One day I was sitting in Almería in the shop of Ismāʿīl ibn Yūnus, the Jewish physician. He had a keen eye for physiognomy and was very skilled at it. A small group of us was gathered there.\n\nMujāhid ibn al-Ḥuṣayn al-Qaysī said to him, “What do you think of that man?” He pointed to a man sitting somewhat apart from us. His name was Ḥātim, and his kunya was Abū al-Baqāʾ.\n\nIsmāʿīl looked at him for a short while and said, “He is a man in love.”\n\nMujāhid replied, “You are right. But how did you know?”\n\nHe answered, “From the extraordinary bewilderment plainly visible on his face, while it appeared in none of his other movements. That is how I knew he was in love and that nothing else was troubling him.”',
        nl: 'Op een dag zat ik in Almería in de winkel van Ismāʿīl ibn Yūnus, de Joodse arts. Hij had een scherp oog voor fysiognomie en was daar zeer bedreven in. Wij zaten daar met een klein gezelschap bijeen.\n\nToen zei Mujāhid ibn al-Ḥuṣayn al-Qaysī tegen hem: “Wat denk je van deze man?” Daarbij wees hij naar een man die een eindje van ons vandaan, wat afzonderlijk, zat. Zijn naam was Ḥātim en zijn kunya was Abū al-Baqāʾ.\n\nIsmāʿīl keek hem korte tijd aan en zei vervolgens: “Dat is een verliefde man.”\n\nMujāhid zei tegen hem: “Je hebt gelijk. Maar waaruit heb je dat opgemaakt?”\n\nHij antwoordde: “Vanwege de buitengewone verbijstering die duidelijk op zijn gezicht te zien is, terwijl die in geen van zijn overige bewegingen zichtbaar is. Daardoor wist ik dat hij verliefd was en dat er niet iets anders met hem aan de hand was.”',
      },
      sources: [
        { label: { en: 'Ṭawq al-Ḥamāma · Signs of Love · Arabic', nl: 'Ṭawq al-Ḥamāma · Tekenen van liefde · Arabisch' }, url: 'https://www.hindawi.org/books/97086179/2/' },
      ],
    },
  ],
  reading: {
    label: { en: 'Read by genre', nl: 'Lees per genre' },
    title: { en: 'One writer, different purposes', nl: 'Eén schrijver, andere doelen' },
    text: {
      en: 'In al-Fiṣal, Ibn Ḥazm argues against Jewish religious authority. In Ṭawq al-Ḥamāma, he recalls a Jewish physician as a skilled participant in an ordinary social scene. A theological position does not by itself describe every practical encounter.',
      nl: 'In al-Fiṣal bestrijdt Ibn Ḥazm de religieuze autoriteit van het jodendom. In Ṭawq al-Ḥamāma voert hij een Joodse arts op als deskundige deelnemer aan een alledaagse ontmoeting. Een theologisch standpunt beschrijft niet vanzelf elke praktische omgang.',
    },
    caveat: {
      en: 'One narrated encounter does not represent all Muslim–Jewish relations or cancel the polemic.',
      nl: 'Eén vertelde ontmoeting vertegenwoordigt niet alle contacten tussen moslims en Joden en heft de polemiek niet op.',
    },
  },
};
