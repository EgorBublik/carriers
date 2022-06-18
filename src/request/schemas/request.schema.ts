import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type RequestDocument = Request & Document

@Schema()
export class Request {
    @Prop()
    arrival_city: string
    
    @Prop()
    arrival_date: string
    
    @Prop()
    comment: string
    
    @Prop()
    currency: string
    
    @Prop()
    departure_city: string
    
    @Prop()
    departure_date: string
    
    @Prop()
    freight: string
    
    @Prop()
    name_cargo: string

    @Prop()
    weight_cargo: string

    @Prop()
    size_cargo: string

    @Prop([String])
    type: string[]


    // @Prop([Stop]) 
    // stop: Stop[]
}

export const RequestSchema = SchemaFactory.createForClass(Request)