import React, {  useEffect, useRef } from 'react'

function MessageLists({messages, currentUser}) {
    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current.current?.scrollIntoView({behavior: 'smooth'});
    }, [messages]);
    
  return (
    <div>
        {messages.map((msg, index) => (
            <div key={msg.id} className={`message ${msg.user === currentUser ? 'own' : ''}`}>
                <strong>{msg.user}</strong>: {msg.text}
            </div>
        ))}
        <div ref = {scrollRef}/>
    </div>
  )
}

export default MessageLists;