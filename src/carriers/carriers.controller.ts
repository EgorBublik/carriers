import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CarriersService } from './carriers.service';
import { CreateCarrierDto } from './dto/create-carrier.dto';
import { UpdateCarrierDto } from './dto/update-carrier.dto';
import { Carrier } from './schemas/carriers.schema';

@Controller('carriers')
export class CarriersController {

    constructor (private readonly carriersService: CarriersService) {
    }

    @Get()
    getAll(): Promise<Carrier[]> {
        return this.carriersService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id:string): Promise<Carrier> {
        return this.carriersService.getById(id)
    }

    @Post()
    create(@Body() createCarrierDto: CreateCarrierDto): Promise<Carrier> {
        return this.carriersService.create(createCarrierDto)
    }

    @Delete(':id')
    remove(@Param('id') id:string): Promise<Carrier> {
        return this.carriersService.remove(id)
    }
    
    @Put(':id')
    update(@Body() updateCarrierDto: UpdateCarrierDto, @Param('id') id: string): Promise<Carrier> {
        return this.carriersService.update(id, updateCarrierDto)
    }
}
