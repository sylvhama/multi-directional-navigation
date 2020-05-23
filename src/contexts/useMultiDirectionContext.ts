import React from "react";
import { MultiDirectionContext } from "../contexts/MultiDirection";

export const useMultiDirectionContext = () => {
  return React.useContext(MultiDirectionContext);
};
