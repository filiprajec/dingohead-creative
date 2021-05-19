/*
  utils.js (ParallaxContainer)
  <> Filip Rajec
*/

import { useContext } from "react";

import ParallaxContext from "../../../context/ParallaxContext";
import ScreenContext from "../../../context/ScreenContext";

const RelativeSizesForParallaxContext = () => {
  const { height: screenHeight, width: screenWidth } =
    useContext(ScreenContext);
  const { parentHeight } = useContext(ParallaxContext);
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
  const propertiesToRescale = [
    "height",
    "top",
    "bottom",
    "squareHeight",
    "speed",
  ];
  propertiesToRescale.forEach((eachProperty) => {
    relativeSizes.parent[eachProperty] *= parentHeight;
  });
  return relativeSizes;
};

const getDimesionStyleInPx = (dimensions, styleName) => {
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

const getAllDimensionStylesInPx = (dimensions) => {
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
    dimensionsPx[eachStyle] = getDimesionStyleInPx(dimensions, eachStyle);
  });
  return dimensionsPx;
};

const getCenteredPosition = (dimensions) => {
  let { left, right, top, bottom } = dimensions;
  const { width, height } = dimensions;
  if (left != null) {
    left -= width / 2;
  }
  if (right != null) {
    right -= width / 2;
  }
  if (top != null) {
    top -= height / 2;
  }
  if (bottom != null) {
    bottom -= height / 2;
  }
  return { left, right, top, bottom };
};

const getPreferredWidth = (dimensions) =>
  dimensions.width ?? dimensions.squareHeight ?? dimensions.squareWidth;

const getPreferredHeight = (dimensions) =>
  dimensions.height ?? dimensions.squareHeight ?? dimensions.squareWidth;

// eslint-disable-next-line import/prefer-default-export
export const getDimensionsPx = (dimensions) => {
  let dimensionsPx = getAllDimensionStylesInPx(dimensions);
  dimensionsPx.width = getPreferredWidth(dimensionsPx);
  dimensionsPx.height = getPreferredHeight(dimensionsPx);
  dimensionsPx.speed = dimensionsPx.speed ?? 0;
  if (dimensions.centered) {
    dimensionsPx = { ...dimensionsPx, ...getCenteredPosition(dimensionsPx) };
  }
  return dimensionsPx;
};
