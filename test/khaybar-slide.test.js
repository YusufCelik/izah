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

const { SettlementSlide } = await import('../components/settlement-slide.js');
const { khaybarSettlement } = await import('../data/khaybar-data.js');

test('Khaybar keeps settlement, later copy, and provenance warning distinct in both languages', () => {
  const slide = new SettlementSlide();
  slide.data = khaybarSettlement;
  assert.match(slide.innerHTML, /half the fruit/);
  assert.match(slide.innerHTML, /class="settlement-document" hidden/);
  slide.next();
  assert.match(slide.innerHTML, /11th-century Judaeo-Arabic copy/);
  assert.doesNotMatch(slide.innerHTML, /class="settlement-document" hidden/);
  assert.match(slide.innerHTML, /T-S 16.353/);
  slide.next();
  assert.match(slide.innerHTML, /own date says 5 AH/);
  assert.match(slide.innerHTML, /not a surviving original/);
  slide.lang = 'nl';
  assert.match(slide.innerHTML, /11e-eeuwse kopie/);
  assert.match(slide.innerHTML, /betwiste aanspraak/);
  assert.match(slide.innerHTML, /https:\/\/geniza.princeton.edu\/en\/documents\/7491\//);
});

test('Khaybar slide hands off at both edges', () => {
  const slide = new SettlementSlide();
  slide.data = khaybarSettlement;
  const directions = [];
  slide.addEventListener('presenter:edge', event => directions.push(event.detail.direction));
  slide.previous();
  slide.select(2);
  slide.next();
  assert.deepEqual(directions, ['previous', 'next']);
});
