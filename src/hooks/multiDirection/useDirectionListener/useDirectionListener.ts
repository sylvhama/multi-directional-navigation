import React from "react";

import { Handler } from "hooks/general/useKeyboardListener/types";
import { useKeyboardListener, useFindAndFocus } from "hooks";
import { Direction } from "contexts/MultiDirection/types";
import { DirectionKeys } from "contexts/Keys/types";

export function useDirectionListener(
  { left, up, right, down }: DirectionKeys,
  throttleValue = 150,
  element?: Window | HTMLElement
) {
  const [repeat, setRepeat] = React.useState(false);
  const findAndFocus = useFindAndFocus();

  const handler: Handler = React.useCallback(
    (event) => {
      const direction = getDirection(event.key, left, up, right, down);

      if (!direction) {
        return setRepeat(false);
      }

      event.preventDefault();

      setRepeat(event.repeat);

      findAndFocus(direction);
    },
    [left, up, right, down, findAndFocus]
  );

  useKeyboardListener("keydown", handler, element, throttleValue);

  return repeat;
}

function getDirection(
  key: KeyboardEvent["key"],
  left: string,
  up: string,
  right: string,
  down: string
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
