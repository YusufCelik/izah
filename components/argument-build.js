import { escapeHtml, localized } from './content.js';

const copy = {
  en: { argument: 'ARGUMENT', reveal: 'Reveal step', previous: 'Previous', next: 'Build the argument', complete: 'Argument complete', of: 'of', premise: 'Premise', conclusion: 'Therefore', hint: 'Select a number or use → to reveal each step.' },
  nl: { argument: 'REDENERING', reveal: 'Toon stap', previous: 'Vorige', next: 'Bouw de redenering op', complete: 'Redenering compleet', of: 'van', premise: 'Premisse', conclusion: 'Dus', hint: 'Kies een nummer of gebruik → om elke stap te tonen.' },
};

/** Ordered argument that reveals one claim at a time. Content is independent of layout. */
export class ArgumentBuild extends HTMLElement {
  #data;
  #lang = 'en';
  #step = 0;
  #previousBoundaryLabel;
  #nextBoundaryLabel;

  connectedCallback() { this.render(); }
  set data(value) {
    if (!value?.title?.en || !value?.title?.nl || !Array.isArray(value.steps) || !value.steps.length) throw new TypeError('An argument needs a bilingual title and steps.');
    if (value.steps.some(step => !step.id || !step.text?.en || !step.text?.nl)) throw new TypeError('Each argument step needs an ID and bilingual text.');
    this.#data = value;
    this.#step = Math.min(this.#step, value.steps.length);
    this.render();
  }
  get data() { return this.#data; }

  set lang(value) {
    if (!copy[value]) return;
    this.#lang = value;
    this.render();
  }
  get lang() { return this.#lang; }
  set previousBoundaryLabel(value) { this.#previousBoundaryLabel = value; this.render(); }
  get previousBoundaryLabel() { return this.#previousBoundaryLabel; }
  set nextBoundaryLabel(value) { this.#nextBoundaryLabel = value; this.render(); }
  get nextBoundaryLabel() { return this.#nextBoundaryLabel; }
  get step() { return this.#step; }

  select(step, focusTarget = '') {
    if (!this.#data || step < 0 || step > this.#data.steps.length) return;
    this.#step = step;
    this.render();
    if (focusTarget === 'step') this.querySelector(step === 0 ? '.argument-heading h2' : `[data-argument-step="${step}"]`)?.focus({ preventScroll: true });
    if (focusTarget === 'previous' || focusTarget === 'next') this.querySelector(`[data-argument-control="${focusTarget}"]`)?.focus({ preventScroll: true });
  }
  next(focusTarget = '') {
    if (this.#step === this.#data?.steps.length) {
      this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'next' } }));
      return;
    }
    this.select(this.#step + 1, focusTarget);
  }
  previous(focusTarget = '') {
    if (this.#step === 0) {
      this.dispatchEvent(new CustomEvent('presenter:edge', { bubbles: true, detail: { direction: 'previous' } }));
      return;
    }
    this.select(this.#step - 1, focusTarget);
  }
  reset() { this.select(0); }

  render() {
    if (!this.#data || !this.isConnected) return;
    const t = copy[this.#lang];
    const steps = this.#data.steps;
    const complete = this.#step === steps.length;
    const previousLabel = this.#step === 0 && this.#previousBoundaryLabel ? localized(this.#previousBoundaryLabel, this.#lang) : t.previous;
    const nextLabel = complete && this.#nextBoundaryLabel ? localized(this.#nextBoundaryLabel, this.#lang) : t.next;
    this.innerHTML = `
      <div class="argument-canvas">
        <div class="argument-topline"><span>${escapeHtml(t.argument)} <span class="top-separator">/</span> ${String(steps.length).padStart(2, '0')}</span><span>${escapeHtml(localized(this.#data.eyebrow, this.#lang))}</span></div>
        <div class="argument-heading"><div><p class="section-kicker">${escapeHtml(localized(this.#data.eyebrow, this.#lang))}</p><h2 tabindex="-1">${escapeHtml(localized(this.#data.title, this.#lang))}</h2></div><span class="argument-fraction" aria-label="${this.#step} ${escapeHtml(t.of)} ${steps.length}">${String(this.#step).padStart(2, '0')} <i>/</i> ${String(steps.length).padStart(2, '0')}</span></div>
        <ol class="argument-list">${steps.map((step, index) => this.#renderStep(step, index, t)).join('')}</ol>
        <div class="argument-bottom"><div class="argument-progress" role="progressbar" aria-label="${escapeHtml(t.argument)}" aria-valuemin="0" aria-valuemax="${steps.length}" aria-valuenow="${this.#step}" aria-valuetext="${this.#step} ${escapeHtml(t.of)} ${steps.length}">${steps.map((_, index) => `<span class="${index < this.#step ? 'is-filled' : ''}"></span>`).join('')}</div><p class="argument-hint">${escapeHtml(complete ? t.complete : t.hint)}</p><div class="argument-controls"><button type="button" data-argument-control="previous" ${this.#step === 0 && !this.#previousBoundaryLabel ? 'disabled' : ''} aria-label="${escapeHtml(previousLabel)}">← <span>${escapeHtml(previousLabel)}</span></button><button type="button" data-argument-control="next" ${complete && !this.#nextBoundaryLabel ? 'disabled' : ''} aria-label="${escapeHtml(nextLabel)}"><span>${escapeHtml(nextLabel)}</span> →</button></div></div>
      </div>`;
    this.querySelectorAll('[data-argument-step]').forEach(button => button.addEventListener('click', () => this.select(Number(button.dataset.argumentStep), 'step')));
    this.querySelector('[data-argument-control="previous"]').addEventListener('click', () => this.previous('previous'));
    this.querySelector('[data-argument-control="next"]').addEventListener('click', () => this.next('next'));
  }

  #renderStep(step, index, t) {
    const number = index + 1;
    const shown = number <= this.#step;
    const current = number === this.#step;
    const conclusion = step.kind === 'conclusion';
    const label = conclusion ? t.conclusion : t.premise;
    const accessibleLabel = shown ? `${label} ${number}: ${localized(step.text, this.#lang)}` : `${t.reveal} ${number}`;
    return `<li class="argument-item${shown ? ' is-shown' : ''}${current ? ' is-current' : ''}${conclusion ? ' is-conclusion' : ''}"><button type="button" data-argument-step="${number}" aria-label="${escapeHtml(accessibleLabel)}" aria-expanded="${shown}"><span class="argument-index">${String(number).padStart(2, '0')}</span><span class="argument-copy"><small>${escapeHtml(label)}</small>${shown ? `<strong>${escapeHtml(localized(step.text, this.#lang))}</strong>` : '<span class="argument-empty" aria-hidden="true"></span>'}</span><span class="argument-mark" aria-hidden="true">${conclusion ? '∴' : '—'}</span></button></li>`;
  }
}
