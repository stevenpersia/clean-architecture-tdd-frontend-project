import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import PokemonDetails from "./views/PokemonDetails";

const App = () => {
  return (
    <Router>
      <h1>Pokedex</h1>

      <Switch>
        <Route path="/:number">
          <PokemonDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
