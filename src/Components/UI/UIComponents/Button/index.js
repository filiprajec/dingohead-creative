/* eslint-disable no-unused-vars */
/*
  index.js (Button)
  <> Filip Rajec
*/

import React, { useContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";

import { childrenPropType } from "../../../../utils/customPropTypes";
import { onClickDefault } from "../../../../utils/defaults";
import ThemeContext from "../../../../context/ThemeContext";

import StyleSheet from "./Button.module.scss";

const { button, shape } = StyleSheet;

export const Button = ({
  onClick = onClickDefault,
  style = {},
  accentColor = "red",
  children = null,
}) => {
  const { styles } = useContext(ThemeContext);
  const buttonRef = useRef(null);
  const style_ = {
    color: styles.colors.content,
    ...style,
  };

  useEffect(() => {
    if (buttonRef.current) {
      const handleOnMouseEnter = () => {
        buttonRef.current.style.backgroundColor = accentColor;
      };
      const handleOnMouseLeave = () => {
        buttonRef.current.style.backgroundColor = "unset";
      };
      buttonRef.current.addEventListener("mouseenter", handleOnMouseEnter);
      buttonRef.current.addEventListener("mouseleave", handleOnMouseLeave);
    }
  });

  return (
    <button
      type="button"
      className={button}
      style={style_}
      onClick={onClick}
      ref={buttonRef}
    >
      <div className={shape} style={{ backgroundColor: accentColor }} />
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  style: stylePropType,
  accentColor: PropTypes.string,
  children: childrenPropType,
};
