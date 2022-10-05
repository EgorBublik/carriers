import { forwardRef, Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";
import { MongooseModule } from '@nestjs/mongoose';
import { MessagioController } from './messaggio.controller';
import { MessaggioService } from './messagio.service'


@Module({
    controllers: [MessagioController],
    providers: [MessaggioService],
    imports: [
        HttpModule
    ]
})

export class MessaggioModule {}
