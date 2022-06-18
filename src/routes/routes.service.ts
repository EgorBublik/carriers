import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route, RouteDocument } from './schemas/route.schema';
import { Model } from 'mongoose'

@Injectable()
export class RoutesService {
  
  constructor(@InjectModel(Route.name) private routeModel: Model<RouteDocument>) {

  }

  async getAll(): Promise<Route[]> {
    return this.routeModel.find().exec()
  }
  
  async create(createRouteDto: CreateRouteDto): Promise<Route> {
    console.log(createRouteDto)
    const newRoute = new this.routeModel(createRouteDto)
    return newRoute.save()
  }

  async remove(id: string): Promise<Route> {
    return this.routeModel.findByIdAndRemove(id)
  }

  async update(id: string, routeDto: UpdateRouteDto): Promise<Route> {
    return this.routeModel.findByIdAndUpdate(id, routeDto, {new: true})
    
  }

}
