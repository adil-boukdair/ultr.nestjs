import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { ManifacturerEntity } from '../manifacturer/manifacturer.entity';
import { OwnerEntity } from '../owner/owner.entity';

@Entity('CAR')
export class CarEntity {

    @PrimaryGeneratedColumn('uuid') id: string;

    @Column('float') price: number;

    @Column('date') firstRegistrationDate: Date;

    @OneToOne(type => ManifacturerEntity, {cascade: true})
    @JoinColumn()
    manifacturer: ManifacturerEntity;

    @OneToMany(type => OwnerEntity, owner => owner.car, { cascade: true})
    owners: OwnerEntity[];

}
