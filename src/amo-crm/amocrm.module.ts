import { forwardRef, Module } from '@nestjs/common';
import { AmoCrmService } from "./amocrm.service";
import { AmoCrmController } from "./amocrm.controller";
import { HttpModule } from "@nestjs/axios";
import { CarriersService } from 'src/carriers/carriers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Carrier, CarrierSchema } from 'src/carriers/schemas/carriers.schema';
import { CarriersModule } from 'src/carriers/carriers.module';

@Module({
    controllers: [AmoCrmController],
    providers: [AmoCrmService],
    imports: [
        HttpModule, CarriersModule, MongooseModule.forFeature([
            {name: Carrier.name, schema: CarrierSchema}
        ])
    ]
})

export class AmoCrmModule {}
