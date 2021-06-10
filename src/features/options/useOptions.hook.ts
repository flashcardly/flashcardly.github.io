import { useContext } from "react";
import Storage from "../../providers/storage.provider";
import OptionsContext from "./options.provider";
import { Options } from "./options.types";

export const useOptions = () => {
  const { options, setOptions } = useContext(OptionsContext);
  const storage = useContext(Storage);

  const updateOptions = (options: Options) => {
    storage.setValue("preferences", options)
      .then(() => setOptions(options));
  };

  return [options, updateOptions];
};

/*
  TODO:
    integrate into Options component
    integrate into FlashCard page
    integrate into Deck hook

    ...consider making an OptionsProvider component which wraps OptionsContext and
      - handles state / setState so that App doesn't need to
      - handles the initialization useEffect so that nothing further down the app needs to 
*/