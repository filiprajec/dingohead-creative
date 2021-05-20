/*
  ScreenContext.scss
  <> Filip Rajec
*/

import { createContext, useEffect, useState } from "react";

import { debounce } from "../utils/utilities";

const isBrowser = typeof window !== "undefined";

export const useScreenValue = () => {
  const [screenWidth, setScreenWidth] = useState(
    isBrowser ? window.innerWidth : null
  );
  const [screenHeight, setScreenHeight] = useState(
    isBrowser ? window.innerHeight : null
  );
  const [vmin, setVmin] = useState(
    Math.min(
      (isBrowser ? window.innerWidth : null) || Infinity,
      (isBrowser ? window.innerHeight : null) || Infinity
    )
  );

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    setVmin(
      Math.min(window.innerWidth || Infinity, window.innerHeight || Infinity)
    );
  };

  useEffect(() => {
    let debouncedHandleResize = null;
    if (isBrowser) {
      debouncedHandleResize = debounce(handleResize, 100);
      handleResize();
      window.addEventListener("resize", debouncedHandleResize);
    }
    return () => {
      if (isBrowser && debouncedHandleResize) {
        window.removeEventListener("resize", debouncedHandleResize);
      }
    };
  }, []);

  return { width: screenWidth, height: screenHeight, vmin };
};

const getInitialContext = () => {
  if (!isBrowser) {
    return null;
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    vmin: Math.min(
      window.innerWidth || Infinity,
      window.innerHeight || Infinity
    ),
  };
};

const ScreenContext = createContext(getInitialContext());
export const ScreenProvider = ScreenContext.Provider;
export default ScreenContext;
