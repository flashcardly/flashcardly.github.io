import React, {useState, useEffect, useContext} from "react";
import Storage from "../../providers/storage.provider";
import {Options} from "./options.types";
import OptionsContext from "./options.context";

const OptionsProvider = ({ children }: { children: React.ReactChildren | React.ReactChild | null }) => {
  const browserTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark" : "light";
  
  const [options, setOptions] = useState<Options>({ selectedDeck: "ES-EN", theme: browserTheme });//, animation:'flip'
  const storage = useContext(Storage);

  useEffect(() => {
    storage.getValue("preferences")
      .then((storedOptions: Options) => {
        if (!storedOptions)
          return;

        const newOptions = Object.entries(options)
          .reduce((options, [key, defaultValue]) => {
            const value = storedOptions[key] ?? defaultValue;
            return { ...options, [key]: value };
          }, {} as Partial<Options>);

        setOptions(newOptions as Options);
      });
  }, []);

  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsProvider;
