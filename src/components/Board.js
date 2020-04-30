import React from "react";

import Row from "./Row";
import "./Board.css";

export default function Board({ player1, player2, grid, clickTile }) {
  return (
    <div className="Board">
      {grid.map((rowArray, index) => (
        <Row key={index} row={rowArray} rindex={index} clickTile={clickTile} />
      ))}
    </div>
  );
}
