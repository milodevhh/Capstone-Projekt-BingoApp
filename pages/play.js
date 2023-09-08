import GridOfCards from "@/components/GridOfCards";
import { WinIcon } from "@/components/SVG/win";
import { StyledButton } from "@/components/StyledButton";
import { styled } from "styled-components";

export default function HomePage({
  handleActiveCards,
  shuffledCards,
  shuffle,
}) {
  const firstHorizontalRowWin =
    shuffledCards[0]?.isActive &&
    shuffledCards[1]?.isActive &&
    shuffledCards[2]?.isActive;
  const secondHorizontalRowWin =
    shuffledCards[3]?.isActive &&
    shuffledCards[4]?.isActive &&
    shuffledCards[5]?.isActive;
  const thirdHorizontalRowWin =
    shuffledCards[6]?.isActive &&
    shuffledCards[7]?.isActive &&
    shuffledCards[8]?.isActive;
  const firstHorizontalColumWin =
    shuffledCards[0]?.isActive &&
    shuffledCards[3]?.isActive &&
    shuffledCards[6]?.isActive;
  const secondHorizontalColumWin =
    shuffledCards[1]?.isActive &&
    shuffledCards[4]?.isActive &&
    shuffledCards[7]?.isActive;
  const thirdHorizontalColumWin =
    shuffledCards[2]?.isActive &&
    shuffledCards[5]?.isActive &&
    shuffledCards[8]?.isActive;
  const bingo =
    firstHorizontalRowWin ||
    secondHorizontalRowWin ||
    thirdHorizontalRowWin ||
    firstHorizontalColumWin ||
    secondHorizontalColumWin ||
    thirdHorizontalColumWin;

  return (
    <main>
      <h1>Road Trip Bingo</h1>
      <h2>Play</h2>
      <p>
        Click on a card if you have seen what is shown on it in your
        surroundings. A horizontal or vertical line wins, have fun playing...
      </p>
      <GridOfCards
        cards={shuffledCards}
        handleActiveCards={handleActiveCards}
      />
      {bingo && (
        <>
          <StyledWinText>Congratulations you won!</StyledWinText>
          <WinIcon color="" width="3rem" height="3rem" />
        </>
      )}
      <StyledButton onClick={shuffle}>
        {bingo ? "Restart the game" : "Create new Bingo"}
      </StyledButton>
    </main>
  );
}

const StyledWinText = styled.p`
  color: #f2b988;
`;
