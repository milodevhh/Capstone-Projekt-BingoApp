import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Form({ onSubmit, formName }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <Form aria-labelledby={formName} onSubmit={onSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" type="text" />

      <Label htmlFor="icon">Choose a icon:</Label>

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
    </Form>
  );
}
