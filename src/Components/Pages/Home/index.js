/*
  index.js (Home)
  <> Filip Rajec
*/

import React from "react";

import { ParallaxSectionFactory } from "../../../Parallax";

import LandingSection from "./Sections/Landing";
import ProfileSection from "./Sections/Profile";
import ConnectSection from "./Sections/Connect";
import { ThemeProvider, useThemeValue } from "../../../context/ThemeContext";
// -> import new sections here

const Home = () => {
  const theme = useThemeValue();
  const sections = [
    {
      component: LandingSection,
      props: {},
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
  return (
    <ThemeProvider value={theme}>
      <ParallaxSectionFactory sections={sections} backgroundColor={theme.styles.colors.background} />
    </ThemeProvider>
  );
};

export default Home;

Home.propTypes = {};
