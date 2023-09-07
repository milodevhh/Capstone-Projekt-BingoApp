import Navigation from "@/components/Navigation";
import Image from "next/image";
import bingo from "@/assets/Bingo.gif";
import { StyledLink } from "../components/StyledLink";

export default function WelcomePage({ activeSite }) {
  return (
    <main>
      <h1>Welcome</h1>
      <h2>Road Trip Bingo</h2>
      <p>More fun on trips with a simple Gamecard generator.</p>
      <p>
        On the play page you will find the button create new game, press it and
        your first game will be displayed.
      </p>
      <p>
        The first player to complete a horizontal or vertical line shouts bingo
        loudly and wins.
      </p>
      <StyledLink href={"/play"}>Let´s play</StyledLink>
      <Image src={bingo} alt="bingo gif" height={200} width={200} />
    </main>
  );
}
