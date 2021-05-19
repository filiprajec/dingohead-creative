/*
  hooks.js (ParallaxContainer)
  <> Filip Rajec
*/

import { useContext, useState, useEffect } from "react";

import ParallaxContext from "../../../context/ParallaxContext";
import ScreenContext from "../../../context/ScreenContext";
import ScrollContext from "../../../context/ScrollContext";
import { getDimensionsPx } from "./utils";

// eslint-disable-next-line import/prefer-default-export
export const useParallaxStyle = (dimensions) => {
  const { height: screenHeight } = useContext(ScreenContext);
  const { scroll } = useContext(ScrollContext);
  const {
    offsetGlobal,
    index,
    parentHeight,
    alignment,
  } = useContext(ParallaxContext);
  const [offsetYPx, setOffsetYPx] = useState(0);
  const [translateYPx, setTranslateYPx] = useState(0);
  const dimensionsPx = getDimensionsPx(dimensions);

  useEffect(() => {
    setOffsetYPx(dimensionsPx.top);
    if (dimensionsPx.speed === 0) {
      setTranslateYPx(dimensionsPx.top);
    }
  }, [dimensionsPx.top, dimensionsPx.speed]);

  useEffect(() => {
    if (dimensionsPx.speed === 0) {
      return;
    }
    let alignment_ = alignment;
    const MIN_ALIGNMENT = 0.001;
    if (alignment < MIN_ALIGNMENT) {
      alignment_ = MIN_ALIGNMENT;
    }
    const alignmentOffset = (1 - parentHeight) * alignment_;
    const scrollLocationOfElement = offsetGlobal - alignmentOffset;
    const currentScrollLocation = scroll / screenHeight;
    const scrollOffset = currentScrollLocation - scrollLocationOfElement;
    setTranslateYPx(offsetYPx - dimensionsPx.speed * scrollOffset);
  }, [
    scroll,
    screenHeight,
    parentHeight,
    dimensionsPx.speed,
    offsetYPx,
    index,
    offsetGlobal,
    alignment,
  ]);

  return {
    position: "absolute",
    transform: `translate3d(0px,${translateYPx}px,0px)`,
    ...dimensionsPx,
  };
};
