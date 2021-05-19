/*
  index.js (ThemeSwitch)
  <> Filip Rajec
*/

import React, { useContext } from "react";

import ThemeContext from "../../../context/ThemeContext";
import Switch from "./Switch";

const ThemeSwitch = () => {
  const { name: themeName, setTheme, themes } = useContext(ThemeContext);
  return themes.map((eachTheme) => (
    <Switch
      selected={themeName === eachTheme.name}
      setSelected={(themeName_) => {
        setTheme(themeName_)
      }}
      value={eachTheme.name}
      color={eachTheme.shade}
      selectedColor={eachTheme.shadeTertiary}
      key={`theme-switch-${eachTheme.name}`}
    />
  ));
};

export default ThemeSwitch;
