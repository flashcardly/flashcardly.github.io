import React, {useState, useEffect, useContext} from "react";
import Storage from "../../providers/storage.provider";
import {Options} from "./options.types";
import OptionsContext from "./options.context";

const OptionsProvider = ({ children }: { children: React.ReactChildren | React.ReactChild | null }) => {
  const [options, setOptions] = useState({ selectedDeck: "ES-EN" });
  const storage = useContext(Storage);

  useEffect(() => {
    storage.getValue("preferences")
      .then((storedOptions: Options) => {
        if (!storedOptions)
          return;
        if (storedOptions.selectedDeck === options.selectedDeck)
          return;

        setOptions(storedOptions);
      });
  }, []);

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsProvider;
