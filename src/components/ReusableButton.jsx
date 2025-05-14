import React from 'react'

function ReusableButton({onClick, text, color}) {
    const buttonStyle= {
        backgroundColor: color,
        border: 'none',
        padding: '10px 20px',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px'
    }
  return (
    <div>
        <button onClick={onClick} style={buttonStyle}>{text}</button>
    </div>
  )
}

export default ReusableButton