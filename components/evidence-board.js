import { escapeHtml, localized } from './content.js';

const copy = {
  en: { source: 'Primary text', previous: 'Previous', next: 'Next', previousSlide: 'Previous slide', nextSlide: 'Next slide', end: 'End of deck', reading: 'Reading', report: 'Ibn Zayd’s report', verse: 'Qurʾān 2:85 · full verse', arabSide: 'Arab side', measure: 'Wasqs of dates', ruling: 'Reported judgment', caution: 'Source status' },
  nl: { source: 'Brontekst', previous: 'Vorige', next: 'Volgende', previousSlide: 'Vorige dia', nextSlide: 'Volgende dia', end: 'Einde presentatie', reading: 'Duiding', report: 'Bericht van Ibn Zayd', verse: 'Qurʾān 2:85 · volledig vers', arabSide: 'Arabische kant', measure: 'Wasqs dadels', ruling: 'Overgeleverd oordeel', caution: 'Status van de bron' },
};

const e = escapeHtml;

/** A reusable, data-driven evidence slide with several document display modes. */
export class EvidenceBoard extends HTMLElement {
  #data;
  #lang = 'en';
  #index = 0;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.kind || !value?.title?.en || !value?.title?.nl || !value?.sources?.length) throw new TypeError('An evidence board needs a kind, bilingual title, and source links.');
    this.#data = value;
    this.#index = 0;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (copy[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  get index() { return this.#index; }
  get count() {
    if (!this.#data) return 0;
    if (this.#data.kind === 'story') return this.#data.steps.length;
    if (this.#data.kind === 'matrix') return this.#data.columns.length;
    if (this.#data.kind === 'clauses') return this.#data.clauses.length;
    if (this.#data.kind === 'measure') return 2;
    return 1;
  }
  select(index) { if (index >= 0 && index < this.count) { this.#index = index; this.render(); } }
  next() {
    if (this.#index === this.count - 1 && this.#data?.endOfDeck) return;
    if (this.#index === this.count - 1) this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
    else this.select(this.#index + 1);
  }
  previous() {
    if (this.#index === 0) this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'previous' } }));
    else this.select(this.#index - 1);
  }

  #tabs(items) {
    return `<nav class="evidence-tabs" aria-label="${e(localized(this.#data.title, this.#lang))}">${items.map((item, index) => `<button type="button" data-evidence-index="${index}" aria-current="${index === this.#index ? 'step' : 'false'}"><span>${String(index + 1).padStart(2, '0')}</span>${e(localized(item.label, this.#lang))}</button>`).join('')}</nav>`;
  }
  #body() {
    const d = this.#data;
    const lang = this.#lang;
    const t = copy[lang];
    if (d.kind === 'story') {
      const step = d.steps[this.#index];
      return `${this.#tabs(d.steps)}<div class="evidence-story"><span class="evidence-oversize">${String(this.#index + 1).padStart(2, '0')}</span><article aria-live="polite"><p class="section-kicker">${e(localized(step.kicker, lang))}</p><h3>${e(localized(step.title, lang))}</h3><p>${e(localized(step.text, lang))}</p></article></div>`;
    }
    if (d.kind === 'matrix') {
      return `<div class="evidence-matrix-wrap">${d.context ? `<p class="evidence-matrix-context">${e(localized(d.context, lang))}</p>` : ''}${this.#tabs(d.columns)}<table class="evidence-matrix"><thead><tr><th scope="col">${e(t.arabSide)}</th>${d.columns.map((column, index) => `<th scope="col" class="${index === this.#index ? 'is-selected' : ''}">${e(column.label)}</th>`).join('')}</tr></thead><tbody><tr><th scope="row">Khazraj</th>${d.columns.map((column, index) => `<td class="${index === this.#index ? 'is-selected' : ''}">${e(column.khazraj)}</td>`).join('')}</tr><tr><th scope="row">Aws</th>${d.columns.map((column, index) => `<td class="${index === this.#index ? 'is-selected' : ''}">${e(column.aws)}</td>`).join('')}</tr></tbody></table><p class="evidence-matrix-note" aria-live="polite">${e(localized(d.columns[this.#index].note, lang))}</p></div>`;
    }
    if (d.kind === 'report') {
      return `<div class="evidence-reading"><article><p class="section-kicker">${e(t.report)}</p><blockquote>${e(localized(d.report, lang))}</blockquote></article><article class="evidence-verse"><p class="section-kicker">${e(t.verse)}</p><p lang="ar" dir="rtl" class="evidence-arabic">${e(d.verse.ar)}</p><p class="evidence-verse-translation">${e(localized(d.verse, lang))}</p></article></div>`;
    }
    if (d.kind === 'measure') {
      return `<div class="evidence-measure"><div class="evidence-bars">${d.amounts.map((amount, index) => `<div class="evidence-bar-row"><div class="evidence-bar-label"><strong>${e(amount.group)}</strong><small>${e(localized(amount.label, lang))}</small></div><div class="evidence-bar-track"><div class="evidence-bar-fill ${index === 0 ? 'is-high' : ''}" style="width:${amount.amount / 140 * 100}%"><strong>${amount.amount}</strong></div></div></div>`).join('')}<p class="evidence-unit">${e(t.measure)} · 2 : 1</p></div><div class="evidence-judgment ${this.#index ? 'is-revealed' : ''}" aria-live="polite"><span>↳</span><div><small>${e(t.ruling)}</small><p>${this.#index ? e(localized(d.judgment, lang)) : '•••'}</p></div></div></div><div class="evidence-caution"><strong>${e(t.caution)}</strong><span>${e(localized(d.caveat, lang))}</span></div>`;
    }
    if (d.kind === 'clauses') {
      const clause = d.clauses[this.#index];
      return `${this.#tabs(d.clauses)}<div class="evidence-clause" aria-live="polite"><div class="evidence-clause-number">${String(this.#index + 1).padStart(2, '0')} <span>/ 0${d.clauses.length}</span></div><p lang="ar" dir="rtl" class="evidence-arabic">${e(clause.arabic)}</p><blockquote>${e(localized(clause.translation, lang))}</blockquote><div class="evidence-clause-note"><strong>${e(t.reading)}</strong><p>${e(localized(clause.note, lang))}</p></div></div>`;
    }
    return '';
  }

  render() {
    if (!this.#data || !this.isConnected) return;
    const d = this.#data;
    const t = copy[this.#lang];
    const atEnd = d.endOfDeck && this.#index === this.count - 1;
    this.innerHTML = `<div class="evidence-canvas evidence-${e(d.kind)}"><header class="evidence-heading"><div><p class="section-kicker">${e(localized(d.eyebrow, this.#lang))}</p><h2>${e(localized(d.title, this.#lang))}</h2><p>${e(localized(d.intro, this.#lang))}</p></div><span class="evidence-slide-number">${e(d.number)}</span></header><div class="evidence-main">${this.#body()}</div>${d.takeaway ? `<div class="evidence-takeaway"><strong>${e(t.reading)}</strong><p>${e(localized(d.takeaway, this.#lang))}</p></div>` : ''}<footer class="evidence-bottom"><div class="evidence-sources"><span>${e(t.source)}</span>${d.sources.map(source => `<a href="${e(source.url)}" target="_blank" rel="noopener noreferrer">${e(source.label)} ↗</a>`).join('')}</div><div class="evidence-controls"><button type="button" data-evidence-previous>← ${e(this.#index === 0 ? t.previousSlide : t.previous)}</button><button type="button" data-evidence-next ${atEnd ? 'disabled' : ''}>${e(atEnd ? t.end : this.#index === this.count - 1 ? t.nextSlide : t.next)}${atEnd ? '' : ' →'}</button></div></footer></div>`;
    this.querySelectorAll('[data-evidence-index]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.evidenceIndex))));
    this.querySelector('[data-evidence-previous]').addEventListener('click', () => this.previous());
    this.querySelector('[data-evidence-next]').addEventListener('click', () => this.next());
  }
}
