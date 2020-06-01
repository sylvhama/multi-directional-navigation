import { initialState } from "../MultiDirection";
import { Action } from "../types";
import { reducer } from "./reducer";

describe("MultiDirection reducer", () => {
  it("throws an error if action is invalid", () => {
    function invalidAction() {
      reducer(initialState, {} as any);
    }
    expect(invalidAction).toThrow();
  });

  it("inserts element", () => {
    expect(
      reducer(initialState, { type: Action.UPSERT, element: createElement() })
    ).toMatchObject({
      currentDepth: 0,
      currentFocusedId: null,
      elements: {
        element: {
          bottom: 0,
          depth: 0,
          id: "element",
          left: 0,
          right: 0,
          top: 0,
        },
      },
    });
  });

  it("updates element", () => {
    const elements = {
      element: {
        bottom: 0,
        depth: 0,
        id: "element",
        left: 0,
        right: 0,
        top: 0,
      },
    };

    expect(
      reducer(
        { ...initialState, elements },
        {
          type: Action.UPSERT,
          element: {
            id: "element",
            bottom: 1,
            depth: 1,
            left: 1,
            right: 1,
            top: 1,
          },
        }
      )
    ).toMatchObject({
      currentDepth: 0,
      currentFocusedId: null,
      elements: {
        element: {
          bottom: 1,
          depth: 1,
          id: "element",
          left: 1,
          right: 1,
          top: 1,
        },
      },
    });
  });

  it("removes focused element", () => {
    const elements = {
      element: {
        bottom: 0,
        depth: 0,
        id: "element",
        left: 0,
        right: 0,
        top: 0,
      },
    };

    expect(
      reducer(
        { ...initialState, currentFocusedId: "element", elements },
        {
          type: Action.REMOVE,
          id: "element",
        }
      )
    ).toMatchObject({
      currentDepth: 0,
      currentFocusedId: null,
      elements: {},
    });
  });

  it("removes not focused element", () => {
    const elements = {
      element: {
        bottom: 0,
        depth: 0,
        id: "element",
        left: 0,
        right: 0,
        top: 0,
      },
    };

    expect(
      reducer(
        { ...initialState, currentFocusedId: "other-element", elements },
        {
          type: Action.REMOVE,
          id: "element",
        }
      )
    ).toMatchObject({
      currentDepth: 0,
      currentFocusedId: "other-element",
      elements: {},
    });
  });

  it("focuses element", () => {
    const elements = {
      element: {
        bottom: 0,
        depth: 1,
        id: "element",
        left: 0,
        right: 0,
        top: 0,
      },
    };

    expect(
      reducer(
        { ...initialState, elements },
        {
          type: Action.FOCUS,
          id: "element",
        }
      )
    ).toMatchObject({
      currentDepth: 1,
      currentFocusedId: "element",
      elements,
    });
  });
});

function createElement({
  id = "element",
  depth = 0,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
} = {}) {
  return {
    id,
    depth,
    left,
    right,
    top,
    bottom,
  };
}
