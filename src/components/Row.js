import React from "react";

export default function Row({ row, rindex }) {
  return (
    <div className="Row">
      {row.map((tile, index) => (
        <div>
          tile {tile} {rindex} {index}
        </div>
      ))}
    </div>
  );
}
