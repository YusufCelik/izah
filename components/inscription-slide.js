import { escapeHtml, localized } from './content.js';

const copy = {
  en: { image: 'Inscription image', translation: 'Translation', date: 'Date', place: 'Findspot', evidence: 'What the text shows', sources: 'Sources', previous: 'Previous slide', next: 'Next image', nextSlide: 'Next slide', open: 'Open record', imageUnavailable: 'If the image does not load, open the DiCoNab record.' },
  nl: { image: 'Afbeelding van de inscriptie', translation: 'Vertaling', date: 'Datering', place: 'Vindplaats', evidence: 'Wat de tekst laat zien', sources: 'Bronnen', previous: 'Vorige dia', next: 'Volgende afbeelding', nextSlide: 'Volgende dia', open: 'Open bron', imageUnavailable: 'Als de afbeelding niet laadt, open dan de DiCoNab-bron.' },
};

/** A photographed primary source with switchable visual witnesses and separated evidence text. */
export class InscriptionSlide extends HTMLElement {
  #data;
  #lang = 'en';
  #visualIndex = 0;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title?.en || !value?.title?.nl || !value?.translation?.en || !value?.translation?.nl || !value?.visuals?.length || !value?.sources?.length) throw new TypeError('An inscription slide needs a bilingual title and translation, visuals, and sources.');
    this.#data = value;
    this.#visualIndex = 0;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (copy[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  get visualIndex() { return this.#visualIndex; }

  select(index) {
    if (!this.#data || index < 0 || index >= this.#data.visuals.length) return;
    this.#visualIndex = index;
    this.render();
  }
  next() {
    if (this.#visualIndex === this.#data.visuals.length - 1) this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
    else this.select(this.#visualIndex + 1);
  }
  previous() {
    if (this.#visualIndex === 0) this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'previous' } }));
    else this.select(this.#visualIndex - 1);
  }

  render() {
    if (!this.#data || !this.isConnected) return;
    const d = this.#data;
    const t = copy[this.#lang];
    const visual = d.visuals[this.#visualIndex];
    const record = d.sources[0];
    this.innerHTML = `
      <div class="inscription-canvas">
        <header class="inscription-heading">
          <div><p class="section-kicker">${escapeHtml(localized(d.eyebrow, this.#lang))}</p><h2>${escapeHtml(localized(d.title, this.#lang))}</h2><p>${escapeHtml(localized(d.intro, this.#lang))}</p></div>
          <span class="inscription-date-stamp">${escapeHtml(localized(d.date, this.#lang))}</span>
        </header>
        <div class="inscription-body">
          <figure class="inscription-visual">
            <div class="inscription-visual-top"><strong>${escapeHtml(d.identifier)}</strong><div class="inscription-visual-switch" role="group" aria-label="${escapeHtml(t.image)}">${d.visuals.map((item, i) => `<button type="button" data-inscription-visual="${i}" aria-pressed="${i === this.#visualIndex}">${escapeHtml(localized(item.label, this.#lang))}</button>`).join('')}</div></div>
            <div class="inscription-photo-frame"><img src="${escapeHtml(visual.url)}" alt="${escapeHtml(localized(visual.alt, this.#lang))}"><span class="inscription-image-number">0${this.#visualIndex + 1} / 0${d.visuals.length}</span></div>
            <figcaption><span>${escapeHtml(visual.credit)} · ${escapeHtml(t.imageUnavailable)}</span><a href="${escapeHtml(record.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(t.open)} ↗</a></figcaption>
          </figure>
          <div class="inscription-reading">
            <div class="inscription-facts"><div><small>${escapeHtml(t.place)}</small><strong>${escapeHtml(localized(d.place, this.#lang))}</strong>${d.placeNote ? `<em>${escapeHtml(localized(d.placeNote, this.#lang))}</em>` : ''}</div><div><small>${escapeHtml(t.date)}</small><strong>${escapeHtml(localized(d.dateNote, this.#lang))}</strong></div></div>
            <div class="inscription-translation"><p class="section-kicker">${escapeHtml(t.translation)}</p><blockquote>${escapeHtml(localized(d.translation, this.#lang))}</blockquote><small>${escapeHtml(localized(d.translationCredit, this.#lang))}</small></div>
            <div class="inscription-lexeme"><p class="section-kicker">${escapeHtml(localized(d.evidenceLabel, this.#lang))}</p><div><span lang="und">${escapeHtml(d.transliteration)}</span><i aria-hidden="true">↔</i><b lang="he" dir="rtl">${escapeHtml(d.hebrew)}</b></div><p>${escapeHtml(localized(d.biblicalNote, this.#lang))}</p></div>
            <div class="inscription-inference"><strong>${escapeHtml(t.evidence)}</strong><p>${escapeHtml(localized(d.reading, this.#lang))}</p></div>
          </div>
        </div>
        <footer class="inscription-bottom"><div><span>${escapeHtml(t.sources)}</span>${d.sources.map(source => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} ↗</a>`).join('')}</div><div class="inscription-controls"><button type="button" data-inscription-previous>← ${escapeHtml(t.previous)}</button><button type="button" data-inscription-next>${escapeHtml(this.#visualIndex === d.visuals.length - 1 ? t.nextSlide : t.next)} →</button></div></footer>
      </div>`;
    this.querySelectorAll('[data-inscription-visual]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.inscriptionVisual))));
    this.querySelector('[data-inscription-previous]').addEventListener('click', () => this.previous());
    this.querySelector('[data-inscription-next]').addEventListener('click', () => this.next());
  }
}
