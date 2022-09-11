import { Module } from '@nestjs/common';
import { CarriersModule } from './carriers/carriers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutesModule } from './routes/routes.module';
import { RequestsModule } from './request/requests.module';
import { AmoCrmModule } from './amo-crm/amocrm.module';


@Module({
  imports: [CarriersModule, AmoCrmModule, RoutesModule, RequestsModule, MongooseModule.forRoot('')],
  controllers: [],
  providers: [],
})
export class AppModule {}
