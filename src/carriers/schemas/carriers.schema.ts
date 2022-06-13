import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type CarrierDocument = Carrier & Document

@Schema() 
export class ContactFace {
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
} 

@Schema()
export class RouteCarrier {
    @Prop()
    departure: string

    @Prop()
    price: string

    @Prop()
    route: string
}

// @Schema()
// export class CheckboxItem {
//     @Prop()
//     type: string
// }


@Schema()
export class Carrier {
    @Prop()
    name: string

    @Prop([ContactFace])
    contactFace: ContactFace

    @Prop()
    phone: string

    @Prop()
    email: string

    @Prop()
    description: string
    
    @Prop()
    type: []
    
    @Prop()
    contract: string

    @Prop([RouteCarrier])
    route: RouteCarrier[]
}

export const CarrierSchema = SchemaFactory.createForClass(Carrier)