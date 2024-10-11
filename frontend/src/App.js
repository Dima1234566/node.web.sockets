import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:3000');

    ws.current.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      ws.current.send(input);
      setInput('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WebSocket Chat</h1>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className="chat-message">{msg}</div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </header>
    </div>
  );
}

export default App;