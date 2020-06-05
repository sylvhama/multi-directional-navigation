import React from 'react';
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
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
  animation: ${fadeIn} 500ms ease-in-out 1;
`;

export function Loading() {
  return <Wrapper>Loading...</Wrapper>
}