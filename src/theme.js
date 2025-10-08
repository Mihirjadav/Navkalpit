// Lightweight theme helper: reads/writes preferred theme and applies it to <html>
const THEME_KEY = "navkalpit_theme";
const FONT_KEY = "navkalpit_font";

export function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (e) {
    return null;
  }
}

export function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (e) {
    // ignore
  }
}

export function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
  } else {
    root.removeAttribute("data-theme");
  }
}

// --- font helpers ---
const FONT_FAMILIES = {
  system:
    'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono", monospace',
};

export function getStoredFont() {
  try {
    return localStorage.getItem(FONT_KEY);
  } catch (e) {
    return null;
  }
}

export function storeFont(name) {
  try {
    localStorage.setItem(FONT_KEY, name);
  } catch (e) {
    // ignore
  }
}

export function applyFont(name) {
  const family = FONT_FAMILIES[name] || FONT_FAMILIES.system;
  document.documentElement.style.setProperty("--font-base", family);
  // also keep a data attribute for css targeting if needed
  if (name) document.documentElement.setAttribute("data-font", name);
  else document.documentElement.removeAttribute("data-font");
}

export function setFont(name) {
  applyFont(name);
  storeFont(name);
  return name;
}

export function toggleTheme() {
  const current =
    getStoredTheme() ||
    (document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  storeTheme(next);
  return next;
}

// helper to initialize on page load; prefers stored value, then system prefer-color-scheme
export function initTheme() {
  const stored = getStoredTheme();
  if (stored) {
    applyTheme(stored);
    return stored;
  }

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    applyTheme("dark");
    return "dark";
  }

  applyTheme("light");
  return "light";
}

export default {
  getStoredTheme,
  storeTheme,
  applyTheme,
  toggleTheme,
  initTheme,
  getStoredFont,
  storeFont,
  applyFont,
  setFont,
};
