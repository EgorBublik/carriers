import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateContactDto } from "./dto/create-contact.dto";
import { Contact, ContactDocument } from "./schemas/contacts.schema";
import { Model } from 'mongoose'
import { UpdateContactDto } from "./dto/update-contact.dto";


@Injectable()
export class ContactsService {

    constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {

    }

    async getAll(): Promise<Contact[]> {
        return this.contactModel.find().exec()
    }

    async getById(id: string): Promise<Contact> {
        return this.contactModel.findById(id)
    }

    async create(contactDto: CreateContactDto): Promise<Contact> {
        const newContact = new this.contactModel(contactDto)
        return newContact.save()
    }

    async remove(id: string): Promise<Contact> {
        return this.contactModel.findByIdAndRemove(id)
    }

    async update(id: string, contactDto: UpdateContactDto): Promise<Contact> {
        return this.contactModel.findByIdAndUpdate(id, contactDto, {new: true})
    }
}