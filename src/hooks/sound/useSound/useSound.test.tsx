import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import useSoundLibMock from "use-sound";
import { useSound } from "./useSound";

import { MuteProvider } from "../../../contexts/Mute";

jest.mock("use-sound", () => jest.fn());

const sound = "sound.mp3";

describe("useSound", () => {
  beforeEach(() => {
    (useSoundLibMock as jest.Mock).mockReset();
  });

  it("plays sound with sound enabled", () => {
    renderHook(() => useSound(sound), {
      wrapper: MuteProvider,
    });

    expect(useSoundLibMock).toHaveBeenCalledWith("sound.mp3", {
      soundEnabled: true,
    });
  });

  it("plays sound with sound enabled", () => {
    renderHook(() => useSound(sound), {
      wrapper: ({ children }) => (
        <MuteProvider value={{ isMuted: true, setIsMuted: () => {} }}>
          {children}
        </MuteProvider>
      ),
    });

    expect(useSoundLibMock).toHaveBeenCalledWith("sound.mp3", {
      soundEnabled: false,
    });
  });
});
