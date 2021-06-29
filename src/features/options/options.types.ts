export type Scalar = number | string | boolean;

export type Options = {
  selectedDeck: string;
  theme: "light" | "dark";
  // animation: "flip" | "none";
  [key: string]: Scalar;
};

export type OptionsState = {
  options: Options;
  setOptions: (options: Options) => void;
};
