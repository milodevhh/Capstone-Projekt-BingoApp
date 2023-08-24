import Form from "@/components/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function CardsEdit({ cards, updateCard, handleDelete }) {
  const router = useRouter();
  const card = cards.find(({ id }) => id == router.query.id);
  const currentPage = router.query.id;

  if (!currentPage) {
    return null;
  }

  console.log(cards);

  return (
    <main>
      {card && card.name} {card && card.icon}
      <Form card={card} updateCard={updateCard} handleDelete={handleDelete} />
      <StyledLink href={"/edit"}>go back</StyledLink>
    </main>
  );
}

const StyledLink = styled(Link)`
  background-color: rgb(239, 239, 239);
  padding: 0.8rem;
  border-radius: 0.6rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: inherit;
  &:active {
    transform: scale(0.95);
  }
`;
