import React from "react";
import styled from "styled-components";

import {
  useInsertFocusRemove,
  useCurrentFocusedId,
  useFocus,
  useTabindex,
  useRememberFocusedId
} from "../../../hooks";

import { IsFocusedProps } from "../../shared/types";

const Anchor = styled.a<IsFocusedProps>`
  position: relative;
  color: #03a9f4;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${({ isFocused }) =>
    isFocused &&
    `
      &::before{
        position: absolute;
        top: 50%;
        left: -1.5rem;
        content: '🔗';
        margin-top: -0.5rem;
        font-size: 1rem;
        color: white;
        line-height: 1;
      }
    `}
`;

const id = "footer-anchor";

export function Footer() {
  const currentFocusedId = useCurrentFocusedId();
  const insertFocus = useInsertFocusRemove();
  const focus = useFocus();
  const getTabIndex = useTabindex();
  const lastFocusedIdOutsideFooter = useRememberFocusedId([id]);

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
              right: Infinity
            })
          }
          href="https://github.com/sylvhama/multi-directional-navigation"
          onKeyDown={event => {
            if (lastFocusedIdOutsideFooter && event.keyCode === 38) {
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
