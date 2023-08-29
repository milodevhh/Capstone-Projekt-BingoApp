import Form from "@/components/Form";
import Navigation from "@/components/Navigation";
import GridOfCards from "@/components/GridOfCards";
import { StyledButton } from "@/components/StyledButton";
import useSWR from "swr";
import { useState } from "react";

export default function EditPage({
  cards,
  submitNewCard,
  updateCard,
  handleDelete,
  shuffle,
}) {
  const { data, error, isLoading, isValidating } = useSWR(`/pages/api/edit`);
  const [icons, setIcons] = useState([]);

  console.log(data);

  return (
    <main>
      <h1>Pool of Gamecards</h1>
      <h2>Add, edit or delete your own cards.</h2>

      <Form submitNewCard={submitNewCard} handleDelete={handleDelete} />
      <p>Please click on a card to edit or delete it.</p>
      <GridOfCards cards={cards} isEditMode={true} updateCard={updateCard} />
      <StyledButton onClick={shuffle}>Create new Bingo</StyledButton>
      <Navigation />
    </main>
  );
}
