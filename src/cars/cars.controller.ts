
import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './car.model';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAll() {
    return this.carsService.getCars();
  }

  @Get(':id')
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

}
