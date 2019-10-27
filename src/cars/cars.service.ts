import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './car.model';

import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { CarsDaoService } from './cars.dao.service';

@Injectable()
export class CarsService {

  constructor(private readonly carDaoService: CarsDaoService) {

  }

  createCar(car: Car): Car {
    // TODO Catch exception
    car.firstRegistrationDate = new Date(car.firstRegistrationDate);
    this.carDaoService.create(car);
    return car;
  }

  getCars(): Car[] {
    return this.carDaoService.getAll();
  }

  getCar(id: string): Car {
    const car: Car = this.carDaoService.get(id);

    if (!car) {
      throw new NotFoundException('Could not find product.');
    }
    return car;
  }

  updateCar(id: string, updatedCar: Car) {
    const car: Car = this.carDaoService.get(id);
    car.price = updatedCar.price;
    return car;
  }
}
