import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('MANIFACTURER')
export class ManifacturerEntity {

    @PrimaryGeneratedColumn('uuid') id: string;

    @Column('text') name: string;

    @Column('text') phone: string;

    @Column('text') siret: string;

}
