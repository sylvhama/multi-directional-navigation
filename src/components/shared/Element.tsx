import React from "react";
import styled from "styled-components";

interface IsFocusedProps {
  readonly isFocused: boolean;
}

interface Props extends IsFocusedProps, React.HTMLAttributes<HTMLDivElement> {
  readonly children: React.ReactNode;
}

const Article = styled.article<IsFocusedProps>`
  position: relative;
  border: 5px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  background-color: #dfe3e8;
  color: #212b36;
  outline: none;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  ${({ isFocused }) =>
    isFocused &&
    `
      border-color: #006FBB;
      background-color: #F9FAFB;
      font-weight: bold;
    `}
`;

export const Element = React.forwardRef<HTMLDivElement, Props>(
  ({ children, isFocused, ...restProps }, ref) => {
    return (
      <Article
        ref={ref}
        role="button"
        tabIndex={isFocused ? 0 : -1}
        isFocused={isFocused}
        {...restProps}
      >
        {children}
      </Article>
    );
  }
);
