import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarriersModule } from './carriers/carriers.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CarriersModule, MongooseModule.forRoot('mongodb+srv://EgorBublik1:1q2w3e@cluster0.yqm8y.mongodb.net/Carriers?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
