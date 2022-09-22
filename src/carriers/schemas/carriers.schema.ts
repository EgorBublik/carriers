import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from 'mongoose'

export type CarrierDocument = Carrier & Document

@Schema() 
export class ContactFace {
    @Prop()
    name: string

    @Prop()
    email: string

    @Prop()
    position: string

    @Prop()
    phone: []
} 

@Schema()
export class RouteCarrier {
    @Prop()
    typeRoute: string
   
    @Prop()
    countryDeparture: string
    
    @Prop()
    regionDeparture: string
    
    @Prop()
    cityDeparture: string
    
    @Prop()
    countryRoute: string
    
    @Prop()
    regionRoute: string
    
    @Prop()
    cityRoute: string
}

@Schema()
export class Carrier {
    @Prop()
    name: string

    @Prop([ContactFace])
    contactFace: ContactFace

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