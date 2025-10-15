import React, { createContext, useContext, useEffect, useState } from "react";
import {
  initTheme,
  getStoredTheme,
  toggleTheme as toggleThemeHelper,
  getStoredFont,
  applyFont,
  setFont as setFontHelper,
} from "../theme";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () =>
      getStoredTheme() ||
      (typeof window !== "undefined" &&
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light")
  );
  const [font, setFontState] = useState(() => getStoredFont() || "system");

  useEffect(() => {
    // ensure theme is initialized (initTheme applies stored or system preference)
    const t = initTheme();
    setTheme(t);

    // apply stored font
    applyFont(font);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    const next = toggleThemeHelper();
    setTheme(next);
    return next;
  };

  // font change helper available to consumers
  const changeFont = (name) => {
    setFontHelper(name);
    applyFont(name);
    setFontState(name);
    return name;
  };

  const value = {
    theme,
    toggleTheme,
    font,
    setFont: changeFont,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
