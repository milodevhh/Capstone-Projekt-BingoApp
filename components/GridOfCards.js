import Link from "next/link";
import styled from "styled-components";

export default function GridOfCards({ cards, handleActiveCards, isEditMode }) {
  function handleActive(id) {
    const activeCards =
      cards &&
      cards.map((card) => {
        if (card.id !== id) {
          return card;
        } else {
          const activeCard = {
            ...card,
            isActive: !card.isActive,
          };
          return activeCard;
        }
      });
    handleActiveCards(activeCards);
  }

  return (
    <>
      <GridContainer>
        {cards.map((card) => (
          <GameCardWrapper key={card.id}>
            {isEditMode ? (
              <GameCardLink href={`/cards/${card.id}`}>
                <h3>{card.name}</h3>
                <StyledIcon>{card.icon}</StyledIcon>
              </GameCardLink>
            ) : (
              <GameCard
                type="button"
                onClick={() => handleActive(card.id)}
                $isActive={card.isActive}
              >
                <h3>{card.name}</h3>
                <StyledIcon>{card.icon}</StyledIcon>
              </GameCard>
            )}
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
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

const GameCardWrapper = styled.li`
  width: 100%;
  list-style: none;
`;

const GameCard = styled.button`
  display: grid;
  width: 100%;
  padding: 2rem 1rem;
  height: 100%;

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

const GameCardLink = styled(Link)`
  display: grid;
  text-decoration: none;
  color: black;
  text-align: center;
  padding: 2rem 1rem;
  height: auto;

  width: 100%;
  &:hover {
    border-color: white;
  }
  background-color: ${(props) => (props.$isActive ? "#f2e7ae" : "#add1d9")};
  border-radius: 0.5rem;
  border: solid black 0.1rem;
`;

const StyledIcon = styled.p`
  font-size: 1.5rem;
`;
