/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type CarrierDocument = Carrier & Document;
export declare class ContactFace {
    firstname: string;
    lastname: string;
    email: string;
    position: string;
    phone: string;
}
export declare class RouteCarrier {
    departure: string;
    price: string;
    route: string;
}
export declare class Carrier {
    name: string;
    contactFace: ContactFace;
    phone: string;
    email: string;
    description: string;
    type: [];
    contract: string;
    route: RouteCarrier[];
}
export declare const CarrierSchema: import("mongoose").Schema<Document<Carrier, any, any>, import("mongoose").Model<Document<Carrier, any, any>, any, any, any>, {}, {}>;
