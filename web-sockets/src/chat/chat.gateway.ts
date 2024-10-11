/* eslint-disable prettier/prettier */
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';  // Підключення правильного типу

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})

export class ChatGateway {
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('message')

  handleMessage(@MessageBody() message: string): void {
    console.log(message);
    this.server.emit("message", "belcome budy");
    this.server.emit("message", message);
  }

  handleConnection(client: Socket): void {
    console.log(client.id, "client connected");
  }

  handleDisconnect(client: Socket): void {
    console.log(client.id, "client disconnected");
  }



}



