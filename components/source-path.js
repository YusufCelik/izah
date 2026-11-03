import { escapeHtml, localized } from './content.js';

const copy = {
  en: { source: 'SOURCE', imageRecord: 'Image record ↗', previous: 'Previous source', next: 'Next source', of: 'of', select: 'Explore source', overview: 'All sources', read: 'Read the passage' },
  nl: { source: 'BRON', imageRecord: 'Beeldbron ↗', previous: 'Vorige bron', next: 'Volgende bron', of: 'van', select: 'Bekijk bron', overview: 'Alle bronnen', read: 'Lees de passage' },
};

/** Serpentine, image-led source inventory; content is supplied separately. */
export class SourcePath extends HTMLElement {
  #data;
  #lang = 'en';
  #index = 0;
  #reading = false;
  #previousBoundaryLabel;
  #nextBoundaryLabel;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title?.en || !value?.title?.nl || !Array.isArray(value.items) || !value.items.length) throw new TypeError('A source path needs a bilingual title and items.');
    if (value.items.some(item => !item.id || !item.title?.en || !item.title?.nl || !item.image || !item.record)) throw new TypeError('Each source needs an ID, bilingual title, image, and record.');
    if (value.items.some(item => item.reading && (!item.reading.title?.en || !item.reading.title?.nl || !item.reading.source?.url || !Array.isArray(item.reading.paragraphs?.en) || !Array.isArray(item.reading.paragraphs?.nl)))) throw new TypeError('A source reading needs bilingual paragraphs, a title, and a text source.');
    this.#data = value;
    this.#index = Math.min(this.#index, value.items.length - 1);
    this.#reading = false;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (copy[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  set previousBoundaryLabel(value) { this.#previousBoundaryLabel = value; this.render(); }
  get previousBoundaryLabel() { return this.#previousBoundaryLabel; }
  set nextBoundaryLabel(value) { this.#nextBoundaryLabel = value; this.render(); }
  get nextBoundaryLabel() { return this.#nextBoundaryLabel; }
  get index() { return this.#index; }
  get reading() { return this.#reading; }

  select(index, focus = false) {
    if (!this.#data || index < 0 || index >= this.#data.items.length) return;
    const wasReading = this.#reading;
    this.#index = index;
    this.#reading = Boolean(this.#data.items[index].reading);
    if (wasReading || this.#reading) this.render();
    else this.#updateSelection();
    if (focus) this.querySelector(this.#reading ? '.source-reading-context h3' : `[data-source-index="${index}"]`)?.focus({ preventScroll: true });
  }
  showOverview() { if (this.#reading) { this.#reading = false; this.render(); this.querySelector(`[data-source-index="${this.#index}"]`)?.focus({ preventScroll: true }); } }
  next() {
    if (this.#index === this.#data.items.length - 1) {
      this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
      return;
    }
    this.select(this.#index + 1);
  }
  previous() {
    if (this.#index === 0) {
      this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'previous' } }));
      return;
    }
    this.select(this.#index - 1);
  }

  render() {
    if (!this.#data || !this.isConnected) return;
    const t = copy[this.#lang];
    const previousLabel = this.#index === 0 && this.#previousBoundaryLabel ? localized(this.#previousBoundaryLabel, this.#lang) : t.previous;
    const nextLabel = this.#index === this.#data.items.length - 1 && this.#nextBoundaryLabel ? localized(this.#nextBoundaryLabel, this.#lang) : t.next;
    const selected = this.#data.items[this.#index];
    this.innerHTML = `
      <div class="source-path-canvas ${this.#reading ? 'is-reading' : ''}">
        <div class="source-path-heading">
          <div><p class="section-kicker">${escapeHtml(localized(this.#data.eyebrow, this.#lang))}</p><h2>${escapeHtml(localized(this.#data.title, this.#lang))}</h2><p>${escapeHtml(localized(this.#data.intro, this.#lang))}</p></div>
          <span class="source-path-fraction">${String(this.#index + 1).padStart(2, '0')} <i>/</i> ${String(this.#data.items.length).padStart(2, '0')}</span>
        </div>
        ${this.#reading ? this.#renderReading(selected, t) : `<div class="source-path-grid" role="group" aria-label="${escapeHtml(localized(this.#data.title, this.#lang))}">
          <svg class="source-route" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true"><polyline points=".5,.5 1.5,.5 2.5,.5 2.5,1.5 1.5,1.5 .5,1.5 .5,2.5 1.5,2.5 2.5,2.5" /></svg>
          ${this.#data.items.map((item, index) => this.#renderItem(item, index, t)).join('')}
        </div>
        <div class="source-path-detail" aria-live="polite">${this.#renderDetail()}</div>`}
        <div class="source-path-bottom"><p>${escapeHtml(localized(this.#reading ? selected.reading.note : this.#data.note, this.#lang))}</p><div class="source-path-controls"><button type="button" data-source-control="previous" ${this.#index === 0 && !this.#previousBoundaryLabel ? 'disabled' : ''}>← ${escapeHtml(previousLabel)}</button><button type="button" data-source-control="next" ${this.#index === this.#data.items.length - 1 && !this.#nextBoundaryLabel ? 'disabled' : ''}>${escapeHtml(nextLabel)} →</button></div></div>
      </div>`;
    this.querySelectorAll('[data-source-index]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.sourceIndex), true)));
    this.querySelector('[data-source-overview]')?.addEventListener('click', () => this.showOverview());
    this.querySelector('[data-source-control="previous"]').addEventListener('click', () => this.previous());
    this.querySelector('[data-source-control="next"]').addEventListener('click', () => this.next());
  }

  #updateSelection() {
    if (!this.isConnected) return;
    this.querySelectorAll('[data-source-index]').forEach((button, index) => {
      const active = index === this.#index;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    this.querySelector('.source-path-fraction').innerHTML = `${String(this.#index + 1).padStart(2, '0')} <i>/</i> ${String(this.#data.items.length).padStart(2, '0')}`;
    this.querySelector('.source-path-detail').innerHTML = this.#renderDetail();
    const t = copy[this.#lang];
    const previousLabel = this.#index === 0 && this.#previousBoundaryLabel ? localized(this.#previousBoundaryLabel, this.#lang) : t.previous;
    const nextLabel = this.#index === this.#data.items.length - 1 && this.#nextBoundaryLabel ? localized(this.#nextBoundaryLabel, this.#lang) : t.next;
    const previous = this.querySelector('[data-source-control="previous"]');
    const next = this.querySelector('[data-source-control="next"]');
    previous.textContent = `← ${previousLabel}`;
    next.textContent = `${nextLabel} →`;
    previous.disabled = this.#index === 0 && !this.#previousBoundaryLabel;
    next.disabled = this.#index === this.#data.items.length - 1 && !this.#nextBoundaryLabel;
  }

  #renderDetail() {
    const selected = this.#data.items[this.#index];
    return `<span class="source-detail-number">${String(this.#index + 1).padStart(2, '0')}</span>
      <div><h3>${escapeHtml(localized(selected.title, this.#lang))}</h3><small class="source-detail-example">${escapeHtml(localized(selected.example, this.#lang))}</small><p>${escapeHtml(localized(selected.detail, this.#lang))}</p></div>
      <a href="${escapeHtml(selected.record)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(selected.credit)}">${escapeHtml(copy[this.#lang].imageRecord)}<small>${escapeHtml(selected.credit)}</small></a>`;
  }

  #renderReading(item, t) {
    const r = item.reading;
    const brief = localized(r.paragraphs, this.#lang).join(' ').length < 300;
    return `<div class="source-path-reading" aria-live="polite">
      <aside class="source-reading-context"><span class="source-reading-index">${String(this.#index + 1).padStart(2, '0')} / ${String(this.#data.items.length).padStart(2, '0')}</span><p class="section-kicker">${escapeHtml(localized(r.label, this.#lang))}</p><h3 tabindex="-1">${escapeHtml(localized(r.title, this.#lang))}</h3><p>${escapeHtml(localized(r.context, this.#lang))}</p><button type="button" data-source-overview>← ${escapeHtml(t.overview)}</button></aside>
      <figure class="source-reading-text${brief ? ' is-brief' : ''}"><figcaption>${escapeHtml(t.read)}</figcaption><blockquote lang="${this.#lang}">${localized(r.paragraphs, this.#lang).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}</blockquote><a href="${escapeHtml(r.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(r.source.label)} ↗</a></figure>
    </div>`;
  }

  #renderItem(item, index, t) {
    const active = index === this.#index;
    return `<button type="button" class="source-path-card${active ? ' is-active' : ''}" data-source-index="${index}" aria-pressed="${active}" aria-label="${escapeHtml(t.select)} ${index + 1}: ${escapeHtml(localized(item.title, this.#lang))}">
      <img src="${escapeHtml(item.image)}" alt="" loading="${index < 3 ? 'eager' : 'lazy'}" referrerpolicy="no-referrer">
      <span class="source-card-stripe"></span><span class="source-card-number">${String(index + 1).padStart(2, '0')}</span>
      <span class="source-card-copy"><strong>${escapeHtml(localized(item.title, this.#lang))}</strong><small>${escapeHtml(localized(item.example, this.#lang))}</small></span>
    </button>`;
  }
}
