const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 4000 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send("Welcome to the chat!");
});

console.log("WebSocket server is running on ws://localhost:4000");
