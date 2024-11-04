/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { Chat, ChatSchema } from './chat.model';
import { ChatController } from './chat.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }), MongooseModule.forRoot(process.env.DB_HOST),
    MongooseModule.forFeature([{
      name: Chat.name,
      schema: ChatSchema,
      collection: "message"
    }])
  ],
  providers: [ChatService, ChatGateway],
  controllers: [ChatController]
})
export class ChatModule { }
