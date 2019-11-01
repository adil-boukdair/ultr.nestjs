
import { EntityRepository, Repository } from 'typeorm';
import { CarEntity } from './car.entity';
import { Car } from './car.model';

@EntityRepository(CarEntity)
export class CarRepository extends Repository<CarEntity> {

  async createCar(carDto: Car) {
    return await this.save(carDto);
  }

  async getCars(relationsToLoad: string[]) {
      return await this.find({relations: relationsToLoad});
  }

  async getCar(id: string) {
      return await this.findOneOrFail(id);
  }

  async updateCar(id: string, carDto: Car) {
      return await this.update(id, carDto);
  }

  async deleteCar(id: string) {
      return await this.delete(id);
  }

  async getCarWithRelations(id: string, relationsToLoad: string[]) {
      return await this.findOne(id, {relations: relationsToLoad});
  }
}
