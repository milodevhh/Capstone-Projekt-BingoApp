import Link from "next/link";
import { styled } from "styled-components";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink href="/">Play</StyledLink>
      <StyledLink href="/edit">Edit</StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  background-color: gray;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: white;
  text-decoration: none;
`;
