import { Injectable } from '@nestjs/common';
import { Car } from './car.model';
import { v4 as uuid } from 'uuid';
import { InMomoryDataBaseUtils } from '../utils/in.memory.db.utils.service';
import { GeneratorUtilsService } from '../utils/generator.utils.service';

@Injectable()
export class CarsDaoService {

  constructor(
    private inMemory: InMomoryDataBaseUtils,
    private readonly generatorUtilsService: GeneratorUtilsService,
  ) {}

  create(car: Car): Car {
    car.id = this.generatorUtilsService.uuid();
    this.inMemory.save(car);
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
