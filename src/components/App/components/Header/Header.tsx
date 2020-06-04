import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { useIsMuted } from "hooks";
import { Kbd } from "components/shared";

const Legend = styled.ul`
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 1rem;
  justify-content: center;
`;

export function Header() {
  const [isMuted] = useIsMuted();
  return (
    <header>
      <h1>Multi-directional Navigation</h1>
      
      <Legend>
        <li data-testid="navigate">
          <Kbd>←</Kbd> <Kbd>↑</Kbd> <Kbd>→</Kbd> <Kbd>↓</Kbd> navigate
        </li>
        <li data-testid="interact">
          <Kbd>↵</Kbd> interact
        </li>
        <li data-testid="mute">
          <Kbd>M</Kbd> {isMuted ? "unmute" : "mute"}
        </li>
        <Route
          path="/horizontal-list"
          render={() => (
            <li data-testid="skip">
              <Kbd>home</Kbd> / <Kbd>end</Kbd> fast skip
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
