import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Car } from './car.model';

import { CarsDaoService } from './cars.dao.service';
import { DateUtilsService } from '../utils/date.utils.service';
import { ManifacturerRestService } from '../manifacturer/manifacturer.rest.service';
import { OwnerProcessService } from '../owner/owner.process.service';
import { CarRepository } from './car.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from './car.entity';
import { CarMapper } from './car.mapper';
import { Manifacturer } from 'src/manifacturer/Manifacturer.model';
import { ManifacturerRepository } from 'src/manifacturer/manifacturer.repository';

@Injectable()
export class CarsRestService {

  constructor(
    private readonly dateUtilsService: DateUtilsService,
    @InjectRepository(CarRepository) private readonly carRepository: CarRepository) {
  }

  createCar(car: Car): Promise<Car> {
    if (!this.dateUtilsService.isDateValide(car.firstRegistrationDate)) {
      throw new BadRequestException('firstRegistrationDate is not a valid date');
    }
    return this.carRepository.createCar(car);
  }

  getCars(): Promise<Car[]> {
    return this.carRepository.getCars(['owners', 'manifacturer']);
  }

  getCar(id: string): Promise<Car> {
    return this.carRepository.getCar(id).catch( e => {
      throw new NotFoundException('Could not find car with id:' + id);
    });
  }

  async updateCar(id: string, car: Car) {
    // check if resource exist before updating
    await this.getCar(id);
    return  this.carRepository.update(id, car);
  }

  deleteCar(id: string) {
    return this.carRepository.delete(id);
  }

  async getCarManifacturer(id: string): Promise<Manifacturer> {

    let manifacturer: Manifacturer;
    await this.carRepository.getCarWithRelations(id, ['manifacturer'])
    .then( car => manifacturer = car.manifacturer)
    .catch( e => {throw new NotFoundException('Could not find car with id:' + id); });

    if (!manifacturer) {
      throw new NotFoundException('This Car does not have a manifacturer :) ');
    }

    return manifacturer;
  }
}
