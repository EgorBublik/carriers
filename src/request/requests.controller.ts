import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './schemas/request.schema';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  create(@Body() createRequestDto: CreateRequestDto) : Promise<Request> {
    return this.requestsService.create(createRequestDto);
  }

  @Get()
  getAll() {
    return this.requestsService.getAll();
  }
  
  @Put(':id')
  update(@Body() updateRequestDto: UpdateRequestDto, @Param('id') id: string): Promise<Request> {
    return this.requestsService.update(id, updateRequestDto)
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestsService.remove(id);
  }
}
