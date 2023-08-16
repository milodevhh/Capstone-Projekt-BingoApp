import { PlayIcon } from "./SVG/play";
import Link from "next/link";
import { styled } from "styled-components";
import { EditIcon } from "./SVG/edit";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledLink href="/">
        <PlayIcon color="" width="3rem" height="3rem" />
      </StyledLink>
      <StyledLink href="/edit">
        <EditIcon color="black" width="3rem" height="3rem" />
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: white;
  text-decoration: none;
`;
