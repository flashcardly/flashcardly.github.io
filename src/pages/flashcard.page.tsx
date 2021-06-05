import React, {useContext, useState, useEffect} from 'react'
import StorageProvider from '../providers/storage.provider'
// TODO: refactor this to be platform-agnostic
import { getDeck } from "../services/deck-loader/deck-loader.web";
import { Flashcard } from '../features/flashcard/flashcard';
import {Card} from '../types/types'


const FlashCardPage = ({}) => {
  const storage = useContext(StorageProvider);
  const [deck, setDeck] = useState<Card[]>([]);
  

  useEffect(() => {
    const initialize = async () => {
      let deck = await storage.getValue("deck");
      if (!Array.isArray(deck)) {
        deck = await getDeck("/data", "ES-EN");
        await storage.setValue("deck", deck);
      }

      setDeck(deck);
    };

    initialize();
  }, [storage]);

  if (!deck.length) {
    return <article>...loading</article>;
  }

  return (
    <article>
      <h1 className="logo">Flashcardly!</h1>
    <Flashcard deck={deck}/>
    </article>
  );
};

export default FlashCardPage;
