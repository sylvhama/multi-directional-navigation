import styled from "styled-components";

// taken from https://shkspr.mobi/blog/2020/05/better-keyboard-buttons-in-html/
export const Kbd = styled.kbd`
  border: 0.1em solid #aaa;
  padding: 0.1em 0.5em;
  display: inline-block;
  background: linear-gradient(180deg, #fff, #fff, #fff, #ddd);
  color: #000;
  font-weight: bold;
  border-radius: 15%;
  user-select: none;
`;
