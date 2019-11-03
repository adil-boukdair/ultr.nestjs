
import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarsRestService } from './cars.rest.service';
import { UtilsModule } from '../utils/utils.module';
import { DateUtilsService } from '../utils/date.utils.service';
import { ManifacturerModule } from '../manifacturer/manifacturer.module';
import { OwnerModule } from '../owner/owner.module';
import { CarEntity } from './car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarRepository } from './car.repository';
import { CarProcessService } from './car.process.service';

@Module({
  imports: [UtilsModule, ManifacturerModule, OwnerModule, TypeOrmModule.forFeature([CarEntity, CarRepository])],
  controllers: [CarController],
  providers: [CarsRestService, DateUtilsService, CarProcessService],
})
export class CarModule {}
