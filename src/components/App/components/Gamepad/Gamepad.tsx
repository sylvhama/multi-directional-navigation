import React from "react";
import { useGamepadInputs, useFindAndFocus } from "hooks";

interface Props {
  toggleMute: () => void;
}

export function Gamepad({ toggleMute }: Props) {
  const findAndFocus = useFindAndFocus();
  const inputs = useGamepadInputs();

  const { button0, button3, direction } = inputs || {};

  React.useEffect(() => {
    if (button0) {
      const activeElement = document.activeElement as HTMLElement;
      activeElement?.click();
    }
    if (button3) {
      toggleMute();
    }
    if (direction) {
      findAndFocus(direction);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [button0, button3, direction]);

  return null;
}
