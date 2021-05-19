// index.js (Shape3d)
// <> Filip Rajec

import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-shapes";

import { usePositions } from "./hooks";
import { generateArrayWithLength } from "./utils";

// creates a 3d pyramid with animation
const Shape3d = ({
  shape = "pyramid",
  width = 100,
  height = 100,
  thickness = 2,
  color = "black",
  framesPerUpdate = 50,
  msPerFrame = 1000 / 30,
  animate = false,
}) => {
  const [positionsA, positionsB] = usePositions(shape, animate, framesPerUpdate, msPerFrame);

  // draw a shape based on shape positions array
  const createShape = (positions, thickness_ = 2, color_ = "black", ID) =>
    positions.map((eachPosition, i, arr) => {
      if (i < arr.length - 1) {
        const nextPosition = arr[i + 1];
        return (
          <div
            style={{
              position: "absolute",
            }}
            // to keep cocnsistent keys index is required in this case
            // eslint-disable-next-line react/no-array-index-key
            key={`3d-shape-layer-${ID}-${i}`}
          >
            <Line
              x1={width * eachPosition.x}
              x2={width * nextPosition.x}
              y1={height * eachPosition.y}
              y2={height * nextPosition.y}
              stroke={{ color: color_ }}
              strokeWidth={thickness_}
            />
          </div>
        );
      }
      return null;
    });

  // joins shapes together
  // both shapes must have same amount of ends and points must be in order
  const joinShapes = (positionsA_, positionsB_, thickness_, color_, ID) => {
    // check for consisitency
    const len = positionsA_.length;
    if (len !== positionsB_.length) return null;
    const indicies = generateArrayWithLength(len);
    return indicies.map((eachIndex) => {
      if (eachIndex !== len - 1) {
        const newShape = [
          {
            x: positionsA_[eachIndex].x,
            y: positionsA_[eachIndex].y,
          },
          {
            x: positionsB_[eachIndex].x,
            y: positionsB_[eachIndex].y,
          },
        ];
        return createShape(newShape, thickness_, color_, ID);
      }
      return null;
    });
  };

  return (
    <div
      style={{
        display: "inline-flex",
        position: "relative",
        height,
        width,
      }}
    >
      {createShape(positionsA, thickness, color, "A")}
      {createShape(positionsB, thickness, color, "B")}
      {joinShapes(positionsA, positionsB, thickness, color, "A-B")}
    </div>
  );
};

export default Shape3d;

Shape3d.propTypes = {
  shape: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  thickness: PropTypes.number,
  color: PropTypes.string,
  framesPerUpdate: PropTypes.number,
  msPerFrame: PropTypes.number,
  animate: PropTypes.bool,
};
