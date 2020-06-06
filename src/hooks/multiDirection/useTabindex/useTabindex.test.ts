import { useTabindex } from "./useTabindex";

import { renderMultiDirectionHook } from "../../../test-helpers";

jest.mock("../../general", () => {
  return {
    ...require.requireActual("../../general"),
    usePrevious: jest.fn(),
  };
});

describe("useTabindex", () => {
  it("returns 0 when id is focused", () => {
    const id = "id";

    const { result } = renderMultiDirectionHook(useTabindex, {
      currentFocusedId: id,
    });

    expect(result.current(id)).toBe(0);
  });

  it("returns -1 when id was previously focused", () => {
    const id = "id";
    mockUsePrevious(id);

    const { result } = renderMultiDirectionHook(useTabindex);

    expect(result.current(id)).toBe(-1);
  });

  it("returns undefined when id is not focused and was not previously focused", () => {
    const id = "id";
    mockUsePrevious("not-id");

    const { result } = renderMultiDirectionHook(useTabindex, {
      currentFocusedId: "still-not-id",
    });

    expect(result.current(id)).toBeUndefined();
  });
});

function mockUsePrevious(returnValue: string) {
  const usePrevious: jest.Mock = jest.requireMock("../../general")
    .usePrevious;

  usePrevious.mockReturnValue(returnValue);
}
