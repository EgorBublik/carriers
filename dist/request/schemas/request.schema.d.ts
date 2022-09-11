/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type RequestDocument = Request & Document;
export declare class Request {
    countryArrival: string;
    regionArrival: string;
    cityArrival: string;
    dateArrival: string;
    comment: string;
    currency: string;
    countryDeparture: string;
    regionDeparture: string;
    cityDeparture: string;
    dateDeparture: string;
    freight: string;
    nameCargo: string;
    type: string[];
    weightCargo: string;
    sizeCargo: string;
}
export declare const RequestSchema: import("mongoose").Schema<Document<Request, any, any>, import("mongoose").Model<Document<Request, any, any>, any, any, any>, {}, {}>;
