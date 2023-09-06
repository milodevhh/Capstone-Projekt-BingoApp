import { PlayIcon } from "./SVG/play";
import Link from "next/link";
import { styled } from "styled-components";
import { EditIcon } from "./SVG/edit";
import { WelcomeIcon } from "./SVG/welcome";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink href="/">
        <WelcomeIcon color="" width="3rem" height="3rem" />
      </StyledLink>
      <StyledLink href="/play">
        <PlayIcon color="" width="3rem" height="3rem" />
      </StyledLink>
      <StyledLink href="/edit">
        <EditIcon color="black" width="3rem" height="3rem" />
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  background-color: white;
`;

export const StyledLink = styled(Link)`
  &:active {
    transform: scale(0.95);
  }
`;
