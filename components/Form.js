import { useRouter } from "next/router";
import { uid } from "react-uid";

export default function Form({ onSubmit, formName }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newCard = {
      id: uid(),
      name: data.name,
      icon: data.icon,
    };

    event.target.reset();
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name or Text:</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Text for your card"
          pattern="[a-zA-Z]*"
          required
        />
      </div>
      <div>
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
        <button type="submit">Add cards</button>
      </div>
    </form>
  );
}
