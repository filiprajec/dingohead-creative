/*
  hooks.js (utils)
  <> Filip Rajec
*/

import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line import/prefer-default-export
export const useStaticGUID = () => {
  const GUID = useRef(null);
  if (!GUID.current) {
    GUID.current = uuidv4();
  }
  return GUID.current;
}
