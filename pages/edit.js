import Form from "@/components/Form";
import Navigation from "@/components/Navigation";

export default function EditPage({ submitNewCard }) {
  return (
    <main>
      <h1>Game cards</h1>
      <h2>Add your own Game cards.</h2>

      <Form submitNewCard={submitNewCard} />
      <Navigation />
    </main>
  );
}
