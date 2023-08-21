import GridOfCards from "@/components/GridOfCards";
import { useRouter } from "next/router";

export default function CardsEdit({ cards }) {
  const router = useRouter;
  const card = cards.find(({ id }) => id === router.query.id);

  return (
    <>
      <GridOfCards card={cards} />
    </>
  );
}
