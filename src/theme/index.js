/*
  index.js (Theme)
  <> Filip Rajec
*/

import deepmerge from "deepmerge";

import { themesAvailable, themeDefault, styles, themeStyles } from "./styles";

export default class Theme {
  constructor(theme) {
    this.theme = theme || themeDefault;
    this.themesAvailable = themesAvailable;
    this.styles = {};
    Object.keys(themesAvailable).forEach((eachTheme) => {
      this.styles[eachTheme] = deepmerge(styles, themeStyles[eachTheme]);
    });
  }

  setTheme(theme) {
    this.theme = theme;
  }

  getTheme() {
    return this.theme;
  }

  getThemes() {
    const themesAvailable_ = [];
    Object.keys(this.themesAvailable).forEach((eachTheme) => {
      themesAvailable_.push({
        name: eachTheme,
        shade: this.styles[eachTheme].colors.background,
        shadeSecondary:
          this.styles[eachTheme].colors.backgroundSecondary ??
          this.styles[eachTheme].colors.content,
        shadeTertiary:
          this.styles[eachTheme].colors.backgroundTertiary ??
          this.styles[eachTheme].colors.content,
      });
    });
    return themesAvailable_;
  }

  getStyles() {
    return this.styles[this.theme];
  }
}
