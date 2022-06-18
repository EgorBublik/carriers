import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request, RequestDocument } from './schemas/request.schema';
import { Model } from 'mongoose'

@Injectable()
export class RequestsService {
  
  constructor(@InjectModel(Request.name) private requestModel: Model<RequestDocument>) {

  }

  async getAll(): Promise<Request[]> {
    return this.requestModel.find().exec()
  }
  
  async create(createRequestDto: CreateRequestDto): Promise<Request> {
    const newRequest = new this.requestModel(createRequestDto)
    return newRequest.save()
  }

  async remove(id: string): Promise<Request> {
    return this.requestModel.findByIdAndRemove(id)
  }

  async update(id: string, requestDto: UpdateRequestDto): Promise<Request> {
    return this.requestModel.findByIdAndUpdate(id, requestDto, {new: true})
    
  }

}
