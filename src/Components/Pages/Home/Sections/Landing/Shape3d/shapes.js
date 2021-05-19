// shapes.js (Shape3d)
// <> Filip Rajec

const PYRAMID = {
  positionsA: [
    { x: 0.2, y: 0.4 },
    { x: 0.5, y: 0.8 },
    { x: 0.8, y: 0.4 },
    { x: 0.2, y: 0.4 },
  ],
  positionsB: [
    { x: 0.1, y: 0.5 },
    { x: 0.5, y: 0.8 },
    { x: 0.8, y: 0.4 },
    { x: 0.1, y: 0.5 },
  ],
};

const CUBE = {
  positionsA: [
    { x: 0.2, y: 0.2 },
    { x: 0.6, y: 0.2 },
    { x: 0.6, y: 0.6 },
    { x: 0.2, y: 0.6 },
    { x: 0.2, y: 0.2 },
  ],
  positionsB: [
    { x: 0.3, y: 0.3 },
    { x: 0.7, y: 0.3 },
    { x: 0.7, y: 0.7 },
    { x: 0.3, y: 0.7 },
    { x: 0.3, y: 0.3 },
  ],
};

export const Shapes = {
    "pyramid": PYRAMID,
    "cube": CUBE,
    "DEFAULT": PYRAMID,
}

export default Shapes;
