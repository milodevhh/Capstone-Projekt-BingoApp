import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body, h1, h2 {
    margin: 0;
    font-family: system-ui;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
