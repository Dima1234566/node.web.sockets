/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Model } from "mongoose";

export type ChatDocument = Chat & Document;

@Schema({ versionKey: false, timestamps: true })
export class Chat extends Model<Chat> {
    @ApiProperty({ example: '12312412qfasf3r', description: "text" })
    @Prop({ type: String })
    owner: string

    @ApiProperty({ example: 'photo', description: "url/path" })
    @Prop({ type: String })
    img: string

    @ApiProperty({ example: 'from vasya - aqwtrqwetqefxafsf', description: "text message" })
    @Prop({ type: String })
    text: string
}





export const ChatSchema = SchemaFactory.createForClass(Chat);
