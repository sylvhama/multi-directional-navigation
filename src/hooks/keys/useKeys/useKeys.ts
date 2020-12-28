import React from "react";
import { Keys } from "contexts/Keys/types";
import { KeysContext } from "contexts/Keys";

export function useKeys(): Keys {
  return React.useContext(KeysContext);
}
