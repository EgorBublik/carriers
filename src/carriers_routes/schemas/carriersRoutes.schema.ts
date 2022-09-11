import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type CarriersRouteDocument = CarriersRoute & Document

@Schema()
export class CarriersRoute {
    @Prop()
    departure: string

    @Prop()
    price: string

    @Prop()
    route: string
}

export const CarriersRouteSchema = SchemaFactory.createForClass(CarriersRoute)