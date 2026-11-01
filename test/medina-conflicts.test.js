import test from 'node:test';
import assert from 'node:assert/strict';

globalThis.HTMLElement = class extends EventTarget {
  isConnected = true;
  querySelector() { return { addEventListener() {} }; }
  querySelectorAll() { return []; }
};
globalThis.CustomEvent ??= class extends Event {
  constructor(type, options) { super(type, options); this.detail = options.detail; }
};

const { ConflictSlide } = await import('../components/conflict-slide.js');
const { qaynuqaConflict, nadirConflict, qurayzaConflict } = await import('../data/medina-conflicts-data.js');

test('each conflict keeps multiple sourced causes apart from the outcome', () => {
  for (const data of [qaynuqaConflict, nadirConflict, qurayzaConflict]) {
    assert.ok(data.cases.length >= 2);
    assert.ok(data.cases.every(item => item.source.url && item.reading.en && item.reading.nl));
    assert.ok(data.outcome.source.url);
    assert.ok(data.alliance.source.url);
    const slide = new ConflictSlide();
    slide.data = data;
    assert.match(slide.innerHTML, /Reported outcome/);
    assert.match(slide.innerHTML, /Alliance and intercession/);
    slide.lang = 'nl';
    assert.match(slide.innerHTML, /Overgeleverde afloop/);
    assert.match(slide.innerHTML, /Bondgenootschap en bemiddeling/);
  }
});

test('alliance thread distinguishes successful intercession, failed aid, and failed intercession', () => {
  assert.equal(qaynuqaConflict.alliance.side, 'khazraj');
  assert.match(qaynuqaConflict.alliance.text.en, /ʿAbd Allāh ibn Ubayy/);
  assert.match(qaynuqaConflict.alliance.text.en, /ʿUbāda ibn al-Ṣāmit/);
  assert.match(nadirConflict.alliance.text.en, /They did neither/);
  assert.match(nadirConflict.alliance.text.en, /Aws or Khazraj/);
  assert.equal(qurayzaConflict.alliance.side, 'aws');
  assert.match(qurayzaConflict.alliance.text.en, /Qaynuqāʿ/);
  assert.match(qurayzaConflict.alliance.text.en, /Saʿd ibn Muʿādh/);
});

test('gold and beauty departure account belongs to al-Naḍīr', () => {
  assert.doesNotMatch(JSON.stringify(qaynuqaConflict.outcome), /beautiful|beauty|schoonheid|goud|gold jewelry/);
  assert.match(nadirConflict.outcome.vignette.text.en, /gold jewelry/);
  assert.match(nadirConflict.outcome.vignette.text.nl, /gouden sieraden/);
  assert.match(nadirConflict.outcome.vignette.source.label, /al-Wāqidī/);
});

test('Qurayẓa slide distinguishes the Qurʾānic wording from a named identification', () => {
  const slide = new ConflictSlide();
  slide.data = qurayzaConflict;
  slide.select(1);
  assert.match(slide.innerHTML, /does not name Qurayẓa/);
  slide.select(2);
  assert.match(slide.innerHTML, /immediate expedition/);
  assert.match(slide.innerHTML, /The hadith gives no total number/);
  assert.match(slide.innerHTML, /Deuteronomy 20:10–15/);
  assert.match(slide.innerHTML, /A modern Diyanet teaching text/);
  assert.match(slide.innerHTML, /offer it peace/);
  assert.match(slide.innerHTML, /every male/);
  assert.match(slide.innerHTML, /fighting men/);
  assert.match(slide.innerHTML, /Neither al-Bukhārī nor Ibn Isḥāq says Saʿd cited the Torah/);
  slide.lang = 'nl';
  assert.match(slide.innerHTML, /Deuteronomium 20:10–15/);
  assert.match(slide.innerHTML, /bied haar dan vrede aan/);
});
