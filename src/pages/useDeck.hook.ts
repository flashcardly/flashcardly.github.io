import {useContext, useEffect, useState, useCallback} from 'react'
import Storage from '../providers/storage.provider'
import {usePreferences} from '../features/options/usePreferences.hook'
import {getDeck} from '../services/deck-loader/deck-loader.web'
import {Deck} from '../types/types'

export const useDeck = () => {
  const [preferences] = usePreferences();
  const [initialized, setInitialized] = useState(false);
  const [deck, setDeck] = useState<Deck>([]);
  const storage = useContext(Storage);

  const loadDeck = (filename: string) =>
    getDeck("/data", filename)
      .then(deck =>
        storage.setValue("deck", deck)
          .then(() => setDeck(deck)));

  useEffect(() => {
    const setExistingDeck = (deck: Deck) =>
      Promise.resolve(deck).then(setDeck);

    storage.getValue("deck")
      .then(deck => !!deck
        ? setExistingDeck(deck)
        : loadDeck(preferences.selectedDeck))
      .then(() => setInitialized(true));
  }, []);

  useEffect(() => {
    if (!initialized) return;
    loadDeck(preferences.selectedDeck);
  },[preferences.selectedDeck]);

  return [deck];
}