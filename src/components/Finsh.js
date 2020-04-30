import React from "react";

import Button from "./Button";

export default function Footer({ show, playAgain, finshMessage }) {
  if (!show) {
    return null;
  }

  return (
    <div className="Finsh">
      <h1>{finshMessage}</h1>
      <Button onClick={playAgain} title="Play Again" />
    </div>
  );
}
