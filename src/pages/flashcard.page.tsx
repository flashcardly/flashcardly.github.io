import React, {useContext, useState, useEffect} from 'react'
import StorageProvider from '../providers/storage.provider'
// TODO: refactor this to be platform-agnostic
import { getDeck } from "../services/deck-loader/deck-loader.web";

type Card = {
  front: string;
  back: string;
};

const FlashCardPage = ({ }) => {
  const storage = useContext(StorageProvider);
  const [deck, setDeck] = useState<Card[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const initialize = async () => {
      let deck = await storage.getValue("deck");
      if (!Array.isArray(deck)) {
        deck = await getDeck("/data", "ES-EN");
        await storage.setValue("deck", deck);
      }

      setDeck(deck);
      setIndex(Math.floor(Math.random() * deck.length));
    };

    initialize();
  }, [storage]);

  if (!deck.length) {
    return <article>...loading</article>;
  }

  return (
    <article>
      {deck[index].front}
    </article>
  );
};

export default FlashCardPage;
