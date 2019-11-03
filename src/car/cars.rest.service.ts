import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Car } from './car.model';
import { DateUtilsService } from '../utils/date.utils.service';
import { OwnerProcessService } from '../owner/owner.process.service';
import { CarRepository } from './car.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Manifacturer } from 'src/manifacturer/Manifacturer.model';
import { CarProcessService } from './car.process.service';
import {Constant} from '../utils/const';

@Injectable()
export class CarsRestService {

  constructor(
    private readonly dateUtilsService: DateUtilsService,
    @InjectRepository(CarRepository) private readonly carRepository: CarRepository,
    private readonly ownerProcessService: OwnerProcessService,
    private readonly carProcessService: CarProcessService) {
  }

  createCar(car: Car): Promise<Car> {
    if (!this.dateUtilsService.isDateValide(car.firstRegistrationDate)) {
      throw new BadRequestException('firstRegistrationDate is not a valid date');
    }
    return this.carRepository.createCar(car);
  }

  getCars(): Promise<Car[]> {
    // Trigger Processes to clean db and apply discounts
    // this should probably be in an other place
    this.ownerProcessService.removePastOwners();
    this.carProcessService.applyDiscount();
    return this.carRepository.getCars([Constant.RESOURCE.OWNERS, Constant.RESOURCE.MANFACTURER]);
  }

  getCar(id: string): Promise<Car> {
    return this.carRepository.getCar(id, [Constant.RESOURCE.OWNERS, Constant.RESOURCE.MANFACTURER]).catch( e => {
      throw new NotFoundException(Constant.CAR_NOT_FOUND + id);
    });
  }

  updateCar(id: string, car: Car) {
    // check if car Exist
    this.getCar(id);
    this.carRepository.update(id, car);
  }

  async deleteCar(id: string) {
    await this.carRepository.delete(id).then((res: any) => {
      if (res.affected === 0) {
        throw new NotFoundException(Constant.CAR_NOT_FOUND + id);
      }
    });
  }

  async getCarManifacturer(id: string): Promise<Manifacturer> {

    let manifacturer: Manifacturer;
    await this.carRepository.getCarWithRelations(id, [Constant.RESOURCE.MANFACTURER])
    .then( car => manifacturer = car.manifacturer)
    .catch( e => {throw new NotFoundException(Constant.CAR_NOT_FOUND + id); });

    if (!manifacturer) {
      throw new NotFoundException(Constant.CAR_WITH_NO_MANIFACTURER);
    }

    return manifacturer;
  }
}
