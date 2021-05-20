/*
    index.js (ParallaxSectionFactory)
    <> Filip Rajec
*/

import React, { forwardRef, useRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";

import { useTotalHeight } from "./hooks";
import { ThemeProvider, useThemeValue } from "../../../context/ThemeContext";
import { ScreenProvider, useScreenValue } from "../../../context/ScreenContext";
import { ScrollProvider, useScrollValue } from "../../../context/ScrollContext";
import ParallaxSection, { sectionPropType } from "./ParallaxSection";
import { packageSection, setSectionHeight } from "./utils";
import { useStaticGUID, useStateCallback } from "../../../utils/hooks";

const ParallaxSectionFactory = forwardRef(({ sections = [] }, ref) => {
  const parallaxOuterRef = useRef(null);
  const parallaxInnerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [sectionHeights, setSectionHeights] = useStateCallback(
    new Array(sections.length).fill(1)
  );
  const totalHeight = useTotalHeight(sectionHeights);
  const themeValue = useThemeValue();
  const screenValue = useScreenValue();
  const scrollValue = useScrollValue(parallaxOuterRef);
  useImperativeHandle(
    ref,
    () => ({
      parallaxOuter: parallaxOuterRef.current,
      parallaxInner: parallaxInnerRef.current,
      sections: sectionsRef.current,
    }),
    [parallaxOuterRef, parallaxInnerRef, sectionsRef]
  );

  const { height: screenHeight, width: screenWidth } = screenValue;

  if (screenValue == null || screenHeight == null || screenWidth == null) {
    return <></>;
  }

  const styleOuter = {
    position: "absolute",
    height: screenHeight,
    width: "100%",
    overflowY: "scroll",
    overflowX: "hidden",
    overscrollBehavior: "contain",
  };

  const styleInner = {
    position: "relative",
    height: totalHeight * screenHeight,
    overflow: "hidden",
  };

  const packageSectionStateBound = (section, index) =>
    packageSection(section, index, sectionHeights);

  const setSectionHeightStateBound = (height, index) =>
    setSectionHeight(height, index, sectionHeights, setSectionHeights);

  return (
    <ThemeProvider value={themeValue}>
      <ScreenProvider value={screenValue}>
        <ScrollProvider value={scrollValue}>
          <div ref={parallaxOuterRef} style={styleOuter}>
            <div ref={parallaxInnerRef} style={styleInner}>
              {sections.map((section, index) => (
                <ParallaxSection
                  section={packageSectionStateBound(section, index)}
                  height={sectionHeights[index]}
                  setHeight={(height) =>
                    setSectionHeightStateBound(height, index)
                  }
                  totalHeight={totalHeight}
                  ref={(ref_) => {
                    sectionsRef.current[index] = ref_;
                  }}
                  key={`parallax-section-${useStaticGUID()}`}
                />
              ))}
            </div>
          </div>
        </ScrollProvider>
      </ScreenProvider>
    </ThemeProvider>
  );
});

ParallaxSectionFactory.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(sectionPropType)),
};

export default ParallaxSectionFactory;
