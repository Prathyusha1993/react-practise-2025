import React, { useState } from 'react'
import ChatWindow from './ChatWindow';

function ChatAppMock() {
    const [currentUser, setCurrentUser] = useState('Alice');
  return (
    <div>
        <h3>Chat App Using MockAPI</h3>
        <label>
            Logged in as:
            <select onChange={(e) => setCurrentUser(e.target.value)} value={currentUser}>
                <option value='Alice'>Alice</option>
                <option value='Bob'>Bob</option>
            </select>
        </label>
        <ChatWindow currentUser={currentUser} />
    </div>
  )
}

export default ChatAppMock;