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
    box-sizing: border-box
  }

  header, nav, main, footer {
    padding: 1rem;
  }

  header, footer {
    text-align: center
  }

  h1 {
    padding-bottom: 1rem;
  }

  p {
    padding-bottom: 0.5rem;
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
