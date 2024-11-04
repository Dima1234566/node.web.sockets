/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Chat } from './chat.model';
import { InjectModel } from '@nestjs/mongoose';
import { MessageDto } from './dto/chat.message.dto';

@Injectable()
export class ChatService {
    constructor(
        @InjectModel(Chat.name) private chatModel: Chat,

    ) { }

    async saveMessage(message: MessageDto) {
        try {
            return await this.chatModel.create(message);

        } catch (error) {
            console.error(error);
        }

    }
    async takeAllMessages() {
        try {
            return await this.chatModel.find();
        } catch (error) {
            console.error(error);
        }

    }


    async deleteMassages() {
        try {
            return await this.chatModel.deleteMany()

        } catch (error) {
            console.error(error);
        }
    }













}
