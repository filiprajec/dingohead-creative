/*
  index.js (ParallaxContainer)
  <> Filip Rajec
*/

import React, {
  forwardRef,
  useContext,
  useRef,
  useImperativeHandle,
} from "react";
import stylePropType from "react-style-proptype";

import ParallaxContext, {
  ParallaxProvider,
} from "../../../context/ParallaxContext";
import ScreenContext from "../../../context/ScreenContext";
import { useParallaxStyle } from "./hooks";
import {
  childrenPropType,
  dimensionsPropType,
} from "../../../utils/customPropTypes";
import { dimensionsDefault } from "../../../utils/defaults";

const ParallaxContainer = forwardRef(
  ({ dimensions = dimensionsDefault, style = {}, children = null }, ref) => {
    const { height: screenHeight } = useContext(ScreenContext);
    const { offsetGlobal, index, alignment } = useContext(ParallaxContext);
    const parallaxStyle = useParallaxStyle(dimensions);
    const containerRef = useRef(null);
    useImperativeHandle(ref, () => containerRef.current, [containerRef]);

    const style_ = {
      ...parallaxStyle,
      ...style,
      transform: `${parallaxStyle.transform} ${style.transform ?? ""}`,
      top: 0,
      bottom: "unset",
    };
    let height = style_.height / screenHeight;
    if (style_.height == null && containerRef.current) {
      height = containerRef.current.clientHeight / screenHeight;
    }

    return (
      <ParallaxProvider
        value={{
          offsetGlobal,
          parentHeight: height,
          index,
          alignment,
        }}
      >
        <div style={style_} ref={containerRef}>
          {children}
        </div>
      </ParallaxProvider>
    );
  }
);

export default ParallaxContainer;

ParallaxContainer.propTypes = {
  dimensions: dimensionsPropType,
  style: stylePropType,
  children: childrenPropType,
};
