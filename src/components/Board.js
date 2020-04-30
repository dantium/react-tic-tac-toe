import React from "react";

import Row from "./Row";

export default function Board({ player1, player2, grid }) {
  return (
    <div>
      {grid.map((rowArray, index) => (
        <Row row={rowArray} rindex={index} />
      ))}
    </div>
  );
}
