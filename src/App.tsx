import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from './pages/Home';
import { CustomThemeProvider } from './context/ThemeProvider';

function App() {
  return (
    <CustomThemeProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </CustomThemeProvider>

  );
}

export default App;
