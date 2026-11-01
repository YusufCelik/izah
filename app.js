import { timelineData } from './data/timeline-data.js';
import { SourceTimeline } from './components/source-timeline.js';
import { ArgumentBuild } from './components/argument-build.js';
import { reconstructionArgument } from './data/argument-data.js';
import { sourceTypes } from './data/source-types-data.js';
import { SourcePath } from './components/source-path.js';
import { arabiaContrast } from './data/arabia-contrast-data.js';
import { VersusSlide } from './components/versus-slide.js';
import { prayerContrast } from './data/prayer-contrast-data.js';
import { positionFocus } from './data/position-focus-data.js';
import { FocusSlide } from './components/focus-slide.js';
import { ibnHazmContrast } from './data/ibn-hazm-contrast-data.js';
import { arabiaRegions } from './data/arabia-regions-data.js';
import { GeoRegionsSlide } from './components/geo-regions-slide.js';
import { festivalInscription } from './data/inscription-data.js';
import { InscriptionSlide } from './components/inscription-slide.js';
import { originsInquiry } from './data/origins-data.js';
import { OriginsSlide } from './components/origins-slide.js';
import { EvidenceBoard } from './components/evidence-board.js';
import { medinaPrelude, sumayrAlliances, brothersReport, bloodMoney, medinaPact } from './data/medina-data.js';
import { ConflictSlide } from './components/conflict-slide.js';
import { qaynuqaConflict, nadirConflict, qurayzaConflict } from './data/medina-conflicts-data.js';
import { SettlementSlide } from './components/settlement-slide.js';
import { khaybarSettlement } from './data/khaybar-data.js';
import { ReadingShelf } from './components/reading-shelf.js';
import { furtherReading } from './data/further-reading-data.js';
import { slideGroups } from './data/slide-groups.js';
import { installGroupedNav } from './components/grouped-nav.js';
import { applyTheme, applyMode } from './themes.js';

customElements.define('source-timeline', SourceTimeline);
customElements.define('argument-build', ArgumentBuild);
customElements.define('source-path', SourcePath);
customElements.define('versus-slide', VersusSlide);
customElements.define('focus-slide', FocusSlide);
customElements.define('geo-regions-slide', GeoRegionsSlide);
customElements.define('inscription-slide', InscriptionSlide);
customElements.define('origins-slide', OriginsSlide);
customElements.define('evidence-board', EvidenceBoard);
customElements.define('conflict-slide', ConflictSlide);
customElements.define('settlement-slide', SettlementSlide);
customElements.define('reading-shelf', ReadingShelf);
applyTheme('folio');

