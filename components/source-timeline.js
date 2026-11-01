import { escapeHtml, localized } from './content.js';

const copy = {
  en: { events: 'Events', chapter: 'CHAPTER', sourceDates: 'SOURCE DATES', dateClaims: 'Date claims', different: 'Sources disagree on the date', same: 'Several sources give this date', one: 'One source dates this event', source: 'SOURCE', open: 'Open source ↗', previous: 'Previous', next: 'Next', of: 'of', approx: 'c.', range: 'range', note: 'Dating note', all: 'All events' },
  nl: { events: 'Gebeurtenissen', chapter: 'HOOFDSTUK', sourceDates: 'DATERINGEN VOLGENS BRONNEN', dateClaims: 'Dateringen', different: 'Bronnen verschillen over de datering', same: 'Meerdere bronnen geven deze datum', one: 'Eén bron dateert deze gebeurtenis', source: 'BRON', open: 'Open bron ↗', previous: 'Vorige', next: 'Volgende', of: 'van', approx: 'ca.', range: 'periode', note: 'Toelichting bij datering', all: 'Alle gebeurtenissen' },
};

function safeUrl(value) {
  try {
    const url = new URL(value, location.href);
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '#';
  } catch { return '#'; }
}

/**
 * Reusable, data-driven presentation component.
 * Set `element.data = { sources, events }` and `element.lang = 'en' | 'nl'`.
 * Every event date is a separate source claim, so two sources can share one date
 * or offer different dates without merging them into an editorial "correct" tick.
 */
export class SourceTimeline extends HTMLElement {
  #data;
  #lang = 'en';
  #index = 0;
  #nextBoundaryLabel;

  connectedCallback() { this.render(); }

