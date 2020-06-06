import { useFocus } from "./useFocus";

import { renderMultiDirectionHook } from "../../../test-helpers";

describe("useFocus", () => {
  it("focuses id", () => {
    const focusSpy = jest.fn();
    const nextId = "nextId";

    const { result } = renderMultiDirectionHook(useFocus, {
      focus: focusSpy,
    });

    result.current(nextId);

    expect(focusSpy).toHaveBeenCalledWith(nextId);
  });
});
