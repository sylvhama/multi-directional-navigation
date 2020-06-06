import { useRemove } from "./useRemove";

import { renderMultiDirectionHook } from "../../../test-helpers";

describe("useRemove", () => {
  it("removes id", () => {
    const removeSpy = jest.fn();
    const idToRemove = "idToRemove";

    const { result } = renderMultiDirectionHook(useRemove, {
      remove: removeSpy,
    });

    result.current(idToRemove);

    expect(removeSpy).toHaveBeenCalledWith(idToRemove);
  });
});
