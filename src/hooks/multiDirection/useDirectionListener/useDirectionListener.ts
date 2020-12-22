import React from "react";

import { findClosestNeighborId } from "utils/findClosestNeighborId";
import { Handler } from "hooks/general/useKeyboardListener/types";
import { useKeyboardListener, useMultiDirectionContext, useFocus } from "hooks";

export enum Direction {
  Left = "Left",
  Up = "Up",
  Right = "Right",
  Down = "Down",
}

export function useDirectionListener(
  keys = {
    left: "ArrowLeft",
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
  },
  throttleValue = 150,
  element?: Window | HTMLElement,
  findDestination = findClosestNeighborId
) {
  const [repeat, setRepeat] = React.useState(false);
  const { elements, currentFocusedId } = useMultiDirectionContext();
  const focus = useFocus();

  const { left, up, right, down } = keys;

  const handler: Handler = React.useCallback(
    (event) => {
      const direction = getDirection(event.key, left, up, right, down);

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
      up,
      right,
      down,
      focus,
      elements,
      currentFocusedId,
      findDestination,
    ]
  );

  useKeyboardListener("keydown", handler, element, throttleValue);

  return repeat;
}

function getDirection(
  key: KeyboardEvent["key"],
  left: KeyboardEvent["key"],
  up: KeyboardEvent["key"],
  right: KeyboardEvent["key"],
  down: KeyboardEvent["key"]
) {
  switch (key) {
    case left:
      return Direction.Left;
    case up:
      return Direction.Up;
    case right:
      return Direction.Right;
    case down:
      return Direction.Down;
    default:
      return null;
  }
}
