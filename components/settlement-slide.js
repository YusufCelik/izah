import { escapeHtml, localized } from './content.js';

const labels = {
  en: { report: 'Transmitted settlement', archive: 'Later documentary claim', scrutiny: 'Source criticism', source: 'Open source', previous: 'Previous stage', next: 'Next stage', previousSlide: 'Previous slide', nextSlide: 'Next slide' },
  nl: { report: 'Overgeleverde regeling', archive: 'Latere documentaire claim', scrutiny: 'Bronkritiek', source: 'Open bron', previous: 'Vorige stap', next: 'Volgende stap', previousSlide: 'Vorige dia', nextSlide: 'Volgende dia' },
};
const e = escapeHtml;

/** Reveals a reported settlement, a later document, then the limits of that document. */
export class SettlementSlide extends HTMLElement {
  #data;
  #lang = 'en';
  #stage = 0;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title || !value?.intro?.en || !value?.intro?.nl || ['settlement', 'document', 'assessment'].some(key => !value[key]?.text?.en || !value[key]?.text?.nl || !value[key]?.source?.url)) throw new TypeError('A settlement slide needs bilingual claims and a source for each layer.');
    this.#data = value;
    this.#stage = 0;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (labels[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  get stage() { return this.#stage; }
  select(stage) { if (this.#data && Number.isInteger(stage) && stage >= 0 && stage <= 2) { this.#stage = stage; this.render(); } }
  next() {
    if (this.#stage < 2) this.select(this.#stage + 1);
    else this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
  }
  previous() {
    if (this.#stage > 0) this.select(this.#stage - 1);
    else this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'previous' } }));
  }

  render() {
    if (!this.#data || !this.isConnected) return;
    const d = this.#data;
    const t = labels[this.#lang];
    const link = source => `<a href="${e(source.url)}" target="_blank" rel="noopener noreferrer">${e(t.source)} · ${e(source.label)} ↗</a>`;
    this.innerHTML = `<div class="settlement-canvas" data-stage="${this.#stage}">
      <header class="settlement-heading"><div><p class="section-kicker">${e(localized(d.kicker, this.#lang))}</p><h2>${e(d.title)}</h2><p>${e(localized(d.intro, this.#lang))}</p></div><span>${e(d.number)}</span></header>
      <div class="settlement-stages" role="group" aria-label="${e(d.title)}">${[t.report, t.archive, t.scrutiny].map((name, index) => `<button type="button" data-settlement-stage="${index}" aria-pressed="${this.#stage === index}"><span>0${index + 1}</span>${e(name)}</button>`).join('')}</div>
      <div class="settlement-pair">
        <article class="settlement-report"><p class="section-kicker">01 / ${e(t.report)}</p><h3>${e(localized(d.settlement.heading, this.#lang))}</h3><p>${e(localized(d.settlement.text, this.#lang))}</p><div class="settlement-share" aria-label="${e(`${localized(d.settlement.share, this.#lang)}; ${localized(d.settlement.otherShare, this.#lang)}`)}"><div><strong>½</strong><span>${e(localized(d.settlement.share, this.#lang))}</span></div><div><strong>½</strong><span>${e(localized(d.settlement.otherShare, this.#lang))}</span></div></div>${link(d.settlement.source)}</article>
        <article class="settlement-document" ${this.#stage < 1 ? 'hidden' : ''}><div class="settlement-document-top"><p class="section-kicker">02 / ${e(t.archive)}</p><small>T-S 16.353</small></div><h3>${e(localized(d.document.heading, this.#lang))}</h3><p>${e(localized(d.document.text, this.#lang))}</p><div class="settlement-document-stamp"><span>${e(localized(d.document.label, this.#lang))}</span><strong>${e(localized(d.document.claim, this.#lang))}</strong></div><div class="settlement-links">${link(d.document.source)}${link(d.document.parallel)}</div></article>
      </div>
      <section class="settlement-assessment" ${this.#stage < 2 ? 'hidden' : ''}><div><p class="section-kicker">03 / ${e(t.scrutiny)}</p><h3>${e(localized(d.assessment.heading, this.#lang))}</h3></div><div><p>${e(localized(d.assessment.text, this.#lang))}</p><div class="settlement-links">${link(d.assessment.source)}${link(d.assessment.study)}</div></div></section>
      <footer class="settlement-controls"><span>${e(d.number)} / CLASSJI</span><div><button type="button" data-settlement-previous>← ${e(this.#stage === 0 ? t.previousSlide : t.previous)}</button><button type="button" data-settlement-next>${e(this.#stage === 2 ? t.nextSlide : t.next)} →</button></div></footer>
    </div>`;
    this.querySelectorAll('[data-settlement-stage]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.settlementStage))));
    this.querySelector('[data-settlement-previous]').addEventListener('click', () => this.previous());
    this.querySelector('[data-settlement-next]').addEventListener('click', () => this.next());
  }
}
