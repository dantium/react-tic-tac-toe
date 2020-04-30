import React, { useState } from "react";

import Button from "./Button";
import "./Start.css";

export default function Start({ show, startGame }) {
  const [player1, setPlayer1] = useState("Player 1");
  const [player2, setPlayer2] = useState("Player 2");
  const [gridNum, setGridNum] = useState(15);

  if (!show) {
    return null;
  }

  const clickStartGame = () => {
    startGame(player1, player2, Number(gridNum));
  };

  return (
    <div className="Start">
      <form>
        <h2>Enter Game Details</h2>
        <input
          type="text"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        <input
          type="text"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
        />
        <input
            type="number"
            value={gridNum} 
            onChange={e => setGridNum(e.target.value)}
        />
        <Button onClick={clickStartGame} title="Start Game!" />
      </form>
    </div>
  );
}
