import React from "react";
import styled from "styled-components";

interface Props {
  readonly children: React.ReactNode;
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: inline-grid;
  grid-auto-columns: 250px;
  grid-auto-flow: column;
`;

export function HorizontalGrid({ children }: Props) {
  return <Section>{children}</Section>;
}
