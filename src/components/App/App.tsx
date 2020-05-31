import React from "react";

import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./components/GlobalStyle";
import {
  useDirectionListener,
  useCurrentFocusedId,
  usePrevious,
  useSound,
  useIsMuted,
  useKeyboardListener
} from "../../hooks";

import moveSound from "../../sounds/move.mp3";

export function App() {
  const isKeyPressed = useDirectionListener();
  const currentFocusedId = useCurrentFocusedId();
  const previousFocusedId = usePrevious(currentFocusedId);
  const [playMoveSound] = useSound(moveSound);
  const [isMuted, setIsMuted] = useIsMuted();

  useKeyboardListener("keyup", ({ keyCode }) => {
    switch (keyCode) {
      case 77: // M
        return setIsMuted(!isMuted);
    }
  });

  React.useEffect(() => {
    if (previousFocusedId && currentFocusedId !== previousFocusedId) {
      playMoveSound();
    }
  }, [currentFocusedId, previousFocusedId]);

  return (
    <>
      <Layout>
        <Header />
        <Nav />
        <Main isKeyPressed={isKeyPressed} />
        <Footer />
      </Layout>
      <GlobalStyle />
    </>
  );
}
