import React, { useState } from 'react'

function MessageInput({ onSend }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim()){
            onSend(text);
            setText('');
        }
    };
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default MessageInput;