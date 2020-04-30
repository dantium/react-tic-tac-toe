import React, { useState} from 'react'

import './Start.css';


export default function Start() {
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');

  return (
    <div className="Start">
      <form>
      <h2>Enter Game Details</h2>
      <input
          type="text"
          value={player1}
          onChange={e => setPlayer1(e.target.value)}
      />
      <input 
          type="text"
          value={player2}
          onChange={e => setPlayer2(e.target.value)}
      />
      <button>Start Game!</button>
      </form>
    </div>
  )
}
