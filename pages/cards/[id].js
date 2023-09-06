import Form from "@/components/Form";
import { useRouter } from "next/router";
import useSWR from "swr";
import { StyledLink } from "../../components/StyledLink";

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
      <StyledLink href={"/edit"}>🔙 Go back</StyledLink>
    </main>
  );
}
