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

const { ReadingShelf } = await import('../components/reading-shelf.js');
const { furtherReading } = await import('../data/further-reading-data.js');

test('all supplied books keep their list numbers, full titles, covers, and records', () => {
  assert.equal(furtherReading.books.length, 11);
  assert.deepEqual(furtherReading.books.map(book => book.number), [1, 4, 7, 9, 10, 11, 12, 19, 21, 22, 25]);
  assert.ok(furtherReading.books.every(book => book.cover.startsWith('https://') && book.url.startsWith('https://')));
  const shelf = new ReadingShelf();
  shelf.data = furtherReading;
  assert.equal(shelf.pageCount, 3);
  assert.match(shelf.innerHTML, /The Religious and Spiritual Life of the Jews of Medina/);
  assert.match(shelf.innerHTML, /Muḥammad and His Followers in Context: The Religious Map of Late Antique Arabia/);
  assert.doesNotMatch(shelf.innerHTML, /Hagarism/);
  shelf.next();
  assert.match(shelf.innerHTML, /Hagarism: The Making of the Islamic World/);
  shelf.next();
  assert.match(shelf.innerHTML, /The Jews of Arab Lands: A History and Source Book/);
  shelf.lang = 'nl';
  assert.match(shelf.innerHTML, /Verder lezen/);
  assert.match(shelf.innerHTML, /Einde presentatie/);
});

test('the first shelf returns to the preceding slide', () => {
  const shelf = new ReadingShelf();
  shelf.data = furtherReading;
  let direction;
  shelf.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  shelf.previous();
  assert.equal(direction, 'previous');
});
