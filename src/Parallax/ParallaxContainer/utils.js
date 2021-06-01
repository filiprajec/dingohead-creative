/*
  utils.js (ParallaxContainer)
  <> Filip Rajec
*/

import { useContext } from "react";

import ParallaxContext from "../context/ParallaxContext";
import ScreenContext from "../context/ScreenContext";

const RelativeSizesForParallaxContext = () => {
  const { height: screenHeight, width: screenWidth } =
    useContext(ScreenContext);
  const { parentHeight, parentWidth } = useContext(ParallaxContext);
  const relativeSizes = {
    screen: {
      width: screenWidth,
      height: screenHeight,
      top: screenHeight,
      left: screenWidth,
      bottom: screenHeight,
      right: screenWidth,
      squareHeight: screenHeight,
      squareWidth: screenWidth,
      speed: screenHeight,
    },
  };
  relativeSizes.parent = { ...relativeSizes.screen };
  const heightPropertiesToRescale = [
    "height",
    "top",
    "bottom",
    "squareHeight",
    "speed",
  ];
  heightPropertiesToRescale.forEach((eachProperty) => {
    relativeSizes.parent[eachProperty] *= parentHeight;
  });
  const widthPropertiesToRescale = ["width", "left", "right", "squareWidth"];
  widthPropertiesToRescale.forEach((eachProperty) => {
    relativeSizes.parent[eachProperty] *= parentWidth;
  });
  return relativeSizes;
};

const getDimensionStyleInPx = (dimensions, styleName) => {
  const doesDimensionStyleExist = (dimensions_, styleName_) =>
    dimensions_.px?.[styleName_] != null ||
    dimensions_.parent?.[styleName_] != null ||
    dimensions_.screen?.[styleName_] != null;
  if (!doesDimensionStyleExist(dimensions, styleName)) {
    return null;
  }

  const relativeSizesContext = RelativeSizesForParallaxContext();
  let styleTotalPx = 0;
  if (dimensions.px?.[styleName] != null) {
    styleTotalPx += dimensions.px[styleName];
  }
  if (dimensions.parent?.[styleName] != null) {
    styleTotalPx +=
      dimensions.parent[styleName] * relativeSizesContext.parent[styleName];
  }
  if (dimensions.screen?.[styleName] != null) {
    styleTotalPx +=
      dimensions.screen[styleName] * relativeSizesContext.screen[styleName];
  }
  return styleTotalPx;
};

const getDimensionsInPx = (dimensions) => {
  const styles = [
    "top",
    "bottom",
    "left",
    "right",
    "height",
    "width",
    "squareHeight",
    "squareWidth",
    "speed",
  ];
  const dimensionsPx = {};
  styles.forEach((eachStyle) => {
    dimensionsPx[eachStyle] = getDimensionStyleInPx(dimensions, eachStyle);
  });
  return dimensionsPx;
};

// eslint-disable-next-line no-unused-vars
const transformAnchorCenterX = (dimensions, outerContainerRef) => {
  let { left, right } = dimensions;
  const { width } = dimensions;
  // get from DOM is not set
  let width_ = width;
  if (width_ == null && outerContainerRef.current) {
    width_ = outerContainerRef.current.clientWidth;
  }
  // get transformed positions here
  if (left != null) {
    left -= width_ * dimensions.anchorX;
  }
  if (right != null) {
    right -= width_ * (1 - dimensions.anchorX);
  }
  return { left, right};
};

const transformAnchorCenterY = (dimensions, outerContainerRef) => {
  let { top, bottom } = dimensions;
  const {  height } = dimensions;
  // get from DOM is not set
  let height_ = height;
  if (height_ == null && outerContainerRef.current) {
    height_ = outerContainerRef.current.clientHeight;
  }
  // get transformed positions here
  if (top != null) {
    top -= height_ * dimensions.anchorY;
  }
  if (bottom != null) {
    bottom -= height_ * (1 - dimensions.anchorY);
  }
  return { top, bottom };
};

const getPreferredWidth = (dimensions) =>
  dimensions.width ?? dimensions.squareHeight ?? dimensions.squareWidth;

const getPreferredHeight = (dimensions) =>
  dimensions.height ?? dimensions.squareHeight ?? dimensions.squareWidth;

// eslint-disable-next-line import/prefer-default-export
export const getDimensionsPx = (dimensions, outerContainerRef) => {
  let dimensionsPx = getDimensionsInPx(dimensions);
  dimensionsPx.width = getPreferredWidth(dimensionsPx);
  dimensionsPx.height = getPreferredHeight(dimensionsPx);
  dimensionsPx.speed = dimensionsPx.speed ?? 0;
  // transform X center
  if (dimensions.anchorX != null && dimensions.anchorX !== 0) {
    const transformedAnchorX = transformAnchorCenterX(
      { ...dimensionsPx, anchorX: dimensions.anchorX },
      outerContainerRef
    );
    dimensionsPx = {
      ...dimensionsPx,
      ...transformedAnchorX,
    };
  }
  // transform Y center
  if (dimensions.anchorY != null && dimensions.anchorY !== 0) {
    const transformedAnchorY = transformAnchorCenterY(
      { ...dimensionsPx, anchorY: dimensions.anchorY },
      outerContainerRef
    );
    dimensionsPx = {
      ...dimensionsPx,
      ...transformedAnchorY,
    };
  }
  return dimensionsPx;
};
