import { escapeHtml, localized } from './content.js';
import { arabiaMapPaths } from '../data/arabia-map.js';

const copy = {
  en: { map: 'Map of Arabia with northern and southern focus areas', regions: 'Choose a region', places: 'Places', evidence: 'What we know', previous: 'Previous', next: 'Next', previousSlide: 'Previous slide', nextSlide: 'Next slide' },
  nl: { map: 'Kaart van Arabië met noordelijke en zuidelijke focusgebieden', regions: 'Kies een regio', places: 'Plaatsen', evidence: 'Wat we weten', previous: 'Vorige', next: 'Volgende', previousSlide: 'Vorige dia', nextSlide: 'Volgende dia' },
};
const project = (lon, lat) => ({ x: (lon - 29) * 27, y: (34 - lat) * 25 });

/** A two-region map with source-linked context and approximate site markers. */
export class GeoRegionsSlide extends HTMLElement {
  #data;
  #lang = 'en';
  #index = 0;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title?.en || !value?.title?.nl || value?.regions?.length !== 2 || value.regions.some(region => !region.name?.en || !region.detail?.nl || !region.sites?.length)) throw new TypeError('A geography slide needs a bilingual title and two sourced regions.');
    this.#data = value;
    this.#index = 0;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (copy[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  get index() { return this.#index; }
  select(index) { if (this.#data && index >= 0 && index < this.#data.regions.length) { this.#index = index; this.render(); } }
  next() {
    if (this.#index === this.#data.regions.length - 1) this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
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
    const current = d.regions[this.#index];
    const allSites = d.regions.flatMap(region => region.sites.map(site => ({ ...site, region: region.id })));
    this.innerHTML = `
      <div class="geo-canvas">
        <header class="geo-heading"><div><p class="section-kicker">${escapeHtml(localized(d.eyebrow, this.#lang))}</p><h2>${escapeHtml(localized(d.title, this.#lang))}</h2><p>${escapeHtml(localized(d.intro, this.#lang))}</p></div><span class="geo-fraction">0${this.#index + 1} <i>/</i> 02</span></header>
        <div class="geo-layout ${current.inscription ? 'has-inscription' : ''}">
          <div class="geo-map-wrap">
            <svg class="geo-map" viewBox="0 0 900 620" role="img" aria-label="${escapeHtml(t.map)}" preserveAspectRatio="xMidYMid meet">
              <defs><pattern id="geo-grid" width="54" height="50" patternUnits="userSpaceOnUse"><path d="M54 0H0V50" class="geo-grid-line" fill="none"/></pattern></defs>
              <rect width="900" height="620" class="geo-sea"/><rect width="900" height="620" fill="url(#geo-grid)"/>
              ${arabiaMapPaths.map(shape => `<path class="geo-land ${['Egypt','Jordan','Iraq','Iran','Israel'].includes(shape.name) ? 'is-context' : ''}" d="${escapeHtml(shape.d)}"/>`).join('')}
              <path class="geo-focus-area ${this.#index === 0 ? 'is-active' : ''}" d="M136 111 L390 115 L405 310 L250 340 L145 245 Z"/>
              <path class="geo-focus-area is-south ${this.#index === 1 ? 'is-active' : ''}" d="M290 395 L535 368 L605 535 L380 590 L287 510 Z"/>
              <text x="107" y="368" class="geo-water-label">RED SEA</text><text x="618" y="565" class="geo-water-label">ARABIAN SEA</text>
              ${allSites.map(site => { const { x, y } = project(site.lon, site.lat); const active = site.region === current.id; return `<g class="geo-site ${active ? 'is-active' : ''}"><rect x="${x - 7}" y="${y - 7}" width="14" height="14"/><text x="${x + site.labelDx}" y="${y + site.labelDy}" text-anchor="${site.textAnchor}">${escapeHtml(site.name)}</text></g>`; }).join('')}
            </svg>
            ${current.inscription ? `<figure class="geo-inscription-photo"><img src="${escapeHtml(current.inscription.image.src)}" alt="${escapeHtml(localized(current.inscription.image.alt, this.#lang))}" loading="lazy"><figcaption><a href="${escapeHtml(current.inscription.image.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(current.inscription.image.credit)} ↗</a></figcaption></figure>` : ''}
            <div class="geo-map-credit"><span>${escapeHtml(localized(d.mapCaveat, this.#lang))}</span><a href="${escapeHtml(d.mapSource.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(d.mapSource.label)} ↗</a></div>
          </div>
          <aside class="geo-panel"><p class="section-kicker">${escapeHtml(t.regions)}</p><div class="geo-region-tabs">${d.regions.map((region, index) => `<button type="button" data-geo-region="${index}" aria-pressed="${index === this.#index}"><span>${escapeHtml(region.number)}</span><strong>${escapeHtml(localized(region.name, this.#lang))}</strong></button>`).join('')}</div>
            <div class="geo-region-content"><span class="geo-region-number">${escapeHtml(current.number)}</span><p class="geo-region-subtitle">${escapeHtml(localized(current.subtitle, this.#lang))}</p><h3>${escapeHtml(localized(current.name, this.#lang))}</h3><small>${escapeHtml(t.places)}</small><div class="geo-site-list">${current.sites.map(site => `<span>${escapeHtml(site.name)}</span>`).join('')}</div><small>${escapeHtml(t.evidence)}</small><p>${escapeHtml(localized(current.detail, this.#lang))}</p><a href="${escapeHtml(current.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(current.source.label)} ↗</a>${current.inscription ? `<article class="geo-inscription"><div class="geo-inscription-heading"><span>${escapeHtml(current.inscription.reference)}</span><h4>${escapeHtml(localized(current.inscription.title, this.#lang))}</h4></div><p class="geo-inscription-script-label">${this.#lang === 'nl' ? 'Sabeïsch · weergegeven in Arabisch schrift' : 'Sabaic · rendered in Arabic letters'}</p><blockquote lang="xsa-Arab" dir="rtl">${escapeHtml(current.inscription.original)}</blockquote><p class="geo-inscription-translation" lang="${this.#lang}">${escapeHtml(localized(current.inscription.translation, this.#lang))}</p><p class="geo-inscription-note">${escapeHtml(localized(current.inscription.note, this.#lang))}</p><a href="${escapeHtml(current.inscription.source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(current.inscription.source.label)} ↗</a></article>` : ''}</div>
          </aside>
        </div>
        <footer class="geo-bottom"><span>${escapeHtml(localized(d.mapCaveat, this.#lang))}</span><div><button type="button" data-geo-control="previous">← ${escapeHtml(this.#index === 0 ? t.previousSlide : t.previous)}</button><button type="button" data-geo-control="next">${escapeHtml(this.#index === 1 ? t.nextSlide : t.next)} →</button></div></footer>
      </div>`;
    this.querySelectorAll('[data-geo-region]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.geoRegion))));
    this.querySelector('[data-geo-control="previous"]').addEventListener('click', () => this.previous());
    this.querySelector('[data-geo-control="next"]').addEventListener('click', () => this.next());
  }
}
