/*
  index.js (LinkExternal)
  <> Filip Rajec
*/

import React from "react";
import PropTypes from "prop-types";

import { openInNewTab } from "../../../../utils/utilities";

const LinkExternal = ({ to = "/", children }) => {
  const handleOpen = () => openInNewTab(to);
  return (
    <span
      onClick={handleOpen}
      onKeyPress={(event) => event.key === "Enter" && handleOpen()}
      role="button"
      style={{ cursor: "pointer" }}
      tabIndex="0"
    >
      {children}
    </span>
  );
};

LinkExternal.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default LinkExternal;
