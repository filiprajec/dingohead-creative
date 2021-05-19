/*
  index.js (Card)
  <> Filip Rajec
*/

import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";

import StyleSheet from "./Card.module.scss";

const Card = forwardRef(({ style = {}, children = null }, ref) => (
  <div className={StyleSheet.container} ref={ref} style={style}>
    {children}
  </div>
));

Card.propTypes = {
  style: stylePropType,
  children: PropTypes.node,
};

export default Card;
