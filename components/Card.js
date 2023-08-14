import cards from "@/lib/db";
import { Fragment } from "react";

export default function Card({}) {
  console.log(cards);
  return (
    <div>
      {cards.map((card) => (
        <Fragment key={card.id}>
          <button>{card.name}</button>
          <button>{card.icon}</button>
        </Fragment>
      ))}
    </div>
  );
}
