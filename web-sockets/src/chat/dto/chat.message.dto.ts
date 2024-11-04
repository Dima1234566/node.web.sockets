/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";

export class MessageDto {

    @ApiProperty({ example: '12312412qfasf3r', description: "text" })
    owner: string

    @ApiProperty({ example: 'photo', description: "url/path" })
    img?: string

    @ApiProperty({ example: 'from vasya - aqwtrqwetqefxafsf', description: "text message" })
    text: string

}