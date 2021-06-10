import React, {useContext, useState, useEffect} from 'react'
import StorageProvider from '../providers/storage.provider'
// TODO: refactor this to be platform-agnostic
import { getDeck } from "../services/deck-loader/deck-loader.web";
import { Flashcard } from '../features/flashcard/flashcard';
import {Card} from '../types/types'
import {Options} from '../features/options/Options'
import { usePreferences } from "../features/options/usePreferences.hook";

const FlashCardPage = ({}) => {
  const storage = useContext(StorageProvider);
  const [preferences] = usePreferences();
  const [deck, setDeck] = useState<Card[]>([]);
  
  useEffect(() => {
    getDeck("/data", preferences.selectedDeck)
      .then(deck => {
        storage.setValue("deck", deck);
        setDeck(deck);
      });
  }, [preferences.selectedDeck]);

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
    <Options />
    </article>
  );
};

export default FlashCardPage;
