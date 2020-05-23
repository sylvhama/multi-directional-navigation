import React from "react";
import { Switch, Route } from "react-router-dom";

import { List } from "../../pages/List";

import { MultiDirectionProvider } from "../../../contexts/MultiDirection";

export function Main() {
  return (
    <main style={{ overflow: "hidden" }}>
      <MultiDirectionProvider>
        <Switch>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </MultiDirectionProvider>
    </main>
  );
}
