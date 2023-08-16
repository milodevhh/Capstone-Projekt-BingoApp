import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function Form({ submitNewCard, formName }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    submitNewCard(data.name, data.icon);

    event.target.reset();
    router.push("/");
  }

  return (
    <StyledForm aria-labelledby={formName} onSubmit={handleSubmit}>
      <label htmlFor="name">Name or Text:</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Text for your card"
        pattern="[a-zA-Z]*"
        required
      />
      <label htmlFor="icon">Choose an icon:</label>
      <select name="icon" id="icon">
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
      <StyledSubmitButton type="submit">Add card</StyledSubmitButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSubmitButton = styled.button`
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  &:active {
    transform: scale(0.95);
  }
`;
