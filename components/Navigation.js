import { PlayIcon } from "./SVG/play";
import Link from "next/link";
import { styled } from "styled-components";
import { EditIcon } from "./SVG/edit";
import { WelcomeIcon } from "./SVG/welcome";

export default function Navigation({ activeSite }) {
  return (
    <StyledNavigation>
      <StyledLink href="/">
        <WelcomeIcon
          color={activeSite === "home" ? "#F2784B" : "black"}
          width="3rem"
          height="3rem"
        />
      </StyledLink>
      <StyledLink href="/play">
        <PlayIcon
          color={activeSite === "play" ? "#F2784B" : "black"}
          width="3rem"
          height="3rem"
        />
      </StyledLink>
      <StyledLink href="/edit">
        <EditIcon
          color={activeSite === "edit" ? "#F2784B" : "black"}
          width="3rem"
          height="3rem"
        />
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 36rem;

  padding: 1rem 1rem;
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