  set data(value) {
    this.#validate(value);
    this.#data = value;
    this.#index = Math.min(this.#index, value.events.length - 1);
    this.render();
  }
  get data() { return this.#data; }

  set lang(value) {
    if (!copy[value]) return;
    this.#lang = value;
    this.render();
  }
  get lang() { return this.#lang; }

  set nextBoundaryLabel(value) { this.#nextBoundaryLabel = value; this.render(); }
  get nextBoundaryLabel() { return this.#nextBoundaryLabel; }

  get selectedIndex() { return this.#index; }
  select(index, focusTarget = '') {
    if (!this.#data || index < 0 || index >= this.#data.events.length) return;
    this.#index = index;
    this.render();
    if (focusTarget === 'event') this.querySelector(`[data-event-index="${index}"]`)?.focus({ preventScroll: true });
    if (focusTarget === 'previous' || focusTarget === 'next') this.querySelector(`[data-step="${focusTarget}"]`)?.focus({ preventScroll: true });
  }
  next(focusTarget = '') {
    if (this.#data && this.#index === this.#data.events.length - 1) {
      this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
      return;
    }
    this.select(this.#index + 1, focusTarget);
  }
  previous() { this.select(this.#index - 1); }

  #validate(value) {
    if (!value || !Array.isArray(value.events) || !value.events.length || !value.sources) throw new TypeError('Timeline needs events and sources.');
    for (const event of value.events) {
      if (!event.id || !Array.isArray(event.claims) || !event.claims.length) throw new TypeError(`Event ${event.id || '(unnamed)'} needs source claims.`);
      for (const claim of event.claims) {
        if (!value.sources[claim.sourceId] || !Number.isFinite(claim.year)) throw new TypeError(`Invalid claim in ${event.id}.`);
      }
    }
  }

  render() {
    if (!this.#data || !this.isConnected) return;
    const lang = this.#lang;
    const t = copy[lang];
    const events = this.#data.events;
    const event = events[this.#index];
    const claims = event.claims;
    const dates = new Set(claims.map(claim => `${claim.year}:${claim.endYear || ''}`));
    const status = dates.size > 1 ? t.different : claims.length > 1 ? t.same : t.one;
    const yearStart = Math.min(...claims.map(claim => claim.year)) - 1;
    const yearEnd = Math.max(...claims.map(claim => claim.endYear ?? claim.year)) + 1;
    const span = Math.max(2, yearEnd - yearStart);
    const axisYears = Array.from({ length: Math.ceil(yearEnd - yearStart) + 1 }, (_, i) => yearStart + i);
    const lastEvent = this.#index === events.length - 1;
    const nextLabel = lastEvent && this.#nextBoundaryLabel ? localized(this.#nextBoundaryLabel, lang) : t.next;

    this.innerHTML = `
      <div class="timeline-layout">
        <nav class="event-rail" aria-label="${escapeHtml(t.all)}">
          <div class="rail-heading"><span>${escapeHtml(t.events)}</span><strong>${String(events.length).padStart(2, '0')}</strong></div>
          <ol class="event-list">${events.map((item, i) => this.#eventButton(item, i)).join('')}</ol>
        </nav>
        <section class="event-stage" aria-label="${escapeHtml(localized(event.title, lang))}">
          <div class="event-stage-top"><span>${escapeHtml(t.chapter)} ${String(this.#index + 1).padStart(2, '0')} <span class="top-separator">/</span> ${String(events.length).padStart(2, '0')}</span><span>${escapeHtml(localized(event.period, lang))}</span></div>
          <div class="event-story"><div class="story-number" aria-hidden="true">${String(this.#index + 1).padStart(2, '0')}</div><div class="story-content"><p class="event-location">${escapeHtml(localized(event.location, lang))}</p><h2>${escapeHtml(localized(event.title, lang))}</h2><p class="event-summary">${escapeHtml(localized(event.summary, lang))}</p></div></div>
          <div class="claims-section">
            <div class="claims-heading"><div><span class="section-kicker">${escapeHtml(t.sourceDates)}</span><h3>${escapeHtml(t.dateClaims)}</h3></div><p class="claim-status${dates.size > 1 ? ' is-disputed' : ''}"><span class="status-dot"></span>${escapeHtml(status)}</p></div>
            <div class="claim-axis" aria-hidden="true">${axisYears.map(year => `<span style="left:${((year - yearStart) / span) * 100}%">${year}</span>`).join('')}</div>
            <div class="claim-list">${claims.map((claim, i) => this.#claimRow(claim, i, yearStart, span)).join('')}</div>
          </div>
          <div class="stage-bottom"><span>${escapeHtml(t.footer || 'CLASSJI')}</span><div class="step-actions"><button type="button" data-step="previous" ${this.#index === 0 ? 'disabled' : ''} aria-label="${escapeHtml(t.previous)}">← <span>${escapeHtml(t.previous)}</span></button><span class="step-count">${this.#index + 1} ${escapeHtml(t.of)} ${events.length}</span><button type="button" data-step="next" ${lastEvent && !this.#nextBoundaryLabel ? 'disabled' : ''} aria-label="${escapeHtml(nextLabel)}"><span>${escapeHtml(nextLabel)}</span> →</button></div></div>
        </section>
      </div>`;

    this.querySelectorAll('[data-event-index]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.eventIndex), 'event')));
    this.querySelector('[data-step="previous"]').addEventListener('click', () => this.select(this.#index - 1, 'previous'));
    this.querySelector('[data-step="next"]').addEventListener('click', () => this.next('next'));
    this.querySelector('.event-list .is-active')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  #eventButton(event, index) {
    const lang = this.#lang;
    const active = index === this.#index;
    return `<li><button type="button" data-event-index="${index}" class="event-button${active ? ' is-active' : ''}" aria-current="${active ? 'step' : 'false'}"><span class="rail-year">${escapeHtml(localized(event.displayDate, lang))}</span><span class="rail-node" aria-hidden="true"></span><span class="rail-title">${escapeHtml(localized(event.shortTitle || event.title, lang))}<small>${event.claims.length} ${event.claims.length === 1 ? (lang === 'nl' ? 'bron' : 'source') : (lang === 'nl' ? 'bronnen' : 'sources')}</small></span><span class="rail-arrow" aria-hidden="true">↗</span></button></li>`;
  }

  #claimRow(claim, index, start, span) {
    const lang = this.#lang;
    const t = copy[lang];
    const source = this.#data.sources[claim.sourceId];
    const left = ((claim.year - start) / span) * 100;
    const width = claim.endYear ? Math.max(0, ((claim.endYear - claim.year) / span) * 100) : 0;
    const related = claim.relatedSourceId ? this.#data.sources[claim.relatedSourceId] : null;
    return `<div class="claim-row"><div class="claim-plot" aria-hidden="true"><div class="claim-grid"></div>${width ? `<span class="claim-range" style="left:${left}%;width:${width}%"></span>` : ''}<span class="claim-tick" style="left:${left}%" title="${escapeHtml(localized(claim.date, lang))}"></span></div><div class="claim-information"><div class="claim-date"><strong>${escapeHtml(localized(claim.date, lang))}</strong><span>${String(index + 1).padStart(2, '0')}</span></div><a class="claim-source" href="${escapeHtml(safeUrl(source.url))}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(localized(source.title, lang))}</span><span aria-hidden="true">↗</span></a>${claim.note ? `<p class="claim-note">${escapeHtml(localized(claim.note, lang))}</p>` : ''}${related ? `<a class="claim-source related-source" href="${escapeHtml(safeUrl(related.url))}" target="_blank" rel="noopener noreferrer"><span>${escapeHtml(localized(related.title, lang))}</span><span aria-hidden="true">↗</span></a>` : ''}</div></div>`;
  }
}
