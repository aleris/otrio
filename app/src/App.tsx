import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BoardTestPage } from "./board/BoardTestPage";
import { HomePage } from "./home/HomePage";
import { TestRingPage } from "./ring/TestRingPage";
import { GridTestPage } from "./grid/GridTestPage";
import { StartPage } from "./start/StartPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/ring">
            <TestRingPage />
          </Route>
          <Route path="/board">
            <BoardTestPage />
          </Route>
          <Route path="/grid">
            <GridTestPage />
          </Route>
          <Route path="/start">
            <StartPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
