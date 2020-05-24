import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, auto);
  text-align: center;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #aaa;
  &.active {
    color: #f1f1f1;
    font-weight: bold;
  }
`;

export function Nav() {
  return (
    <nav>
      <List>
        <li>
          <StyledNavLink exact to="/">
            Vertical list
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink exact to="/horizontal-list">
            Horizontal list
          </StyledNavLink>
        </li>
      </List>
    </nav>
  );
}
