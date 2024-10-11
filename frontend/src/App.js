import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("ws://localhost:4000");

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("massage");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("massage", input);

      setInput("");
    }
  };
  console.log(messages);
  return (
    <div className="App">
      <header className="App-header">
        <h1>WebSocket Chat</h1>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className="chat-message">
              {msg}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </header>
    </div>
  );
}

export default App;
