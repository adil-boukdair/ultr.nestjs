import { OwnerEntity } from './owner.entity';
import { Owner } from './owner.model';

export class OwnerMapper {

    static toEntity(owner: Owner): OwnerEntity {
        const ownerEntity: OwnerEntity = new OwnerEntity();

        ownerEntity.name = owner.name;
        ownerEntity.purchaseDate = new Date(owner.purchaseDate);

        return ownerEntity;
    }
}
