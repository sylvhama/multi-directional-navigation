import React from "react";
import throttle from "lodash/throttle";
import { Handler } from "./types";

// inspired from https://usehooks.com/useEventListener/
export function useKeyboardListener(
  eventName: string,
  handler: Handler,
  element: Window | HTMLElement = window,
  throttleValue: number = 0
) {
  const savedHandler = React.useRef<Handler>();

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    if (!element?.addEventListener) return;

    const eventListener = throttle((event: Event) => {
      if (savedHandler.current && isKeyboardEvent(event)) {
        savedHandler.current(event);
      }
    }, throttleValue);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

function isKeyboardEvent(event: Event): event is KeyboardEvent {
  return "key" in event;
}
