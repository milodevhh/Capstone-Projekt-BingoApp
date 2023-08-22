import { useRouter } from "next/router";
import { styled } from "styled-components";
import { StyledButton } from "./StyledButton";

export default function Form({ submitNewCard, card, updateCard }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    card
      ? updateCard(data.name, data.icon, card.id)
      : submitNewCard(data.name, data.icon);

    event.target.reset();
    router.push("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name or Text:</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Text for your card"
        pattern="[a-zA-Z]*"
        required
        defaultValue={card && card.name}
      />
      <label htmlFor="icon">Choose an icon:</label>
      <select name="icon" id="icon" defaultValue={card && card.icon}>
        <option value="">--Please choose an icon--</option>
        <option value="🚜">🚜</option>
        <option value="🐴">🐴</option>
        <option value="🦌">🦌</option>
        <option value="🌻">🌻</option>
        <option value="🌈">🌈</option>
        <option value="🏍️">🏍️</option>
        <option value="🚐">🚐</option>
        <option value="🚚">🚚</option>
        <option value="🚍">🚍</option>
        <option value="🚲">🚲</option>
        <option value="🛴">🛴</option>
        <option value="🚦">🚦</option>
        <option value="⛽️">⛽️</option>
        <option value="🌅">🌅</option>
        <option value="⛰️">⛰️</option>
        <option value="🔥">🔥</option>
        <option value="⛺️">⛺️</option>
      </select>
      <StyledButton type="submit">
        {card ? "Update card" : "Add card"}
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & label:last-of-type {
    margin-top: 1rem;
  }
`;
