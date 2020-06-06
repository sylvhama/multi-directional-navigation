import { useIsInserted } from "./useIsInserted";

import { renderMultiDirectionHook } from "../../../test-helpers";

describe("useIsInserted", () => {
  it("focuses id", () => {
    const id = "id";

    const { result } = renderMultiDirectionHook(useIsInserted, {
      elements: {
        [id]: {
          id,
          depth: 0,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
      },
    });

    expect(result.current(id)).toBe(true);
    expect(result.current("anotherId")).toBe(false);
  });
});
