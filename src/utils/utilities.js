export const debounce = (debounceFunction, debounceTimeInMs = 100) => {
  let timer = null;
  return (event) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(debounceFunction, debounceTimeInMs, event);
  };
};

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
