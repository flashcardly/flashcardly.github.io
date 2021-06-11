import React, { useState } from 'react';
import './App.css';
import Storage from "./services/storage/storage.web";
import StorageProvider from "./providers/storage.provider";
import OptionsProvider from "./features/options/options.provider";
import FlashCardPage from "./pages/flashcard.page";

function App() {
  return (
    <StorageProvider.Provider value={Storage}>
      <OptionsProvider>
        <div className="App">
          <FlashCardPage />
        </div>
      </OptionsProvider>
    </StorageProvider.Provider>
  );
}

export default App;
