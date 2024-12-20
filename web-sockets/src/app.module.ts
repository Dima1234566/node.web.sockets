/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }), MongooseModule.forRoot(process.env.DB_HOST), ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
