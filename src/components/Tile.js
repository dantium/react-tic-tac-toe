import React from "react";

function Symbol({ value }) {
  return value === 0 ? null : value === 1 ? "X" : "O";
}

export default function Tile({ tile, index, rindex }) {
  return (
    <div className="Tile">
      <Symbol value={tile} />
    </div>
  );
}
