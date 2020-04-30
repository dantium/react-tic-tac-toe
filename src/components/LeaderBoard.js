import React from "react";

import "./LeaderBoard.css";

export default function LeaderBoard({ gameResults }) {
  return (
    <div className="LeaderBoard">
      <h1>Leaderboard</h1>
      <div className="Results">
      {gameResults.map((result, index) => (
        <div key={index} className="">
          Game{index + 1}: {result}
        </div>
      ))}
      </div>
    </div>
  );
}
