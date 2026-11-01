import { escapeHtml, localized } from './content.js';

const copy = {
  en: { versus: 'VERSUS', contrast: 'CONTRAST', reveal: 'Reveal counter-source', revealContrast: 'Reveal second work', reading: 'Reveal reading', complete: 'Comparison complete', previous: 'Previous', original: 'Original wording', translation: 'Translation', chain: 'Transmission chain', source: 'Source', sources: 'Sources', notYet: 'Counter-source to reveal', notYetContrast: 'Second work to reveal', pending: 'Put these sources together to ask a new question.' },
  nl: { versus: 'TEGENOVER', contrast: 'CONTRAST', reveal: 'Toon tegenbron', revealContrast: 'Toon tweede werk', reading: 'Toon duiding', complete: 'Vergelijking voltooid', previous: 'Vorige', original: 'Oorspronkelijke tekst', translation: 'Vertaling', chain: 'Overleveringsketen', source: 'Bron', sources: 'Bronnen', notYet: 'Tegenbron nog te tonen', notYetContrast: 'Tweede werk nog te tonen', pending: 'Leg deze bronnen naast elkaar om een nieuwe vraag te stellen.' },
};

/** Two source claims revealed in sequence, followed by a bounded interpretation. */
export class VersusSlide extends HTMLElement {
  #data;
  #lang = 'en';
  #stage = 0;
  #previousBoundaryLabel;
  #nextBoundaryLabel;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title?.en || !value?.title?.nl || value?.sides?.length !== 2 || !value.reading?.text?.en) throw new TypeError('A versus slide needs a bilingual title, two sides, and a reading.');
    if (value.sides.some(side => !side.id || !side.heading?.en || !side.heading?.nl || !side.sources?.length || !(side.quote?.en || side.original || side.translation?.en))) throw new TypeError('Each side needs an ID, bilingual heading, source text, and source links.');
    this.#data = value;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (copy[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  set previousBoundaryLabel(value) { this.#previousBoundaryLabel = value; this.render(); }
  get previousBoundaryLabel() { return this.#previousBoundaryLabel; }
  set nextBoundaryLabel(value) { this.#nextBoundaryLabel = value; this.render(); }
  get nextBoundaryLabel() { return this.#nextBoundaryLabel; }
  get stage() { return this.#stage; }

  select(stage, focusTarget = '') {
    if (!this.#data || stage < 0 || stage > 2) return;
    this.#stage = stage;
    this.render();
    if (focusTarget) this.querySelector(`[data-versus-control="${focusTarget}"]`)?.focus({ preventScroll: true });
  }
  next(focusTarget = '') {
    if (this.#stage === 2) {
      if (this.#nextBoundaryLabel) this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
      return;
    }
    this.select(this.#stage + 1, focusTarget);
  }
  previous(focusTarget = '') {
    if (this.#stage === 0) {
      this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'previous' } }));
      return;
    }
    this.select(this.#stage - 1, focusTarget);
  }

  render() {
    if (!this.#data || !this.isConnected) return;
    const t = copy[this.#lang];
    const previousLabel = this.#stage === 0 && this.#previousBoundaryLabel ? localized(this.#previousBoundaryLabel, this.#lang) : t.previous;
    const isContrast = this.#data.mode === 'contrast';
    const nextLabel = this.#stage === 0 ? (isContrast ? t.revealContrast : t.reveal) : this.#stage === 1 ? t.reading : this.#nextBoundaryLabel ? localized(this.#nextBoundaryLabel, this.#lang) : t.complete;
    this.innerHTML = `
      <div class="versus-canvas${this.#data.layout === 'reading' ? ' is-reading' : ''}${this.#data.density === 'compact' ? ' is-compact' : ''}${isContrast ? ' is-contrast' : ''}">
        <div class="versus-heading"><div><p class="section-kicker">${escapeHtml(localized(this.#data.eyebrow, this.#lang))}</p><h2>${escapeHtml(localized(this.#data.title, this.#lang))}</h2><p>${escapeHtml(localized(this.#data.intro, this.#lang))}</p></div><span class="versus-fraction">${String(this.#stage + 1).padStart(2, '0')} <i>/</i> 03</span></div>
        <div class="versus-pair">
          ${this.#renderSide(this.#data.sides[0], 0)}
          <div class="versus-glyph" aria-hidden="true">${isContrast ? '↔' : '≠'}</div>
          ${this.#stage > 0 ? this.#renderSide(this.#data.sides[1], 1) : `<article class="versus-panel versus-counter is-pending"><span class="versus-panel-index">02</span><button type="button" class="versus-reveal" data-versus-reveal><span>＋</span>${escapeHtml(isContrast ? t.notYetContrast : t.notYet)}</button></article>`}
        </div>
        <div class="versus-reading${this.#stage === 2 ? ' is-visible' : ''}" aria-live="polite">${this.#stage === 2 ? `<span class="versus-reading-mark" aria-hidden="true">∴</span><div><p class="section-kicker">${escapeHtml(localized(this.#data.reading.label, this.#lang))}</p><h3>${escapeHtml(localized(this.#data.reading.title, this.#lang))}</h3><p>${escapeHtml(localized(this.#data.reading.text, this.#lang))}</p><small>${escapeHtml(localized(this.#data.reading.caveat, this.#lang))}${this.#data.reading.source ? ` <a href="${escapeHtml(this.#data.reading.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(this.#data.reading.source.label)} ↗</a>` : ''}</small></div>` : `<p class="versus-reading-pending">${escapeHtml(t.pending)}</p>`}</div>
        <div class="versus-bottom"><div class="versus-progress" role="progressbar" aria-label="${escapeHtml(isContrast ? t.contrast : t.versus)}" aria-valuemin="1" aria-valuemax="3" aria-valuenow="${this.#stage + 1}"><span class="is-filled"></span><span class="${this.#stage >= 1 ? 'is-filled' : ''}"></span><span class="${this.#stage === 2 ? 'is-filled' : ''}"></span></div><div class="versus-controls"><button type="button" data-versus-control="previous" ${this.#stage === 0 && !this.#previousBoundaryLabel ? 'disabled' : ''}>← ${escapeHtml(previousLabel)}</button><button type="button" data-versus-control="next" ${this.#stage === 2 && !this.#nextBoundaryLabel ? 'disabled' : ''}>${escapeHtml(nextLabel)} →</button></div></div>
      </div>`;
    this.querySelector('[data-versus-control="previous"]').addEventListener('click', () => this.previous('previous'));
    this.querySelector('[data-versus-control="next"]').addEventListener('click', () => this.next('next'));
    this.querySelector('[data-versus-reveal]')?.addEventListener('click', () => this.next('next'));
  }

  #renderSide(side, index) {
    const t = copy[this.#lang];
    const quote = side.quote ? `<blockquote>${escapeHtml(localized(side.quote, this.#lang))}</blockquote>${side.attribution ? `<p class="versus-attribution">${escapeHtml(localized(side.attribution, this.#lang))}</p>` : ''}` : '';
    const originalDirection = side.originalDirection === 'rtl' || side.originalDirection === 'ltr' ? side.originalDirection : 'auto';
    const original = side.original ? `<div class="versus-original"><small>${escapeHtml(t.original)}</small><p lang="${escapeHtml(side.originalLang || 'und')}" dir="${originalDirection}">${escapeHtml(side.original)}</p></div>` : '';
    const translationLabel = side.translationLabel ? localized(side.translationLabel, this.#lang) : t.translation;
    const translation = side.translation ? `<div class="versus-translation"><small>${escapeHtml(translationLabel)}</small><p>${escapeHtml(localized(side.translation, this.#lang))}</p></div>` : '';
    const isnad = side.isnad ? `<details class="versus-isnad"><summary>${escapeHtml(t.chain)}</summary><p>${escapeHtml(localized(side.isnad, this.#lang))}</p></details>` : '';
    const context = side.context ? `<p class="versus-context">${escapeHtml(localized(side.context, this.#lang))}${side.contextSource ? ` <a href="${escapeHtml(side.contextSource.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(side.contextSource.label)} ↗</a>` : ''}</p>` : '';
    return `<article class="versus-panel ${index === 0 ? 'versus-report' : 'versus-counter'}"><header><span class="versus-panel-index">0${index + 1}</span><span class="versus-panel-label">${escapeHtml(localized(side.label, this.#lang))}</span></header><h3>${escapeHtml(localized(side.heading, this.#lang))}</h3><div class="versus-panel-body">${quote}${original}${translation}${isnad}</div>${context}<footer><span>${escapeHtml(side.sources.length === 1 ? t.source : t.sources)}</span>${side.sources.map(source => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(localized(source.label, this.#lang))} ↗</a>`).join('')}</footer></article>`;
  }
}
