import React from "react";

import Button from "./Button";
import "./Finish.css"

export default function Footer({ show, playAgain, finshMessage, leaderBoard }) {
  if (!show) {
    return null;
  }

  return (
    <div className="Finish">
      <h1 className="Result">{finshMessage}</h1>
      <Button onClick={playAgain} title="Play Again" />
      {leaderBoard}
    </div>
  );
}
