import styled from "styled-components";
import { IsFocusedProps } from "../../../../../shared/types";

export const Anchor = styled.a<IsFocusedProps>`
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
