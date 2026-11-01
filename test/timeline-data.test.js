import test from 'node:test';
import assert from 'node:assert/strict';
import { timelineData } from '../data/timeline-data.js';

test('every timeline tick has a resolvable source and bilingual content', () => {
  const ids = new Set();
  for (const event of timelineData.events) {
    assert.ok(!ids.has(event.id), `duplicate event: ${event.id}`);
    ids.add(event.id);
    for (const key of ['title', 'summary', 'location', 'period']) {
      assert.ok(event[key]?.en && event[key]?.nl, `${event.id} needs ${key} in English and Dutch`);
    }
    assert.ok(event.claims.length > 0, `${event.id} needs at least one source tick`);
    for (const claim of event.claims) {
      assert.ok(Number.isFinite(claim.year), `${event.id} has an invalid year`);
      assert.ok(!claim.endYear || claim.endYear >= claim.year, `${event.id} has an invalid range`);
      assert.ok(claim.date?.en && claim.date?.nl, `${event.id} needs bilingual date labels`);
      assert.ok(timelineData.sources[claim.sourceId]?.url, `${event.id} has an unresolved source`);
      assert.ok(!claim.relatedSourceId || timelineData.sources[claim.relatedSourceId]?.url, `${event.id} has an unresolved related source`);
    }
  }
  assert.deepEqual(ids.size, 14);
});

test('source claims retain shared and differing dates', () => {
  const byId = Object.fromEntries(timelineData.events.map(event => [event.id, event]));
  assert.deepEqual(byId.qaynuqa.claims.map(claim => claim.year), [624, 624]);
  assert.deepEqual(byId.nadir.claims.map(claim => claim.year), [625, 626]);
  assert.deepEqual(byId['medina-pact'].claims.map(claim => [claim.year, claim.endYear ?? claim.year]), [[622, 622], [622, 627]]);
});

test('events are ordered by their earliest source date', () => {
  const years = timelineData.events.map(event => Math.min(...event.claims.map(claim => claim.year)));
  assert.deepEqual(years, [...years].sort((a, b) => a - b));
});
