/*
  ParallaxContext.scss
  <> Filip Rajec
*/

import { createContext } from "react";

const getInitialContext = () => ({
  offsetGlobal: 0,
  parentHeight: 1,
  index: 0,
  alignment: 0,
});

const ParallaxContext = createContext(getInitialContext());
export const ParallaxProvider = ParallaxContext.Provider;
export default ParallaxContext;
