/** Wraps existing slide links in bilingual chapters without owning slide content or navigation. */
export function installGroupedNav(nav, groups) {
  if (!groups?.length || groups.some(group => !group.id || !group.label?.en || !group.label?.nl || !group.slides?.length) || new Set(groups.map(group => group.id)).size !== groups.length) {
    throw new TypeError('Navigation groups need unique IDs, bilingual labels, and slide lists.');
  }
  const links = [...nav.querySelectorAll('[data-slide-link]')];
  const actual = links.map(link => link.dataset.slideLink);
  const expected = groups.flatMap(group => group.slides);
  if (actual.length !== expected.length || actual.some((id, index) => id !== expected[index])) {
    throw new TypeError('Navigation groups must cover every slide once, in deck order.');
  }

  const document = nav.ownerDocument;
  const bySlide = new Map(links.map(link => [link.dataset.slideLink, link]));
  const groupElements = new Map();
  nav.replaceChildren();
  groups.forEach((group, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'deck-nav-group';
    wrapper.dataset.navGroup = group.id;
    wrapper.dataset.tone = group.tone;
    wrapper.setAttribute('role', 'group');

    const label = document.createElement('span');
    label.className = 'deck-nav-group-label';
    const number = document.createElement('span');
    number.className = 'deck-nav-group-index';
    number.textContent = String(index + 1).padStart(2, '0');
    const name = document.createElement('span');
    name.className = 'deck-nav-group-name';
    label.append(number, name);

    const row = document.createElement('div');
    row.className = 'deck-nav-group-links';
    group.slides.forEach(id => row.appendChild(bySlide.get(id)));
    wrapper.append(label, row);
    nav.appendChild(wrapper);
    groupElements.set(group.id, { wrapper, name });
  });

  return {
    setLanguage(lang) {
      groups.forEach(group => {
        const { wrapper, name } = groupElements.get(group.id);
        const label = group.label[lang] || group.label.en;
        name.textContent = label;
        wrapper.setAttribute('aria-label', label);
      });
    },
    setActive(slideId) {
      groups.forEach(group => {
        const { wrapper } = groupElements.get(group.id);
        if (group.slides.includes(slideId)) wrapper.setAttribute('data-active', 'true');
        else wrapper.removeAttribute('data-active');
      });
    },
  };
}
