import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessaggioService } from './messagio.service';
import { forwardRef, Inject } from '@nestjs/common';



@Controller('send-message')
export class MessagioController {

    constructor (@Inject(forwardRef(() => MessaggioService))private readonly messaggioService: MessaggioService) {}

    @Post('viber')
    async sendMessage(@Body() phones:string[]): Promise<any> {
        return this.messaggioService.sendMessage(phones)
    }
}