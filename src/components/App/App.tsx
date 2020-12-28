import React from "react";

import {
  Layout,
  Header,
  Nav,
  Main,
  Footer,
  Gamepad,
  GlobalStyle,
} from "./components";
import {
  useKeys,
  useDirectionListener,
  useCurrentFocusedId,
  usePrevious,
  useSound,
  useIsMuted,
  useKeyboardListener,
} from "hooks";

const moveSound = require("sounds/move.mp3");

export function App() {
  const keys = useKeys();
  const isKeyPressed = useDirectionListener(keys);
  const currentFocusedId = useCurrentFocusedId();
  const previousFocusedId = usePrevious(currentFocusedId);
  const [playMoveSound] = useSound(moveSound.default);
  const [isMuted, setIsMuted] = useIsMuted();

  const toggleMute = () => setIsMuted(!isMuted);

  useKeyboardListener("keyup", ({ key }) => {
    switch (key) {
      case keys.mute:
        return toggleMute();
    }
  });

  React.useEffect(() => {
    if (previousFocusedId && currentFocusedId !== previousFocusedId) {
      playMoveSound();
    }
  }, [playMoveSound, currentFocusedId, previousFocusedId]);

  return (
    <>
      <Layout>
        <Header />
        <Nav />
        <Main isKeyPressed={isKeyPressed} />
        <Footer />
      </Layout>
      <Gamepad toggleMute={toggleMute} />
      <GlobalStyle />
    </>
  );
}
