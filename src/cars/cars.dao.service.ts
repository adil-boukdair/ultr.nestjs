import { Injectable } from '@nestjs/common';
import { Car } from './car.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsDaoService {

      // Simulating in memory Database with a list
  cars: Car[] = [];

  create(car: Car): Car {
    car.id = uuid.v4();
    this.cars.push(car);
    return {...car};
  }

  getAll(): Car[] {
      // the spread operator returns a copy of the array
      return [...this.cars];
  }

  get(id: string): Car {
    const car: Car = this.cars.find((aCar) => aCar.id === id);

    return {...car};
  }

}