import test from 'node:test';
import assert from 'node:assert/strict';
import { positionFocus } from '../data/position-focus-data.js';
import { prayerContrast } from '../data/prayer-contrast-data.js';

globalThis.HTMLElement = class extends EventTarget {
  isConnected = true;
  querySelector() { return { addEventListener() {}, focus() {} }; }
};
globalThis.CustomEvent ??= class extends Event {
  constructor(type, options) { super(type, options); this.detail = options.detail; }
};

const { FocusSlide } = await import('../components/focus-slide.js');
const { VersusSlide } = await import('../components/versus-slide.js');

test('prayer comparison puts the Prophet-attributed rule opposite ʿĀʾisha', () => {
  const slide = new VersusSlide();
  slide.data = prayerContrast;
  assert.match(slide.innerHTML, /Abū Dharr reported that the Messenger of God said/);
  assert.match(slide.innerHTML, /a donkey, a woman and a black dog interrupt his prayer/);
  assert.match(slide.innerHTML, /back of a saddle serves as a screen/);
  assert.match(slide.innerHTML, /black dog is a devil/);
  assert.match(slide.innerHTML, /Transmission chain/);
  assert.ok(!slide.innerHTML.includes('You have likened us to donkeys and dogs'));
  slide.next();
  assert.match(slide.innerHTML, /You have likened us to donkeys and dogs/);
  assert.match(slide.innerHTML, /lay on the bed between him and the qibla/);
  assert.match(slide.innerHTML, /slipped away by his feet/);
  slide.lang = 'nl';
  assert.match(slide.innerHTML, /Jullie hebben ons vergeleken met ezels en honden/);
  assert.match(slide.innerHTML, /Overleveringsketen/);
  assert.match(slide.innerHTML, /bij zijn voeten weg/);
  assert.match(slide.innerHTML, /Arabische tekst/);
  slide.next();
  assert.match(slide.innerHTML, /verschillen in situatie én nadruk/);
  assert.ok(prayerContrast.sides.every(side => side.sources[0].url.startsWith('https://sunnah.com/muslim:')));
  assert.equal(prayerContrast.sides[1].sources[1].url, 'https://sunnah.com/bukhari:514');
});

test('comparison can cross a slide boundary after its final reveal', () => {
  const slide = new VersusSlide();
  slide.data = prayerContrast;
  slide.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
  slide.select(2);
  let direction;
  slide.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  slide.next();
  assert.equal(direction, 'next');
  assert.match(slide.innerHTML, /Next slide/);
});

test('focus slide reveals one dispute, claimant affiliations, then the narrator connection', () => {
  const slide = new FocusSlide();
  slide.data = positionFocus;
  assert.match(slide.innerHTML, /لَا تَقُمْ فِيهِ أَبَدًا/);
  assert.match(slide.innerHTML, /وَاللَّهُ يُحِبُّ الْمُطَّهِّرِينَ/);
  assert.match(slide.innerHTML, /A mosque founded on devotion to God from its first day/);
  assert.match(slide.innerHTML, /Which mosque does the verse mean/);
  assert.match(slide.innerHTML, /Qubāʾ Mosque/);
  assert.match(slide.innerHTML, /The Prophet’s Mosque/);
  assert.match(slide.innerHTML, /One verse. Two identifications/);
  assert.ok(!slide.innerHTML.includes('Banū Khudra · Khazraj'));
  assert.ok(!slide.innerHTML.includes('The narrator belongs to one side'));
  slide.next();
  assert.match(slide.innerHTML, /A local clan is not the narrator/);
  assert.match(slide.innerHTML, /Disputant in al-Tirmidhī 323/);
  assert.match(slide.innerHTML, /Banū ʿAmr ibn ʿAwf · Aws/);
  assert.match(slide.innerHTML, /Banū Khudra · Khazraj/);
  assert.match(slide.innerHTML, /Qubāʾ was founded during Muhammad’s stay among this clan/);
  assert.match(slide.innerHTML, /ʿUrwa, the Qubāʾ report’s transmitter, was Qurashī—not Aws/);
  assert.match(slide.innerHTML, /ʿUrwa, who transmits the Qubāʾ identification in al-Bukhārī, belonged to Quraysh’s Banū Asad, not Aws/);
  assert.match(slide.innerHTML, /The Prophet’s Mosque stood on Banū al-Najjār land/);
  assert.ok(!slide.innerHTML.includes('Abū Saʿīd al-Khudrī →'));
  slide.next();
  assert.match(slide.innerHTML, /The narrator belongs to one side/);
  assert.match(slide.innerHTML, /Abū Saʿīd al-Khudrī → Banū Khudra → claim B/);
  assert.match(slide.innerHTML, /not proof that the report was invented/);
  assert.match(slide.innerHTML, /could carry clan prestige/);
  assert.match(slide.innerHTML, /al-Tirmidhī 323 · Abū Saʿīd’s report/);
  slide.lang = 'nl';
  assert.match(slide.innerHTML, /Sta er nooit in/);
  assert.match(slide.innerHTML, /godsvrucht is gegrond/);
  assert.match(slide.innerHTML, /Wie vertelt het winnende verhaal/);
  assert.match(slide.innerHTML, /De overleveraar hoort bij één partij/);
  assert.match(slide.innerHTML, /geen bewijs dat het bericht is verzonnen/);
  assert.ok(positionFocus.stages.flatMap(stage => stage.sources).every(source => source.url.startsWith('https://')));
});

test('focus slide previous action returns to the preceding slide', () => {
  const slide = new FocusSlide();
  slide.data = positionFocus;
  slide.previousBoundaryLabel = { en: 'Previous slide', nl: 'Vorige dia' };
  let direction;
  slide.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  slide.previous();
  assert.equal(direction, 'previous');
});

test('focus slide reaches the next slide after its final reveal', () => {
  const slide = new FocusSlide();
  slide.data = positionFocus;
  slide.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
  slide.select(2);
  let direction;
  slide.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  slide.next();
  assert.equal(direction, 'next');
  assert.match(slide.innerHTML, /Next slide/);
});
