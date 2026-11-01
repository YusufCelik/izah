import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { applyMode, applyTheme, themes } from '../themes.js';

test('Folio has the requested palette and light/dark modes apply independently', () => {
  assert.deepEqual(themes.folio.palette, ['#fbf5f3', '#8daa9d', '#522b47', '#7b0828', '#0f0e0e']);
  const root = { dataset: {} };
  assert.equal(applyTheme('folio', root), themes.folio);
  assert.equal(root.dataset.theme, 'folio');
  assert.equal(applyMode('light', root), 'light');
  assert.equal(root.dataset.mode, 'light');
  assert.equal(applyMode('dark', root), 'dark');
  assert.equal(root.dataset.mode, 'dark');
  assert.throws(() => applyTheme('missing', root), RangeError);
  assert.throws(() => applyMode('missing', root), RangeError);
});

test('theme metadata and CSS use the same palette, with a light default', async () => {
  const css = await readFile(new URL('../themes.css', import.meta.url), 'utf8');
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  for (const color of themes.folio.palette) assert.ok(css.includes(color), `${color} missing from theme CSS`);
  assert.match(css, /data-theme='folio'\]\[data-mode='light'/);
  assert.match(css, /data-theme='folio'\]\[data-mode='dark'/);
  assert.match(html, /data-theme="folio" data-mode="light"/);
  assert.match(html, /data-mode="light"/);
  assert.match(html, /data-mode="dark"/);
});

test('the theme uses locally bundled typefaces with licenses', async () => {
  for (const family of ['Literata', 'WorkSans']) {
    const font = await readFile(new URL(`../assets/fonts/${family}.ttf`, import.meta.url));
    const license = await readFile(new URL(`../assets/fonts/${family}-OFL.txt`, import.meta.url), 'utf8');
    assert.equal(font.subarray(0, 4).toString('hex'), '00010000');
    assert.match(license, /SIL OPEN FONT LICENSE|SIL Open Font License/);
  }
});

test('source photographs keep their natural colors in the light theme', async () => {
  const css = await readFile(new URL('../styles.css', import.meta.url), 'utf8');
  const imageRule = css.match(/\.source-path-card img \{([^}]+)\}/)?.[1];
  assert.ok(imageRule);
  assert.doesNotMatch(imageRule, /filter:|opacity:/);
  assert.match(css, /\.source-card-copy \{[^}]*background: var\(--card-caption-bg\)/);
});
