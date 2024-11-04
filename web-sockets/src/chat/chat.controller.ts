/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Chat } from './chat.model';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService
    ) { }

    @ApiOperation({ summary: "" })
    @ApiResponse({ status: 200, type: Chat })
    @Get("/")
    async deleteAllMassages(): Promise<void> {
        return await this.chatService.deleteMassages();
    }

}
