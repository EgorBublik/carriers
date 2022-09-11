import { CreateCarrierDto } from "./dto/create-carrier.dto";
import { Carrier, CarrierDocument } from "./schemas/carriers.schema";
import { Model } from 'mongoose';
import { UpdateCarrierDto } from "./dto/update-carrier.dto";
export declare class CarriersService {
    private carrierModel;
    constructor(carrierModel: Model<CarrierDocument>);
    getAll(): Promise<Carrier[]>;
    getById(id: string): Promise<Carrier>;
    getByAmoId(amoId: string): Promise<Carrier>;
    getByAmoIds(amoIds: string[]): Promise<Carrier[]>;
    create(carrierDto: CreateCarrierDto): Promise<Carrier>;
    remove(id: string): Promise<Carrier>;
    update(id: string, carrierDto: UpdateCarrierDto): Promise<Carrier>;
}
