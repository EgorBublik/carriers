import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route, RouteDocument } from './schemas/route.schema';
import { Model } from 'mongoose';
export declare class RoutesService {
    private routeModel;
    constructor(routeModel: Model<RouteDocument>);
    getAll(): Promise<Route[]>;
    create(createRouteDto: CreateRouteDto): Promise<Route>;
    remove(id: string): Promise<Route>;
    update(id: string, routeDto: UpdateRouteDto): Promise<Route>;
}
