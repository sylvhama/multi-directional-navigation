import React from "react";
import { Direction } from "contexts/MultiDirection/types";
import { useAnimationFrame } from "hooks";
import { getFirstGamepad } from "utils/getFirstGamepad";

interface Inputs {
  direction: Direction | null;
  button0: boolean;
  button1: boolean;
  button2: boolean;
  button3: boolean;
  button4: boolean;
  button5: boolean;
}

/*
  Inspiration:
    - https://www.voorhoede.nl/en/blog/navigating-the-web-with-a-gamepad/
    - https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API
    - https://gamepad-tester.com/
*/
export function useGamepadInputs() {
  const [inputs, setInputs] = React.useState<Inputs | null>(null);

  useAnimationFrame(() => {
    const gamepad = getFirstGamepad();

    if (!gamepad && inputs) return setInputs(null);

    if (!gamepad || gamepad.buttons.length < 16) return;

    const buttons = gamepad.buttons;

    setInputs({
      direction: getDirection(
        gamepad.axes,
        buttons[12].pressed,
        buttons[13].pressed,
        buttons[14].pressed,
        buttons[15].pressed
      ),
      button0: buttons[0].pressed,
      button1: buttons[1].pressed,
      button2: buttons[2].pressed,
      button3: buttons[3].pressed,
      button4: buttons[4].pressed,
      button5: buttons[5].pressed,
    });
  });

  return inputs;
}

function getDirection(
  [axis0, axis1]: Gamepad["axes"],
  button12: boolean,
  button13: boolean,
  button14: boolean,
  button15: boolean
) {
  if (button12 || axis1 < -0.7) return Direction.Up;
  if (button13 || axis1 > 0.7) return Direction.Down;
  if (button14 || axis0 < -0.7) return Direction.Left;
  if (button15 || axis0 > 0.7) return Direction.Right;

  return null;
}
