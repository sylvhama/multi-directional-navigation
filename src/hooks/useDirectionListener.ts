import React from "react";

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
  { left = 37, top = 38, right = 39, bottom = 40 },
  element?: Window | HTMLElement
) => {
  const { elements, currentFocusedId } = useMultiDirectionContext();
  const focus = useFocus();

  const handler: Handler = React.useCallback(
    event => {
      const direction = getDirection(event.keyCode, left, top, right, bottom);

      if (!direction) {
        return;
      }

      event.preventDefault();

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

  useKeydownListener(handler, element);
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
  element: Window | HTMLElement = window
) {
  const eventName = "keydown";
  const savedHandler = React.useRef<Handler>();

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const eventListener = (event: Event) => {
      console.log(666);
      if (savedHandler.current && isKeyboardEvent(event)) {
        savedHandler.current(event);
      }
    };

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
