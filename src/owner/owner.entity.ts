import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CarEntity } from '../car/car.entity';

@Entity('OWNER')
export class OwnerEntity {

    @PrimaryGeneratedColumn('uuid') id: string;

    @Column('text') name: string;

    @Column('date') purchaseDate: Date;

    @ManyToOne(type => CarEntity, car => car.owners)
    car: CarEntity;
}
