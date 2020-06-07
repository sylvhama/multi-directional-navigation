export const createElements = (length: number, idPrefix = '') => {
  return new Array(length).fill(null).map((_, index) => {
    const id = `${idPrefix}${index + 1}`;
    return { id, toFocus: index === 0 };
  });
};
