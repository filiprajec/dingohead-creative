/*
    hooks.js (ParallaxSectionFactory)
    <> Filip Rajec
*/

import {
  useState,
  useEffect,
} from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line import/prefer-default-export
export const useTotalHeight = (sectionHeights) => {
    const [totalHeight, setTotalHeight] = useState(0);

    useEffect(() => {
      const totalHeight_ = sectionHeights.reduce((acc, curr) => acc + curr, 0);
      if (totalHeight_ !== totalHeight) {
        setTotalHeight(totalHeight_);
      }
    }, [sectionHeights, totalHeight]);

    return totalHeight;
};

useTotalHeight.propTypes = {
    sectionHeights: PropTypes.arrayOf(PropTypes.number)
};
