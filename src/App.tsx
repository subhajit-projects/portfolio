// import React from 'react';
// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { AppContext } from './store/AppContext';
import { AppContextInterface } from './store/AppContextInterface';

function App() {
  const [appContextData, setAppContextData] = useState<AppContextInterface>({
    appContextData: {
      theme: "dark"
    },
    setAppContextData: () => {}
  });
  console.log(appContextData, "appContextData :: ")
  return (
    <AppContext.Provider value={{appContextData, setAppContextData}}>
      <div className={`tt ${appContextData.appContextData.theme}`}>
{/* {cl} */}

        {/* <header className="App-header">
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
        </header> */}
        
        <HomePage />
      </div>
      </AppContext.Provider>
  );
}

export default App;
