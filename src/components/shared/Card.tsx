import React from "react";
import styled from "styled-components";

import { Base } from "./Base";
import { Props } from "./types";

const StyledBase = styled(Base)`
  position: relative;
  transform: scale(0.7);
  transform-origin: center;
  transition: transform ease 250ms;

  &:last-child:after {
    content: "";
    position: absolute;
    right: -100%;
    width: 100%;
    height: 100%;
  }

  ${({ isFocused }) =>
    isFocused &&
    `
      transform: scale(1);
    `}
`;

export const Card = React.forwardRef<HTMLDivElement, Props>(
  ({ children, isFocused, isPreviousFocus, ...restProps }, ref) => {
    return (
      <StyledBase
        ref={ref}
        tabIndex={isFocused ? 0 : isPreviousFocus ? -1 : undefined}
        isFocused={isFocused}
        {...restProps}
      >
        {children}
      </StyledBase>
    );
  }
);
