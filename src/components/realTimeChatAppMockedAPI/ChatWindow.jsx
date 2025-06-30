import React, { useEffect, useState } from 'react'
import { fetchMessages, sendMessage } from './mockApi';
import MessageLists from './MessageLists';
import MessageInput from './MessageInput';

function ChatWindow({ currentUser }) {
    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        const allMsgs = await fetchMessages();
        setMessages(allMsgs);
    }

    useEffect(() => {
        getMessages();
        const interval = setInterval(getMessages, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = async (text) => {
        await sendMessage(currentUser, text);
        getMessages();
    };

  return (
    <div>
        <MessageLists messages={messages} currentUser={currentUser}/>
        <MessageInput onSend={handleSendMessage} />
    </div>
  )
}

export default ChatWindow;