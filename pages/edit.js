import Form from "@/components/Form";
import Navigation from "@/components/Navigation";
import GridOfCards from "@/components/GridOfCards";
import { StyledButton } from "@/components/StyledButton";
import useSWR from "swr";

export default function EditPage({
  cards,
  submitNewCard,
  updateCard,
  handleDelete,
  shuffle,
  handleInputChange,
  query,
}) {
  const { data, error, isLoading, isValidating } = useSWR(
    query !== "" ? `/api/edit?query=${query}` : null
  );

  return (
    <main>
      <h1>Pool of Gamecards</h1>
      <h2>Add, edit or delete your own cards.</h2>

      <Form
        emojis={data}
        submitNewCard={submitNewCard}
        handleDelete={handleDelete}
        handleInputChange={handleInputChange}
      />
      <p>Please click on a card to edit or delete it.</p>
      <GridOfCards cards={cards} isEditMode={true} updateCard={updateCard} />
      <StyledButton onClick={shuffle}>Create new Bingo</StyledButton>
      <Navigation />
    </main>
  );
}
