import React from "react";

import {
  useInsertFocusRemove,
  useCurrentFocusedId,
  useFocus,
  useTabindex,
  useRememberFocusedId,
  useKeys,
} from "hooks";

import { Anchor } from "./components";

const id = "footer-anchor";

export function Footer() {
  const currentFocusedId = useCurrentFocusedId();
  const insertFocus = useInsertFocusRemove();
  const focus = useFocus();
  const getTabIndex = useTabindex();
  const lastFocusedIdOutsideFooter = useRememberFocusedId([id]);
  const keys = useKeys();

  return (
    <footer>
      <p style={{ paddingBottom: "1.5rem" }}>
        <Anchor
          isFocused={currentFocusedId === id}
          tabIndex={getTabIndex(id)}
          ref={(navLink: HTMLElement | null) =>
            insertFocus(id, false, navLink, {
              top: Infinity,
              bottom: Infinity,
              left: -Infinity,
              right: Infinity,
            })
          }
          href="https://github.com/sylvhama/multi-directional-navigation"
          onKeyDown={(event) => {
            if (lastFocusedIdOutsideFooter && event.key === keys.up) {
              event.stopPropagation();
              focus(lastFocusedIdOutsideFooter);
            }
          }}
        >
          Source code
        </Anchor>
      </p>
    </footer>
  );
}
