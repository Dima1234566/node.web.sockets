/* eslint-disable prettier/prettier */
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';  // Підключення правильного типу
import { ChatService } from './chat.service';
import { MessageDto } from './dto/chat.message.dto';





@WebSocketGateway({
  cors: {
    origin: '*',
  },
})

export class ChatGateway {
  constructor(private chatService: ChatService) { }
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('message')

  async handleMessage(@MessageBody() message: MessageDto): Promise<void> {
    await this.chatService.saveMessage(message);
    const allMessages = await this.chatService.takeAllMessages()
    this.server.emit("message", allMessages);


  }

  async handleConnection(client: Socket): Promise<void> {
    const allMessages = await this.chatService.takeAllMessages()
    this.server.emit("message", allMessages);
    // console.log(client.id, "client connected");
  }

  handleDisconnect(client: Socket): void {
    // console.log(client.id, "client disconnected");
  }



}



