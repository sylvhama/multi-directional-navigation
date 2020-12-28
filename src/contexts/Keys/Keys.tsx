import React from "react";
import { Keys, Props } from "./types";

export const defaultState = {
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  left: "ArrowLeft",
  interact: "Enter",
  mute: "m",
  leftSkip: "Home",
  rightSkip: "End",
};

export const KeysContext = React.createContext<Keys>(defaultState);

const urlParams = new URLSearchParams(window.location.search);
const keys = {
  up: urlParams.get("up") || defaultState.up,
  right: urlParams.get("right") || defaultState.right,
  down: urlParams.get("down") || defaultState.down,
  left: urlParams.get("left") || defaultState.left,
  interact: urlParams.get("interact") || defaultState.interact,
  mute: urlParams.get("mute") || defaultState.mute,
  leftSkip: urlParams.get("leftSkip") || defaultState.leftSkip,
  rightSkip: urlParams.get("rightSkip") || defaultState.rightSkip,
};

export const KeysProvider = ({ children }: Props) => {
  return <KeysContext.Provider value={keys}>{children}</KeysContext.Provider>;
};
