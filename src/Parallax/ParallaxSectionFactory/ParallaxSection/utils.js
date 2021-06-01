/*
    utils.js (ParallaxSection)
    <> Filip Rajec
*/

import styles from "../../utils/styles";

// eslint-disable-next-line import/prefer-default-export
export const createContentLayer = (section, ref) => {
  const addRefToLayer = (layer, ref_ = null) => ({
    ...layer,
    ref: ref_,
  });

  const addZIndexToLayer = (layer, zIndex) => ({
    ...layer,
    style: { zIndex, ...layer.style },
  });

  let contentLayer = section;
  contentLayer = addRefToLayer(contentLayer, ref);
  contentLayer = addZIndexToLayer(contentLayer, styles.zIndex.content);

  return contentLayer;
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
