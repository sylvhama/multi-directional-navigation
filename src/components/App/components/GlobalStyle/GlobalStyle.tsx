import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    min-width: 300px;
    background-color: #333;
    color: #f1f1f1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  header, nav, main, footer {
    padding: 0 1rem;
  }

  header, footer {
    text-align: center
  }

  h1 {
    padding: 1rem 0;
  }

  h1, p {
    margin: 0;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
