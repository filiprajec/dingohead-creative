import PropTypes from "prop-types";

// eslint-disable-next-line import/prefer-default-export
export const childrenPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);
