/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type RouteDocument = Route & Document;
export declare class Stop {
    departure: string;
    destination: string;
}
export declare class Route {
    departure: string;
    destination: string;
    stop: Stop[];
}
export declare const RouteSchema: import("mongoose").Schema<Document<Route, any, any>, import("mongoose").Model<Document<Route, any, any>, any, any, any>, {}, {}>;
