import Card from "@/components/Card";
import Navigation from "@/components/Navigation";

export default function HomePage({ cards, setCards }) {
  return (
    <main>
      <h1>Bingo</h1>
      <h2>Play</h2>
      <Card cards={cards} setCards={setCards} />
      <Navigation />
    </main>
  );
}
