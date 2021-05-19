export const dimensionsDefault = {
  px: {
    size: 100,
    width: 100,
    height: 100,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // speed: 0, 
  },
  parent: {
    width: 1,
    height: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    speed: 0,
    squareHeight: 1,
    squareWidth: 1,
  },
  screen: {
    width: 1,
    height: 1,
    top: 0,
    left: 0,
    speed: 0,
    bottom: 0,
    right: 0,
    squareHeight: 1,
    squareWidth: 1,
  },
  centered: false,
};

export const onClickDefault = () => {
  // eslint-disable-next-line no-console
  console.warn("no onClick attached");
};

export const functionDefault = () => {
  // eslint-disable-next-line no-console
  console.warn("missing function call");
};
