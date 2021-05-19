/*
  utils.js (Theme)
  <> Filip Rajec
*/

export const filterStyleByUnits = (style, units, stripUnitsFromValue = false) => {
  const styleFiltered = {};
  Object.keys(style).forEach((name) => {
    const value = style[name];
    if (
      value.toLowerCase().includes(units) &&
      !(
        value.toLowerCase().includes("min(") ||
        value.toLowerCase().includes("max(") ||
        value.toLowerCase().includes("calc(")
      )
    ) {
      // strip units from name
      const nameStripped = name.toLowerCase().replace(units, "");
      styleFiltered[nameStripped] = value;
      if (stripUnitsFromValue) {
        styleFiltered[nameStripped] = parseInt(value.replace(units, "") ?? "", 10);
      }
    }
  });
  return styleFiltered;
};

export const getVminPxMaxStyle = (styles) => {
  const styleVmin = filterStyleByUnits(styles, "vmin", true);
  const stylePx = filterStyleByUnits(styles, "px", true);
  const styleMax = {};
  Object.keys(styleVmin).forEach((name) => {
    styleMax[name] = (vmin) =>
      Math.max((vmin * styleVmin[name]) / 100, stylePx[name] ?? 0);
  });
  return styleMax;
};
