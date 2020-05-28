import React from "react";
import { Route, Switch } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>Multi-directional Navigation</h1>
      <p>Focus an element based on a direction input: ⇦ ⇧ ⇨ ⇩</p>
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
          <p>
            Press <em>home</em> or <em>end</em> for a fast skip.
          </p>
        )}
      />
    </header>
  );
}
