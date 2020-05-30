import React from "react";

// Taken from https://usehooks.com/usePrevious/
export function usePrevious<ValueType>(value: ValueType) {
  const ref = React.useRef<ValueType>();

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
