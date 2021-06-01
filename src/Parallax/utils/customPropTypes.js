import PropTypes from "prop-types";

export const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export const screenPropType = PropTypes.exact({
  width: PropTypes.number,
  height: PropTypes.number,
  vmin: PropTypes.number,
});

export const dimensionsPropType = PropTypes.shape({
  screen: PropTypes.shape({
    squareHeight: PropTypes.number,
    squareWidth: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    speed: PropTypes.number,
  }),
  px: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  parent: PropTypes.shape({
    squareHeight: PropTypes.number,
    squareWidth: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    speed: PropTypes.number,
  }),
  anchorX: PropTypes.number,
  anchorY: PropTypes.number,
});
