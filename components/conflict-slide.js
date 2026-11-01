import { escapeHtml, localized } from './content.js';

const copy = {
  en: { causes: 'Accounts of the rupture', alliance: 'Alliance and intercession', outcome: 'Reported outcome', report: 'What the report actually says', laterClaim: 'Later interpretation', scripture: 'Deuteronomy 20:10–15', comparison: 'Reading the comparison', read: 'What this account explains', source: 'Read source', previous: 'Previous account', next: 'Next account', previousSlide: 'Previous slide', nextSlide: 'Next slide', end: 'End of deck' },
  nl: { causes: 'Berichten over de breuk', alliance: 'Bondgenootschap en bemiddeling', outcome: 'Overgeleverde afloop', report: 'Wat het bericht werkelijk zegt', laterClaim: 'Latere interpretatie', scripture: 'Deuteronomium 20:10–15', comparison: 'De vergelijking lezen', read: 'Wat dit bericht verklaart', source: 'Lees bron', previous: 'Vorig bericht', next: 'Volgend bericht', previousSlide: 'Vorige dia', nextSlide: 'Volgende dia', end: 'Einde presentatie' },
};

const e = escapeHtml;

/** Reusable comparison of attributed conflict accounts with a separately sourced outcome. */
export class ConflictSlide extends HTMLElement {
  #data;
  #lang = 'en';
  #index = 0;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title || !value?.intro?.en || !value?.intro?.nl || value?.cases?.length < 2 || !value?.outcome?.source?.url || value.cases.some(item => !item.source?.url || !item.text?.en || !item.text?.nl)) throw new TypeError('A conflict slide needs bilingual text, at least two sourced cases, and a sourced outcome.');
    if (value.alliance && (!value.alliance.source?.url || !value.alliance.text?.en || !value.alliance.text?.nl)) throw new TypeError('An alliance needs bilingual text and a source.');
    if (value.legalComparison && (!value.legalComparison.reportSource?.url || !value.legalComparison.scriptureSource?.url || !value.legalComparison.verses?.length || value.legalComparison.verses.some(verse => !verse.text?.en || !verse.text?.nl) || (value.legalComparison.laterClaim && !value.legalComparison.laterClaimSource?.url))) throw new TypeError('A legal comparison needs bilingual verses and sourced claims.');
    this.#data = value;
    this.#index = 0;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (copy[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  get index() { return this.#index; }
  select(index) { if (this.#data && index >= 0 && index < this.#data.cases.length) { this.#index = index; this.render(); } }
  next() {
    if (this.#index === this.#data.cases.length - 1 && this.#data.endOfDeck) return;
    if (this.#index === this.#data.cases.length - 1) this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
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
    const chosen = d.cases[this.#index];
    const link = source => `<a href="${e(source.url)}" target="_blank" rel="noopener noreferrer">${e(t.source)} · ${e(source.label)} ↗</a>`;
    const alliance = d.alliance ? `<section class="conflict-alliance" data-side="${e(d.alliance.side)}" aria-label="${e(t.alliance)}"><div class="conflict-alliance-side"><span>${e(t.alliance)}</span><strong>${e(d.alliance.side === 'aws' ? 'AWS' : 'KHAZRAJ')}</strong><em>${e(localized(d.alliance.result, this.#lang))}</em></div><div class="conflict-alliance-story"><h3>${e(localized(d.alliance.heading, this.#lang))}</h3><p>${e(localized(d.alliance.text, this.#lang))}</p>${link(d.alliance.source)}${d.alliance.additionalSource ? ` ${link(d.alliance.additionalSource)}` : ''}</div></section>` : '';
    const comparison = d.legalComparison ? `<section class="conflict-law" aria-label="${e(localized(d.legalComparison.heading, this.#lang))}"><div class="conflict-law-heading"><p class="section-kicker">${e(t.comparison)}</p><h3>${e(localized(d.legalComparison.heading, this.#lang))}</h3></div><div class="conflict-law-grid"><div class="conflict-law-report"><strong>${e(t.report)}</strong><p>${e(localized(d.legalComparison.report, this.#lang))}</p>${link(d.legalComparison.reportSource)}${d.legalComparison.laterClaim ? `<div class="conflict-law-later"><strong>${e(t.laterClaim)}</strong><p>${e(localized(d.legalComparison.laterClaim, this.#lang))}</p>${link(d.legalComparison.laterClaimSource)}</div>` : ''}</div><div class="conflict-law-scripture"><strong>${e(t.scripture)}</strong><ol start="10">${d.legalComparison.verses.map(verse => `<li value="${Number(verse.number)}">${e(localized(verse.text, this.#lang))}</li>`).join('')}</ol>${link(d.legalComparison.scriptureSource)}</div></div><div class="conflict-law-reading"><strong>${e(t.comparison)}</strong><p>${e(localized(d.legalComparison.reading, this.#lang))}</p></div></section>` : '';
    this.innerHTML = `<div class="conflict-canvas">
      <header class="conflict-heading"><div><p class="section-kicker">${e(localized(d.era, this.#lang))} · ${e(t.causes)}</p><h2>${e(d.title)}</h2><p>${e(localized(d.intro, this.#lang))}</p></div><span class="conflict-number">${e(d.number)}</span></header>
      ${alliance}
      <section class="conflict-cases" aria-label="${e(t.causes)}"><div class="conflict-cases-top"><span>${e(t.causes)}</span><strong>0${this.#index + 1} / 0${d.cases.length}</strong></div><div class="conflict-grid" style="--case-count:${d.cases.length}">${d.cases.map((item, index) => `<article class="conflict-case ${index === this.#index ? 'is-active' : ''}"><button type="button" data-conflict-case="${index}" aria-pressed="${index === this.#index}"><span>0${index + 1}</span><small>${e(localized(item.label, this.#lang))}</small><strong>${e(localized(item.heading, this.#lang))}</strong></button><p>${e(localized(item.text, this.#lang))}</p>${link(item.source)}</article>`).join('')}</div><div class="conflict-reading" aria-live="polite"><strong>${e(t.read)}</strong><p>${e(localized(chosen.reading, this.#lang))}</p></div></section>
      <section class="conflict-outcome" aria-label="${e(t.outcome)}"><div class="conflict-outcome-mark">↳</div><div class="conflict-outcome-body"><p class="section-kicker">${e(t.outcome)}</p><h3>${e(localized(d.outcome.heading, this.#lang))}</h3><p>${e(localized(d.outcome.text, this.#lang))}</p>${link(d.outcome.source)}${d.outcome.additionalSource ? ` ${link(d.outcome.additionalSource)}` : ''}</div>${d.outcome.vignette ? `<aside class="conflict-vignette"><strong>${e(localized(d.outcome.vignette.label, this.#lang))}</strong><p>${e(localized(d.outcome.vignette.text, this.#lang))}</p>${link(d.outcome.vignette.source)}</aside>` : ''}</section>
      ${comparison}
      <footer class="conflict-controls"><span>${e(d.number)} / CLASSJI</span><div><button type="button" data-conflict-previous>← ${e(this.#index === 0 ? t.previousSlide : t.previous)}</button><button type="button" data-conflict-next ${d.endOfDeck && this.#index === d.cases.length - 1 ? 'disabled' : ''}>${e(d.endOfDeck && this.#index === d.cases.length - 1 ? t.end : this.#index === d.cases.length - 1 ? t.nextSlide : t.next)}${d.endOfDeck && this.#index === d.cases.length - 1 ? '' : ' →'}</button></div></footer>
    </div>`;
    this.querySelectorAll('[data-conflict-case]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.conflictCase))));
    this.querySelector('[data-conflict-previous]').addEventListener('click', () => this.previous());
    this.querySelector('[data-conflict-next]').addEventListener('click', () => this.next());
  }
}
