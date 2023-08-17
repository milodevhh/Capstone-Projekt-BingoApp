import { useState } from "react";
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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        cards={cards}
        setCards={setCards}
        submitNewCard={submitNewCard}
      />
    </>
  );
}
