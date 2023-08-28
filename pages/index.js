import GridOfCards from "@/components/GridOfCards";
import Navigation from "@/components/Navigation";
import { StyledButton } from "@/components/StyledButton";

export default function HomePage({
  handleActiveCards,
  shuffledCards,
  shuffle,
}) {
  return (
    <main>
      <h1>Bingo</h1>
      <h2>Play</h2>
      <p>
        Click on a card if you have seen what is shown on the card in your
        surroundings. Have fun playing...
      </p>
      <GridOfCards
        cards={shuffledCards}
        handleActiveCards={handleActiveCards}
      />
      <StyledButton onClick={shuffle}>Create new Bingo</StyledButton>

      <p>
        The first player to complete a horizontal or vertical line shouts bingo
        loudly and wins.
      </p>
      <Navigation />
    </main>
  );
}
