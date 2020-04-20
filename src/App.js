import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Cakes from "./Pages/Cakes";
import IceCream from "./Pages/IceCream";

// COMPONENTS
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cakes">
            <Cakes />
          </Route>
          <Route path="/icecream">
            <IceCream />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
