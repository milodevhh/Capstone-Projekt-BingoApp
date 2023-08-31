import { createGlobalStyle } from "styled-components";
import { Sono } from "@next/font/google";

const sono = Sono({ subsets: ["latin"] });

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: ${sono.style.fontFamily};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main {
    padding-top: 1.5rem;
    width: 80%;
    max-width: 37.5rem;
    margin-inline: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  ul {
    padding: 0;
  }

  h3 {
    font-size: 0.5rem;
  }

`;
