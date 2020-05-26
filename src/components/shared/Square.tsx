import React from "react";
import styled from "styled-components";

import { Base } from "./Base";
import { Props } from "./types";

const StyledBase = styled(Base)`
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const Square = React.forwardRef<HTMLDivElement, Props>(
  ({ children, isFocused, ...restProps }, ref) => {
    return (
      <StyledBase ref={ref} isFocused={isFocused} {...restProps}>
        {children}
      </StyledBase>
    );
  }
);
