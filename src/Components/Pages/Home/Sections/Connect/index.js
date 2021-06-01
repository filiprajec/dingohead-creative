/*
  index.js (Connect)
  <> Filip Rajec
*/

import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";

import ThemeContext from "../../../../../context/ThemeContext";
import { ParallaxContainer, useMonitorHeight } from "../../../../../Parallax";
import LinkPanel from "./LinkPanel";
import { functionDefault } from "../../../../../utils/defaults";
import PageProps from "./props";

const Connect = ({ setHeight = functionDefault }) => {
  const linkPanelRef = useRef(null);
  const { styles } = useContext(ThemeContext);
  useMonitorHeight(linkPanelRef, setHeight);

  const {
    LinkPanelOuterProps,
    LinkPanelProps,
    LayerAProps,
    LayerBProps,
    LayerCProps,
  } = PageProps(styles);

  return (
    <>
      {/* Link Panel */}
      <ParallaxContainer
        dimensions={LinkPanelOuterProps.dimensions}
        style={LinkPanelOuterProps.style}
      >
        <LinkPanel ref={linkPanelRef} links={LinkPanelProps.links} />
      </ParallaxContainer>
      {/* Layer A */}
      <ParallaxContainer
        dimensions={LayerAProps.dimensions}
        style={LayerAProps.style}
      />
      {/* Layer B */}
      <ParallaxContainer
        dimensions={LayerBProps.dimensions}
        style={LayerBProps.style}
      />
      {/* Layer C */}
      <ParallaxContainer
        dimensions={LayerCProps.dimensions}
        style={LayerCProps.style}
      />
    </>
  );
};

export default Connect;

Connect.propTypes = {
  setHeight: PropTypes.func,
};
