import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './schemas/contacts.schema';

@Controller('contacts')
export class ContactsController {

    constructor (private readonly contactsService: ContactsService) {
    }

    @Get()
    getAll(): Promise<Contact[]> {
        return this.contactsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id:string): Promise<Contact> {
        return this.contactsService.getById(id)
    }

    @Post()
    create(@Body() createContactDto: CreateContactDto): Promise<Contact> {
        return this.contactsService.create(createContactDto)
    }
  

    @Delete(':id')
    remove(@Param('id') id:string): Promise<Contact> {
        console.log(id)
        return this.contactsService.remove(id)
    }
    
    @Put(':id')
    update(@Body() updateContactDto: UpdateContactDto, @Param('id') id: string): Promise<Contact> {
        return this.contactsService.update(id, updateContactDto)
    }
}
