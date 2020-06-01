import React from "react";
import styled from "styled-components";

import { Base } from "components/shared";
import { Props } from "components/shared/types";

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
  ({ children, isFocused, ...restProps }, ref) => {
    return (
      <StyledBase ref={ref} isFocused={isFocused} {...restProps}>
        {children}
      </StyledBase>
    );
  }
);
