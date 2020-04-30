import React from "react";

export default function LeaderBoard({ gameResults }) {
  return (
    <div>
      <h1>Leaderboard</h1>
      {gameResults.map((result, index) => (
        <div key={index} className="">
          Game{index + 1}: {result}
        </div>
      ))}
    </div>
  );
}
