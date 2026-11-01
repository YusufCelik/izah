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

const { EvidenceBoard } = await import('../components/evidence-board.js');
const { sumayrAlliances, brothersReport, bloodMoney, medinaPact } = await import('../data/medina-data.js');

test('alliance variants remain separately attributed and selectable', () => {
  const board = new EvidenceBoard();
  board.data = sumayrAlliances;
  assert.match(board.innerHTML, /Banū Qaynuqāʿ/);
  assert.match(board.innerHTML, /Banū al-Naḍīr \+ Banū Qurayẓa/);
  board.select(1);
  assert.match(board.innerHTML, /al-Suddī names Ḥarb Sumayr/);
  assert.match(board.innerHTML, /Banū al-Naḍīr/);
});

test('full Ibn Zayd report and full Qurʾān 2:85 survive both languages', () => {
  const board = new EvidenceBoard();
  board.data = brothersReport;
  assert.match(board.innerHTML, /while the Scripture was in their possession/);
  assert.match(board.innerHTML, /وَمَا اللَّهُ بِغَافِلٍ عَمَّا تَعْمَلُونَ/);
  board.lang = 'nl';
  assert.match(board.innerHTML, /terwijl de Schrift in hun bezit was/);
  assert.match(board.innerHTML, /volledig vers/);
});

test('blood-money judgment is revealed after the 140:70 comparison', () => {
  const board = new EvidenceBoard();
  board.data = bloodMoney;
  assert.match(board.innerHTML, /140/);
  assert.match(board.innerHTML, /70/);
  assert.doesNotMatch(board.innerHTML, /neither group had a superior claim/);
  board.next();
  assert.match(board.innerHTML, /neither group had a superior claim/);
});

test('pact clause reader keeps the community wording and dispute route', () => {
  const board = new EvidenceBoard();
  board.data = medinaPact;
  assert.match(board.innerHTML, /أمة مع المؤمنين/);
  board.select(3);
  assert.match(board.innerHTML, /referred to God and to Muḥammad/);
  board.lang = 'nl';
  assert.match(board.innerHTML, /wordt voorgelegd aan God en aan Muḥammad/);
});
