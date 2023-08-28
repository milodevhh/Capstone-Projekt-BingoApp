import GridOfCards from "@/components/GridOfCards";
import Navigation from "@/components/Navigation";

export default function HomePage({ cards, handleActiveCards }) {
  return (
    <main>
      <h1>Bingo</h1>
      <h2>Play</h2>
      <p>
        Click on a card if you have seen what is shown on the card in your
        surroundings. Have fun playing...
      </p>
      <GridOfCards cards={cards} handleActiveCards={handleActiveCards} />
      <p>
        The first player to complete a horizontal or vertical line shouts bingo
        loudly and wins.
      </p>
      <Navigation />
    </main>
  );
}
