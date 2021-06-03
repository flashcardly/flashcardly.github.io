import React from "react";
import StorageProvider from "../../providers/storage.provider";

export const DeckTest = ({ }) => {
  const storage = React.useContext(StorageProvider);
  const [count, setCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    storage.getValue("count")
      .then(setCount);
  }, []);

  const handleIncrement = () => {
    const nextCount = (count ?? 0) + 1;
    storage.setValue("count", nextCount)
      .then(() => setCount(nextCount));
  };

  return (
    <section>
      <button onClick={handleIncrement}>increment</button>
      {count == null ? "No value saved yet" : count}
    </section>
  );
};
/*
Pages
  - Flashcard Page
    - Features
       - Flash Card View

       - User Settings



*/