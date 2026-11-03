import { escapeHtml, localized } from './content.js';

const ui = {
  en: { absent: 'No clause', children: 'Children only', both: 'Self + children', source: 'Read source', previous: 'Previous', next: 'Next', previousSlide: 'Previous slide', nextSlide: 'Next slide', selected: 'Selected witness', evidence: 'What this version says', distinction: 'Textual difference · not a dated policy change' },
  nl: { absent: 'Geen bepaling', children: 'Alleen kinderen', both: 'Zelf + kinderen', source: 'Lees bron', previous: 'Vorige', next: 'Volgende', previousSlide: 'Vorige dia', nextSlide: 'Volgende dia', selected: 'Gekozen tekstgetuige', evidence: 'Wat deze versie zegt', distinction: 'Tekstverschil · geen gedateerde beleidswijziging' },
};

/** A source-linked matrix of variant clauses. All rows remain visible while a presenter selects one. */
export class VariantMatrix extends HTMLElement {
  #data;
  #lang = 'en';
  #selected = 0;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title?.en || !value?.title?.nl || !value?.rows?.length || value.rows.some(row => !row.id || !row.source?.url || !row.excerpt || !row.excerptTranslation?.en || !row.excerptTranslation?.nl || !['absent', 'children', 'both'].includes(row.status))) throw new TypeError('A variant matrix needs a bilingual title and sourced rows with excerpts, translations, and known clause states.');
    this.#data = value;
    this.#selected = 0;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (ui[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  get selected() { return this.#selected; }

  select(index) {
    if (!this.#data || index < 0 || index >= this.#data.rows.length) return;
    this.#selected = index;
    this.render();
  }
  next() {
    if (this.#selected < this.#data.rows.length - 1) this.select(this.#selected + 1);
    else this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
  }
  previous() {
    if (this.#selected > 0) this.select(this.#selected - 1);
    else this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'previous' } }));
  }

  render() {
    if (!this.#data || !this.isConnected) return;
    const d = this.#data;
    const t = ui[this.#lang];
    const selected = d.rows[this.#selected];
    this.innerHTML = `
      <div class="variant-canvas">
        <header class="variant-heading">
          <div><p class="section-kicker">${escapeHtml(localized(d.eyebrow, this.#lang))}</p><h2>${escapeHtml(localized(d.title, this.#lang))}</h2><p>${escapeHtml(localized(d.intro, this.#lang))}</p></div>
          <span class="variant-count">${String(this.#selected + 1).padStart(2, '0')} <i>/</i> ${String(d.rows.length).padStart(2, '0')}</span>
        </header>
        <div class="variant-key"><span class="variant-key-mark" aria-hidden="true">≠</span>${escapeHtml(t.distinction)}</div>
        <div class="variant-table-wrap"><table class="variant-table">
          <thead><tr><th scope="col">${escapeHtml(localized(d.columns.witness, this.#lang))}</th><th scope="col">${escapeHtml(localized(d.columns.attributed, this.#lang))}</th><th scope="col">${escapeHtml(localized(d.columns.clause, this.#lang))}</th></tr></thead>
          <tbody>${d.rows.map((row, index) => `<tr class="${index === this.#selected ? 'is-selected' : ''}" data-variant-row="${index}"><th scope="row"><button type="button" data-variant-select="${index}" aria-current="${index === this.#selected ? 'true' : 'false'}"><span class="variant-row-number">${String(index + 1).padStart(2, '0')}</span><span><strong>${escapeHtml(row.witness)}</strong><small>${escapeHtml(localized(row.date, this.#lang))}</small></span></button></th><td data-label="${escapeHtml(localized(d.columns.attributed, this.#lang))}">${escapeHtml(row.attributed)}</td><td data-label="${escapeHtml(localized(d.columns.clause, this.#lang))}"><span class="variant-status variant-status-${row.status}"><span class="variant-status-bars" aria-hidden="true"><i></i><i></i></span>${escapeHtml(t[row.status])}</span></td></tr>`).join('')}</tbody>
        </table></div>
        <div class="variant-detail" aria-live="polite"><div><p class="section-kicker">${escapeHtml(t.selected)} ${this.#selected + 1}/${d.rows.length}</p><h3>${escapeHtml(selected.witness)}</h3></div><div><strong>${escapeHtml(t.evidence)}</strong><blockquote class="variant-excerpt" lang="ar" dir="rtl">${escapeHtml(selected.excerpt)}</blockquote><p class="variant-excerpt-translation" lang="${this.#lang}">${escapeHtml(localized(selected.excerptTranslation, this.#lang))}</p><p class="variant-detail-note">${escapeHtml(localized(selected.detail, this.#lang))}</p><a href="${escapeHtml(selected.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(selected.source.label)} ↗</a></div></div>
        <div class="variant-conclusion"><p>${escapeHtml(localized(d.takeaway, this.#lang))}</p><small>${escapeHtml(localized(d.caveat, this.#lang))} <a href="${escapeHtml(d.study.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(d.study.label)} ↗</a></small></div>
        <div class="variant-bottom"><span class="variant-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${d.rows.length}" aria-valuenow="${this.#selected + 1}" aria-label="${escapeHtml(t.selected)}"><i style="--progress:${(this.#selected + 1) / d.rows.length * 100}%"></i></span><div><button type="button" data-variant-control="previous">← ${escapeHtml(this.#selected === 0 ? t.previousSlide : t.previous)}</button><button type="button" data-variant-control="next">${escapeHtml(this.#selected === d.rows.length - 1 ? t.nextSlide : t.next)} →</button></div></div>
      </div>`;
    this.querySelectorAll('[data-variant-select]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.variantSelect))));
    this.querySelector('[data-variant-control="previous"]').addEventListener('click', () => this.previous());
    this.querySelector('[data-variant-control="next"]').addEventListener('click', () => this.next());
  }
}
