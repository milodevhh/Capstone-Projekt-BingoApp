import { useRouter } from "next/router";
import { styled } from "styled-components";

export default function Form({ onSubmit, formName }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);

    console.log(data);

    event.target.reset();
    router.push("/");
  }

  return (
    <StyledForm aria-labelledby={formName} onSubmit={onSubmit}>
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
        <option value="tractor">🚜</option>
        <option value="horse">🐴</option>
        <option value="dear">🦌</option>
        <option value="sunflower">🌻</option>
        <option value="rainbow">🌈</option>
        <option value="motorcycle">🏍️</option>
        <option value="RV">🚐</option>
        <option value="truck">🚚</option>
        <option value="camper">🚍</option>
        <option value="bicycle">🚲</option>
        <option value="scooter">🛴</option>
        <option value="traffic light">🚦</option>
        <option value="fuel pump">⛽️</option>
        <option value="sunrise">🌅</option>
        <option value="mountain">⛰️</option>
        <option value="campfire">🔥</option>
        <option value="tent">⛺️</option>
      </select>
      <StyledSubmit type="submit">Add cards</StyledSubmit>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledSubmit = styled.button`
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
