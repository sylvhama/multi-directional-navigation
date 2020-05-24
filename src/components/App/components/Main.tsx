import React from "react";
import { Switch, Route } from "react-router-dom";

import { VerticalList } from "../../pages/VerticalList";
import { HorizontalList } from "../../pages/HorizontalList";

export function Main() {
  return (
    <main style={{ overflow: "hidden" }}>
      <Switch>
        <Route path="/horizontal-list">
          <HorizontalList />
        </Route>
        <Route>
          <VerticalList />
        </Route>
      </Switch>
    </main>
  );
}
