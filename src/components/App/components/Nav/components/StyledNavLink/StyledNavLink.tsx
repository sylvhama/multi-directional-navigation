import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { IsFocusedProps } from "../../../../../shared/types";

export const StyledNavLink = styled(NavLink)<IsFocusedProps>`
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
