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
    name: string;
    email: string;
    position: string;
    phone: [];
}
export declare class RouteCarrier {
    typeRoute: string;
    countryDeparture: string;
    regionDeparture: string;
    cityDeparture: string;
    countryRoute: string;
    regionRoute: string;
    cityRoute: string;
}
export declare class Carrier {
    name: string;
    contactFace: ContactFace;
    description: string;
    type: [];
    contract: string;
    route: RouteCarrier[];
}
export declare const CarrierSchema: import("mongoose").Schema<Document<Carrier, any, any>, import("mongoose").Model<Document<Carrier, any, any>, any, any, any>, {}, {}>;
