import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type AmoCrmDocument = AmoCrm & Document

@Schema()
export class AmoCrm {
    // @Prop()
    // departure: string

    // @Prop()
    // price: string

    // @Prop()
    // route: string
}

export const AmoCrmSchema = SchemaFactory.createForClass(AmoCrm)