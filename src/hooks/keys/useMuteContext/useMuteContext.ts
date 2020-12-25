import React from "react";
import { MuteContext } from "contexts/Mute";

export const useMuteContext = () => {
  return React.useContext(MuteContext);
};
