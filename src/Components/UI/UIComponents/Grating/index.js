/*
  index.js (Landing)
  <> Filip Rajec
*/

import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";

import ThemeContext from "../../../../context/ThemeContext";
import ParallaxContainer from "../../../Parallax/ParallaxContainer";

const stepSizeDefault = {
  top: 0.05,
  width: 0,
  left: 0.05,
  speed: 0.01,
};

const Grating = ({
  number = 5,
  stepSize = stepSizeDefault,
  width = 0.7,
  thickness = 3,
}) => {
  const { styles } = useContext(ThemeContext);
  const arrayEmpty = useRef(Array(number).fill(null));
  const stepSize_ = { ...stepSizeDefault, ...stepSize };

  const styleGrating = {
    backgroundColor: styles.colors.content,
    height: thickness,
    borderRadius: thickness,
  };

  return arrayEmpty.current.map((_, index) => (
    <ParallaxContainer
      dimensions={{
        screen: {
          top: index * stepSize_.top,
          width: width + index * stepSize_.width,
          left: index * stepSize_.left,
          speed: index * stepSize_.speed,
        },
      }}
      // eslint-disable-next-line react/no-array-index-key
      key={`grating-${index}}`}
    >
      <div style={styleGrating} />
    </ParallaxContainer>
  ));
};

Grating.propTypes = {
  number: PropTypes.number,
  stepSize: PropTypes.shape({
    top: PropTypes.number,
    width: PropTypes.number,
    left: PropTypes.number,
    speed: PropTypes.number,
  }),
  width: PropTypes.number,
  thickness: PropTypes.number,
};

export default Grating;
