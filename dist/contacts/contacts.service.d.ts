import { CreateContactDto } from "./dto/create-contact.dto";
import { Contact, ContactDocument } from "./schemas/contacts.schema";
import { Model } from 'mongoose';
import { UpdateContactDto } from "./dto/update-contact.dto";
export declare class ContactsService {
    private contactModel;
    constructor(contactModel: Model<ContactDocument>);
    getAll(): Promise<Contact[]>;
    getById(id: string): Promise<Contact>;
    create(contactDto: CreateContactDto): Promise<Contact>;
    remove(id: string): Promise<Contact>;
    update(id: string, contactDto: UpdateContactDto): Promise<Contact>;
}
