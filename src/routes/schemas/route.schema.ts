import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type RouteDocument = Route & Document

@Schema()
export class Stop{
    @Prop()
    departure: string

    @Prop()
    destination: string
    
} 

@Schema()
export class Route {
    @Prop()
    departure: string

    @Prop()
    destination: string
            
    @Prop([Stop]) 
    stop: Stop[]

}

export const RouteSchema = SchemaFactory.createForClass(Route)