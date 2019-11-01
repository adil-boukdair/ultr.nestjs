
import { Controller, Get, Post, Body, Param, Patch, Delete, Put } from '@nestjs/common';
import { CarsRestService } from './cars.rest.service';
import { Car } from './car.model';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsRestService) {}

  @Get()
  getAll() {
    return this.carsService.getCars();
  }

  @Get(':id/')
  get(@Param('id') id: string) {
    return this.carsService.getCar(id);
  }

  @Post()
  create(@Body() car: Car) {
    return this.carsService.createCar(car);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() car: Car) {

    return this.carsService.updateCar(id, car);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.carsService.deleteCar(id);
  }

  @Get(':id/manifacturer')
  getManifacturer(@Param('id') id: string) {
    return this.carsService.getCarManifacturer(id);
  }

}
