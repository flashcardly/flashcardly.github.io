import React, { useState } from 'react';
import './App.css';
import Storage from "./services/storage/storage.web";
import StorageProvider from "./providers/storage.provider";
import OptionsContext from "./features/options/options.provider";
import FlashCardPage from "./pages/flashcard.page";

function App() {
  const [options, setOptions] = useState({ selectedDeck: "ES-EN" });

  return (
    <StorageProvider.Provider value={Storage}>
      <OptionsContext.Provider value={{ options, setOptions }}>
        <div className="App">
          <FlashCardPage />
        </div>
      </OptionsContext.Provider>
    </StorageProvider.Provider>
  );
}

export default App;
