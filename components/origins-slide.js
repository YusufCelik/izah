import { escapeHtml, localized } from './content.js';

const copy = {
  en: { routes: 'Proposed routes', source: 'Read source', previous: 'Previous', next: 'Next account', previousSlide: 'Previous slide', complete: 'Next slide', takeaway: 'What remains firm' },
  nl: { routes: 'Voorgestelde routes', source: 'Lees bron', previous: 'Vorige', next: 'Volgende verhaal', previousSlide: 'Vorige dia', complete: 'Volgende dia', takeaway: 'Wat zeker blijft' },
};

/** A sequence of source types and hypotheses that keeps their status visible. */
export class OriginsSlide extends HTMLElement {
  #data;
  #lang = 'en';
  #index = 0;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title?.en || !value?.title?.nl || !value?.steps?.length || value.steps.some(step => !step.id || !step.heading?.en || !step.heading?.nl || !step.text?.en || !step.text?.nl || !step.source?.url)) throw new TypeError('An origins slide needs a bilingual title and sourced steps.');
    this.#data = value;
    this.#index = 0;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (copy[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  get index() { return this.#index; }
  select(index) { if (this.#data && index >= 0 && index < this.#data.steps.length) { this.#index = index; this.render(); } }
  next() {
    if (this.#data && this.#index === this.#data.steps.length - 1) this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
    else this.select(this.#index + 1);
  }
  previous() {
    if (this.#index === 0) this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'previous' } }));
    else this.select(this.#index - 1);
  }

  render() {
    if (!this.#data || !this.isConnected) return;
    const d = this.#data;
    const t = copy[this.#lang];
    const step = d.steps[this.#index];
    this.innerHTML = `
      <div class="origins-canvas">
        <header class="origins-heading"><div><p class="section-kicker">${escapeHtml(localized(d.eyebrow, this.#lang))}</p><h2>${escapeHtml(localized(d.title, this.#lang))}</h2><p>${escapeHtml(localized(d.intro, this.#lang))}</p></div><span class="origins-fraction">${step.number} <i>/</i> ${String(d.steps.length).padStart(2, '0')}</span></header>
        <div class="origins-layout">
          <nav class="origins-route" aria-label="${escapeHtml(t.routes)}">${d.steps.map((item, index) => `<button type="button" data-origins-step="${index}" aria-current="${index === this.#index ? 'step' : 'false'}"><span>${escapeHtml(item.number)}</span><span><small>${escapeHtml(localized(item.type, this.#lang))}</small><strong>${escapeHtml(localized(item.heading, this.#lang))}</strong></span></button>`).join('')}</nav>
          <article class="origins-evidence" aria-live="polite"><div class="origins-evidence-top"><span>${escapeHtml(step.number)}</span><small>${escapeHtml(localized(step.type, this.#lang))}</small></div><h3>${escapeHtml(localized(step.heading, this.#lang))}</h3>${step.quote ? `<blockquote>${escapeHtml(localized(step.quote, this.#lang))}</blockquote>` : ''}<p>${escapeHtml(localized(step.text, this.#lang))}</p><a href="${escapeHtml(step.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.source)} · ${escapeHtml(step.source.label)} ↗</a></article>
        </div>
        <div class="origins-takeaway"><strong>${escapeHtml(t.takeaway)}</strong><p>${escapeHtml(localized(d.closing, this.#lang))}</p></div>
        <footer class="origins-bottom"><div class="origins-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${d.steps.length}" aria-valuenow="${this.#index + 1}" aria-label="${escapeHtml(t.routes)}">${d.steps.map((_, index) => `<span class="${index <= this.#index ? 'is-filled' : ''}"></span>`).join('')}</div><div><button type="button" data-origins-previous>← ${escapeHtml(this.#index === 0 ? t.previousSlide : t.previous)}</button><button type="button" data-origins-next>${escapeHtml(this.#index === d.steps.length - 1 ? t.complete : t.next)} →</button></div></footer>
      </div>`;
    this.querySelectorAll('[data-origins-step]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.originsStep))));
    this.querySelector('[data-origins-previous]').addEventListener('click', () => this.previous());
    this.querySelector('[data-origins-next]').addEventListener('click', () => this.next());
    const route = this.querySelector('.origins-route');
    if (route?.scrollWidth > route?.clientWidth) route.scrollLeft = Math.max(0, this.#index * 155 - route.clientWidth / 2 + 77);
  }
}