const ui = {
  en: {
    language: 'Language', colorMode: 'Color mode', light: 'Light', dark: 'Dark', lightMode: 'Light mode', darkMode: 'Dark mode', present: 'Present', exit: 'Exit full screen', timelineSlide: 'Timeline', argumentSlide: 'The argument', sourcesSlide: 'The sources', versusSlide: 'In tension', prayerSlide: 'Ṣaḥīḥ Muslim', focusSlide: 'Focus', hazmSlide: 'Ibn Ḥazm', geoSlide: 'Arabian regions', inscriptionSlide: 'Inscription', originsSlide: 'Origins', preludeSlide: 'Yathrib', sumayrSlide: 'Ḥarb Sumayr', brothersSlide: 'Brothers divided', bloodSlide: 'Blood money', pactSlide: 'Medina pact', qaynuqaSlide: 'Qaynuqāʿ', nadirSlide: 'al-Naḍīr', qurayzaSlide: 'Qurayẓa', khaybarSlide: 'Khaybar', readingSlide: 'Further reading',
    eyebrow: 'A history told through its sources', title: 'The prophetic years<span class="title-period">.</span>',
    intro: 'Begin in seventh-century Arabia: Muḥammad’s preaching in Mecca, his move to Medina, and the communities he encountered. Each date below comes from a named source; where sources differ, both dates remain visible.',
    footerTimeline: 'Dates are approximate unless a source states otherwise.', footerArgument: 'An argument in four steps.', footerSources: 'Nine kinds of evidence, one reconstructive task.', footerVersus: 'A comparison is a question, not a verdict.', footerPrayer: 'One collection can preserve an objection to a reported rule.', footerFocus: 'Two claims about one verse. Then ask who tells the story.', footerHazm: 'Genre shapes what a source can tell us about social life.', footerGeo: 'Northern oases and Ḥimyar in the south.', footerInscription: 'A dated inscription, a festival phrase, and a cautious inference.', footerOrigins: 'Origin traditions are not dated migration records.', footerPrelude: 'A later story of Yathrib’s political reversal.', footerSumayr: 'Two reports preserve different alliances.', footerBrothers: 'Ibn Zayd reads a local division through Qurʾān 2:85.', footerBlood: 'One report presents an unequal rate and a judgment.', footerPact: 'The document defines obligations between Jewish groups and believers.', footerQaynuqa: 'Two reports frame the rupture after Badr.', footerNadir: 'Two plot accounts, one reported exile.', footerQurayza: 'Breach reports, campaign timing, and Saʿd’s judgment.', keyboard: '← → to navigate',
    footerKhaybar: 'A conquest settlement and a disputed later charter.', footerReading: 'Eleven books for further reading.',
  },
  nl: {
    language: 'Taal', colorMode: 'Kleurmodus', light: 'Licht', dark: 'Donker', lightMode: 'Lichte modus', darkMode: 'Donkere modus', present: 'Presenteren', exit: 'Volledig scherm sluiten', timelineSlide: 'Tijdlijn', argumentSlide: 'De redenering', sourcesSlide: 'De bronnen', versusSlide: 'Op gespannen voet', prayerSlide: 'Ṣaḥīḥ Muslim', focusSlide: 'Focus', hazmSlide: 'Ibn Ḥazm', geoSlide: 'Arabische regio’s', inscriptionSlide: 'Inscriptie', originsSlide: 'Oorsprong', preludeSlide: 'Yathrib', sumayrSlide: 'Ḥarb Sumayr', brothersSlide: 'Verdeelde broeders', bloodSlide: 'Bloedgeld', pactSlide: 'Oorkonde van Medina', qaynuqaSlide: 'Qaynuqāʿ', nadirSlide: 'al-Naḍīr', qurayzaSlide: 'Qurayẓa', khaybarSlide: 'Khaybar', readingSlide: 'Verder lezen',
    eyebrow: 'Een geschiedenis verteld via bronnen', title: 'De jaren van de profeet<span class="title-period">.</span>',
    intro: 'We beginnen in het Arabië van de zevende eeuw: Muḥammads prediking in Mekka, zijn verhuizing naar Medina en de gemeenschappen die hij daar ontmoette. Elke datum hieronder komt uit een genoemde bron; verschillende dateringen blijven zichtbaar.',
    footerTimeline: 'Dateringen zijn bij benadering, tenzij een bron anders vermeldt.', footerArgument: 'Een redenering in vier stappen.', footerSources: 'Negen soorten bewijs, één reconstructieve taak.', footerVersus: 'Een vergelijking is een vraag, geen eindoordeel.', footerPrayer: 'Eén verzameling kan een bezwaar tegen een genoemde regel bewaren.', footerFocus: 'Twee claims over één vers. Vraag dan wie het verhaal vertelt.', footerHazm: 'Het genre bepaalt wat een bron over het sociale leven kan vertellen.', footerGeo: 'Noordelijke oasen en Ḥimyar in het zuiden.', footerInscription: 'Een gedateerde inscriptie, een feestnaam en een voorzichtige duiding.', footerOrigins: 'Herkomstverhalen zijn geen gedateerde migratiebronnen.', footerPrelude: 'Een later verhaal over de machtswisseling in Yathrib.', footerSumayr: 'Twee berichten bewaren verschillende bondgenootschappen.', footerBrothers: 'Ibn Zayd leest een lokale verdeeldheid via Qurʾān 2:85.', footerBlood: 'Eén bericht toont een ongelijke regeling en een oordeel.', footerPact: 'De oorkonde regelt de verhouding tussen Joodse groepen en gelovigen.', footerQaynuqa: 'Twee berichten duiden de breuk na Badr.', footerNadir: 'Twee berichten over een complot, één overgeleverde verbanning.', footerQurayza: 'Verdragsbreuk, tijdstip van de veldtocht en Saʿds oordeel.', keyboard: '← → om te navigeren',
    footerKhaybar: 'Een veroveringsregeling en een betwiste latere oorkonde.', footerReading: 'Elf boeken om verder te lezen.',
  },
};

