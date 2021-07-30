export type Scalar = number | string | boolean;

export type Options = {
  selectedDeck: string;
  theme: "light" | "dark";
  animation: "2D" | "3D";
  [key: string]: Scalar;
};

export type OptionsState = {
  options: Options;
  setOptions: (options: Options) => void;
};
