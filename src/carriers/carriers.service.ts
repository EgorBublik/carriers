import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateCarrierDto } from "./dto/create-carrier.dto";
import { Carrier, CarrierDocument } from "./schemas/carriers.schema";
import { Model } from 'mongoose'
import { UpdateCarrierDto } from "./dto/update-carrier.dto";


@Injectable()
export class CarriersService {

    constructor(@InjectModel(Carrier.name) private carrierModel: Model<CarrierDocument>) {

    }


    async getAll(): Promise<Carrier[]> {
        return this.carrierModel.find().exec()
    }

    async getById(id: string): Promise<Carrier> {
        return this.carrierModel.findById(id)
    }

    async create(carrierDto: CreateCarrierDto): Promise<Carrier> {
        const newCarrier = new this.carrierModel(carrierDto)
        return newCarrier.save()
    }

    async remove(id: string): Promise<Carrier> {
        return this.carrierModel.findByIdAndRemove()
    }

    async update(id: string, carrierDto: UpdateCarrierDto): Promise<Carrier> {
        return this.carrierModel.findByIdAndUpdate(id, carrierDto, {new: true})
    }
}