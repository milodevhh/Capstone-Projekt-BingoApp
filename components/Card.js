import initialCards from "@/lib/db";
import { useState } from "react";
import styled from "styled-components";

export default function GridOfCards({ newCard }) {
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
  }
  return (
    <>
      <GridContainer>
        {cards.map((card) => (
          <GameCardWrapper key={card.id}>
            <GameCard
              type="button"
              onClick={() => handleActive(card.id)}
              $isActive={card.isActive}
            >
              {card.name}
              {card.icon}
            </GameCard>
          </GameCardWrapper>
        ))}
      </GridContainer>
    </>
  );
}

const GridContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0.1rem;
  grid-row-gap: 0.1rem;
  padding: 1rem;
`;

const GameCardWrapper = styled.li`
  width: 100%;
  list-style: none;
`;

const GameCard = styled.button`
  width: 100%;
  height: 4rem;
  &:hover {
    border-color: white;
  }
  background-color: ${(props) => (props.$isActive ? "#f2e7ae" : "#add1d9")};
  border-radius: 0.5rem;
  border: solid black 0.1rem;

  &:active {
    transform: scale(0.95);
  }
`;
