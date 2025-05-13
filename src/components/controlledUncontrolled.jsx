import React, { useReducer, useRef, useState } from 'react'

function controlledUncontrolled() {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
  return (
    <div>
        <input value={value} onChange={() => setValue(e.target.value)} />
        <div>
            <input ref={inputRef} />
            <button onClick={() => alert(inputRef.current.value)}>Submit</button>
        </div>
    </div>
  )
}

export default controlledUncontrolled