import React from 'react'
import './button.css';

function ReusableButton({ label, onClick, type='button', style={}, className='' }) {
  return (
    <div>
        <button className={`resuable-button ${className}`} onClick={onClick} style={style} type={type} >{label}</button>
    </div>
  )
}

export default ReusableButton;