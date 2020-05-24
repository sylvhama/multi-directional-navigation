import React from "react";
import { Switch, Route } from "react-router-dom";

import { VerticalList } from "../../pages/VerticalList";
import { HorizontalList } from "../../pages/HorizontalList";

import { MultiDirectionProvider } from "../../../contexts/MultiDirection";

export function Main() {
  return (
    <main style={{ overflow: "hidden" }}>
      <MultiDirectionProvider>
        <Switch>
          <Route path="/horizontal-list">
            <HorizontalList />
          </Route>
          <Route>
            <VerticalList />
          </Route>
        </Switch>
      </MultiDirectionProvider>
    </main>
  );
}
