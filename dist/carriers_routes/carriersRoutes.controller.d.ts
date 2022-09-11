import { CarriersRoutesService } from './carriersRoutes.service';
import { CreateCarriersRouteDto } from './dto/create-carriersRoute.dto';
import { UpdateCarriersRouteDto } from './dto/update-carriersRoute.dto';
import { CarriersRoute } from './schemas/carriersRoutes.schema';
export declare class CarriersRoutesController {
    private readonly carriersRoutesService;
    constructor(carriersRoutesService: CarriersRoutesService);
    getAll(): Promise<CarriersRoute[]>;
    getOne(id: string): Promise<CarriersRoute>;
    create(createCarriersRouteDto: CreateCarriersRouteDto): Promise<CarriersRoute>;
    remove(id: string): Promise<CarriersRoute>;
    update(updateCarriersRouteDto: UpdateCarriersRouteDto, id: string): Promise<CarriersRoute>;
}
