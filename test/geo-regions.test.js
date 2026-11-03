import test from 'node:test';
import assert from 'node:assert/strict';
import { arabiaRegions } from '../data/arabia-regions-data.js';

globalThis.HTMLElement = class extends EventTarget {
  isConnected = true;
  querySelector() { return { addEventListener() {} }; }
  querySelectorAll() { return []; }
};

const { GeoRegionsSlide } = await import('../components/geo-regions-slide.js');

test('the southern region connects Ja 1028 to its findspot, image, text, and translation', () => {
  const slide = new GeoRegionsSlide();
  slide.data = arabiaRegions;
  assert.doesNotMatch(slide.innerHTML, /geo-inscription-photo/);

  slide.select(1);
  assert.match(slide.innerHTML, /Ja 1028 · Biʾr Ḥimā · 523 CE · line 3/);
  assert.match(slide.innerHTML, /assets\/inscriptions\/ja-1028.jpg/);
  assert.match(slide.innerHTML, /خصرو مراهمو ملكن يوسف اسار يثار/);
  assert.match(slide.innerHTML, /when he burned the church and killed the Abyssinians at Ẓafār/);
  assert.match(slide.innerHTML, /Carved near Najrān, it describes fighting farther south/);
  assert.match(slide.innerHTML, /translation by Iwona Gajda/);

  slide.lang = 'nl';
  assert.match(slide.innerHTML, /toen hij de kerk verbrandde en de Abessijnen in Ẓafār doodde/);
  assert.match(slide.innerHTML, /De inscriptie werd bij Najrān uitgehouwen/);
  assert.match(slide.innerHTML, /Sabeïsch · weergegeven in Arabisch schrift/);
});
