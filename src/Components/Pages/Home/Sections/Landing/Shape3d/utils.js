export const generateArrayWithLength = (length) => Array.from(Array(length).keys());

export const quartic = (t) => {
  const sqt = t * t;
  return sqt / (2.0 * (sqt - t) + 1.0);
}

export const bezier = (t) =>  t * t * (3.0 - 2.0 * t);
