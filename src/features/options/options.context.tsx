import { createContext } from "react";
import { OptionsState } from "./options.types";

const OptionsContext = createContext<OptionsState>({
  options: { selectedDeck: "" , theme: "light" },
  setOptions: () => {}
});

export default OptionsContext;

// const useOptions = () => {
//   const { state, setState } = useContext(OptionsContext);
//   return [state, setState];
// };

// const Component = () => {
//   const [options, setOptions] = useOptions();
//   return null;
// };


// render(<OptionsContext.Provider value={{ state: {}, setState: () => {} }}><Component /></OptionsContext.Provider>)