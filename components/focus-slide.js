import { escapeHtml, localized } from './content.js';

const copy = {
  en: { next: 'Reveal next link', previous: 'Previous', complete: 'Argument complete', sources: 'Check the sources', affiliation: 'Disputant in al-Tirmidhī 323', progress: 'Argument revealed' },
  nl: { next: 'Toon volgende schakel', previous: 'Vorige', complete: 'Redenering compleet', sources: 'Bekijk de bronnen', affiliation: 'Partij in al-Tirmidhī 323', progress: 'Getoonde redenering' },
};

const bilingual = value => Boolean(value?.en && value?.nl);

/** Two competing claims, then their affiliations and the position of one narrator. */
export class FocusSlide extends HTMLElement {
  #data;
  #lang = 'en';
  #stage = 0;
  #previousBoundaryLabel;
  #nextBoundaryLabel;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!bilingual(value?.title) || !bilingual(value?.intro) || !bilingual(value?.prompt) || !value?.verse?.arabic || !bilingual(value?.verse?.translation) || !value?.verse?.source?.url || value?.claims?.length !== 2 || value?.stages?.length !== 3) {
      throw new TypeError('A focus slide needs a bilingual verse, two claims, and three stages.');
    }
    if (value.claims.some(claim => !claim.id || !claim.marker || !bilingual(claim.title) || !bilingual(claim.witness) || !bilingual(claim.affiliation) || !bilingual(claim.context))) {
      throw new TypeError('Each claim needs an ID, marker, and bilingual title, witness, affiliation, and context.');
    }
    if (value.stages.some(stage => !bilingual(stage.label) || !bilingual(stage.title) || !bilingual(stage.text) || !stage.sources?.length || stage.sources.some(source => !source.label || !source.url?.startsWith('https://')))) {
      throw new TypeError('Each stage needs bilingual copy and source links.');
    }
    if (!bilingual(value.stages[2].connection) || !bilingual(value.stages[2].caveat)) throw new TypeError('The final stage needs a bilingual narrator connection and caveat.');
    this.#data = value;
    this.#stage = 0;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (copy[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  set previousBoundaryLabel(value) { this.#previousBoundaryLabel = value; this.render(); }
  set nextBoundaryLabel(value) { this.#nextBoundaryLabel = value; this.render(); }
  get stage() { return this.#stage; }

  select(stage, focusTarget = '') {
    if (!this.#data || !Number.isInteger(stage) || stage < 0 || stage >= this.#data.stages.length) return;
    this.#stage = stage;
    this.render();
    if (focusTarget) this.querySelector(`[data-focus-control="${focusTarget}"]`)?.focus({ preventScroll: true });
  }
  next(focusTarget = '') {
    if (this.#stage === this.#data.stages.length - 1) {
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
    const stage = this.#data.stages[this.#stage];
    const previousLabel = this.#stage === 0 && this.#previousBoundaryLabel ? localized(this.#previousBoundaryLabel, this.#lang) : t.previous;
    const nextLabel = this.#stage === 2 ? (this.#nextBoundaryLabel ? localized(this.#nextBoundaryLabel, this.#lang) : t.complete) : t.next;
    this.innerHTML = `<div class="focus-canvas">
      <div class="focus-top"><div><p class="section-kicker">${escapeHtml(localized(this.#data.eyebrow, this.#lang))}</p><h2>${escapeHtml(localized(this.#data.title, this.#lang))}</h2><p class="focus-intro">${escapeHtml(localized(this.#data.intro, this.#lang))}</p></div><span class="focus-fraction">0${this.#stage + 1}<i>/</i>03</span></div>
      <figure class="focus-verse"><figcaption><span>${escapeHtml(this.#data.verse.reference)}</span><a href="${escapeHtml(this.#data.verse.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(this.#data.verse.source.label)} ↗</a></figcaption><p class="focus-verse-arabic" lang="ar" dir="rtl">${escapeHtml(this.#data.verse.arabic)}</p><blockquote lang="${this.#lang}">${escapeHtml(localized(this.#data.verse.translation, this.#lang))}</blockquote></figure>
      <div class="focus-case"><p class="focus-prompt">${escapeHtml(localized(this.#data.prompt, this.#lang))}</p>
        <div class="focus-claims">${this.#data.claims.map((claim, index) => this.#renderClaim(claim, index, t)).join('')}<span class="focus-versus" aria-hidden="true">↔</span></div>
      </div>
      <article class="focus-step" aria-live="polite"><div class="focus-step-number">${escapeHtml(localized(stage.label, this.#lang))}</div><div class="focus-step-main"><h3>${escapeHtml(localized(stage.title, this.#lang))}</h3><p>${escapeHtml(localized(stage.text, this.#lang))}</p>${this.#stage === 2 ? `<div class="focus-connection">${escapeHtml(localized(stage.connection, this.#lang))}</div><p class="focus-caveat">${escapeHtml(localized(stage.caveat, this.#lang))}</p>` : ''}<div class="focus-sources"><span>${escapeHtml(t.sources)}</span>${stage.sources.map(source => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} ↗</a>`).join('')}</div></div></article>
      <div class="focus-bottom"><div class="focus-progress" role="progressbar" aria-label="${escapeHtml(t.progress)}" aria-valuemin="1" aria-valuemax="3" aria-valuenow="${this.#stage + 1}">${this.#data.stages.map((_, index) => `<span class="${index <= this.#stage ? 'is-filled' : ''}"></span>`).join('')}</div><div class="focus-controls"><button type="button" data-focus-control="previous" ${this.#stage === 0 && !this.#previousBoundaryLabel ? 'disabled' : ''}>← ${escapeHtml(previousLabel)}</button><button type="button" data-focus-control="next" ${this.#stage === 2 && !this.#nextBoundaryLabel ? 'disabled' : ''}>${escapeHtml(nextLabel)} →</button></div></div>
    </div>`;
    this.querySelector('[data-focus-control="previous"]').addEventListener('click', () => this.previous('previous'));
    this.querySelector('[data-focus-control="next"]').addEventListener('click', () => this.next('next'));
  }

  #renderClaim(claim, index, t) {
    return `<div class="focus-claim ${this.#stage === 2 && index === 1 ? 'is-linked' : ''}"><span class="focus-claim-marker">${escapeHtml(claim.marker)}</span><div><h3>${escapeHtml(localized(claim.title, this.#lang))}</h3><p>${escapeHtml(localized(claim.witness, this.#lang))}</p>${this.#stage >= 1 ? `<div class="focus-affiliation"><span>${escapeHtml(t.affiliation)}</span><strong>${escapeHtml(localized(claim.affiliation, this.#lang))}</strong></div><p class="focus-claim-context">${escapeHtml(localized(claim.context, this.#lang))}</p>` : ''}</div></div>`;
  }
}
