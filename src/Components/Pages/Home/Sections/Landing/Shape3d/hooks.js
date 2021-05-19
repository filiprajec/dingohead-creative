// hooks.js (Shape3d)
// <> Filip Rajec

import { useState, useEffect, useRef } from "react";

import Shapes from "./shapes";
import { generateArrayWithLength, quartic } from "./utils";

// eslint-disable-next-line import/prefer-default-export
export const useLayerPositions = (
  initialPositions,
  animate,
  framesPerUpdate,
  msPerFrame
) => {
  const [positions, setPositions] = useState(initialPositions);
  const [nextPositions, setNextPositions] = useState([]);
  const frameCounter = useRef(0);

  // apply above hook to shape A
  useEffect(() => {
    let intervalID = null;
    if (animate && frameCounter.current === 0) {
      // helper that is reused
      const setNextPositionsHelper = (positions_, setNextPositions_) => {
        const indicies = generateArrayWithLength(positions_.length);
        frameCounter.current = 0;
        const nextPositions_ = indicies.map((eachIndex) => {
          let randomPosX =
            positions_[eachIndex].x + (Math.random() * 2 - 1) / 8;
          let randomPosY =
            positions_[eachIndex].y + (Math.random() * 2 - 1) / 8;
          randomPosX = randomPosX > 0.8 ? 0.8 : randomPosX;
          randomPosX = randomPosX < 0.2 ? 0.2 : randomPosX;
          randomPosY = randomPosY > 0.8 ? 0.8 : randomPosY;
          randomPosY = randomPosY < 0.2 ? 0.2 : randomPosY;
          return {
            x: randomPosX,
            y: randomPosY,
          };
        });
        // keep shape
        const lastIndex = positions_.length - 1;
        const firstIndex = 0;
        nextPositions_[lastIndex] = nextPositions_[firstIndex];
        setNextPositions_(nextPositions_);
      };
      setNextPositionsHelper(positions, setNextPositions);
      intervalID = setInterval(
        () => setNextPositionsHelper(positions, setNextPositions),
        framesPerUpdate * msPerFrame
      );
    }

    return () => {
      if (intervalID) {
        // clean up required here -> clearInterval(intervalID);
      }
    };
  }, [animate, framesPerUpdate, msPerFrame, positions]);

  // apply above hook to shape A
  useEffect(() => {
    let intervalID = null;
    if (animate) {
      intervalID = setInterval(() => {
        const indicies = generateArrayWithLength(positions.length);
        const intervalSize =
          quartic(frameCounter.current / framesPerUpdate) -
          quartic((frameCounter.current - 1) / framesPerUpdate);
        frameCounter.current++;
        const ShapePositionsTemp = indicies.map((eachIndex) => ({
          x:
            positions[eachIndex].x +
            (nextPositions[eachIndex].x - positions[eachIndex].x) *
              intervalSize,
          y:
            positions[eachIndex].y +
            (nextPositions[eachIndex].y - positions[eachIndex].y) *
              intervalSize,
        }));
        setPositions(ShapePositionsTemp);
      }, msPerFrame);
    }

    return () => {
      if (intervalID) {
        clearInterval(intervalID);
      }
    };
  }, [positions, nextPositions, animate, msPerFrame, framesPerUpdate]);

  return positions;
};

export const usePositions = (shape, animate, framesPerUpdate, msPerFrame) => {
  const shape_ = Shapes[shape] ?? Shapes.DEFAULT;
  const positionsA = useLayerPositions(
    shape_.positionsA,
    animate,
    framesPerUpdate,
    msPerFrame
  );
  const positionsB = useLayerPositions(
    shape_.positionsB,
    animate,
    framesPerUpdate,
    msPerFrame
  );
  return [positionsA, positionsB];
};
