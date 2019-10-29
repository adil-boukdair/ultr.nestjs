import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Car } from './car.model';

import { CarsDaoService } from './cars.dao.service';
import { DateUtilsService } from '../utils/date.utils.service';
import { ManifacturerService } from '../manifacturer/manifacturer.service';

@Injectable()
export class CarsService {

  constructor(
    private readonly carDaoService: CarsDaoService,
    private readonly dateUtilsService: DateUtilsService,
    private readonly manifacturerService: ManifacturerService) {

  }

  createCar(car: Car): Car {
    // TODO Catch exception
    car.firstRegistrationDate = new Date(car.firstRegistrationDate);
    if (!this.dateUtilsService.isDateValide(car.firstRegistrationDate)) {
      throw new BadRequestException('firstRegistrationDate is not a valid date');
    }
    if (car.manifacturer) {
      car.manifacturer = this.manifacturerService.createManifacturer(car.manifacturer);
    }
    this.carDaoService.create(car);
    return car;
  }

  getCars(): Car[] {
    return this.carDaoService.getAll();
  }

  getCar(id: string): Car {
    const car: Car = this.carDaoService.get(id);
    if (Object.entries(car).length === 0) {
      throw new NotFoundException('Could not find car with id:' + id);
    }
    return car;
  }

  updateCar(id: string, updatedCar: Car) {
    const car: Car = this.carDaoService.get(id);
    if (Object.entries(car).length !== 0) {
      car.price = updatedCar.price ? updatedCar.price : car.price;
      car.firstRegistrationDate = updatedCar.firstRegistrationDate ? new Date(updatedCar.firstRegistrationDate) : car.firstRegistrationDate;
      return this.carDaoService.update(id, car);
    } else {
      throw new NotFoundException('Could not find car with id: ' + id);
    }
  }

  deleteCar(id: string) {
    const car: Car = this.carDaoService.get(id);
    if (Object.entries(car).length !== 0) {
      return this.carDaoService.delete(id);
    } else {
      throw new NotFoundException('Could not find car with id: ' + id);
    }
  }

  getCarManifacturer(id: string) {
    const car: Car = this.getCar(id);
    if (Object.entries(car).length === 0) {
      throw new NotFoundException('Could not find car with id:' + id);
    }
    if (Object.entries(car.manifacturer).length === 0) {
      throw new NotFoundException('This Car does not have a manifacturer :) ');
    }
    return this.manifacturerService.getManifacturer(car.manifacturer.id);
  }
}
