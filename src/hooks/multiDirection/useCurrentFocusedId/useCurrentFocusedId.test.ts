import { useCurrentFocusedId } from "./useCurrentFocusedId";

import { renderMultiDirectionHook } from "../../../test-helpers";

describe("useCurrentFocusedId", () => {
  it("returns default currentFocusedId", () => {
    const { result } = renderMultiDirectionHook(useCurrentFocusedId);

    expect(result.current).toBeNull();
  });

  it("returns currentFocusedId", () => {
    const currentFocusedId = "currentFocusedId";
    const { result } = renderMultiDirectionHook(useCurrentFocusedId, {
      currentFocusedId,
    });

    expect(result.current).toBe(currentFocusedId);
  });
});
