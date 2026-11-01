export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

export function localized(value, lang) {
  return typeof value === 'string' ? value : value?.[lang] ?? value?.en ?? '';
}
