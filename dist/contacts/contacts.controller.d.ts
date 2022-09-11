import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './schemas/contacts.schema';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    getAll(): Promise<Contact[]>;
    getOne(id: string): Promise<Contact>;
    create(createContactDto: CreateContactDto): Promise<Contact>;
    remove(id: string): Promise<Contact>;
    update(updateContactDto: UpdateContactDto, id: string): Promise<Contact>;
}
