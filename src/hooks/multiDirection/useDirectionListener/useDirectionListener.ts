import React from "react";

import { findClosestNeighborId } from "../../../utils/findClosestNeighborId";
import {
  useKeyboardListener,
  Handler
} from "../../general/useKeyboardListener";
import { useMultiDirectionContext, useFocus } from "../";

export enum Direction {
  Left = "Left",
  Top = "Top",
  Right = "Right",
  Bottom = "Bottom"
}

export function useDirectionListener(
  keys = { left: 37, top: 38, right: 39, bottom: 40 },
  throttleValue = 150,
  element?: Window | HTMLElement,
  findDestination = findClosestNeighborId
) {
  const [repeat, setRepeat] = React.useState(false);
  const { elements, currentFocusedId } = useMultiDirectionContext();
  const focus = useFocus();

  const { left, top, right, bottom } = keys;

  const handler: Handler = React.useCallback(
    event => {
      const direction = getDirection(event.keyCode, left, top, right, bottom);

      if (!direction) {
        return setRepeat(false);
      }

      event.preventDefault();

      setRepeat(event.repeat);

      const nextFocusId = findDestination(
        Object.values(elements),
        direction,
        elements[currentFocusedId || ""]
      );

      if (nextFocusId) {
        focus(nextFocusId);
      }
    },
    [
      left,
      top,
      right,
      bottom,
      focus,
      elements,
      currentFocusedId,
      findDestination
    ]
  );

  useKeyboardListener("keydown", handler, element, throttleValue);

  return repeat;
}

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