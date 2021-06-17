import React, { useState } from 'react';
import './App.css';
import Storage from "./services/storage/storage.web";
import StorageProvider from "./providers/storage.provider";
import OptionsProvider from "./features/options/options.provider";
import FlashCardPage from "./pages/flashcard.page";
import { useOptions } from "./features/options/useOptions.hook";

function App() {
  return (
    <StorageProvider.Provider value={Storage}>
      <OptionsProvider>
        <AppRoot />
      </OptionsProvider>
    </StorageProvider.Provider>
  );
}

const AppRoot = () => {
  const [options] = useOptions();
  // const theme = options.theme;
  const theme = "dark";
  return (
    <div className={`App ${theme}`}>
      <FlashCardPage />
    </div>
  );
};

export default App;
