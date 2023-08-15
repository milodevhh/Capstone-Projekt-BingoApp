import initialCards from "@/lib/db";
import { useState } from "react";
import styled from "styled-components";

export default function Card({}) {
  const [cards, setCards] = useState(initialCards);
  function handleActive(id) {
    const updatedCards = cards.map((card) => {
      if (card.id !== id) {
        return card;
      } else {
        const updatedCard = {
          ...card,
          isActive: !card.isActive,
        };
        return updatedCard;
      }
    });
    setCards(updatedCards);
    console.log(updatedCards);
  }
  return (
    <>
      <GridContainer>
        {cards.map((card) => (
          <GameCard
            key={card.id}
            type="button"
            onClick={() => handleActive(card.id)}
            $isActive={card.isActive}
          >
            {card.name} {card.icon}
          </GameCard>
        ))}
      </GridContainer>
      <p>You can add your own Playcards later on.</p>
    </>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  padding: 2rem;
`;

const GameCard = styled.button`
  height: 5rem;
  &:hover {
    border-color: white;
  }
  background-color: ${(props) =>
    props.$isActive ? "#f2e7ae" : "#add1d9"}; // was eine Zauberformel
  border-radius: 1rem;
  border: solid black 0.1rem;

  &:active {
    transform: scale(0.95);
  }
`;