const timeline = document.querySelector('source-timeline');
timeline.data = timelineData;
timeline.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
const argument = document.querySelector('argument-build');
argument.data = reconstructionArgument;
argument.previousBoundaryLabel = { en: 'Previous slide', nl: 'Vorige dia' };
argument.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
const sources = document.querySelector('source-path');
sources.data = sourceTypes;
sources.previousBoundaryLabel = { en: 'Previous slide', nl: 'Vorige dia' };
sources.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
const versus = document.querySelector('versus-slide');
versus.data = arabiaContrast;
versus.previousBoundaryLabel = { en: 'Previous slide', nl: 'Vorige dia' };
versus.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
const prayer = document.getElementById('prayer-contrast');
prayer.data = prayerContrast;
prayer.previousBoundaryLabel = { en: 'Previous slide', nl: 'Vorige dia' };
prayer.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
const focus = document.getElementById('historian-position');
focus.data = positionFocus;
focus.previousBoundaryLabel = { en: 'Previous slide', nl: 'Vorige dia' };
focus.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
const hazm = document.getElementById('ibn-hazm-contrast');
hazm.data = ibnHazmContrast;
hazm.previousBoundaryLabel = { en: 'Previous slide', nl: 'Vorige dia' };
hazm.nextBoundaryLabel = { en: 'Next slide', nl: 'Volgende dia' };
const geo = document.getElementById('arabia-regions');
geo.data = arabiaRegions;
const inscription = document.getElementById('festival-inscription');
inscription.data = festivalInscription;
const origins = document.getElementById('origin-stories');
origins.data = originsInquiry;
const medinaBoards = { prelude: document.getElementById('medina-prelude'), sumayr: document.getElementById('sumayr-alliances'), brothers: document.getElementById('brothers-report'), blood: document.getElementById('blood-money'), pact: document.getElementById('medina-pact') };
Object.entries({ prelude: medinaPrelude, sumayr: sumayrAlliances, brothers: brothersReport, blood: bloodMoney, pact: medinaPact }).forEach(([id, data]) => { medinaBoards[id].data = data; });
const conflictSlides = { qaynuqa: document.getElementById('qaynuqa-conflict'), nadir: document.getElementById('nadir-conflict'), qurayza: document.getElementById('qurayza-conflict') };
Object.entries({ qaynuqa: qaynuqaConflict, nadir: nadirConflict, qurayza: qurayzaConflict }).forEach(([id, data]) => { conflictSlides[id].data = data; });
const khaybar = document.getElementById('khaybar-settlement');
khaybar.data = khaybarSettlement;
const reading = document.getElementById('further-reading');
reading.data = furtherReading;
const slides = { timeline: document.getElementById('timeline'), argument: document.getElementById('argument'), sources: document.getElementById('sources'), versus: document.getElementById('versus'), prayer: document.getElementById('prayer'), focus: document.getElementById('focus'), hazm: document.getElementById('hazm'), geo: document.getElementById('geo'), inscription: document.getElementById('inscription'), origins: document.getElementById('origins'), prelude: document.getElementById('prelude'), sumayr: document.getElementById('sumayr'), brothers: document.getElementById('brothers'), blood: document.getElementById('blood'), pact: document.getElementById('pact'), qaynuqa: document.getElementById('qaynuqa'), nadir: document.getElementById('nadir'), qurayza: document.getElementById('qurayza'), khaybar: document.getElementById('khaybar'), reading: document.getElementById('reading') };
const groupedNav = installGroupedNav(document.querySelector('.deck-nav'), slideGroups);
let activeSlide = 'timeline';

