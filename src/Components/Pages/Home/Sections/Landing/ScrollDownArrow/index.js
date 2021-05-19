/*
  index.js (ScrollDownArrow)
  <> Filip Rajec
*/

import React, { useContext } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { Spring, animated } from "react-spring";

import ThemeContext from "../../../../../../context/ThemeContext";

const ScrollDownArrow = ({ size = 20 }) => {
  const { styles } = useContext( ThemeContext );
  const defaultSpringStyle = { position: "absolute", top: "0px" };
  return (
      <Spring
        loop
        from={defaultSpringStyle}
        to={[
          { ...defaultSpringStyle, top: `-${size / 2}px` },
          { ...defaultSpringStyle },
        ]}
      >
        {(styles_) => (
          <animated.div style={styles_}>
            <FontAwesomeIcon
              icon={faAngleDoubleDown}
              style={{ fontSize: size, color: styles.colors.content }}
            />
          </animated.div>
        )}
      </Spring>
  );
};

export default ScrollDownArrow;

ScrollDownArrow.propTypes = {
  size: PropTypes.number,
};
