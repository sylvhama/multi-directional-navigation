import React from "react";

import { useMultiDirectionContext } from "../contexts/useMultiDirectionContext";
import { findClosestNeighborId } from "../utils/findClosestNeighborId";
import { useFocus } from "./useFocus";
import { useKeyboardListener, Handler } from "./useKeyboardListener";

export enum Direction {
  Left = "Left",
  Top = "Top",
  Right = "Right",
  Bottom = "Bottom"
}

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

  useKeyboardListener("keydown", handler, element, throttleValue);

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
