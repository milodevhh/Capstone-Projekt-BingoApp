import GlobalStyle from "../styles";
import { uid } from "uid";
import initialCards from "@/lib/db";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { useEffect, useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [cards, setCards] = useLocalStorageState("initialCards", {
    defaultValue: initialCards,
  });

  const [shuffledPlayCards, setShuffledPlayCards] = useLocalStorageState(
    "shuffledPlayCards",
    {
      defaultValue: [],
    }
  );

  const [query, setQuery] = useState("");
  function handleInputChange(event) {
    setQuery(event.target.value);
  }

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
    const answer = window.confirm(
      "Are you sure, Do you want to delete the card?"
    );
    if (answer) {
      const deleteCards = cards.filter((card) => card.id !== id);
      setCards(deleteCards);

      router.push("/edit");
    }
  }

  function shuffle() {
    const shuffledArray = [...cards].sort(() => Math.random() - 0.5);
    setShuffledPlayCards(shuffledArray);
    router.push("/play");
  }

  function handleActiveCards(activeCards) {
    setShuffledPlayCards(activeCards);
  }

  const [activeSite, setActiveSite] = useState("home");
  useEffect(() => {
    if (router.pathname === "/") {
      setActiveSite("home");
    } else if (router.pathname === "/play") {
      setActiveSite("play");
    } else if (router.pathname === "/edit") {
      setActiveSite("edit");
    }
  }, [setActiveSite, router.pathname]);

  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Head>
          <meta name="keywords" content="bingo, road trip, game" />
          <title>Road Trip Bingo</title>
        </Head>
        <Component
          {...pageProps}
          cards={cards}
          setCards={setCards}
          submitNewCard={submitNewCard}
          handleActiveCards={handleActiveCards}
          updateCard={updateCard}
          handleDelete={handleDelete}
          shuffledCards={shuffledPlayCards.slice(0, 9)}
          shuffle={shuffle}
          handleInputChange={handleInputChange}
          query={query}
          activeSite={activeSite}
        />
        <Navigation activeSite={activeSite} />
      </SWRConfig>
    </>
  );
}
