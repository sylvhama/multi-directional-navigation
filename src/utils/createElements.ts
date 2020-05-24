export const createElements = (length: number) =>
  new Array(length).fill(null).map((_, index) => {
    const id = (index + 1).toString();
    return { id, toFocus: index === 0 };
  });
