import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { useIsMuted, useKeys } from "hooks";
import { Kbd } from "components/shared";

const Legend = styled.ul`
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 1rem;
  justify-content: center;
`;

export function Header() {
  const keys = useKeys();
  const [isMuted] = useIsMuted();
  return (
    <header>
      <h1>Multi-directional Navigation</h1>

      <Legend>
        <li data-testid="navigate">
          <Kbd>{keyToDisplay(keys.left)}</Kbd>{" "}
          <Kbd>{keyToDisplay(keys.up)}</Kbd>{" "}
          <Kbd>{keyToDisplay(keys.right)}</Kbd>{" "}
          <Kbd>{keyToDisplay(keys.down)}</Kbd> navigate
        </li>
        <li data-testid="interact">
          <Kbd>{keyToDisplay(keys.interact)}</Kbd> interact
        </li>
        <li data-testid="mute">
          <Kbd>{keyToDisplay(keys.mute)}</Kbd> {isMuted ? "unmute" : "mute"}
        </li>
        <Route
          path="/horizontal-list"
          render={() => (
            <li data-testid="skip">
              <Kbd>{keyToDisplay(keys.leftSkip)}</Kbd> /{" "}
              <Kbd>{keyToDisplay(keys.rightSkip)}</Kbd> fast skip
            </li>
          )}
        />
      </Legend>

      <Switch>
        <Route path="/modal" />
        <Route
          render={() => (
            <p data-testid="tips">
              <span role="img" aria-label="Good to know:">
                💡
              </span>{" "}
              Check the console logs!
            </p>
          )}
        />
      </Switch>
    </header>
  );
}

type Symbols = {
  [key: string]: string;
};

function keyToDisplay(key: string) {
  const symbols: Symbols = {
    ArrowUp: "↑",
    ArrowRight: "→",
    ArrowDown: "↓",
    ArrowLeft: "←",
    Enter: "↵",
    Home: "home",
    End: "end",
  };

  return symbols[key] || key;
}
