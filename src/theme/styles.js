/*
  styles.js (Theme)
  <> Filip Rajec
*/

import { filterStyleByUnits, getVminPxMaxStyle } from "./utils";

import PaddingStyles from "./styles/padding.module.scss";
import ZIndexStyles from "./styles/zIndex.module.scss";
import FontStyles from "./styles/font.module.scss";
import BasicColors from "./styles/colors/colors.module.scss";

import LightThemeColors from "./styles/colors/themes/light.module.scss";
import DarkThemeColors from "./styles/colors/themes/dark.module.scss";
import PinkThemeColors from "./styles/colors/themes/pink.module.scss";
import SwampThemeColors from "./styles/colors/themes/swamp.module.scss";
// -> import theme stylesheets here

export const themesAvailable = {
  light: "light",
  pink: "pink",
  swamp: "swamp",
  dark: "dark",
  // -> register theme name here
};

export const themeStyles = {};

themeStyles[themesAvailable.light] = { colors: LightThemeColors };
themeStyles[themesAvailable.dark] = { colors: DarkThemeColors };
themeStyles[themesAvailable.pink] = { colors: PinkThemeColors };
themeStyles[themesAvailable.swamp] = { colors: SwampThemeColors };
// -> add theme styles here

export const themeDefault = themesAvailable.light;

export const styles = {
  fontSize: {
    vmin: filterStyleByUnits(FontStyles, "vmin"),
    px: filterStyleByUnits(FontStyles, "px", true),
    max: getVminPxMaxStyle(FontStyles),
  },
  padding: {
    px: filterStyleByUnits(PaddingStyles, "px", true),
  },
  zIndex: ZIndexStyles,
  colors: { basic: BasicColors },
};
