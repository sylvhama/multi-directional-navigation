import React from "react";
import { Switch, Route } from "react-router-dom";

import { VerticalList } from "../../pages/VerticalList";
import { HorizontalList } from "../../pages/HorizontalList";

import { useDirectionListener } from "../../../hooks";

export function Main() {
  const isKeyPressed = useDirectionListener();

  return (
    <main style={{ overflow: "hidden" }}>
      <Switch>
        <Route path="/horizontal-list">
          <HorizontalList isKeyPressed={isKeyPressed} />
        </Route>
        <Route>
          <VerticalList isKeyPressed={isKeyPressed} />
        </Route>
      </Switch>
    </main>
  );
}
