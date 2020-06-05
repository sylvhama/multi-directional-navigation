import { renderHook, act } from "@testing-library/react-hooks";
import { useIsMuted } from "./useIsMuted";

import { MuteProvider } from "../../../contexts/Mute";

describe('useIsMuted',  () => {
  it("mutes", () => {
    const { result } = renderHook(useIsMuted, {
      wrapper: MuteProvider,
    });
  
    expect(result.current[0]).toBe(false);
  
    act(() => {
      result.current[1](true);
    });
  
    expect(result.current[0]).toBe(true);
  });
})
