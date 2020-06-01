import React from "react";
import { useLocalStorage } from "../../hooks";

type Props = {
  children: React.ReactNode;
};

interface MuteInterface {
  isMuted: boolean;
  setIsMuted: (nextIsMuted: boolean) => void;
}

const defaultState = {
  isMuted: false,
  setIsMuted: () => {},
};

export const MuteContext = React.createContext<MuteInterface>(defaultState);

export const MuteProvider = ({ children }: Props) => {
  const [isMuted, setIsMuted] = useLocalStorage(
    "isMuted",
    defaultState.isMuted
  );

  return (
    <MuteContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </MuteContext.Provider>
  );
};
