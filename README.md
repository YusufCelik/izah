# Classji · interactive presenter

Reusable components for a browser based class presenter: a source timeline, an argument that builds one claim at a time, an illustrated source path, staged source comparisons, an evidence focus slide, a regional map, an inscription reader, source based inquiries, conflict accounts, a settlement and document comparison, and a reading shelf. Open `index.html` through a local web server (`npm start`, then `http://localhost:4173`). The components have no runtime package dependency and can be reused in another page as JavaScript modules.

## Presenter controls

- Select an event in the chronology, or use Previous / Next and the left / right arrow keys.
- Use the grouped slide tabs to switch between twenty slides. The arrow keys move through each slide's reveals and on to the next slide. At a slide's first item, ← returns to the preceding slide.
- On the argument slide, select a numbered step or use → to reveal the four claims in order. Earlier claims stay visible as the conclusion appears.
- On the sources slide, select one of nine image cards or use ← / → to move along the zigzag. The lower panel explains the selected source type and links to the image record.
- On a comparison slide, → reveals the counter-source and then a bounded historical reading. Slide 04 keeps the original Hebrew visible alongside English or Dutch translation; slide 05 sets a Prophet-attributed prayer rule in Muslim 510a against ʿĀʾisha’s response in Muslim 512d, with their full narratives visible and transmission chains available to expand.
- On the focus slide, the full Arabic text of Qurʾān 9:108 and an English or Dutch translation stay visible. → moves through two identifications of its unnamed mosque, the claimants’ unequal ties to those mosques, and the narrator’s connection to one claimant’s clan.
- Slide 07 compares Ibn Ḥazm’s polemical chapter heading in `al-Fiṣal` with the complete Almería anecdote in `Ṭawq al-Ḥamāma`. → reveals the anecdote, then a reading about genre and everyday contact.
- Slide 08 locates the northern oases around Medina and Wādī al-Qurā against the southern Ḥimyarite region. Select a region to read its evidence. The map uses simplified Natural Earth outlines and approximate site markers; its colored areas are teaching aids, not ancient borders.
- Slide 09 displays UJadhDA 538 and lets you switch between the DiCoNab photograph and facsimile. The quote, year 197 / 302–303 CE, Leviticus 23:5–8 link, and image credits remain visible. These images are served by DiCoNab and need an internet connection.
- Slide 10 steps through five different claims about origins: the temple-destruction narrative, Goitein’s priestly-settlement proposal, Rabin’s Qumran conjecture, the Community Rule’s own wilderness language, and the ʿUrwa report preserved through Ibn Zabāla by al-Samhūdī. Their evidence types stay visible so the accounts are not treated as one migration record.
- Slide 19 sets the reported Khaybar cultivation arrangement beside an 11th-century Geniza copy of a purported letter for Khaybar and Maqnā. Its final stage explains why the copy cannot simply authenticate the seventh-century arrangement. `components/settlement-slide.js` renders the stages from `data/khaybar-data.js`; each claim retains its own source link.
- Use the EN / NL control in the header to change all presentation text. The choice is saved in the browser.
- Use the Light / Dark control beside it to change color mode. Light is the default; your choice is saved in the browser.
- Use **Present** or **F** for full screen.
- Open a linked source beneath any date tick. Two ticks on the same year remain separate because each represents a distinct source claim. A range represents a source's proposed period.

## Reusing the component

Navigation chapters live in `data/slide-groups.js`. Each group has a bilingual label, a tone, and an ordered list of slide IDs. `components/grouped-nav.js` wraps the existing links, checks that each slide appears once in deck order, and updates the highlighted chapter as navigation changes. Add new slide IDs to the appropriate group when extending the deck; the group label follows the EN / NL control.

Import `SourceTimeline` from `components/source-timeline.js`, register it as `source-timeline`, then set its `data` and `lang` properties. Content and citations live in `data/timeline-data.js`. The presenter shell lives in `app.js`; layout and theme live in `styles.css`.

```js
const timeline = document.querySelector('source-timeline');
timeline.data = { sources: { /* source metadata */ }, events: [ /* events */ ] };
timeline.lang = 'nl';
timeline.select(0);
```

Each event has an ID, bilingual title/summary/location/period, display date, and `claims`. Each claim has one `sourceId`, a numeric `year` for plotting, an optional `endYear`, and bilingual `date` labels that retain the source's wording. Use one claim per source, including when sources agree. `relatedSourceId` can link a source for the event itself when it does not independently date it.

The timeline intentionally distinguishes a source's date claim from the editorial order of events. CE years are approximate in much of the early material; Hijri dates and conversions should be checked against the cited edition before print publication. This first data set follows the listed sources and makes the disagreements for the Medina pact and Banū al-Naḍīr visible.

The argument slide is `components/argument-build.js`, fed by `data/argument-data.js`. Its data contract is a bilingual `title`, optional `eyebrow`, and ordered `steps` with bilingual text. Mark the last step with `kind: 'conclusion'` to give it a distinct visual treatment. The component exposes `select(step)`, `next()`, `previous()`, and `reset()`; step `0` shows the empty numbered structure.

The source path is `components/source-path.js`, fed by `data/source-types-data.js`. Each item has an ID, bilingual title/example/detail, an illustrative image URL, a record URL, and a credit. The component exposes `select(index)`, `next()`, and `previous()`; keyboard navigation comes from the presenter shell. Photographs retain their natural color beside a separate caption panel. The images are linked from Wikimedia Commons and need an internet connection. They illustrate source categories, not a claim that every pictured copy is contemporary with the events. Replace an `image` or `record` in the data file to reuse the layout for another lesson.

