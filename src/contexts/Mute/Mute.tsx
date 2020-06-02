import React from "react";
import { useLocalStorage } from "hooks";
import { MuteInterface, Props } from "./types";

const defaultState = {
  isMuted: false,
  setIsMuted: () => {},
};

export const MuteContext = React.createContext<MuteInterface>(defaultState);

export const MuteProvider = ({ children, value }: Props) => {
  const [isMuted, setIsMuted] = useLocalStorage(
    "isMuted",
    defaultState.isMuted
  );

  return (
    <MuteContext.Provider value={value || { isMuted, setIsMuted }}>
      {children}
    </MuteContext.Provider>
  );
};
