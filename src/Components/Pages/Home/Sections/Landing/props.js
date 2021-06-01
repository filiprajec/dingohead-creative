/*
  props.js (Landing)
  <> Filip Rajec
*/

const HeaderProps = {
  dimensions: {
    parent: {
      width: 0.8,
      height: 0.8,
      top: 0.1,
      left: 0.1,
      speed: 1,
    },
  },
};

const ScrollDownProps = {
  dimensions: {
    parent: {
      squareHeight: 0.05,
      left: 0.5,
      top: 0.1,
      speed: -3,
    },
  },
};

const CircleProps = (styles) => ({
  dimensions: {
    parent: {
      squareWidth: 0.3,
      left: 0.5,
      top: 0.5,
      speed: 0.5,
    },
    anchorX: 0.5,
    anchorY: 0.5,
  },
  style: {
    backgroundColor: styles.colors.basic.chromeYellow,
    borderRadius: "50%",
  },
});

const CircleSmallProps = (styles) => ({
  dimensions: {
    parent: {
      squareWidth: 0.2,
      left: 0.3,
      top: 0.6,
      speed: -0.2,
    },
    anchorX: 0.5,
    anchorY: 0.5,
  },
  style: {
    backgroundColor: styles.colors.basic.fireOpal,
    borderRadius: "50%",
  },
});

const Shape3dProps = (styles) => ({
  dimensions: {
    parent: {
      squareHeight: 0.4,
      left: 0.5,
      top: 0.6,
    },
    anchorX: 0.5,
    anchorY: 0.5,
  },
  color: styles.colors.content,
  thickness: 3,
});

const ThemePanelProps = (styles) => ({
  dimensions: {
    px: { top: 0, right: 0 },
  },
  style: { zIndex: styles.zIndex.text },
});

const GratingProps = {
  dimensions: { parent: { top: 0.9, width: 1, speed: 0.12, left: 0.2 } },
  number: 8,
  stepSize: { top: -0.015, width: 0, left: 0.05, speed: -0.05 },
  width: 0.7,
};

const Props = (styles) => ({
  HeaderProps,
  ScrollDownProps,
  CircleProps: CircleProps(styles),
  CircleSmallProps: CircleSmallProps(styles),
  Shape3dProps: Shape3dProps(styles),
  ThemePanelProps: ThemePanelProps(styles),
  GratingProps,
});

export default Props;
