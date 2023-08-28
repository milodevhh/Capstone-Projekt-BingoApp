import GlobalStyle from "../styles";
import { uid } from "uid";
import initialCards from "@/lib/db";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [cards, setCards] = useLocalStorageState("initialCards", {
    defaultValue: initialCards,
  });

  function submitNewCard(name, icon) {
    const index = Math.floor(Math.random() * cards.length);

    const newCard = {
      id: uid(),
      icon: icon,
      name: name,
      isActive: false,
    };
    setCards([...cards, newCard]);
  }

  function updateCard(name, icon, id) {
    const updatedCards = cards.map((card) => {
      if (card.id !== id) {
        return card;
      } else {
        card.name = name;
        card.icon = icon;
        return card;
      }
    });
    setCards(updatedCards);
  }

  function handleDelete(id) {
    const answer = window.confirm(
      "Are you sure, Do you want to delete the card"
    );
    if (answer) {
      const deleteCards = cards.filter((card) => card.id !== id);
      setCards(deleteCards);

      router.push("/");
    }
  }

  function handleActiveCards(activeCards) {
    setCards(activeCards);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        cards={cards}
        setCards={setCards}
        submitNewCard={submitNewCard}
        handleActiveCards={handleActiveCards}
        updateCard={updateCard}
        handleDelete={handleDelete}
      />
    </>
  );
}
