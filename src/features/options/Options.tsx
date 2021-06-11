import { useContext } from 'react'
import StorageProvider from '../../providers/storage.provider'
import {
    // usePreferences,
    Preferences
} from './usePreferences.hook'
import {useOptions} from './useOptions.hook'

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

