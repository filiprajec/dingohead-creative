/*
  ScreenContext.scss
  <> Filip Rajec
*/

import { createContext, useEffect, useState } from "react";

import { debounce } from "../utils/utilities";

const isBrowser = typeof window !== "undefined";
const defaultBrowserSize = { width: 1920, height: 1080 };

export const useScreenValue = () => {
  const [screenWidth, setScreenWidth] = useState(
    isBrowser ? window.innerWidth : defaultBrowserSize.width
  );
  const [screenHeight, setScreenHeight] = useState(
    isBrowser ? window.innerHeight : defaultBrowserSize.height
  );
  const [vmin, setVmin] = useState(
    Math.min(
      (isBrowser ? window.innerWidth : defaultBrowserSize.width) || Infinity,
      (isBrowser ? window.innerHeight : defaultBrowserSize.height) || Infinity
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

const getInitialContext = () => ({
  width: isBrowser ? window.innerWidth : defaultBrowserSize.width,
  height: isBrowser ? window.innerHeight : defaultBrowserSize.height,
  vmin: Math.min(
    (isBrowser ? window.innerWidth : defaultBrowserSize.width) || Infinity,
    (isBrowser ? window.innerHeight : defaultBrowserSize.height) || Infinity
  ),
});

const ScreenContext = createContext(getInitialContext());
export const ScreenProvider = ScreenContext.Provider;
export default ScreenContext;
