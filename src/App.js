import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import PageFourOhFour from "./views/PageFourOhFour";
import "./App.css";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/toto" component={Pokemons} />
        <Route path="*" component={PageFourOhFour} />
      </Switch>
    </div>
  );
}

export default App;
