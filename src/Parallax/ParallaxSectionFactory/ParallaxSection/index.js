/*
    index.js (ParallaxSection)
    <> Filip Rajec
*/

import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import stylePropType from "react-style-proptype";

import { ParallaxProvider } from "../../context/ParallaxContext";
import ParallaxContainer from "../../ParallaxContainer";
import { createContentLayer, getAlignment } from "./utils";
import { functionDefault } from "../../utils/defaults";

const ParallaxSection = forwardRef(
  (
    { section = {}, height = 1, setHeight = functionDefault, totalHeight = 0 },
    ref
  ) => {
    const contentLayer = createContentLayer(section, ref);
    const alignment = getAlignment(section, height, totalHeight);

    const renderSectionLayer = (sectionLayer) => {
      const dimensions = {
        parent: {
          height,
          width: 1,
          top: sectionLayer.top,
          left: 0,
          speed: sectionLayer.speed ?? 0,
        },
      };

      const style = {
        ...sectionLayer.style,
        display: "flex",
        justifyContent: "center",
      };

      return (
        <ParallaxProvider
          value={{
            offsetGlobal: sectionLayer.top,
            parentHeight: 1,
            parentWidth: 1,
            index: sectionLayer.index,
            alignment,
          }}
        >
          <ParallaxContainer
            dimensions={dimensions}
            style={style}
            ref={sectionLayer.ref}
          >
            {sectionLayer.wrappedComponent &&
              sectionLayer.wrappedComponent({
                height,
                setHeight,
              })}
          </ParallaxContainer>
        </ParallaxProvider>
      );
    };

    return (
      <>
        {renderSectionLayer(contentLayer)}
      </>
    );
  }
);

const sectionLayerPropType = {
  style: stylePropType,
  offset: PropTypes.number,
  index: PropTypes.number,
};

export const sectionPropType = {
  section: PropTypes.shape({
    content: PropTypes.shape({
      component: PropTypes.node,
      props: PropTypes.objectOf(PropTypes.any),
      wrappedComponent: PropTypes.func,
      ...sectionLayerPropType,
    }),
    background: PropTypes.shape({
      ...sectionLayerPropType,
    }),
  }),
  height: PropTypes.number,
  setHeight: PropTypes.func,
  totalHeight: PropTypes.number,
};

ParallaxSection.propTypes = sectionPropType;

export default ParallaxSection;
