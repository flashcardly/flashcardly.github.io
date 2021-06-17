export type Scalar = number | string | boolean;

export type Options = {
  selectedDeck: string;
  theme: "light" | "dark";
  [key: string]: Scalar;
};

export type OptionsState = {
  options: Options;
  setOptions: (options: Options) => void;
};
