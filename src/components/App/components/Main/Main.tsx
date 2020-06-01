import React from "react";
import { Switch, Route } from "react-router-dom";

import { VerticalList } from "components/pages/VerticalList";
import { HorizontalList } from "components/pages/HorizontalList";
import { Modal } from "components/pages/Modal";

interface Props {
  isKeyPressed: boolean;
}

export function Main({ isKeyPressed }: Props) {
  return (
    <main style={{ overflow: "hidden" }}>
      <Switch>
        <Route path="/horizontal-list">
          <HorizontalList isKeyPressed={isKeyPressed} />
        </Route>
        <Route path="/modal">
          <Modal />
        </Route>
        <Route>
          <VerticalList isKeyPressed={isKeyPressed} />
        </Route>
      </Switch>
    </main>
  );
}
