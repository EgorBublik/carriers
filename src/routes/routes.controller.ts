import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './schemas/route.schema';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  // @Post()
  // create(@Body() createRouteDto: CreateRouteDto) {
  //   return this.routesService.create(createRouteDto);
  // }


  @Post()
  create(@Body() createRouteDto: CreateRouteDto) : Promise<Route> {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  getAll() {
    return this.routesService.getAll();
  }
  
  @Put(':id')
  update(@Body() updateRouteDto: UpdateRouteDto, @Param('id') id: string): Promise<Route> {
      return this.routesService.update(id, updateRouteDto)
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(id);
  }
}
