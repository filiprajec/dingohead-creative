/*
  index.js (Switch)
  <> Filip Rajec
*/

import React, { useContext } from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";

import ThemeContext from "../../../../context/ThemeContext";
import { functionDefault } from "../../../../utils/defaults";

const Switch = ({
  selected = false,
  setSelected = functionDefault,
  value = "",
  color = "",
  selectedColor = "",
  style = {},
}) => {
  const { styles } = useContext(ThemeContext);
  const styleSwitch = {
    cursor: "pointer",
    margin: styles.padding.px.small,
    borderStyle: "solid",
    height: 25,
    width: 25,
    borderRadius: 8,
    transition: "all 0.1s ease-in-out",
    appearance: "none",
    padding: 0,
    ...style,
    backgroundColor: color ?? "white",
    borderWidth: selected ? 3 : style?.borderWidth ?? 2,
    borderColor: selected ? selectedColor : color,
  };
  return (
    <button
      type="button"
      aria-label={`set-theme-${value}`}
      onClick={() => {
        setSelected(value);
      }}
      style={styleSwitch}
      key={value}
    />
  );
};

Switch.propTypes = {
  selected: PropTypes.bool,
  setSelected: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  style: stylePropType,
};

export default Switch;
