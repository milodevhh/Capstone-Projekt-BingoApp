import Form from "@/components/Form";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSWR from "swr";

export default function CardsEdit({ cards, updateCard, handleDelete }) {
  const router = useRouter();
  const card = cards.find(({ id }) => id == router.query.id) || "";
  const currentPage = router.query.id;

  const { data, error, isLoading, isValidating } = useSWR(
    `/api/edit?query=${card.name}`
  );

  if (!currentPage) {
    return null;
  }

  return (
    <main>
      <h1>Edit your card</h1>
      <h2>
        {card && card.name} {card && card.icon}
      </h2>

      <Form
        card={card}
        updateCard={updateCard}
        handleDelete={handleDelete}
        emojis={data}
      />
      <StyledLink href={"/edit"}>Go back</StyledLink>
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
