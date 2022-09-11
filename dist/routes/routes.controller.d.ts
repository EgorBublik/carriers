import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './schemas/route.schema';
export declare class RoutesController {
    private readonly routesService;
    constructor(routesService: RoutesService);
    create(createRouteDto: CreateRouteDto): Promise<Route>;
    getAll(): Promise<Route[]>;
    update(updateRouteDto: UpdateRouteDto, id: string): Promise<Route>;
    remove(id: string): Promise<Route>;
}