The comparison slide is `components/versus-slide.js`, fed by `data/arabia-contrast-data.js`, `data/prayer-contrast-data.js`, and `data/ibn-hazm-contrast-data.js`. Supply a bilingual title, exactly two sides with source links, and a bilingual `reading`. A side can show a quotation, an original-script passage with `originalLang` and `originalDirection`, a translation, an optional expandable `isnad`, and optional context. Use `translationLabel` for a source-specific label and `layout: 'reading'` for longer passages. For two genres that differ without directly contradicting, use `mode: 'contrast'`; `density: 'compact'` keeps a complete long passage readable. The component exposes `select(stage)`, `next()`, and `previous()`; stages 0–2 reveal the first source, the second source, and then the interpretation. The Arabia example distinguishes a future-tense hadith from an expulsion report about the Ḥijāz, and treats the Wādī al-Qurā responsa index as a question about scope and chronology rather than proof of uninterrupted residence. The prayer example presents the Prophet-attributed rule from Muslim 510a and ʿĀʾisha’s response from Muslim 512d in new English and Dutch translations, with transmission chains available. The links open the original Arabic and a parallel account in al-Bukhārī 514. The Ibn Ḥazm example keeps the full Almería anecdote beside a sourced excerpt of his theological polemic; its reading distinguishes doctrinal argument from a narrated social encounter.

The focus slide is `components/focus-slide.js`, fed by `data/position-focus-data.js`. Supply bilingual framing, a `verse` with Arabic text and bilingual translation, exactly two `claims` (title, witness, disputant affiliation, context), and three ordered `stages` with bilingual text and source links. The final stage also needs a bilingual `connection` and `caveat`. The example contrasts ʿUrwa’s Qubāʾ identification in al-Bukhārī 3906 with Abū Saʿīd al-Khudrī’s report favoring the Prophet’s Mosque in al-Tirmidhī 323. ʿUrwa was Qurashī of Banū Asad, not Aws. Banū ʿAmr ibn ʿAwf was the local Qubāʾ clan and supplied a claimant in the separate dispute report. The Prophet’s Mosque was on Banū al-Najjār land; the slide makes no Khudra building claim. Abū Saʿīd belonged to Banū Khudra, whose claimant his report says was affirmed. Possible clan prestige prompts scrutiny of transmission; it does not prove fabrication.

The regional map is `components/geo-regions-slide.js`, fed by `data/arabia-regions-data.js`. Each of its two regions has bilingual copy, site coordinates, and a source link; the simplified Natural Earth vector paths live in `data/arabia-map.js`. `select(index)`, `next()`, and `previous()` drive the two-region view.

The inscription reader is `components/inscription-slide.js`, fed by `data/inscription-data.js`. Supply bilingual translation, date, place, interpretation, source links, and one or more visual witnesses with image URL, alt text, and credit. `select(index)` changes the visible image. The UJadhDA 538 example uses DiCoNab’s date of 302/303 CE, corresponding to year 197 of the Era of the Province of Arabia. Lindstedt’s discussion is on pp. 61–62 of *Muḥammad and His Followers in Context*.

The origins inquiry is `components/origins-slide.js`, fed by `data/origins-data.js`. Each source linked step has a type label, bilingual text, and an optional quotation. The closing statement remains on screen while users move between steps. The Qumran example distinguishes 1QS 8:13–15, which calls the community into the wilderness, from 1QS 9:7, which gives authority to the sons of Aaron; neither passage places the group in Arabia.

## Themes

`themes.js` registers themes and `applyTheme(id)` selects one by setting `data-theme` on the document root. `applyMode('light' | 'dark')` sets the color mode independently. `themes.css` maps both modes to semantic color and typography tokens; `styles.css` uses those tokens, so future themes can be added without changing the components. The active **Folio** theme uses `#fbf5f3`, `#8daa9d`, `#522b47`, `#7b0828`, and `#0f0e0e`. Its default light mode uses the cream background; dark mode uses black with lighter text and accents. Square frames, hard shadows, and vivid signal marks are defined in the shared styles rather than in slide data. Titles and interface controls use the full-width Google font Barlow, while reading passages use Literata. Both are bundled for offline use; their SIL Open Font Licenses are in `assets/fonts/`.

Run `npm test` to check bilingual data, source references, event order, date claims, theme assets, progressive argument reveal, source path selection, and staged comparisons.

## Visual audit from WSL2

Windows Chrome can render the deck even when the Linux browser is blocked by a sandbox. From this WSL2 workspace, run:

```bash
powershell.exe -NoProfile -Command 'Set-ExecutionPolicy -Scope Process Bypass -Force; & "\\wsl.localhost\Debian\home\ycelik\projects\classji\scripts\visual-audit.ps1" -Dependencies "\\wsl.localhost\Debian\tmp\classji-windows-playwright"'
```

On its first run, the script installs Windows Playwright into `/tmp/classji-windows-playwright`. It starts a local server, opens every slide in English light and Dutch dark mode at desktop and mobile widths, saves screenshots under `artifacts/visual-audit/`, and reports page errors or horizontal overflow. The screenshots are ignored by Git so they can be regenerated after design changes.