function setActiveSlide(id, shouldScroll = true) {
  if (!slides[id]) return;
  activeSlide = id;
  Object.entries(slides).forEach(([key, section]) => { section.hidden = key !== id; });
  const deckNav = document.querySelector('.deck-nav');
  groupedNav.setActive(id);
  document.querySelectorAll('[data-slide-link]').forEach(link => {
    if (link.dataset.slideLink === id) {
      link.setAttribute('aria-current', 'page');
      deckNav.scrollLeft = Math.max(0, link.offsetLeft - (deckNav.clientWidth - link.clientWidth) / 2);
    }
    else link.removeAttribute('aria-current');
  });
  const lang = document.documentElement.lang === 'nl' ? 'nl' : 'en';
  document.getElementById('footer-slide').textContent = `CLASSJI / ${String(Object.keys(slides).indexOf(id) + 1).padStart(3, '0')}`;
  document.getElementById('footer-copy').textContent = ui[lang][`footer${id[0].toUpperCase()}${id.slice(1)}`];
  document.title = `Classji · ${ui[lang][`${id}Slide`]}`;
  if (shouldScroll) scrollTo(0, 0);
}

function goToSlide(id) {
  if (!slides[id]) return;
  if (location.hash.slice(1) !== id) location.hash = id;
  setActiveSlide(id);
}

addEventListener('hashchange', () => setActiveSlide(location.hash.slice(1)));
document.querySelectorAll('[data-slide-link]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  goToSlide(link.dataset.slideLink);
}));
timeline.addEventListener('presenter:edge', event => { if (event.detail.direction === 'next') goToSlide('argument'); });
argument.addEventListener('presenter:edge', event => {
  if (event.detail.direction === 'previous') goToSlide('timeline');
  if (event.detail.direction === 'next') goToSlide('sources');
});
sources.addEventListener('presenter:edge', event => {
  if (event.detail.direction === 'previous') goToSlide('argument');
  if (event.detail.direction === 'next') goToSlide('versus');
});
versus.addEventListener('presenter:edge', event => { if (event.detail.direction === 'previous') goToSlide('sources'); });
versus.addEventListener('presenter:edge', event => { if (event.detail.direction === 'next') goToSlide('prayer'); });
prayer.addEventListener('presenter:edge', event => {
  if (event.detail.direction === 'previous') goToSlide('versus');
  if (event.detail.direction === 'next') goToSlide('focus');
});
focus.addEventListener('presenter:edge', event => {
  if (event.detail.direction === 'previous') goToSlide('prayer');
  if (event.detail.direction === 'next') goToSlide('hazm');
});
hazm.addEventListener('presenter:edge', event => {
  if (event.detail.direction === 'previous') goToSlide('focus');
  if (event.detail.direction === 'next') goToSlide('geo');
});
geo.addEventListener('presenter:edge', event => {
  if (event.detail.direction === 'previous') goToSlide('hazm');
  if (event.detail.direction === 'next') goToSlide('inscription');
});
inscription.addEventListener('presenter:edge', event => {
  if (event.detail.direction === 'previous') goToSlide('geo');
  if (event.detail.direction === 'next') goToSlide('origins');
});
origins.addEventListener('presenter:edge', event => {
  if (event.detail.direction === 'previous') goToSlide('inscription');
  if (event.detail.direction === 'next') goToSlide('prelude');
});
const medinaOrder = ['prelude', 'sumayr', 'brothers', 'blood', 'pact'];
medinaOrder.forEach((id, index) => medinaBoards[id].addEventListener('presenter:edge', event => {
  const target = event.detail.direction === 'previous' ? medinaOrder[index - 1] || 'origins' : medinaOrder[index + 1] || 'qaynuqa';
  if (target) goToSlide(target);
}));
const conflictOrder = ['qaynuqa', 'nadir', 'qurayza'];
conflictOrder.forEach((id, index) => conflictSlides[id].addEventListener('presenter:edge', event => {
  const target = event.detail.direction === 'previous' ? conflictOrder[index - 1] || 'pact' : conflictOrder[index + 1] || 'khaybar';
  if (target) goToSlide(target);
}));
khaybar.addEventListener('presenter:edge', event => { goToSlide(event.detail.direction === 'previous' ? 'qurayza' : 'reading'); });
reading.addEventListener('presenter:edge', event => { if (event.detail.direction === 'previous') goToSlide('khaybar'); });

