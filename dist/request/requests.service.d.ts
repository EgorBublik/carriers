import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request, RequestDocument } from './schemas/request.schema';
import { Model } from 'mongoose';
export declare class RequestsService {
    private requestModel;
    constructor(requestModel: Model<RequestDocument>);
    getAll(): Promise<Request[]>;
    create(createRequestDto: CreateRequestDto): Promise<Request>;
    remove(id: string): Promise<Request>;
    update(id: string, requestDto: UpdateRequestDto): Promise<Request>;
}
