import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0.5rem;
  }

  body, h1, h2 {
    margin: 0;
    font-family: system-ui;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
