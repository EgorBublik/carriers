import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateCarriersRouteDto } from "./dto/create-carriersRoute.dto";
import { CarriersRoute, CarriersRouteDocument } from "./schemas/carriersRoutes.schema";
import { Model } from 'mongoose'
import { UpdateCarriersRouteDto } from "./dto/update-carriersRoute.dto";


@Injectable()
export class CarriersRoutesService {

    constructor(@InjectModel(CarriersRoute.name) private carriersRouteModel: Model<CarriersRouteDocument>) {

    }


    async getAll(): Promise<CarriersRoute[]> {
        return this.carriersRouteModel.find().exec()
    }

    async getById(id: string): Promise<CarriersRoute> {
        return this.carriersRouteModel.findById(id)
    }

    async create(carriersRouteDto: CreateCarriersRouteDto): Promise<CarriersRoute> {
        const newCarriersRoute = new this.carriersRouteModel(carriersRouteDto)
        return newCarriersRoute.save()
    }

    async remove(id: string): Promise<CarriersRoute> {
        return this.carriersRouteModel.findByIdAndRemove(id)
    }

    async update(id: string, carriersRouteDto: UpdateCarriersRouteDto): Promise<CarriersRoute> {
        return this.carriersRouteModel.findByIdAndUpdate(id, carriersRouteDto, {new: true})
    }
}