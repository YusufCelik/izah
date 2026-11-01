import test from 'node:test';
import assert from 'node:assert/strict';
import { reconstructionArgument } from '../data/argument-data.js';

globalThis.HTMLElement = class extends EventTarget {
  isConnected = true;
  querySelectorAll() { return []; }
  querySelector() { return { addEventListener() {}, focus() {} }; }
};
globalThis.CustomEvent ??= class extends Event {
  constructor(type, options) { super(type, options); this.detail = options.detail; }
};

const { ArgumentBuild } = await import('../components/argument-build.js');

test('builds the argument one numbered statement at a time', () => {
  const slide = new ArgumentBuild();
  slide.data = reconstructionArgument;
  assert.equal(slide.step, 0);
  assert.equal((slide.innerHTML.match(/aria-expanded="true"/g) || []).length, 0);
  assert.ok(!slide.innerHTML.includes('More than a thousand years'));

  slide.next();
  assert.equal(slide.step, 1);
  assert.equal((slide.innerHTML.match(/aria-expanded="true"/g) || []).length, 1);
  assert.match(slide.innerHTML, /More than a thousand years/);
  assert.ok(!slide.innerHTML.includes('No time machine'));

  slide.select(4);
  assert.equal((slide.innerHTML.match(/aria-expanded="true"/g) || []).length, 4);
  assert.match(slide.innerHTML, /We must reconstruct the past/);
  assert.match(slide.innerHTML, /Argument complete/);
});

test('preserves the reveal step when switching to Dutch', () => {
  const slide = new ArgumentBuild();
  slide.data = reconstructionArgument;
  slide.select(3);
  slide.lang = 'nl';
  assert.equal(slide.step, 3);
  assert.match(slide.innerHTML, /Meer dan duizend jaar/);
  assert.match(slide.innerHTML, /Geen tijdmachine/);
  assert.ok(!slide.innerHTML.includes('We moeten het verleden reconstrueren'));
  slide.previous();
  assert.equal(slide.step, 2);
});

test('the first Previous action returns control to the presenter', () => {
  const slide = new ArgumentBuild();
  slide.data = reconstructionArgument;
  slide.previousBoundaryLabel = { en: 'Previous slide', nl: 'Vorige dia' };
  let direction = '';
  slide.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  slide.previous();
  assert.equal(direction, 'previous');
  assert.match(slide.innerHTML, /Previous slide/);
});

test('the completed argument advances to the next slide', () => {
  const slide = new ArgumentBuild();
  slide.data = reconstructionArgument;
  slide.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
  slide.select(4);
  let direction;
  slide.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  slide.next();
  assert.equal(direction, 'next');
  assert.match(slide.innerHTML, /Next slide/);
});
