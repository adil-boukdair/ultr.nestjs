
import { EntityRepository, Repository, getConnection } from 'typeorm';
import { OwnerEntity } from './owner.entity';

@EntityRepository(OwnerEntity)
export class OwnerRepository extends Repository<OwnerEntity> {

    deleteOwners(date: Date) {
    return getConnection()
        .createQueryBuilder()
        .delete()
        .from(OwnerEntity)
        .where('purchaseDate < :d', {d: date})
        .execute();
    }

}
