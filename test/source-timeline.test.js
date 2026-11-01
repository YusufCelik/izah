import test from 'node:test';
import assert from 'node:assert/strict';
import { timelineData } from '../data/timeline-data.js';

// A small DOM stand-in lets us exercise the web component's rendering contract
// in environments where launching a browser is unavailable.
globalThis.HTMLElement = class extends EventTarget {
  isConnected = true;
  querySelectorAll() { return []; }
  querySelector() { return { addEventListener() {}, scrollIntoView() {} }; }
};
globalThis.location = { href: 'https://example.test/' };

const { SourceTimeline } = await import('../components/source-timeline.js');

test('renders one source tick per date claim, including shared dates', () => {
  const timeline = new SourceTimeline();
  timeline.data = timelineData;
  timeline.select(6); // Banū Qaynuqāʿ
  assert.equal((timeline.innerHTML.match(/class="claim-tick"/g) || []).length, 2);
  assert.match(timeline.innerHTML, /Several sources give this date/);
  assert.match(timeline.innerHTML, /University of Michigan/);
  assert.match(timeline.innerHTML, /Diyanet/);
});

test('keeps conflicting dates visible and switches event and UI text to Dutch', () => {
  const timeline = new SourceTimeline();
  timeline.data = timelineData;
  timeline.select(8); // Banū al-Naḍīr
  timeline.lang = 'nl';
  assert.equal((timeline.innerHTML.match(/class="claim-tick"/g) || []).length, 2);
  assert.match(timeline.innerHTML, /625 n.Chr./);
  assert.match(timeline.innerHTML, /626 n.Chr./);
  assert.match(timeline.innerHTML, /Bronnen verschillen over de datering/);
  assert.match(timeline.innerHTML, /De Joodse groep/);
});

test('the final Next action signals the presenter boundary', () => {
  const timeline = new SourceTimeline();
  timeline.data = timelineData;
  timeline.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
  timeline.select(timelineData.events.length - 1);
  let direction = '';
  timeline.addEventListener('presenter:edge', event => { direction = event.detail.direction; });
  timeline.next();
  assert.equal(direction, 'next');
  assert.match(timeline.innerHTML, /Next slide/);
});
