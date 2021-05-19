/*
  ThemeContext.scss
  <> Filip Rajec
*/

import { createContext, useEffect, useState, useRef } from "react";

import Theme from "../theme";

export const useThemeValue = () => {
  const ThemeObject = useRef(new Theme());
  const [selectedTheme, setSelectedTheme] = useState(ThemeObject.current.getTheme());
  const [themeStyles, setThemeStyles] = useState(ThemeObject.current.getStyles());

  useEffect(() => {
    ThemeObject.current.setTheme(selectedTheme);
    setThemeStyles(ThemeObject.current.getStyles());
  }, [ThemeObject, selectedTheme]);

  return { name: selectedTheme, styles: themeStyles, setTheme: setSelectedTheme, themes: ThemeObject.current.getThemes() };
};

const getInitialContext = () => {
  const ThemeObject = new Theme();
  const setThemeWarning = () => {
    // eslint-disable-next-line no-console
    console.warn("Pass useThemeValue to ThemeProvider in order to change theme");
  };
  return {
    name: ThemeObject.getTheme(),
    styles: ThemeObject.getStyles(),
    setTheme: setThemeWarning,
  };
};

const ThemeContext = createContext(getInitialContext());
export const ThemeProvider = ThemeContext.Provider;
export default ThemeContext;
