/*
  index.js (Page404)
  <> Filip Rajec
*/

import React from "react";

import {ParallaxSectionFactory} from "../../../Parallax";

import NotFoundSection from "./Sections/NotFound";

const Page404 = () => {
  const sections = [
    {
      component: NotFoundSection
    }
  ];
  return <ParallaxSectionFactory sections={sections} />;
};

export default Page404;

Page404.propTypes = {};
