import React from "react";

import "./Tile.css";

function Symbol({ value }) {
  return value === 0 ? null : value === 1 ? "X" : "O";
}

export default function Tile({ tile, index, rindex, clickTile }) {
  const setTile = () => {
    if (tile === 0) {
      clickTile(rindex, index);
    }
  };
  return (
    <div className="Tile" onClick={setTile}>
      <Symbol value={tile} />
    </div>
  );
}
