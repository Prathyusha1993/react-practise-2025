import React from 'react';
import './input.css';

function ReusableInput({ label, value, onChange, type, placeholder, className=''}) {
  return (
    <div>
        {label && <label>{label}</label>}
        <input className={`resuable-input ${className}`} type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default ReusableInput;