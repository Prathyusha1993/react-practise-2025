import React from 'react'

function ReusableButton({onClick, text, color}) {
    const buttonStyle= {
        backgroundColor: color || 'lightblue',
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

export default ReusableButton;


// one more reusable button component with different props:
function ReuseButton({ label, type='button', onClick, disabled=false, variant='primary'}){
  return(
    <button type={type}
    onClick={onClick}
    disabled={disabled}
    className={`btn btn-${variant}`}
    aria-disabled={disabled}>
      {label}
    </button>
  )
}

// export default ReuseButton;