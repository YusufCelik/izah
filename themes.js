export const themes = {
  folio: {
    label: 'Folio',
    palette: ['#fbf5f3', '#8daa9d', '#522b47', '#7b0828', '#0f0e0e'],
  },
};

export const modes = ['light', 'dark'];

export function applyTheme(id, root = document.documentElement) {
  if (!Object.hasOwn(themes, id)) throw new RangeError(`Unknown theme: ${id}`);
  root.dataset.theme = id;
  return themes[id];
}

export function applyMode(mode, root = document.documentElement) {
  if (!modes.includes(mode)) throw new RangeError(`Unknown mode: ${mode}`);
  root.dataset.mode = mode;
  return mode;
}
