import { Injectable } from '@nestjs/common';
import { Car } from './car.model';
import { v4 as uuid } from 'uuid';
import { InMomoryDataBase } from '../in.memory.db.utils.service';
import { GeneratorUtilsService } from '../utils/generator.utils.service';
import { CarEntity } from './car.entity';
import { CarMapper } from './car.mapper';
import { InjectRepository  } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class CarsDaoService {

  constructor(
    private inMemory: InMomoryDataBase,
    private readonly generatorUtilsService: GeneratorUtilsService,
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>,
  ) {}

  create(car: Car): Car {
    const carEntity: CarEntity = CarMapper.toEntity(car);


   //  return await this.carRepository.save(carEntity);
    // car.id = this.generatorUtilsService.uuid();
    // this.inMemory.save(car);
    return {...car};
  }

  getAll(): Car[] {
      // the spread operator returns a copy of the array
      return [...this.inMemory.database];
  }

  get(id: string): Car {
    const car: Car = this.inMemory.database.find((aCar) => aCar.id === id);

    return {...car};
  }

  update(id: string, updatedCar: Car): Car {
    const index: number = this.inMemory.database.findIndex((aCar) => aCar.id === id);
    const car: Car = this.inMemory.database[index] = updatedCar;

    return {...car};
  }

  delete(id: string) {
    const index: number = this.inMemory.database.findIndex((aCar) => aCar.id === id);

    return this.inMemory.database.splice(index, 1);
  }

}
