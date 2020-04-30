import React from "react";

import {ReactComponent as CrossSVG} from '../cross.svg';
import {ReactComponent as CircleSVG} from '../circle.svg';
import "./Tile.css";

function Symbol({ value }) {
  return (value === 0) ? null : (value === 1) ? <CrossSVG/> : <CircleSVG/>;
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
