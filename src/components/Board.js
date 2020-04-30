import React from 'react'


export default function Board({ player1, player2, grid }) {
  return (
    <div>
      {grid.map((rowArray, index) => 
        <div>{rowArray}</div>
      )}
    </div>
  )
}
