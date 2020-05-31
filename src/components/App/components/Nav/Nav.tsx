import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  useInsertFocusRemove,
  useCurrentFocusedId,
  useFocus,
  useTabindex,
  useRememberFocusedId
} from "../../../../hooks";

import { IsFocusedProps } from "../../../shared/types";

const List = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, auto);
  text-align: center;
`;

const StyledNavLink = styled(NavLink)<IsFocusedProps>`
  position: relative;
  text-decoration: none;
  color: #aaa;
  outline: 0;

  &.active {
    color: #f1f1f1;
    font-weight: bold;
  }

  &.is-focused::before {
    position: absolute;
    top: 50%;
    left: -2rem;
    content: "☞";
    margin-top: -1rem;
    font-size: 2rem;
    color: white;
    line-height: 1;
  }
`;

enum IDs {
  Nav = "Nav",
  VerticalList = "VerticalList",
  HorizontalList = "HorizontalList",
  Modal = "Modal"
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
      ref={nav =>
        insertFocus(IDs.Nav, false, nav, {
          top: 0,
          bottom: 0,
          left: -Infinity,
          right: Infinity
        })
      }
      onFocus={() => {
        if (currentFocusedId && currentFocusedId === IDs.Nav) {
          focus(IDs.VerticalList);
        }
      }}
      onKeyDown={event => {
        if (lastFocusedIdOutsideNav && event.keyCode === 40) {
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
