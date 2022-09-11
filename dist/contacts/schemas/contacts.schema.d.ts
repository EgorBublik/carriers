/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type ContactDocument = Contact & Document;
export declare class Contact {
    firstname: string;
    lastname: string;
    email: string;
    position: string;
    phone: string;
    carrier_id: string;
}
export declare const ContactSchema: import("mongoose").Schema<Document<Contact, any, any>, import("mongoose").Model<Document<Contact, any, any>, any, any, any>, {}, {}>;
