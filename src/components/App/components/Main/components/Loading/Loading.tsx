import React from 'react';
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacty: 1;
  }
`;

 const Wrapper = styled.p`
  padding: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 250ms ease-in-out 250ms 1 normal forwards;
`;

export function Loading() {
  return <Wrapper>Loading...</Wrapper>
}
