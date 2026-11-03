import test from 'node:test';
import assert from 'node:assert/strict';
import { sourceTypes } from '../data/source-types-data.js';

globalThis.HTMLElement = class extends EventTarget {
  isConnected = true;
  elements = new Map();
  querySelectorAll() { return []; }
  querySelector(selector) {
    if (!this.elements.has(selector)) this.elements.set(selector, { addEventListener() {}, focus() {}, innerHTML: '', textContent: '', disabled: false });
    return this.elements.get(selector);
  }
};
globalThis.CustomEvent ??= class extends Event {
  constructor(type, options) { super(type, options); this.detail = options.detail; }
};

const { SourcePath } = await import('../components/source-path.js');

test('shows nine source groups in a navigable serpentine order', () => {
  const slide = new SourcePath();
  slide.data = sourceTypes;
  assert.equal(sourceTypes.items.length, 9);
  assert.deepEqual(sourceTypes.items.map(item => item.id), [
    'inscriptions', 'quran', 'hadith', 'sira', 'tabaqat', 'jurisprudence', 'jewish-literature', 'geniza', 'christian',
  ]);
  assert.equal((slide.innerHTML.match(/data-source-index=/g) || []).length, 9);
  assert.match(slide.innerHTML, /What are our sources/);
  assert.match(slide.innerHTML, /These images are examples of source types/);
  slide.select(8);
  assert.equal(slide.reading, true);
  assert.match(slide.innerHTML, /Sebeos on Jews, Arabs, and “Mahmet”/);
  assert.match(slide.innerHTML, /They set out into the desert and came to Arabia/);
  assert.match(slide.innerHTML, /constituted a mighty army/);
  assert.match(slide.innerHTML, /Sebeos wrote decades after the events/);
  assert.match(slide.innerHTML, /Hoyland, “Sebeos, the Jews and the Rise of Islam,” p\. 89/);
  slide.showOverview();
  assert.equal(slide.reading, false);
  assert.match(slide.innerHTML, /data-source-index="8"/);
  assert.match(slide.innerHTML, /Sebeos · later printed edition/);
});

test('keeps selection while changing language and exposes previous slide edge', () => {
  const slide = new SourcePath();
  slide.data = sourceTypes;
  slide.select(6);
  slide.lang = 'nl';
  assert.equal(slide.index, 6);
  assert.equal(slide.reading, true);
  assert.match(slide.innerHTML, /De tweede koning die uit Ismaël zal opstaan/);
  assert.match(slide.innerHTML, /Joodse apocalyps/);
  slide.select(0);
  let direction;
  slide.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  slide.previous();
  assert.equal(direction, 'previous');
});

test('Jewish literature opens the Nistarot quotation and can return to the grid', () => {
  const slide = new SourcePath();
  slide.data = sourceTypes;
  assert.match(slide.innerHTML, /Jewish literature/);
  slide.select(6);
  assert.equal(slide.reading, true);
  assert.match(slide.innerHTML, /The second king who will arise from Yishmael/);
  assert.match(slide.innerHTML, /make the whole of it a level plain/);
  assert.match(slide.innerHTML, /Nistarot de-Rabbi Shimon bar Yochai/);
  assert.match(slide.innerHTML, /not a record of construction work/);
  slide.showOverview();
  assert.equal(slide.reading, false);
  assert.match(slide.innerHTML, /Nistarot · 1855 printed edition/);
});

test('each illustrative image links to an attributable record', () => {
  for (const item of sourceTypes.items) {
    assert.match(item.image, /^(https:\/\/commons\.wikimedia\.org\/wiki\/Special:Redirect\/file\/|assets\/sources\/)/);
    assert.match(item.record, /^https:\/\//);
    assert.ok(item.credit);
    assert.ok(item.detail.en && item.detail.nl);
  }
});

test('Sebeos reading follows the language toggle and returns to the source grid', () => {
  const slide = new SourcePath();
  slide.data = sourceTypes;
  slide.select(8);
  slide.lang = 'nl';
  assert.equal(slide.reading, true);
  assert.match(slide.innerHTML, /Zij trokken de woestijn in en kwamen in Arabië/);
  assert.match(slide.innerHTML, /zij vormden een machtig leger/);
  assert.match(slide.innerHTML, /Sebeos schreef tientallen jaren na de gebeurtenissen/);
  assert.match(slide.innerHTML, /Alle bronnen/);
  slide.previous();
  assert.equal(slide.index, 7);
  assert.equal(slide.reading, false);
  assert.match(slide.innerHTML, /Geniza van Caïro/);
});
