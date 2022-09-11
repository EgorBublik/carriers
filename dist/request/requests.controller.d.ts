import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './schemas/request.schema';
export declare class RequestsController {
    private readonly requestsService;
    constructor(requestsService: RequestsService);
    create(createRequestDto: CreateRequestDto): Promise<Request>;
    getAll(): Promise<Request[]>;
    update(updateRequestDto: UpdateRequestDto, id: string): Promise<Request>;
    remove(id: string): Promise<Request>;
}