function setLanguage(lang) {
  if (!ui[lang]) return;
  document.documentElement.lang = lang;
  groupedNav.setLanguage(lang);
  document.querySelector('.language-switch').setAttribute('aria-label', lang === 'nl' ? 'Presentatietaal' : 'Presentation language');
  document.querySelector('.mode-switch').setAttribute('aria-label', ui[lang].colorMode);
  document.querySelectorAll('.mode-switch [data-mode]').forEach(button => button.setAttribute('aria-label', ui[lang][`${button.dataset.mode}Mode`]));
  document.querySelector('.deck-nav').setAttribute('aria-label', lang === 'nl' ? 'Presentatiedia’s' : 'Presentation slides');
  slides.timeline.setAttribute('aria-label', lang === 'nl' ? 'Bronnentijdlijn' : 'Source timeline');
  slides.argument.setAttribute('aria-label', lang === 'nl' ? 'Het verleden reconstrueren' : 'Reconstructing the past');
  slides.sources.setAttribute('aria-label', lang === 'nl' ? 'Bronnen voor reconstructie' : 'Sources for reconstruction');
  slides.versus.setAttribute('aria-label', lang === 'nl' ? 'Bronnen op gespannen voet' : 'Sources in tension');
  slides.prayer.setAttribute('aria-label', lang === 'nl' ? 'Spanning binnen Ṣaḥīḥ Muslim' : 'Tension within Ṣaḥīḥ Muslim');
  slides.focus.setAttribute('aria-label', lang === 'nl' ? 'Positie van de historicus' : 'Historian positionality');
  slides.hazm.setAttribute('aria-label', lang === 'nl' ? 'Ibn Ḥazm in twee genres' : 'Ibn Ḥazm in two genres');
  slides.geo.setAttribute('aria-label', lang === 'nl' ? 'Joodse gemeenschappen in Noord- en Zuid-Arabië' : 'Jewish communities in northern and southern Arabia');
  slides.inscription.setAttribute('aria-label', lang === 'nl' ? 'Inscriptie UJadhDA 538' : 'Inscription UJadhDA 538');
  slides.origins.setAttribute('aria-label', lang === 'nl' ? 'Verhalen over de oorsprong' : 'Accounts of origins');
  medinaOrder.forEach(id => slides[id].setAttribute('aria-label', ui[lang][`${id}Slide`]));
  conflictOrder.forEach(id => slides[id].setAttribute('aria-label', ui[lang][`${id}Slide`]));
  slides.khaybar.setAttribute('aria-label', lang === 'nl' ? 'Khaybars regeling en Geniza-oorkonde' : 'Khaybar settlement and Geniza charter');
  slides.reading.setAttribute('aria-label', ui[lang].readingSlide);
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (key === 'title') element.innerHTML = ui[lang][key];
    else element.textContent = ui[lang][key];
  });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  timeline.lang = lang;
  argument.lang = lang;
  sources.lang = lang;
  versus.lang = lang;
  prayer.lang = lang;
  focus.lang = lang;
  hazm.lang = lang;
  geo.lang = lang;
  inscription.lang = lang;
  origins.lang = lang;
  medinaOrder.forEach(id => { medinaBoards[id].lang = lang; });
  conflictOrder.forEach(id => { conflictSlides[id].lang = lang; });
  khaybar.lang = lang;
  reading.lang = lang;
  const present = document.getElementById('present-button');
  present.textContent = document.fullscreenElement ? ui[lang].exit : ui[lang].present;
  setActiveSlide(activeSlide, false);
  try { localStorage.setItem('classji-language', lang); } catch { /* Storage is optional. */ }
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage((() => { try { return localStorage.getItem('classji-language') || 'en'; } catch { return 'en'; } })());

