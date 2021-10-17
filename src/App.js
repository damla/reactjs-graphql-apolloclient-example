import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/error-404";
import { CityProvider } from "./contexts/CityContext";

function App() {
  return (
    <CityProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={Error404} />
        </Switch>
      </Router>
    </CityProvider>
  );
}

export default App;
