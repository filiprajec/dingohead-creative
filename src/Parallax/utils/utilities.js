// eslint-disable-next-line import/prefer-default-export
export const debounce = (debounceFunction, debounceTimeInMs = 100) => {
  let timer = null;
  return (event) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(debounceFunction, debounceTimeInMs, event);
  };
};
