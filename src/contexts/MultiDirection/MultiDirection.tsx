import React from "react";
import {
  Element,
  State,
  MultiDirectionContextInterface,
  Action,
  Props
} from "./types";
import { reducer } from "./reducer";

const noop = () => {};

export const initialState: State = {
  elements: {},
  currentFocusedId: null,
  currentDepth: 0
};

export const MultiDirectionContext = React.createContext<
  MultiDirectionContextInterface
>({ ...initialState, upsert: noop, remove: noop, focus: noop });

export const MultiDirectionProvider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const upsert = (element: Element) =>
    dispatch({ type: Action.UPSERT, element });

  const remove = (id: string) => dispatch({ type: Action.REMOVE, id });

  const focus = (id: string) => dispatch({ type: Action.FOCUS, id });

  return (
    <MultiDirectionContext.Provider value={{ ...state, upsert, remove, focus }}>
      {children}
    </MultiDirectionContext.Provider>
  );
};
