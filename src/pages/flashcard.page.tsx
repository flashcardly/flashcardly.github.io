// TODO: refactor this to be platform-agnostic
import { Flashcard } from '../features/flashcard/flashcard';
import {Options} from '../features/options/Options'
import { useOptions } from "../features/options/useOptions.hook";
import { useDeck } from "./useDeck.hook";

const FlashCardPage = ({}) => {
  const [options] = useOptions();
  const [deck] = useDeck(); 

  if (!deck.length) {
    return <article>...loading</article>;
  }

  return (
    <article>
      <h1 className="logo">Flashcardly!</h1>
      <div>{options.selectedDeck}</div>
    <Flashcard deck={deck}/>
    <Options />
    </article>
  );
};

export default FlashCardPage;
