import { Module } from "@nestjs/common";
import { ContactsController } from "./contacts.controller";
import { ContactsService } from "./contacts.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Contact, ContactSchema } from "./schemas/contacts.schema";

@Module({
    providers: [ContactsService],
    controllers: [ContactsController],
    imports: [
        MongooseModule.forFeature([
            {name: Contact.name, schema: ContactSchema}
        ])
    ]
})

export class ContactsModule {

}