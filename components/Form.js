import { useRouter } from "next/router";
import { StyledButton } from "./StyledButton";
import { StyledForm } from "./StyledForm";

export default function Form({
  submitNewCard,
  card,
  updateCard,
  handleDelete,
  handleInputChange,
  emojis,
}) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    card
      ? updateCard(data.name, data.icon, card.id)
      : submitNewCard(data.name, data.icon);

    event.target.reset();
    router.push("/edit");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Term, Name or Text:</label>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Text for your card"
        pattern="[a-zA-Z]*"
        maxLength={15}
        required
        onChange={handleInputChange}
        defaultValue={card && card.name}
      />
      <p>
        Please write your term in English, after that one or more icons will be
        displayed in the select field, please choose one.
      </p>
      <label htmlFor="icon">Choose an icon:</label>
      <select name="icon" id="icon" defaultValue={card && card.icon}>
        <option value="">--Please choose an icon--</option>
        {emojis
          ? emojis.map((emoji) => (
              <option key={emoji.name} value={emoji.character}>
                {emoji.character}
              </option>
            ))
          : null}
      </select>
      <StyledButton type="submit">
        {card ? "Save card ✔️" : "Add card ➕"}
      </StyledButton>
      {card && (
        <StyledButton type="button" onClick={() => handleDelete(card.id)}>
          Delete card ✖️
        </StyledButton>
      )}
    </StyledForm>
  );
}
