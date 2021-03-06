import React from "react";
import styled from "styled-components";

interface RowProps {
  readonly rows: number;
}

interface Props extends RowProps {
  readonly children: React.ReactNode;
}

const Section = styled.section<RowProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows}, 1fr);
  grid-gap: 1rem;
  overflow: hidden;
`;

export function VerticalGrid({ children, rows }: Props) {
  return <Section rows={rows}>{children}</Section>;
}
