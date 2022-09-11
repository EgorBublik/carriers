import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarriersRoutesService } from './carriersRoutes.service';
import { CreateCarriersRouteDto } from './dto/create-carriersRoute.dto';
import { UpdateCarriersRouteDto } from './dto/update-carriersRoute.dto';
import { CarriersRoute } from './schemas/carriersRoutes.schema';

@Controller('carriersRoutes')
export class CarriersRoutesController {

    constructor (private readonly carriersRoutesService: CarriersRoutesService) {
    }

    @Get()
    getAll(): Promise<CarriersRoute[]> {
        return this.carriersRoutesService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id:string): Promise<CarriersRoute> {
        return this.carriersRoutesService.getById(id)
    }

    @Post()
    create(@Body() createCarriersRouteDto: CreateCarriersRouteDto): Promise<CarriersRoute> {
        return this.carriersRoutesService.create(createCarriersRouteDto)
    }
  

    @Delete(':id')
    remove(@Param('id') id:string): Promise<CarriersRoute> {
        return this.carriersRoutesService.remove(id)
    }
    
    @Put(':id')
    update(@Body() updateCarriersRouteDto: UpdateCarriersRouteDto, @Param('id') id: string): Promise<CarriersRoute> {
        return this.carriersRoutesService.update(id, updateCarriersRouteDto)
    }
}
