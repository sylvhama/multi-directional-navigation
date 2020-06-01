import styled from "styled-components";

import { IsFocusedProps } from "components/shared/types";

export const Base = styled.article<IsFocusedProps>`
  border: 5px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  background-color: #dfe3e8;
  color: #212b36;

  ${({ isFocused }) =>
    isFocused &&
    `
      border-color: #006FBB;
      background-color: #F9FAFB;
      font-weight: bold;
    `}
`;
