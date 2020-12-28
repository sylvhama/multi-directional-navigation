import React from "react";

// https://css-tricks.com/using-requestanimationframe-with-react-hooks/
export function useAnimationFrame(callback: () => void) {
  const requestRef = React.useRef(NaN);

  const animate = () => {
    callback();
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
