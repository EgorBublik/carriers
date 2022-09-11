import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type RequestDocument = Request & Document

@Schema()
export class Request {
    @Prop()
    countryArrival: string
    
    @Prop()
    regionArrival: string
    
    @Prop()
    cityArrival: string

    @Prop()
    dateArrival: string
    
    @Prop()
    comment: string
    
    @Prop()
    currency: string

    @Prop()
    countryDeparture: string
    
    @Prop()
    regionDeparture: string
    
    @Prop()
    cityDeparture: string
    
    @Prop()
    dateDeparture: string
    
    @Prop()
    freight: string
    
    @Prop()
    nameCargo: string
    
    
    @Prop([String])
    type: string[]

    @Prop()
    weightCargo: string
    
    @Prop()
    sizeCargo: string
}

export const RequestSchema = SchemaFactory.createForClass(Request)