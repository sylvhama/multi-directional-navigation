import React from "react";
import { Keys, Props } from "./types";

export const defaultState = {
  keys: {
    up: "ArrowUp",
    right: "ArrowRight",
    down: "ArrowDown",
    left: "ArrowLeft",
    interact: "Enter",
    mute: "m",
    leftSkip: "Home",
    rightSkip: "End",
  },
};

export const KeysContext = React.createContext<{ keys: Keys }>(defaultState);

const urlParams = new URLSearchParams(window.location.search);
const keys = {
  up: urlParams.get("up") || defaultState.keys.up,
  right: urlParams.get("right") || defaultState.keys.right,
  down: urlParams.get("down") || defaultState.keys.down,
  left: urlParams.get("left") || defaultState.keys.left,
  interact: urlParams.get("interact") || defaultState.keys.interact,
  mute: urlParams.get("mute") || defaultState.keys.mute,
  leftSkip: urlParams.get("leftSkip") || defaultState.keys.leftSkip,
  rightSkip: urlParams.get("rightSkip") || defaultState.keys.rightSkip,
};

export const KeysProvider = ({ children }: Props) => {
  return (
    <KeysContext.Provider value={{ keys }}>{children}</KeysContext.Provider>
  );
};
