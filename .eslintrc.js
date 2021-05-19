module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["react-app", "airbnb", "prettier"],
  rules: {
    quotes: ["error", "double"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/require-default-props": [0], // disable as it is deprecated to use default props in functional component - instead we add defaults to declaration
    // "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-plusplus": 0,
    "no-underscore-dangle": [0],
  },
  env: {
    browser: true,
  },
};
