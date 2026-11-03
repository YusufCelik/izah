import test from 'node:test';
import assert from 'node:assert/strict';
import { slideGroups } from '../data/slide-groups.js';
import { installGroupedNav } from '../components/grouped-nav.js';

class Element {
  constructor(id) { this.children = []; this.dataset = id ? { slideLink: id } : {}; }
  append(...nodes) { this.children.push(...nodes); }
  appendChild(node) { this.children.push(node); }
  replaceChildren(...nodes) { this.children = nodes; }
  setAttribute(name, value) { this[name] = value; }
  removeAttribute(name) { delete this[name]; }
}

test('slide groups cover the complete sequence and translate their labels', () => {
  const ids = slideGroups.flatMap(group => group.slides);
  assert.equal(ids.length, 23);
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual(slideGroups[1].slides, ['versus', 'yemen', 'prayer', 'focus', 'hazm']);
  assert.deepEqual(slideGroups[4].slides, ['qaynuqa', 'nadir', 'qurayza', 'khaybar', 'jizya', 'variants']);
  const nav = new Element();
  const links = ids.map(id => new Element(id));
  nav.querySelectorAll = () => links;
  nav.ownerDocument = { createElement: () => new Element() };
  const grouped = installGroupedNav(nav, slideGroups);
  grouped.setLanguage('nl');
  grouped.setActive('focus');
  assert.equal(nav.children[1].children[0].children[1].textContent, 'Uitdagingen voor reconstructie');
  assert.equal(nav.children[1]['data-active'], 'true');
  assert.equal(nav.children[0]['data-active'], undefined);
});

test('grouping rejects missing or reordered slide links', () => {
  const nav = new Element();
  nav.querySelectorAll = () => [new Element('timeline')];
  nav.ownerDocument = { createElement: () => new Element() };
  assert.throws(() => installGroupedNav(nav, slideGroups), /cover every slide once/);
});
