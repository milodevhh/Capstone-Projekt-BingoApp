import { styled } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  background-color: rgb(239, 239, 239);
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
