/*
    utils.js (ParallaxSection)
    <> Filip Rajec
*/

import { useContext } from "react";

import ThemeContext from "../../../../context/ThemeContext";

// eslint-disable-next-line import/prefer-default-export
export const createSectionLayers = (section, ref) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { styles } = useContext(ThemeContext);
  const { index, top } = section;

  const addRefToLayer = (layer, ref_ = null) => ({
    ...layer,
    ref: ref_,
  });

  const addZIndexToLayer = (layer, zIndex) => ({
    ...layer,
    style: { zIndex, ...layer.style },
  });

  const addBackgroundColorToLayer = (layer, backgroundColor) => ({
    ...layer,
    style: { ...layer.style, backgroundColor },
  });

  let contentLayer = section;
  contentLayer = addRefToLayer(contentLayer, ref);
  contentLayer = addZIndexToLayer(contentLayer, styles.zIndex.content);

  let backgroundLayer = { index, top };
  backgroundLayer = addZIndexToLayer(backgroundLayer, styles.zIndex.background);
  backgroundLayer = addBackgroundColorToLayer(
    backgroundLayer,
    styles.colors.background
  );

  return { contentLayer, backgroundLayer };
};

export const getAlignment = (section, height, totalHeight) => {
  let alignment = 0.5;
  if (section.top < height) {
    alignment = 0.0;
  } else if (section.top + height / 2 < 0.5) {
    alignment = section.top + height / 2;
  } else if (totalHeight - (section.top + height) < height) {
    alignment = 1.0;
  } else if (totalHeight - (section.top + height / 2) < 0.5) {
    alignment = 1.0 - (totalHeight - (section.top + height / 2));
  }
  return alignment;
};
