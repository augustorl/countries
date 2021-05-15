import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { GlobalStyle } from "./styles/GlobalStyle";
import { CustomThemeProvider } from './context/ThemeProvider';

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
      </Router>
    </CustomThemeProvider>

  );
}

export default App;
