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
  const [options, setOptions] = useOptions();
  const { theme } = options;
  const isLightTheme = theme === 'light';
  const toggleToggle = () => {
    const newTheme = isLightTheme ? "dark" : "light";
    setOptions({ ...options, theme: newTheme });
  }
  // switch in left pos is off (light)
  //                       on (dark)
  return (
    <div className={`App ${theme}`}>
      <div className="switch-container">
        <label className="switch">
          <input onChange={toggleToggle} checked={isLightTheme} type="checkbox" />
          <span className="slider round">
            <span className="theme-icon--dark">🌕</span>
            <span className="theme-icon--light">🌞</span>
          </span>
        </label>
      </div>
      <FlashCardPage />
    </div>
  );
};

export default App;
