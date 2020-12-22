import React from "react";

import {
  useInsertFocusRemove,
  useCurrentFocusedId,
  useFocus,
  useTabindex,
  useRememberFocusedId,
} from "hooks";

import { List, StyledNavLink } from "./components";

enum IDs {
  Nav = "Nav",
  VerticalList = "VerticalList",
  HorizontalList = "HorizontalList",
  Modal = "Modal",
}

export function Nav() {
  const currentFocusedId = useCurrentFocusedId();
  const insertFocus = useInsertFocusRemove();
  const focus = useFocus();
  const getTabIndex = useTabindex();
  const lastFocusedIdOutsideNav = useRememberFocusedId(Object.keys(IDs));

  return (
    <nav
      tabIndex={getTabIndex(IDs.Nav)}
      ref={(nav) =>
        insertFocus(IDs.Nav, false, nav, {
          top: 0,
          bottom: 0,
          left: -Infinity,
          right: Infinity,
        })
      }
      onFocus={() => {
        if (currentFocusedId && currentFocusedId === IDs.Nav) {
          focus(IDs.VerticalList);
        }
      }}
      onKeyDown={(event) => {
        if (lastFocusedIdOutsideNav && event.key === "ArrowDown") {
          event.stopPropagation();
          focus(lastFocusedIdOutsideNav);
        }
      }}
    >
      <List>
        <li>
          <StyledNavLink
            exact
            to="/"
            className={isFocusedClassName(
              currentFocusedId === IDs.VerticalList
            )}
            tabIndex={getTabIndex(IDs.VerticalList)}
            ref={(navLink: HTMLElement | null) =>
              insertFocus(IDs.VerticalList, false, navLink, undefined, -1)
            }
          >
            Vertical list
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            exact
            to="/horizontal-list"
            className={isFocusedClassName(
              currentFocusedId === IDs.HorizontalList
            )}
            tabIndex={getTabIndex(IDs.HorizontalList)}
            ref={(navLink: HTMLElement | null) =>
              insertFocus(IDs.HorizontalList, false, navLink, undefined, -1)
            }
          >
            Horizontal list
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            exact
            to="/modal"
            className={isFocusedClassName(currentFocusedId === IDs.Modal)}
            tabIndex={getTabIndex(IDs.Modal)}
            ref={(navLink: HTMLElement | null) =>
              insertFocus(IDs.Modal, false, navLink, undefined, -1)
            }
          >
            Modal
          </StyledNavLink>
        </li>
      </List>
    </nav>
  );
}

// We are doing this because of https://github.com/styled-components/styled-components/issues/135
function isFocusedClassName(isFocused: boolean) {
  return isFocused ? "is-focused" : "";
}
