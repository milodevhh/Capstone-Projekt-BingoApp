import GridOfCards from "@/components/GridOfCards";
import Navigation from "@/components/Navigation";

export default function HomePage({ cards, handleUpdateCards }) {
  return (
    <main>
      <h1>Bingo</h1>
      <h2>Play</h2>
      <GridOfCards cards={cards} handleUpdateCards={handleUpdateCards} />
      <Navigation />
    </main>
  );
}
