/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type AmoCrmDocument = AmoCrm & Document;
export declare class AmoCrm {
}
export declare const AmoCrmSchema: import("mongoose").Schema<Document<AmoCrm, any, any>, import("mongoose").Model<Document<AmoCrm, any, any>, any, any, any>, {}, {}>;
