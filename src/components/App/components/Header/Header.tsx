import React from "react";
import { Route, Switch } from "react-router-dom";

import { useIsMuted } from "hooks";

export function Header() {
  const [isMuted] = useIsMuted();
  return (
    <header>
      <h1>Multi-directional Navigation</h1>
      <p>Focus an element based on a direction input: ⇦ ⇧ ⇨ ⇩</p>
      <p data-testid="mute">
        Press <em>M</em> to {isMuted ? "unmute" : "mute"} the sound.
      </p>
      <Switch>
        <Route path="/modal" />
        <Route
          render={() => (
            <p>Check the console logs to see focus and blur events.</p>
          )}
        />
      </Switch>
      <Route
        path="/horizontal-list"
        render={() => (
          <p data-testid="skip">
            Press <em>home</em> or <em>end</em> for a fast skip.
          </p>
        )}
      />
    </header>
  );
}
