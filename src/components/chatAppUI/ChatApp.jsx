import React, { useEffect, useRef, useState } from 'react'

function ChatApp() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if(chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if(newMessage.trim()){
            const userMessage = {text: newMessage, sender: 'You'};
            setMessages([...messages, userMessage]);
            setNewMessage('');

            // simulate receiving a response after a short delay
            setTimeout(() => {
                const botResponse = {text: `Echo: ${newMessage}`, sender: 'Bot'};
                setMessages([...messages, userMessage,  botResponse])
            }, 1500);
        }
    };

  return (
    <div>
        <h2>Simple Chat App </h2>
        <div style={styles.container}>
            <div ref={chatContainerRef} style={styles.chatContainer}>
                {messages.map((msg, index) => (
                    <div key={index} style={msg.sender === 'You' ? styles.userMessage : styles.botMessage}>
                        <strong>{msg.sender}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <div style={styles.inputContainer}>
                <input 
                type='text'
                value={newMessage}
                onChange={handleInputChange}
                placeholder='Type your Message..'
                style={styles.input}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} 
                />
                <button onClick={handleSendMessage} style={styles.sendButton}>Send</button>
            </div>
        </div>
    </div>
  )
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '400px',
      width: '300px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      overflow: 'hidden',
    },
    chatContainer: {
      flexGrow: 1,
      padding: '10px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
    userMessage: {
      backgroundColor: '#DCF8C6',
      padding: '8px 12px',
      borderRadius: '10px',
      marginBottom: '8px',
      alignSelf: 'flex-end',
      maxWidth: '70%',
      wordBreak: 'break-word',
    },
    botMessage: {
      backgroundColor: '#E0E0E0',
      padding: '8px 12px',
      borderRadius: '10px',
      marginBottom: '8px',
      alignSelf: 'flex-start',
      maxWidth: '70%',
      wordBreak: 'break-word',
    },
    inputContainer: {
      display: 'flex',
      padding: '10px',
      borderTop: '1px solid #eee',
    },
    input: {
      flexGrow: 1,
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      marginRight: '10px',
    },
    sendButton: {
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '8px 15px',
      cursor: 'pointer',
    },
  };

export default ChatApp;