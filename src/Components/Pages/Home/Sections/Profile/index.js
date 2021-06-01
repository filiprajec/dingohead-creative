/*
  index.js (Profile)
  <> Filip Rajec
*/

import React, { useRef } from "react";
import PropTypes from "prop-types";

import ProfileText from "./ProfileText";
import { useMonitorHeight } from "../../../../../Parallax";
import { functionDefault } from "../../../../../utils/defaults";

const Profile = ({ setHeight = functionDefault }) => {
  const textRef = useRef(null);
  useMonitorHeight(textRef, setHeight);
  return <ProfileText ref={textRef} />;
};

export default Profile;

Profile.propTypes = {
  setHeight: PropTypes.func,
};
