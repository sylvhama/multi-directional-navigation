import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { Loading } from "./components";

const VerticalList = React.lazy(() => import("components/pages/VerticalList"));
const HorizontalList = React.lazy(() =>
  import("components/pages/HorizontalList")
);
const Modal = React.lazy(() => import("components/pages/Modal"));

interface Props {
  isKeyPressed: boolean;
}

export function Main({ isKeyPressed }: Props) {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}
