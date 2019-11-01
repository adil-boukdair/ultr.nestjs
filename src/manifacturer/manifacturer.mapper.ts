import { ManifacturerEntity } from './manifacturer.entity';
import { Manifacturer } from './Manifacturer.model';

export class ManifacturerMapper {

    static toEntity(manifacturerDto: Manifacturer): ManifacturerEntity {

        const manifacturerEntity: ManifacturerEntity = new ManifacturerEntity();
        manifacturerEntity.name = manifacturerDto.name;
        manifacturerEntity.phone = manifacturerDto.phone;
        manifacturerEntity.siret = manifacturerDto.siret;

        return manifacturerEntity;
    }
}
