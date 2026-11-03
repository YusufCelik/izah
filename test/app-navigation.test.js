import test from 'node:test';
import assert from 'node:assert/strict';

globalThis.HTMLElement = class extends EventTarget {
  isConnected = true;
  querySelector() { return { addEventListener() {}, focus() {}, scrollIntoView() {} }; }
  querySelectorAll() { return []; }
};
globalThis.CustomEvent ??= class extends Event {
  constructor(type, options) { super(type, options); this.detail = options.detail; }
};

const definitions = new Map();
const elements = new Map();
const sections = new Map();
const ids = ['timeline', 'argument', 'sources', 'versus', 'yemen', 'prayer', 'focus', 'hazm', 'geo', 'inscription', 'origins', 'prelude', 'sumayr', 'brothers', 'blood', 'pact', 'qaynuqa', 'nadir', 'qurayza', 'khaybar', 'jizya', 'variants', 'reading'];
for (const id of ids) sections.set(id, { hidden: id !== 'timeline', setAttribute() {} });

class Link extends EventTarget {
  constructor(id) {
    super();
    this.dataset = { slideLink: id };
    this.offsetLeft = 0;
    this.clientWidth = 60;
  }
  setAttribute(name, value) { this[name] = value; }
  removeAttribute(name) { delete this[name]; }
}
const links = ids.map(id => new Link(id));
class Node {
  constructor() { this.children = []; this.dataset = {}; }
  append(...children) { this.children.push(...children); }
  appendChild(child) { this.children.push(child); }
  replaceChildren(...children) { this.children = children; }
  setAttribute(name, value) { this[name] = value; }
  removeAttribute(name) { delete this[name]; }
}
const nav = Object.assign(new Node(), { clientWidth: 800, scrollLeft: 0, querySelectorAll: () => links });
const plain = () => ({ textContent: '', setAttribute() {}, addEventListener() {} });
const footerSlide = plain();
const footerCopy = plain();
const presentButton = plain();

globalThis.customElements = { define(name, klass) { definitions.set(name, klass); } };
globalThis.location = { hash: '#timeline' };
globalThis.scrollTo = () => {};
globalThis.addEventListener = () => {};
globalThis.localStorage = { getItem: () => null, setItem() {} };
globalThis.document = {
  documentElement: { dataset: {}, lang: 'en' },
  fullscreenElement: null,
  title: '',
  createElement() { return new Node(); },
  querySelector(selector) {
    if (definitions.has(selector)) {
      if (!elements.has(selector)) elements.set(selector, new (definitions.get(selector))());
      return elements.get(selector);
    }
    if (selector === '.deck-nav') return nav;
    if (selector === 'meta[name="theme-color"]') return { content: '' };
    return plain();
  },
  querySelectorAll(selector) { return selector === '[data-slide-link]' ? links : []; },
  getElementById(id) {
    if (sections.has(id)) return sections.get(id);
    if (id === 'footer-slide') return footerSlide;
    if (id === 'footer-copy') return footerCopy;
    if (id === 'present-button') return presentButton;
    const tag = id === 'further-reading' ? 'reading-shelf' : id === 'pact-variants' ? 'variant-matrix' : id === 'khaybar-settlement' ? 'settlement-slide' : ['qaynuqa-conflict', 'nadir-conflict', 'qurayza-conflict'].includes(id) ? 'conflict-slide' : ['medina-prelude', 'sumayr-alliances', 'brothers-report', 'blood-money', 'medina-pact'].includes(id) ? 'evidence-board' : id === 'historian-position' ? 'focus-slide' : id === 'source-timeline' ? 'source-timeline' : id === 'reconstruction-argument' ? 'argument-build' : id === 'source-inventory' ? 'source-path' : id === 'arabia-regions' ? 'geo-regions-slide' : id === 'festival-inscription' ? 'inscription-slide' : id === 'origin-stories' ? 'origins-slide' : 'versus-slide';
    if (!elements.has(id)) elements.set(id, new (definitions.get(tag))());
    return elements.get(id);
  },
  addEventListener() {},
};
nav.ownerDocument = document;

await import('../app.js');

test('clicking slide 08 activates the Ibn Ḥazm section immediately', () => {
  links[7].dispatchEvent(new Event('click', { cancelable: true }));
  assert.equal(location.hash, 'hazm');
  assert.equal(sections.get('hazm').hidden, false);
  assert.equal(sections.get('focus').hidden, true);
  assert.equal(footerSlide.textContent, 'CLASSJI / 008');
  assert.equal(document.title, 'Classji · Ibn Ḥazm');
});

test('navigation groups preserve slide order and highlight the current chapter', () => {
  assert.equal(nav.children.length, 6);
  assert.deepEqual(nav.children.flatMap(group => group.children[1].children.map(link => link.dataset.slideLink)), ids);
  assert.equal(nav.children[1].children[0].children[1].textContent, 'The challenges facing reconstruction');
  links[6].dispatchEvent(new Event('click', { cancelable: true }));
  assert.equal(nav.children[1]['data-active'], 'true');
  assert.equal(nav.children[0]['data-active'], undefined);
});