function setMode(mode) {
  if (mode !== 'light' && mode !== 'dark') return;
  applyMode(mode);
  document.querySelectorAll('.mode-switch [data-mode]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
  document.querySelector('meta[name="theme-color"]').content = mode === 'light' ? '#fbf5f3' : '#0f0e0e';
  try { localStorage.setItem('classji-mode', mode); } catch { /* Storage is optional. */ }
}

document.querySelectorAll('.mode-switch [data-mode]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode)));
setMode((() => { try { return localStorage.getItem('classji-mode') === 'dark' ? 'dark' : 'light'; } catch { return 'light'; } })());
setActiveSlide(slides[location.hash.slice(1)] ? location.hash.slice(1) : 'timeline');

const presentButton = document.getElementById('present-button');
presentButton.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch { /* Fullscreen availability depends on the browser. */ }
});
document.addEventListener('fullscreenchange', () => {
  const lang = document.documentElement.lang;
  presentButton.textContent = document.fullscreenElement ? ui[lang].exit : ui[lang].present;
  presentButton.setAttribute('aria-pressed', String(Boolean(document.fullscreenElement)));
});
document.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.target.closest('input, textarea, select')) return;
  if (event.key === 'ArrowRight' || event.key === 'PageDown') {
    event.preventDefault();
    if (activeSlide === 'timeline') timeline.next();
    else if (activeSlide === 'argument') argument.next('step');
    else if (activeSlide === 'sources') sources.next();
    else if (activeSlide === 'versus') versus.next('next');
    else if (activeSlide === 'prayer') prayer.next('next');
    else if (activeSlide === 'focus') focus.next('next');
    else if (activeSlide === 'hazm') hazm.next('next');
    else if (activeSlide === 'geo') geo.next();
    else if (activeSlide === 'inscription') inscription.next();
    else if (activeSlide === 'origins') origins.next();
    else if (activeSlide === 'reading') reading.next();
    else if (medinaBoards[activeSlide]) medinaBoards[activeSlide].next();
    else if (activeSlide === 'khaybar') khaybar.next();
    else conflictSlides[activeSlide]?.next();
  }
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    event.preventDefault();
    if (activeSlide === 'timeline') timeline.previous();
    else if (activeSlide === 'argument') argument.previous('step');
    else if (activeSlide === 'sources') sources.previous();
    else if (activeSlide === 'versus') versus.previous('previous');
    else if (activeSlide === 'prayer') prayer.previous('previous');
    else if (activeSlide === 'focus') focus.previous('previous');
    else if (activeSlide === 'hazm') hazm.previous('previous');
    else if (activeSlide === 'geo') geo.previous();
    else if (activeSlide === 'inscription') inscription.previous();
    else if (activeSlide === 'origins') origins.previous();
    else if (activeSlide === 'reading') reading.previous();
    else if (medinaBoards[activeSlide]) medinaBoards[activeSlide].previous();
    else if (activeSlide === 'khaybar') khaybar.previous();
    else conflictSlides[activeSlide]?.previous();
  }
  if (event.key.toLowerCase() === 'f' && !event.repeat) presentButton.click();
});
