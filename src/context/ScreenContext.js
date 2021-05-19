/*
  ScreenContext.scss
  <> Filip Rajec
*/

import { createContext, useEffect, useState } from "react";

import { debounce } from "../utils/utilities";

export const useScreenValue = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [vmin, setVmin] = useState(window.innerWidth || Infinity, window.innerHeight || Infinity);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    setVmin(
      Math.min(window.innerWidth || Infinity, window.innerHeight || Infinity)
    );
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 100);
    handleResize();
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return { width: screenWidth, height: screenHeight, vmin };
};

const getInitialContext = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  vmin: Math.min(window.innerWidth || Infinity, window.innerHeight || Infinity),
});

const ScreenContext = createContext(getInitialContext());
export const ScreenProvider = ScreenContext.Provider;
export default ScreenContext;
