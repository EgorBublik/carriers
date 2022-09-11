import { CarriersService } from './carriers.service';
import { CreateCarrierDto } from './dto/create-carrier.dto';
import { UpdateCarrierDto } from './dto/update-carrier.dto';
import { Carrier } from './schemas/carriers.schema';
export declare class CarriersController {
    private readonly carriersService;
    constructor(carriersService: CarriersService);
    getAll(): Promise<Carrier[]>;
    getOne(id: string): Promise<Carrier>;
    create(createCarrierDto: CreateCarrierDto): Promise<Carrier>;
    remove(id: string): Promise<Carrier>;
    update(updateCarrierDto: UpdateCarrierDto, id: string): Promise<Carrier>;
}
