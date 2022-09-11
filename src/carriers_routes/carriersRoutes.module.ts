import { Module } from "@nestjs/common";
import { CarriersRoutesController } from "./carriersRoutes.controller";
import { CarriersRoutesService } from "./carriersRoutes.service";
import { MongooseModule } from "@nestjs/mongoose";
import { CarriersRoute, CarriersRouteSchema } from "./schemas/carriersRoutes.schema";

@Module({
    providers: [CarriersRoutesService],
    controllers: [CarriersRoutesController],
    imports: [
        MongooseModule.forFeature([
            {name: CarriersRoute.name, schema: CarriersRouteSchema}
        ])
    ]
})

export class CarriersRoutesModule {

}