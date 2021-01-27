import './App.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {TestBoardPage} from "./board/TestBoardPage";
import {HomePage} from "./home/HomePage";
import {TestRingPage} from "./ring/TestRingPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/ring">
                        <TestRingPage />
                    </Route>
                    <Route path="/board">
                        <TestBoardPage />
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
