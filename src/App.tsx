import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from './pages/Home';
import { CustomThemeProvider } from './context/ThemeProvider';
import { CountryProvider } from './context/CountryContext';

function App() {
  return (
    <CountryProvider>
      <CustomThemeProvider>
        <Router>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </CustomThemeProvider>
    </CountryProvider>


  );
}

export default App;
