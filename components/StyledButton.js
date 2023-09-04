import { styled } from "styled-components";
import { Sono } from "@next/font/google";

const sono = Sono({ subsets: ["latin"] });

export const StyledButton = styled.button`
  font-family: ${sono.style.fontFamily};
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  &:active {
    transform: scale(0.95);
  }
`;
