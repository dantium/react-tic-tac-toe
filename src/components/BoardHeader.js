import React from "react";

import "./BoardHeader.css";

export default function BoardHeader({ player1, player2 }) {
  return (
    <div className="BoardHeader">
      <h1>{player1} X </h1>
      <h1>{player2} O </h1>
    </div>
  );
}
