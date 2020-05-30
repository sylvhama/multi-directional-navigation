import {
  State,
  Action,
  UpsertAction,
  RemoveAction,
  FocusAction
} from "../types";

export function reducer(
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
