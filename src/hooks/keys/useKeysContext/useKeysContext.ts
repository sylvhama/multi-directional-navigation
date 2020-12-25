import React from "react";
import { KeysContext } from "contexts/Keys";

export const useKeysContext = () => {
  return React.useContext(KeysContext);
};
