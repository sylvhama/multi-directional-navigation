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
