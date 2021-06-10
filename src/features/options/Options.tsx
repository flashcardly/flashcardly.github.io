import React, { useContext, useEffect, useState } from 'react'
import StorageProvider from '../../providers/storage.provider'
import { getDeck } from '../../services/deck-loader/deck-loader.web';
import {usePreferences, Preferences } from './usePreferences.hook'

const deckManifest = [{
    fileName: "ES-EN",
    title: "Spanish to English Common Words"
},
{
    fileName: "FR-EN",
    title: "French to English Common Words"
}];

type OptionsProps = {
  onUpdate?: (preferences: Preferences) => void;
};

export const Options = ({ onUpdate }: OptionsProps) => {
    const storage = useContext(StorageProvider);
    const [options, setOptions] = usePreferences();
    const updateSelectedDeck = (e: any) => {
      const filename = (e.target as HTMLInputElement).value;
      const newOptions = {
        ...options,
        selectedDeck: filename
      };

      setOptions(newOptions);
    };

    return (
        <section>
            <fieldset onChange={updateSelectedDeck}>
                <legend>Choose your deck</legend>
                <ul>
                    {deckManifest.map((deck) => 
                        <li>
                            <label>
                                <input
                                    value={deck.fileName}
                                    name="deck"
                                    type="radio"
                                    checked={options.selectedDeck === deck.fileName}
                                    />&nbsp;
                                        <span>{deck.title}</span>
                            </label>
                        </li>
                    )}
                </ul>
            </fieldset>
        </section>

    )

}

