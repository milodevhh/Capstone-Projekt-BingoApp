import { useState } from "react";
import GlobalStyle from "../styles";

import { uid } from "uid";
import initialCards from "@/lib/db";

export default function App({ Component, pageProps }) {
  const [newCard, setNewCard] = useState(initialCards);

  function submitNewCard(name, icon) {
    const newCards = {
      id: uid(),
      icon: icon,
      name: name,
      isActive: false,
    };
    setNewCard([...newCard, newCards]);
  }

  console.log(newCard);

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        newCard={newCard}
        submitNewCard={submitNewCard}
      />
    </>
  );
}
