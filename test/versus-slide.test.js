import test from 'node:test';
import assert from 'node:assert/strict';
import { arabiaContrast } from '../data/arabia-contrast-data.js';
import { fightingYemenContrast } from '../data/fighting-yemen-contrast-data.js';
import { jizyaJarajimaContrast } from '../data/jizya-jarajima-contrast-data.js';
import { ibnHazmContrast } from '../data/ibn-hazm-contrast-data.js';

globalThis.HTMLElement = class extends EventTarget {
  isConnected = true;
  querySelector() { return { addEventListener() {}, focus() {} }; }
};
globalThis.CustomEvent ??= class extends Event {
  constructor(type, options) { super(type, options); this.detail = options.detail; }
};

const { VersusSlide } = await import('../components/versus-slide.js');

test('reveals the report, counter-source, and historical reading in order', () => {
  const slide = new VersusSlide();
  slide.data = arabiaContrast;
  assert.equal(slide.stage, 0);
  assert.match(slide.innerHTML, /I will expel the Jews and Christians/);
  assert.match(slide.innerHTML, /Counter-source to reveal/);
  assert.ok(!slide.innerHTML.includes('אלדרג׳ אלסאדס'));

  slide.next();
  assert.equal(slide.stage, 1);
  assert.match(slide.innerHTML, /אלדרג׳ אלסאדס/);
  assert.match(slide.innerHTML, /Questions from the people of Wādī al-Qurā/);
  assert.match(slide.innerHTML, /dir="rtl"/);
  assert.ok(!slide.innerHTML.includes('Scope, time, and survival'));

  slide.next();
  assert.equal(slide.stage, 2);
  assert.match(slide.innerHTML, /Scope, time, and survival/);
  assert.match(slide.innerHTML, /cannot establish uninterrupted residence/);
  slide.next();
  assert.equal(slide.stage, 2);
});

test('Dutch mode preserves the reveal and the supplied original wording', () => {
  const slide = new VersusSlide();
  slide.data = arabiaContrast;
  slide.select(1);
  slide.lang = 'nl';
  assert.equal(slide.stage, 1);
  assert.match(slide.innerHTML, /De zesde bundel/);
  assert.match(slide.innerHTML, /שאלות בני ואדי אלקרי/);
  assert.match(slide.innerHTML, /Ṣaḥīḥ al-Bukhārī 3152/);
});

test('first Previous action returns to the preceding slide', () => {
  const slide = new VersusSlide();
  slide.data = arabiaContrast;
  slide.previousBoundaryLabel = { en: 'Previous slide', nl: 'Vorige dia' };
  let direction;
  slide.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  slide.previous();
  assert.equal(direction, 'previous');
  assert.match(slide.innerHTML, /Previous slide/);
});

test('comparison keeps claim, manuscript catalog, and edition links in data', () => {
  assert.equal(arabiaContrast.sides.length, 2);
  assert.match(arabiaContrast.sides[0].quote.en, /I will/);
  assert.match(arabiaContrast.sides[0].context.en, /Ḥijāz/);
  assert.ok(arabiaContrast.sides.flatMap(side => side.sources).every(source => source.url.startsWith('https://')));
  assert.match(arabiaContrast.sides[1].original, /שרירא/);
});

test('original-script direction is data, so the component can show other scripts', () => {
  const slide = new VersusSlide();
  const comparison = structuredClone(arabiaContrast);
  comparison.sides[1].originalLang = 'ar';
  comparison.sides[1].originalDirection = 'rtl';
  slide.data = comparison;
  slide.select(1);
  assert.match(slide.innerHTML, /lang="ar" dir="rtl"/);
});

test('Yemen comparison keeps the broad hadith and reported letter in their requested positions', () => {
  const slide = new VersusSlide();
  slide.data = fightingYemenContrast;
  assert.match(slide.innerHTML, /I have been commanded to fight against people/);
  assert.match(slide.innerHTML, /establish prayer, and pay Zakat/);
  assert.ok(!slide.innerHTML.includes('ولا يفتن يهودي'));
  slide.next();
  assert.match(slide.innerHTML, /ولا يفتن يهودي عن يهوديته/);
  assert.match(slide.innerHTML, /No Jew is to be pressured to leave Judaism/);
  assert.match(slide.innerHTML, /lang="ar" dir="rtl"/);
  slide.next();
  assert.match(slide.innerHTML, /its named chain ends with al-Ḥakam/);
  slide.lang = 'nl';
  assert.match(slide.innerHTML, /Geen Jood mag onder druk worden gezet/);
  assert.equal(fightingYemenContrast.sides[0].sources[0].url, 'https://sunnah.com/muslim:22');
  assert.match(fightingYemenContrast.sides[1].sources[0].url, /ablibrary\.net/);
});

test('jizya comparison reveals the full verse before the reported Jarājima terms', () => {
  const slide = new VersusSlide();
  slide.data = jizyaJarajimaContrast;
  assert.match(slide.innerHTML, /حَتَّىٰ يُعْطُوا الْجِزْيَةَ/);
  assert.match(slide.innerHTML, /until they pay the jizya/);
  assert.ok(!slide.innerHTML.includes('وأن لا يؤخذوا بالجزية'));
  slide.next();
  assert.match(slide.innerHTML, /وأن لا يؤخذوا بالجزية/);
  assert.match(slide.innerHTML, /scouts and frontier guards/);
  slide.next();
  assert.match(slide.innerHTML, /A negotiated exception/);
  slide.lang = 'nl';
  assert.match(slide.innerHTML, /Van hen wordt geen jizya geheven/);
  assert.match(slide.innerHTML, /Een onderhandelde uitzondering/);
  assert.equal(jizyaJarajimaContrast.sides[0].sources[0].url, 'https://quran.com/at-tawbah/29');
  assert.match(jizyaJarajimaContrast.sides[1].sources[0].url, /ablibrary\.net/);
});

test('Ibn Ḥazm contrast keeps the polemic and complete Almería anecdote in separate genres', () => {
  const slide = new VersusSlide();
  slide.data = ibnHazmContrast;
  assert.match(slide.innerHTML, /The Torah under attack/);
  assert.match(slide.innerHTML, /مناقضات ظاهرة وتكاذيب واضحة/);
  assert.match(slide.innerHTML, /Second work to reveal/);
  assert.match(slide.innerHTML, /is-contrast/);
  assert.ok(!slide.innerHTML.includes('One day I was sitting in Almería'));
  slide.next();
  assert.match(slide.innerHTML, /One day I was sitting in Almería/);
  assert.match(slide.innerHTML, /Ismāʿīl ibn Yūnus, the Jewish physician/);
  assert.match(slide.innerHTML, /He is a man in love/);
  assert.match(slide.innerHTML, /none of his other movements/);
  assert.ok(!slide.innerHTML.includes('One writer, different purposes'));
  slide.lang = 'nl';
  assert.match(slide.innerHTML, /Op een dag zat ik in Almería/);
  assert.match(slide.innerHTML, /Dat is een verliefde man/);
  assert.match(slide.innerHTML, /daar zeer bedreven in/);
  slide.next();
  assert.match(slide.innerHTML, /Eén schrijver, andere doelen/);
  assert.match(slide.innerHTML, /theologisch standpunt beschrijft niet vanzelf elke praktische omgang/);
  assert.ok(ibnHazmContrast.sides.flatMap(side => side.sources).every(source => source.url.startsWith('https://')));
});
