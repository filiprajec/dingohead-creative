/*
  index.js (Landing)
  <> Filip Rajec
*/

import React, { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import ThemeContext from "../../../../../context/ThemeContext";
import ScreenContext from "../../../../../context/ScreenContext";
import ParallaxContext from "../../../../../context/ParallaxContext";
import Shape3d from "./Shape3d";
import Header from "./Header";
import Grating from "./Grating";
import ScrollDownArrow from "./ScrollDownArrow";
import ThemeSwitchPanel from "../../../../../theme/Components/ThemeSwitchPanel";
import { Card } from "../../../../UI";
import ParallaxContainer from "../../../../Parallax/ParallaxContainer";
import { functionDefault } from "../../../../../utils/defaults";
import PageProps from "./props";

const Landing = ({ setHeight = functionDefault }) => {
  const { styles } = useContext(ThemeContext);
  const screen = useContext(ScreenContext);
  const { parentHeight } = useContext(ParallaxContext);
  const testRef = useRef(null);
  useEffect(() => {
    setHeight(1);
  });

  const {
    HeaderProps,
    ScrollDownProps,
    CircleProps,
    CircleSmallProps,
    Shape3dProps,
    ThemePanelProps,
    GratingProps,
  } = PageProps(styles);

  return (
    <>
      {/* Header Text */}
      <ParallaxContainer
        dimensions={HeaderProps.dimensions}
        style={{ zIndex: styles.zIndex.text }}
        ref={testRef}
      >
        <Header screen={screen} />
      </ParallaxContainer>
      {/* Scroll Down Arrow */}
      <ParallaxContainer
        dimensions={ScrollDownProps.dimensions}
        style={{ zIndex: styles.zIndex.textBehind }}
      >
        <ScrollDownArrow
          size={
            ScrollDownProps.dimensions.parent.squareHeight *
            screen.height *
            parentHeight
          }
        />
      </ParallaxContainer>
      {/* Large Circle */}
      <ParallaxContainer
        dimensions={CircleProps.dimensions}
        style={CircleProps.style}
      />
      {/* Small Circle */}
      <ParallaxContainer
        dimensions={CircleSmallProps.dimensions}
        style={CircleSmallProps.style}
      />
      {/* 3D Shape */}
      <ParallaxContainer dimensions={Shape3dProps.dimensions}>
        <Shape3d
          shape="pyramid"
          width={
            Shape3dProps.dimensions.parent.squareHeight *
            screen.height *
            parentHeight
          }
          height={
            Shape3dProps.dimensions.parent.squareHeight *
            screen.height *
            parentHeight
          }
          thickness={Shape3dProps.thickness}
          color={Shape3dProps.color}
          animate
        />
      </ParallaxContainer>
      {/* Theme Switch Panel */}
      <ParallaxContainer
        dimensions={ThemePanelProps.dimensions}
        style={ThemePanelProps.style}
      >
        <Card style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          <ThemeSwitchPanel />
        </Card>
      </ParallaxContainer>
      {/* Grating Layer */}
      <ParallaxContainer dimensions={GratingProps.dimensions}>
        <Grating
          number={GratingProps.number}
          stepSize={GratingProps.stepSize}
          width={GratingProps.width}
        />
      </ParallaxContainer>
    </>
  );
};

export default Landing;

Landing.propTypes = {
  setHeight: PropTypes.func,
};
