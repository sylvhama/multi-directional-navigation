import { useUpsert } from "./useUpsert";

import { renderMultiDirectionHook } from "../../../test-helpers";

describe("useUpsert", () => {
  const elementWithoutDepth = {
    id: "id",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  };

  it("upserts element with depth", () => {
    const upsertSpy = jest.fn();
    const elementWithDepth = { ...elementWithoutDepth, depth: 1 };

    const { result } = renderMultiDirectionHook(useUpsert, {
      upsert: upsertSpy,
    });

    result.current(elementWithDepth);

    expect(upsertSpy).toHaveBeenCalledWith(elementWithDepth);
  });

  it("upserts element without depth", () => {
    const upsertSpy = jest.fn();

    const { result } = renderMultiDirectionHook(useUpsert, {
      upsert: upsertSpy,
    });

    result.current(elementWithoutDepth);

    expect(upsertSpy).toHaveBeenCalledWith({
      ...elementWithoutDepth,
      depth: 0,
    });
  });
});
