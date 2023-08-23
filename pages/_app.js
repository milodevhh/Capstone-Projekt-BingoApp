import GlobalStyle from "../styles";

import { uid } from "uid";
import initialCards from "@/lib/db";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [cards, setCards] = useLocalStorageState("initialCards", {
    defaultValue: initialCards,
  });

  function submitNewCard(name, icon) {
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
    const deleteCards = cards.filter((card) => card.id !== id);
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
