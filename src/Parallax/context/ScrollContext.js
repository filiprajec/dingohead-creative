/*
  ScrollContext.scss
  <> Filip Rajec
*/

import { createContext, useEffect, useState, useCallback } from "react";

const isBrowser = typeof window !== "undefined";

export const useScrollValue = (scrollWindowOuterRef) => {
  const [scroll, setScroll] = useState(scrollWindowOuterRef?.current?.scrollY || 0);

  const handleScroll = useCallback(() => {
    if (scrollWindowOuterRef?.current) {
        setScroll(scrollWindowOuterRef.current.scrollTop);
    }
  },[scrollWindowOuterRef]);

  useEffect(() => {
    const scrollWindowOuterRef_ = scrollWindowOuterRef;
    if (scrollWindowOuterRef_?.current) {
      handleScroll();
      scrollWindowOuterRef_.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollWindowOuterRef_?.current) {
        scrollWindowOuterRef_.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll, scrollWindowOuterRef]);

  return { scroll };
};

const getInitialContext = () => ({
  scroll: isBrowser ? window.scrollY : 0,
});

const ScrollContext = createContext(getInitialContext());
export const ScrollProvider = ScrollContext.Provider;
export default ScrollContext;
