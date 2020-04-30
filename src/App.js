import React, { useState } from "react";

import { GAMESTATE } from "./constants";

import Start from "./components/Start";
import Board from "./components/Board";

function App() {
  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");
  const [gameState, setGameState] = useState(GAMESTATE.waiting);
  const [grid, setGrid] = useState([]);
  const [player1Next, setplayer1Next] = useState(true);

  const startGame = (player1Name, player2Name) => {
    console.log("start game");
    const gridNum = 15;
    setplayer1(player1Name);
    setplayer2(player2Name);
    setGameState(GAMESTATE.started);
    setGrid(
      Array(gridNum)
        .fill(0)
        .map((a) => Array(gridNum).fill(0))
    );
    setplayer1Next(true);
  };

  const setTile = (row, col) => {
    // Update the grid field with a 1 or 2 depending on which player clicks
    console.log("set tile");
    grid[row][col] = player1Next ? 1 : 2;
    setGrid([...grid]);

    setplayer1Next(!player1Next);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Start startGame={startGame} show={gameState === GAMESTATE.waiting} />
      <Board
        grid={grid}
        player1={player1}
        player2={player2}
        clickTile={setTile}
        show={gameState !== GAMESTATE.waiting}
      />
    </div>
  );
}

export default App;
