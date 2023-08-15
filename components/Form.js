import { useRouter } from "next/router";

export default function Form({ onSubmit, formName }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  }

  return (
    <form aria-labelledby={formName} onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" />

      <label htmlFor="icon">Choose a icon:</label>

      <select name="icon" id="icon">
        <option value="">--Please choose an icon--</option>
        <option value="tractor">🚜</option>
        <option value="horse">🐴</option>
        <option value="wildpig">🐗</option>
        <option value="dear">🦌</option>
        <option value="sunflower">🌻</option>
        <option value="rainbow">🌈</option>
      </select>

      <button></button>
    </form>
  );
}
