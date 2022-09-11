/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type CarriersRouteDocument = CarriersRoute & Document;
export declare class CarriersRoute {
    departure: string;
    price: string;
    route: string;
}
export declare const CarriersRouteSchema: import("mongoose").Schema<Document<CarriersRoute, any, any>, import("mongoose").Model<Document<CarriersRoute, any, any>, any, any, any>, {}, {}>;
