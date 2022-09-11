import { CreateCarriersRouteDto } from "./dto/create-carriersRoute.dto";
import { CarriersRoute, CarriersRouteDocument } from "./schemas/carriersRoutes.schema";
import { Model } from 'mongoose';
import { UpdateCarriersRouteDto } from "./dto/update-carriersRoute.dto";
export declare class CarriersRoutesService {
    private carriersRouteModel;
    constructor(carriersRouteModel: Model<CarriersRouteDocument>);
    getAll(): Promise<CarriersRoute[]>;
    getById(id: string): Promise<CarriersRoute>;
    create(carriersRouteDto: CreateCarriersRouteDto): Promise<CarriersRoute>;
    remove(id: string): Promise<CarriersRoute>;
    update(id: string, carriersRouteDto: UpdateCarriersRouteDto): Promise<CarriersRoute>;
}
