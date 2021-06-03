import React from 'react';
import './App.css';
import Storage from "./services/storage/storage.web";
import StorageProvider from "./providers/storage.provider";
import { DeckTest } from "./features/deck-test/view";
import FlashCardPage from "./pages/flashcard.page";

function App() {
  return (
    <StorageProvider.Provider value={Storage}>
      <div className="App">
        <DeckTest />
        <FlashCardPage />
      </div>
    </StorageProvider.Provider>
  );
}

export default App;
