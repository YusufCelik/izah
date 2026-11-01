import { escapeHtml, localized } from './content.js';

const copy = {
  en: { shelf: 'Reading shelf', record: 'Book record', previous: 'Previous shelf', next: 'Next shelf', previousSlide: 'Previous slide', end: 'End of deck', of: 'of' },
  nl: { shelf: 'Boekenplank', record: 'Boekvermelding', previous: 'Vorige plank', next: 'Volgende plank', previousSlide: 'Vorige dia', end: 'Einde presentatie', of: 'van' },
};
const e = escapeHtml;

/** Reusable, paged gallery of books. Titles and links live in data, outside the component. */
export class ReadingShelf extends HTMLElement {
  #data;
  #lang = 'en';
  #page = 0;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title?.en || !value?.title?.nl || !Number.isInteger(value.pageSize) || value.pageSize < 1 || !value.books?.length || value.books.some(book => !book.author || !book.title || !book.year || !book.url || !book.cover)) throw new TypeError('A reading shelf needs bilingual headings and books with citations and covers.');
    this.#data = value;
    this.#page = 0;
    this.render();
  }
  get data() { return this.#data; }
  set lang(value) { if (copy[value]) { this.#lang = value; this.render(); } }
  get lang() { return this.#lang; }
  get page() { return this.#page; }
  get pageCount() { return this.#data ? Math.ceil(this.#data.books.length / this.#data.pageSize) : 0; }
  select(page) { if (this.#data && page >= 0 && page < this.pageCount) { this.#page = page; this.render(); } }
  next() { if (this.#page < this.pageCount - 1) this.select(this.#page + 1); }
  previous() {
    if (this.#page > 0) this.select(this.#page - 1);
    else this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'previous' } }));
  }

  render() {
    if (!this.#data || !this.isConnected) return;
    const d = this.#data;
    const t = copy[this.#lang];
    const books = d.books.slice(this.#page * d.pageSize, (this.#page + 1) * d.pageSize);
    this.innerHTML = `<div class="reading-shelf-canvas">
      <header class="reading-shelf-heading"><div><p class="section-kicker">${e(t.shelf)} / ${String(this.#page + 1).padStart(2, '0')} ${e(t.of)} ${String(this.pageCount).padStart(2, '0')}</p><h2>${e(localized(d.title, this.#lang))}</h2><p>${e(localized(d.intro, this.#lang))}</p></div><span class="reading-shelf-number">${e(d.number)}</span></header>
      <div class="reading-shelf-grid" data-count="${books.length}">${books.map(book => `<a class="reading-book" href="${e(book.url)}" target="_blank" rel="noopener noreferrer" aria-label="${e(`${book.author}, ${book.title}, ${book.year}`)}"><div class="reading-cover-frame"><div class="reading-cover-fallback" aria-hidden="true"><small>${e(book.author)}</small><strong>${e(book.title.split(':')[0])}</strong><span>${e(book.year)}</span></div><img src="${e(book.cover)}" alt="" loading="eager" decoding="async"></div><div class="reading-book-caption"><span class="reading-book-number">${String(book.number).padStart(2, '0')}</span><div><strong>${e(book.title)}</strong><p>${e(book.author)} <span>·</span> ${e(book.year)}</p>${book.edition ? `<small>${e(localized(book.edition, this.#lang))}</small>` : ''}<em>${e(t.record)} ↗</em></div></div></a>`).join('')}</div>
      <footer class="reading-shelf-bottom"><div class="reading-shelf-pages" role="group" aria-label="${e(t.shelf)}">${Array.from({ length: this.pageCount }, (_, index) => `<button type="button" data-reading-page="${index}" aria-label="${e(`${t.shelf} ${index + 1}`)}" aria-pressed="${index === this.#page}">${String(index + 1).padStart(2, '0')}</button>`).join('')}</div><div class="reading-shelf-controls"><button type="button" data-reading-previous>← ${e(this.#page === 0 ? t.previousSlide : t.previous)}</button><button type="button" data-reading-next ${this.#page === this.pageCount - 1 ? 'disabled' : ''}>${e(this.#page === this.pageCount - 1 ? t.end : t.next)}${this.#page === this.pageCount - 1 ? '' : ' →'}</button></div></footer>
    </div>`;
    this.querySelectorAll('.reading-cover-frame img').forEach(image => image.addEventListener('error', () => { image.hidden = true; }));
    this.querySelectorAll('[data-reading-page]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.readingPage))));
    this.querySelector('[data-reading-previous]').addEventListener('click', () => this.previous());
    this.querySelector('[data-reading-next]').addEventListener('click', () => this.next());
  }
}
