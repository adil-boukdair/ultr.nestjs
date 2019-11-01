
import { EntityRepository, Repository } from 'typeorm';
import { ManifacturerEntity } from './manifacturer.entity';

@EntityRepository(ManifacturerEntity)
export class ManifacturerRepository extends Repository<ManifacturerEntity> {

  async getCar(id: string) {
      return await this.findOneOrFail(id);
  }

}
