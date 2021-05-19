/*
  index.js (Home)
  <> Filip Rajec
*/

import React from "react";

import ParallaxSectionFactory from "../../Parallax/ParallaxSectionFactory";

import LandingSection from "./Sections/Landing";
import ProfileSection from "./Sections/Profile";
import ConnectSection from "./Sections/Connect";
// -> import new sections here

const Home = () => {
  const sections = [
    {
      component: LandingSection,
      props: {},
      style: {},
    },
    {
      component: ProfileSection,
    },
    {
      component: ConnectSection,
      style: { zIndex: 0 },
    },
    // -> add new sections here
  ];
  return <ParallaxSectionFactory sections={sections} />;
};

export default Home;

Home.propTypes = {};
