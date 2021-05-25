import React from 'react';
import logo from './logo.svg';
import './App.css';
import Storage from "./services/storage/storage.web";
import StorageProvider from "./features/deck-test/storage.provider";
import { DeckTest } from "./features/deck-test/view";

function App() {
  return (
    <StorageProvider.Provider value={Storage}>
      <div className="App">
        <DeckTest />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </StorageProvider.Provider>
  );
}

export default App;
