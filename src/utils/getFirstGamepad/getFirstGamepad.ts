export function getFirstGamepad() {
  const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
  if (gamepads.length > 0 && gamepads[0]) {
    return gamepads[0];
  }
  return null;
}
