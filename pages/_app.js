import { useState } from "react";
import GlobalStyle from "../styles";
import { initialCards } from "@/lib/db";
import { uid } from "react-uid";

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
