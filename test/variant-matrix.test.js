import test from 'node:test';
import assert from 'node:assert/strict';
import { pactVariants } from '../data/pact-variants-data.js';

globalThis.HTMLElement = class extends EventTarget {
  isConnected = true;
  querySelector() { return { addEventListener() {} }; }
  querySelectorAll() { return []; }
};
globalThis.CustomEvent ??= class extends Event {
  constructor(type, options) { super(type, options); this.detail = options.detail; }
};

const { VariantMatrix } = await import('../components/variant-matrix.js');

test('the matrix keeps all six transmitted versions visible and distinguishes absent clauses', () => {
  const slide = new VariantMatrix();
  slide.data = pactVariants;
  assert.equal(pactVariants.rows.length, 6);
  assert.deepEqual(pactVariants.rows.map(row => row.status), ['absent', 'both', 'children', 'children', 'absent', 'children']);
  assert.match(slide.innerHTML, /Abū Yūsuf · Kitāb al-kharāj/);
  assert.match(slide.innerHTML, /Ibn Zabr · report 15/);
  assert.match(slide.innerHTML, /Ibn ʿAsākir · via Abū Mikhnaf/);
  assert.match(slide.innerHTML, /No clause/);
  assert.match(slide.innerHTML, /Self \+ children/);
  assert.match(slide.innerHTML, /Children only/);
  assert.match(slide.innerHTML, /silence does not establish permission/);
  assert.match(slide.innerHTML, /أن أبا عبيدة بن الجراح صالحهم بالشام/);
  assert.match(slide.innerHTML, /Abū ʿUbayda ibn al-Jarrāḥ made a settlement/);
  assert.ok(pactVariants.rows.every(row => row.excerpt && row.excerptTranslation.en && row.excerptTranslation.nl));
  assert.deepEqual(pactVariants.rows.filter(row => row.id.startsWith('ibn-zabr')).map(row => new URL(row.source.url).hash), ['#page=22', '#page=24', '#page=27', '#page=29']);
  assert.ok(pactVariants.rows.filter(row => row.id.startsWith('ibn-zabr')).every(row => row.source.url.startsWith('https://s2.ketabonline.com/uploads/2020/04/1026752633801983392.pdf')));
});

test('selection changes the source detail and the Dutch wording without hiding rows', () => {
  const slide = new VariantMatrix();
  slide.data = pactVariants;
  slide.select(1);
  assert.equal(slide.selected, 1);
  assert.match(slide.innerHTML, /neither learn the Qurʾān themselves nor teach it/);
  assert.match(slide.innerHTML, /ولا نتعلم القرآن ولا نعلمه أولادنا/);
  assert.match(slide.innerHTML, /And we shall neither learn the Qurʾān nor teach it to our children/);
  slide.lang = 'nl';
  assert.match(slide.innerHTML, /Eén bepaling, meerdere versies/);
  assert.match(slide.innerHTML, /zelf niet leren en die ook niet aan hun kinderen/);
  assert.match(slide.innerHTML, /En wij zullen de Koran niet leren en die niet aan onze kinderen onderwijzen/);
  assert.match(slide.innerHTML, /Ibn ʿAsākir · via Abū Mikhnaf/);
  for (let index = 0; index < pactVariants.rows.length; index += 1) {
    slide.select(index);
    assert.match(slide.innerHTML, /class="variant-excerpt" lang="ar" dir="rtl"/);
    assert.ok(slide.innerHTML.includes(pactVariants.rows[index].excerpt));
    assert.ok(slide.innerHTML.includes(pactVariants.rows[index].excerptTranslation.nl));
  }
  slide.select(5);
  let direction;
  slide.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  slide.next();
  assert.equal(direction, 'next');
  slide.select(0);
  slide.previous();
  assert.equal(direction, 'previous');
});
