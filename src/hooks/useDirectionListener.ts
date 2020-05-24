import React from "react";
import throttle from "lodash/throttle";

import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";
import { findClosestNeighborId } from "../utils/findClosestNeighborId";
import { useFocus } from "./useFocus";

export enum Direction {
  Left = "Left",
  Top = "Top",
  Right = "Right",
  Bottom = "Bottom"
}

type Handler = (event: KeyboardEvent) => void;

export const useDirectionListener = (
  keys = { left: 37, top: 38, right: 39, bottom: 40 },
  throttleValue = 150,
  element?: Window | HTMLElement
) => {
  const [repeat, setRepeat] = React.useState(false);
  const { elements, currentFocusedId } = useMultiDirectionContext();
  const focus = useFocus();

  const { left, top, right, bottom } = keys;

  const handler: Handler = React.useCallback(
    event => {
      const direction = getDirection(event.keyCode, left, top, right, bottom);

      if (!direction) {
        return;
      }

      event.preventDefault();

      setRepeat(event.repeat);

      const nextFocusId = findClosestNeighborId(
        Object.values(elements),
        direction,
        elements[currentFocusedId || ""]
      );

      if (nextFocusId) {
        focus(nextFocusId);
      }
    },
    [left, top, right, bottom, focus, elements, currentFocusedId]
  );

  useKeydownListener(handler, element, throttleValue);

  return repeat;
};

function getDirection(
  keyCode: number,
  left: number,
  top: number,
  right: number,
  bottom: number
) {
  switch (keyCode) {
    case left:
      return Direction.Left;
    case top:
      return Direction.Top;
    case right:
      return Direction.Right;
    case bottom:
      return Direction.Bottom;
    default:
      return null;
  }
}

function isKeyboardEvent(event: Event): event is KeyboardEvent {
  return "keyCode" in event;
}

// inspired from https://usehooks.com/useEventListener/
function useKeydownListener(
  handler: Handler,
  element: Window | HTMLElement = window,
  throttleValue: number
) {
  const keydown = "keydown";
  const savedHandler = React.useRef<Handler>();

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const eventListener = throttle((event: Event) => {
      if (savedHandler.current && isKeyboardEvent(event)) {
        savedHandler.current(event);
      }
    }, throttleValue);

    element.addEventListener(keydown, eventListener);

    return () => {
      element.removeEventListener(keydown, eventListener);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
