import { renderHook } from "@testing-library/react-hooks";
import { usePrevious } from "./usePrevious";

describe("usePrevious", () => {
  it("returns previous value", () => {
    const firstValue = 1;

    const { result, rerender } = renderHook(usePrevious, {
      initialProps: firstValue,
    });

    expect(result.current).toBeUndefined();

    rerender(2);

    expect(result.current).toBe(firstValue);
  });
});
