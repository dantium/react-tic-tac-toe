import React, { useState } from "react";

import { GAMESTATE } from './constants';

import Start from "./components/Start";

function App() {
  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");
  const [gameState, setGameState] = useState(GAMESTATE.waiting);

  const startGame = (player1Name, player2Name) => {
    console.log('start game');
    setplayer1(player1Name);
    setplayer2(player2Name);
    setGameState(GAMESTATE.started);
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Start startGame={startGame} show={gameState === GAMESTATE.waiting} />
    </div>
  );
}

export default App;
