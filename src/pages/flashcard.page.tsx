import React, {useContext, useState, useEffect} from 'react'
import StorageProvider from '../providers/storage.provider'
// TODO: refactor this to be platform-agnostic
import { getDeck } from "../services/deck-loader/deck-loader.web";
import { Flashcard } from '../features/flashcard/flashcard';
import {Card} from '../types/types'
import {Options} from '../features/options/Options'
import { usePreferences } from "../features/options/usePreferences.hook";
import { useDeck } from "./useDeck.hook";

const FlashCardPage = ({}) => {
  const [preferences] = usePreferences();
  const [deck] = useDeck(); 

  if (!deck.length) {
    return <article>...loading</article>;
  }

  return (
    <article>
      <h1 className="logo">Flashcardly!</h1>
      <div>{preferences.selectedDeck}</div>
    <Flashcard deck={deck}/>
    <Options />
    </article>
  );
};

export default FlashCardPage;
