import { Module } from "@nestjs/common";
import { CarriersController } from "./carriers.controller";
import { CarriersService } from "./carriers.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Carrier, CarrierSchema } from "./schemas/carriers.schema";

@Module({
    providers: [CarriersService],
    controllers: [CarriersController],
    imports: [
        MongooseModule.forFeature([
            {name: Carrier.name, schema: CarrierSchema}
        ])
    ]
})

export class CarriersModule {

}