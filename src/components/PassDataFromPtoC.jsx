import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function PassDataFromPtoC() {
    const [name, setName] = useState('Pinky');
    const [messageFromChild, setMessageFromChild] = useState('');

    const handleMessage = (message) => {
        setMessageFromChild(message);
    } 

  return (
    <div>
        <h2>Pass Data from Parent to Child</h2>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <ChildComponent name={name} sendMessage={handleMessage} />
        {messageFromChild && <p>Message From Child: {messageFromChild} </p>}
    </div>
  )
}

export default PassDataFromPtoC