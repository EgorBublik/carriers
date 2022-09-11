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

    async getByAmoId(amoId: string): Promise<Carrier> {
        return await this.carrierModel.findOne({amoId})
    }

    async getByAmoIds(amoIds: string[]): Promise<Carrier[]> {
        return await Promise.all(amoIds.map(this.getByAmoId))
    }

    async create(carrierDto: CreateCarrierDto): Promise<Carrier> {
        console.log(carrierDto)
        const newCarrier = new this.carrierModel(carrierDto)
        return newCarrier.save()
    }

    async remove(id: string): Promise<Carrier> {
        return this.carrierModel.findByIdAndRemove(id)
    }

    async update(id: string, carrierDto: UpdateCarrierDto): Promise<Carrier> {
        return this.carrierModel.findByIdAndUpdate(id, carrierDto, {new: true})
    }
}