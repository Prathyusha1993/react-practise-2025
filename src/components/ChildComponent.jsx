import React, { useState } from 'react'

function ChildComponent({name, sendMessage}) {
    const[childMessage, setChildMessage] = useState('');

    const handleChange = (e) => {
        setChildMessage(e.target.value);
    }

    const handleClick = () => {
        sendMessage(childMessage);
        setChildMessage('');
    }
  return (
    <div>
        <p>Name coming from Parent Component: {name}</p>
        <div>
            <input type='text' value={childMessage} onChange={handleChange} placeholder='Enter message for parent'/>
            <button onClick={handleClick}>Send to Parent</button>
        </div>
    </div>
  )
}

export default ChildComponent