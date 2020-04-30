import React, { useState } from "react";

import { GAMESTATE } from "./constants";

import Start from "./components/Start";
import Board from "./components/Board";
import Finsh from "./components/Finsh";

function App() {
  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");
  const [gameState, setGameState] = useState(GAMESTATE.waiting);
  const [grid, setGrid] = useState([]);
  const [player1Next, setplayer1Next] = useState(true);
  const [finshMessage, setFinshMessage] = useState("");

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
    setFinshMessage("");
  };

  const setTile = (row, col) => {
    if (gameState === GAMESTATE.started) {
      // Update the grid field with a 1 or 2 depending on which player clicks
      console.log("set tile");
      grid[row][col] = player1Next ? 1 : 2;
      setGrid([...grid]);
      // check if win or draw and update game state
      const winner = checkWinner();
      let gridFull = grid.filter((a) => a.includes(0)).length === 0;
      let message = "";
      if (winner) {
        message = `${player1Next ? player1 : player2} won`;
        console.log("winner");
      } else if (gridFull) {
        message = `Draw`;
      }
      if (winner || gridFull) {
        setGameState(GAMESTATE.finshed);
        setFinshMessage(message);
      } else {
        setplayer1Next(!player1Next);
      }
    }
  };

  const checkWinner = (match = 5) => {
    /* Check for horizontal, verticle and diagonal matches
    for current player. */
    console.log("check winner");

    let player = player1Next ? 1 : 2;
    let row,
      col,
      diagonalRight,
      diagonalLeft = 0;

    for (const [rowIndex, rows] of grid.entries()) {
      for (const colIndex of rows.keys()) {
        // check row
        grid[rowIndex][colIndex] === player ? row++ : (row = 0);
        // check colum
        grid[colIndex][rowIndex] === player ? col++ : (col = 0);
        // check diagonals
        if (
          grid[colIndex][rowIndex] === player &&
          colIndex < grid.length - match + 1
        ) {
          diagonalRight = 0;
          diagonalLeft = 0;
          for (var z = 0; z < match; z++) {
            grid[colIndex + z][rowIndex + z] === player
              ? diagonalRight++
              : (diagonalRight = 0);
            grid[colIndex + z][rowIndex - z] === player
              ? diagonalLeft++
              : (diagonalLeft = 0);
          }
        }

        if (
          row === match ||
          col === match ||
          diagonalRight === match ||
          diagonalLeft === match
        ) {
          return true;
        }
      }
    }
  };

  const playAgain = () => {
    // Restart the game
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
      <Finsh
        show={gameState === GAMESTATE.finshed}
        playAgain={playAgain}
        finshMessage={finshMessage}
      />
    </div>
  );
}

export default App;
