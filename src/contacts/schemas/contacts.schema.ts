import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type ContactDocument = Contact & Document

@Schema() 
export class Contact {
    @Prop()
    firstname: string

    @Prop()
    lastname: string

    @Prop()
    email: string

    @Prop()
    position: string

    @Prop()
    phone: string

    @Prop()
    carrier_id: string
} 

export const ContactSchema = SchemaFactory.createForClass(Contact)