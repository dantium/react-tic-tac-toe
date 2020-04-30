import React from "react";

import Tile from './Tile';

export default function Row({ row, rindex }) {
  return (
    <div className="Row">
      {row.map((tile, index) => (
        <Tile tile={tile} rindex={rindex} index={index} />
      ))}
    </div>
  );
}
