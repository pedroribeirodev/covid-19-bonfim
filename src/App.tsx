import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
