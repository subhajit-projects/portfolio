import React from 'react';
import { useState } from 'react';
import './App.css';
import { AppContext } from './store/AppContext';
import { AppContextInterface } from './store/AppContextInterface';
import { Container } from 'reactstrap';
import MainPage from './pages/mainpage/MainPage';

function App() {
  const [appContextData, setAppContextData] = useState<AppContextInterface>({
    appContextData: {
      theme: "theme-dark"
    },
    setAppContextData: () => {}
  });
  console.log(appContextData, "appContextData :: ")
  return (
    <AppContext.Provider value={{appContextData, setAppContextData}}>
      <div className={`${appContextData.appContextData.theme}`}>
        <Container className='page-contain' fluid>
          <MainPage />
        </Container>
      </div>
      </AppContext.Provider>
  );
}

export default App;
