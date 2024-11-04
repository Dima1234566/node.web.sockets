import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";
import axios from "axios";

const socket = io("ws://localhost:4000");

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages(message);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const deleteMessages = async () => {
    await axios.get("http://localhost:4000/chat");
    setMessages([]);
  };
  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("message", { owner: name, text: input });

      setInput("");
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <br />
        <h1>WebSocket Chat</h1>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className="chat-message">
              <h2> {msg.owner}</h2>
              <p> {msg.text}</p>
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
        <button onClick={deleteMessages}>Delete</button>
      </header>
    </div>
  );
}

export default App;
