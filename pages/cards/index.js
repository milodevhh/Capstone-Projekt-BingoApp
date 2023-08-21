import GridOfCards from "@/components/GridOfCards";

export default function ViewOfOneCard({ cards, handleUpdateCards }) {
  return <GridOfCards cards={cards} handleUpdateCards={handleUpdateCards} />;
}
