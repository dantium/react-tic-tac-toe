import React, { useState } from 'react';

import { GAMESTATE } from './constants';

import Start from './components/Start';
import Board from './components/Board';

function App() {
  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");
  const [gameState, setGameState] = useState(GAMESTATE.waiting);
  const [grid, setGrid] = useState([]);

  const startGame = (player1Name, player2Name) => {
    console.log('start game');
    const gridNum = 15
    setplayer1(player1Name);
    setplayer2(player2Name);
    setGameState(GAMESTATE.started);
    setGrid(Array(gridNum).fill(0).map(a => Array(gridNum).fill(0)));
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Start startGame={startGame} show={gameState === GAMESTATE.waiting} />
      <Board grid={grid} player1={player1} player2={player2} />
    </div>
  );
}

export default App;
