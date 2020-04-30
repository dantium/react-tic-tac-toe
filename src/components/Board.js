import React from "react";

import Row from "./Row";
import BoardHeader from "./BoardHeader";
import "./Board.css";

export default function Board({ player1, player2, grid, clickTile, show, gameNum }) {
  if (!show) {
    return null;
  }

  return (
    <div className="Board">
      <BoardHeader player1={player1} player2={player2} gameNum={gameNum} />

      <div className="Grid">
        {grid.map((rowArray, index) => (
          <Row
            key={index}
            row={rowArray}
            rindex={index}
            clickTile={clickTile}
          />
        ))}
      </div>
    </div>
  );
}
