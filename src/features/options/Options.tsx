import { useContext } from 'react'
import StorageProvider from '../../providers/storage.provider'
import {
    // usePreferences,
    Preferences
} from './usePreferences.hook'
import {useOptions} from './useOptions.hook'

const deckManifest = [
    {
        fileName: "ES-EN",
        title: "Spanish to English"
    },
    {
        fileName: "FR-EN",
        title: "French to English"
    },
    {
        fileName: "EN-ES",
        title: "English to Spanish"
    },
    {
        fileName: "EN-FR",
        title: "English to French"
    },
];

type OptionsProps = {
  onUpdate?: (preferences: Preferences) => void;
};

export const Options = ({ onUpdate }: OptionsProps) => {
    const storage = useContext(StorageProvider);
    const [options, updateOptions] = useOptions();
    const updateSelectedDeck = (e: any) => {
      const filename = (e.target as HTMLInputElement).value;
      const newOptions = {
        ...options,
        selectedDeck: filename
      };

      updateOptions(newOptions);
    };

    return (
        <section>
            <fieldset className="option-list" onChange={updateSelectedDeck}>
                <legend className="option-header">Choose your deck</legend>
                <ul style={{"display": "inline-block", "listStyle": "none", paddingLeft: "0" }}>
                    {deckManifest.map((deck) => 
                        <li className="option-card" style={{ "textAlign": "left"}}>
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

