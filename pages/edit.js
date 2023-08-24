import Form from "@/components/Form";
import Navigation from "@/components/Navigation";
import GridOfCards from "@/components/GridOfCards";

export default function EditPage({
  cards,
  submitNewCard,
  updateCard,
  handleDelete,
}) {
  return (
    <main>
      <h1>Game cards</h1>
      <h2>Add your own Game cards.</h2>

      <Form submitNewCard={submitNewCard} handleDelete={handleDelete} />
      <GridOfCards cards={cards} isEditMode={true} updateCard={updateCard} />
      <Navigation />
    </main>
  );
}
