import { Module } from '@nestjs/common';
import { CarriersModule } from './carriers/carriers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutesModule } from './routes/routes.module';
import { RequestsModule } from './request/requests.module';
import { AmoCrmModule } from './amo-crm/amocrm.module';
import { MessaggioModule } from './messaggio/messagio.module'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [CarriersModule, AmoCrmModule, RoutesModule, MessaggioModule, RequestsModule, AuthModule, UsersModule, MongooseModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
