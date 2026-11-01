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
    'inscriptions', 'quran', 'hadith', 'sira', 'tabaqat', 'jurisprudence', 'responsa', 'geniza', 'christian',
  ]);
  assert.equal((slide.innerHTML.match(/data-source-index=/g) || []).length, 9);
  assert.match(slide.innerHTML, /What are our sources/);
  assert.match(slide.innerHTML, /Images illustrate source types/);
  slide.select(8);
  assert.match(slide.querySelector('.source-path-detail').innerHTML, /Theophanes’ Chronographia/);
  assert.match(slide.querySelector('.source-path-detail').innerHTML, /Image record/);
});

test('keeps selection while changing language and exposes previous slide edge', () => {
  const slide = new SourcePath();
  slide.data = sourceTypes;
  slide.select(6);
  slide.lang = 'nl';
  assert.equal(slide.index, 6);
  assert.match(slide.innerHTML, /Joodse responsa/);
  slide.select(0);
  let direction;
  slide.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  slide.previous();
  assert.equal(direction, 'previous');
});

test('each illustrative image links to an attributable record', () => {
  for (const item of sourceTypes.items) {
    assert.match(item.image, /^https:\/\/commons\.wikimedia\.org\/wiki\/Special:Redirect\/file\//);
    assert.match(item.record, /^https:\/\/commons\.wikimedia\.org\/wiki\/File:/);
    assert.ok(item.credit);
    assert.ok(item.detail.en && item.detail.nl);
  }
});
