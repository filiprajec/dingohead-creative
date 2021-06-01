/*
  hooks.js (utils)
  <> Filip Rajec
*/

import { useState, useEffect, useCallback, useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import ScreenContext from "../context/ScreenContext";

export const useMonitorHeight = (monitorRef, setHeight) => {
  const { height: screenHeight } = useContext(ScreenContext);
  const monitorRefHeightPrevious = useRef(1);
  
  useEffect(() => {
    const monitorRef_ = monitorRef;
    let resizeObserver_ = null;
    if (monitorRef_.current) {
      const syncHeight = () => {
        if (monitorRef_.current) {
          const monitorRefHeight = monitorRef_.current.clientHeight;
          if (monitorRefHeight !== monitorRefHeightPrevious.current) {
            const ratio = monitorRefHeight / screenHeight;
            setHeight(ratio);
          }
          monitorRefHeightPrevious.current = monitorRefHeight;
        }
      };
      syncHeight();
      resizeObserver_ = new ResizeObserver(syncHeight).observe(
        monitorRef_.current
      );
    }
    return () => {
      if (resizeObserver_) {
        resizeObserver_.unobserve(monitorRef_.current);
      }
    };
  }, [monitorRef, screenHeight, setHeight]);
};

// solution from https://stackoverflow.com/questions/54954091/how-to-use-callback-with-usestate-hook-in-react
export const useStateCallback = (initialState) => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // mutable ref to store current callback

  const setStateCallback = useCallback((state_, cb) => {
    cbRef.current = cb; // store passed callback to ref
    setState(state_);
  }, []);

  useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
};

export const useStaticGUID = () => {
  const GUID = useRef(null);
  if (!GUID.current) {
    GUID.current = uuidv4();
  }
  return GUID.current;
}
