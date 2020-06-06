import { useRememberFocusedId } from "./useRememberFocusedId";

import { renderMultiDirectionHook } from "../../../test-helpers";

describe("useRememberFocusedId", () => {
  it("remembers id", () => {
    const id = "id";

    const { result, rerender } = renderMultiDirectionHook(useRememberFocusedId, {
      currentFocusedId: id
    });

    expect(result.current).toBe(id);
  });

  it("ignores id", () => {
    const id = "id";

    const { result } = renderMultiDirectionHook(() => useRememberFocusedId([id]), {
      currentFocusedId: id
    });

    expect(result.current).toBe('');
  });
});
