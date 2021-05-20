/*
    utils.js (ParallaxSectionFactory)
    <> Filip Rajec
*/

import { createElement } from "react";
import update from "immutability-helper";

const wrapComponentInProps =
  (component, userProps = {}) =>
  (factoryProps = {}) =>
    createElement(component, { ...userProps, ...factoryProps });

const getSectionTop = (index, sectionHeights) =>
  sectionHeights.reduce((acc, curr, i) => (i < index ? acc + curr : acc), 0);

export const packageSection = (section, index, sectionHeights) => ({
  ...section,
  wrappedComponent: wrapComponentInProps(
    section.component,
    section.props
  ),
  index,
  top: getSectionTop(index, sectionHeights),
});

export const setSectionHeight = (
  height,
  index,
  sectionHeights,
  setSectionHeights
) => {
  if (height !== sectionHeights[index]) {
    setSectionHeights((prevSectionHeights) =>
      update(prevSectionHeights, {
        $splice: [[index, index, height]],
      })
    );
  }
};
