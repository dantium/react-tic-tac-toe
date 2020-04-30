import React from "react";

import Tile from "./Tile";
import "./Row.css";

export default function Row({ row, rindex, clickTile }) {
  return (
    <div className="Row">
      {row.map((tile, index) => (
        <Tile
          key={index}
          tile={tile}
          rindex={rindex}
          index={index}
          clickTile={clickTile}
        />
      ))}
    </div>
  );
}