test('new tension slide sits between the Arabia report and the prayer reports', () => {
  links[3].dispatchEvent(new Event('click', { cancelable: true }));
  const versus = elements.get('versus-slide');
  versus.select(2);
  versus.next();
  assert.equal(sections.get('yemen').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 005');
  const yemen = elements.get('fighting-yemen-contrast');
  yemen.select(2);
  yemen.next();
  assert.equal(sections.get('prayer').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 006');
  elements.get('prayer-contrast').previous();
  assert.equal(sections.get('yemen').hidden, false);
});

test('leaving slide 07 by its final Next action opens slide 08', () => {
  links[6].dispatchEvent(new Event('click', { cancelable: true }));
  const focus = elements.get('historian-position');
  focus.select(2);
  focus.next();
  assert.equal(sections.get('hazm').hidden, false);
  assert.equal(links[7]['aria-current'], 'page');
});

test('new geography, inscription, and origins slides open in order', () => {
  links[8].dispatchEvent(new Event('click', { cancelable: true }));
  assert.equal(sections.get('geo').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 009');
  const geo = elements.get('arabia-regions');
  geo.select(1);
  geo.next();
  assert.equal(sections.get('inscription').hidden, false);
  assert.equal(document.title, 'Classji · Inscription');
  const inscription = elements.get('festival-inscription');
  inscription.select(1);
  inscription.next();
  assert.equal(sections.get('origins').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 011');
  assert.equal(links[10]['aria-current'], 'page');
});

test('slide 08 advances to the geography slide after its final reveal', () => {
  links[7].dispatchEvent(new Event('click', { cancelable: true }));
  const hazm = elements.get('ibn-hazm-contrast');
  hazm.select(2);
  hazm.next();
  assert.equal(sections.get('geo').hidden, false);
  assert.equal(links[8]['aria-current'], 'page');
});

test('Medina evidence sequence opens after origins and advances through the pact', () => {
  links[10].dispatchEvent(new Event('click', { cancelable: true }));
  const origins = elements.get('origin-stories');
  origins.select(4);
  origins.next();
  assert.equal(sections.get('prelude').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 012');
  const path = [
    ['medina-prelude', 2, 'sumayr'],
    ['sumayr-alliances', 1, 'brothers'],
    ['brothers-report', 0, 'blood'],
    ['blood-money', 1, 'pact'],
  ];
  for (const [componentId, lastIndex, nextSection] of path) {
    const board = elements.get(componentId);
    board.select(lastIndex);
    board.next();
    assert.equal(sections.get(nextSection).hidden, false);
  }
  assert.equal(footerSlide.textContent, 'CLASSJI / 016');
  assert.equal(document.title, 'Classji · Medina pact');
});

test('conflict sequence follows the pact, then Khaybar, jizya, variants, and further reading', () => {
  links[15].dispatchEvent(new Event('click', { cancelable: true }));
  const pact = elements.get('medina-pact');
  pact.select(3);
  pact.next();
  assert.equal(sections.get('qaynuqa').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 017');
  const qaynuqa = elements.get('qaynuqa-conflict');
  qaynuqa.select(1);
  qaynuqa.next();
  assert.equal(sections.get('nadir').hidden, false);
  const nadir = elements.get('nadir-conflict');
  nadir.select(1);
  nadir.next();
  assert.equal(sections.get('qurayza').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 019');
  assert.equal(document.title, 'Classji · Qurayẓa');
  const qurayza = elements.get('qurayza-conflict');
  qurayza.select(2);
  qurayza.next();
  assert.equal(sections.get('khaybar').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 020');
  assert.equal(document.title, 'Classji · Khaybar');
  const khaybar = elements.get('khaybar-settlement');
  khaybar.select(2);
  khaybar.next();
  assert.equal(sections.get('jizya').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 021');
  assert.equal(document.title, 'Classji · Jizya in tension');
  const jizya = elements.get('jizya-jarajima-contrast');
  jizya.select(2);
  jizya.next();
  assert.equal(sections.get('variants').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 022');
  assert.equal(document.title, 'Classji · The pact varies');
  const variants = elements.get('pact-variants');
  variants.select(5);
  variants.next();
  assert.equal(sections.get('reading').hidden, false);
  assert.equal(footerSlide.textContent, 'CLASSJI / 023');
  assert.equal(document.title, 'Classji · Further reading');
  const reading = elements.get('further-reading');
  reading.previous();
  assert.equal(sections.get('variants').hidden, false);
  variants.select(0);
  variants.previous();
  assert.equal(sections.get('jizya').hidden, false);
  jizya.select(0);
  jizya.previous();
  assert.equal(sections.get('khaybar').hidden, false);
});
