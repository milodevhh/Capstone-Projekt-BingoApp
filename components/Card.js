import cards from "@/lib/db";
import { Fragment, useState } from "react";
import styled from "styled-components";

export default function Card({}) {
  const [backgroundColor, setBackgroundColor] = useState("#add1d9");
  function handleClick() {
    setBackgroundColor(backgroundColor === "#add1d9" ? "#F2E7AE" : "#add1d9");
  }
  return (
    <GridContainer>
      {cards.map((card) => (
        <Fragment key={card.id}>
          <GameCards onClick={handleClick} style={{ backgroundColor }}>
            {card.name} {card.icon}
          </GameCards>
        </Fragment>
      ))}
    </GridContainer>
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

const GameCards = styled.button`
  height: 5rem;
  background-color: #add1d9;
  border-radius: 1rem;
  border: solid black 0.1rem;
  &:hover {
    background-color: #f2e7ae;
  }
`;
