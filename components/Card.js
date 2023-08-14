export default function Card({ icon, name }) {
  return (
    <div>
      <button>{name}</button>
      <button>{icon}</button>
    </div>
  );
}
