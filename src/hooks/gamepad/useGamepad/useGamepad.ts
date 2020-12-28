import React from "react";
import { useInterval } from "hooks";
import { getFirstGamepad } from "utils/getFirstGamepad";

export function useGamepad() {
  const [gamepad, setGamepad] = React.useState<Gamepad | null>(null);

  useInterval(() => {
    const nextGamepad = getFirstGamepad();

    if (!gamepad && nextGamepad) setGamepad(nextGamepad);

    if (nextGamepad && nextGamepad.id !== gamepad?.id) setGamepad(nextGamepad);

    if (!nextGamepad && gamepad) setGamepad(null);
  }, 500);

  return gamepad;
}
