import './App.scss';
import React from 'react';
import {BoardView} from "./board/BoardView";

function App() {
    return (
        <div className="App">
            <h1>Otrio</h1>
            <BoardView />
        </div>
  );
}

export default App;
