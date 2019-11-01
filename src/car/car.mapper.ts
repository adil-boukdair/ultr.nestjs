import { CarEntity } from './car.entity';
import { Car } from './car.model';
import { ManifacturerMapper } from '../manifacturer/manifacturer.mapper';
import { OwnerMapper } from '../owner/owner.mapper';

export class CarMapper {

    static toEntity(carDto: Car): CarEntity {
        const carEntity: CarEntity = new CarEntity();

        carEntity.price = carDto.price;
        // carEntity.firstRegistration = new Date(carDto.firstRegistrationDate);
        carEntity.manifacturer = ManifacturerMapper.toEntity(carDto.manifacturer);
        carEntity.owners = carDto.owners.map((owner) =>  OwnerMapper.toEntity(owner)) ;
        return carEntity;
    }
}
