import React from "react";
import {
  Element,
  State,
  Action,
  UpsertAction,
  RemoveAction,
  FocusAction,
  Props
} from "./types";

const initialState: State = {
  elements: {},
  currentFocusedId: null,
  currentDepth: 0
};

interface MultiDirectionContextInterface extends State {
  upsert: (element: Element) => void;
  remove: (id: string) => void;
  focus: (id: string) => void;
}

const noop = () => {};

export const MultiDirectionContext = React.createContext<
  MultiDirectionContextInterface
>({ ...initialState, upsert: noop, remove: noop, focus: noop });

function reducer(
  state: State,
  action: UpsertAction | RemoveAction | FocusAction
): State {
  switch (action.type) {
    case Action.UPSERT:
      const { element } = action;
      return {
        ...state,
        elements: {
          ...state.elements,
          [element.id]: element
        }
      };

    case Action.REMOVE:
      const removedElement = state.elements[action.id];
      if (!removedElement) return state;
      const nextElements = { ...state.elements };
      delete nextElements[action.id];
      return {
        ...state,
        currentFocusedId:
          removedElement.id === state.currentFocusedId
            ? null
            : state.currentFocusedId,
        elements: nextElements
      };

    case Action.FOCUS:
      const focusedElement = state.elements[action.id];
      if (!focusedElement) return state;
      return {
        ...state,
        currentFocusedId: action.id,
        currentDepth: focusedElement.depth
      };

    default:
      throw new Error("Action type is missing or did not match any case.");
  }
}

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
