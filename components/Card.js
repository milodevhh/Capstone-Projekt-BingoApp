import cards from "@/lib/db";
import { Fragment } from "react";
import styled from "styled-components";

export default function Card({}) {
  console.log(cards);
  return (
    <GridContainer>
      {cards.map((card) => (
        <Fragment key={card.id}>
          <GameCards>
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
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const GameCards = styled.button`
  background-color: #add1d9;
  border-radius: 1rem;
  border: solid black 0.1rem;
  &:hover {
    background-color: #f2e7ae;
  }
`;
