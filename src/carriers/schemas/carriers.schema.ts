import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type CarrierDocument = Carrier & Document

@Schema()
export class Carrier {
    @Prop()
    name: string

    @Prop()
    phone: string

    @Prop()
    email: string

    @Prop()
    description: string
    
    @Prop()
    route: string
}

export const CarrierSchema = SchemaFactory.createForClass(Carrier)