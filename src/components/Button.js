import React from 'react'

import './Button.css'

export default function Button({title, onClick, hide}) {
  if (hide) {
    return null;
  }
  return (
    <button onClick={onClick} className="Button">{title}</button>
  )
}