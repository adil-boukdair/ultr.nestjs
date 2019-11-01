
import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsRestService } from './cars.rest.service';
import { CarsDaoService } from './cars.dao.service';
import { UtilsModule } from '../utils/utils.module';
import { DateUtilsService } from '../utils/date.utils.service';
import { ManifacturerModule } from '../manifacturer/manifacturer.module';
import { ManifacturerDaoService } from '../manifacturer/manifacturer.dao.service';
import { OwnerModule } from '../owner/owner.module';
import { InMomoryDataBase } from '../in.memory.db.utils.service';
import { CarEntity } from './car.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarRepository } from './car.repository';

@Module({
  imports: [UtilsModule, ManifacturerModule, OwnerModule, TypeOrmModule.forFeature([CarEntity, CarRepository])],
  controllers: [CarsController],
  providers: [CarsRestService, CarsDaoService, DateUtilsService, ManifacturerDaoService, InMomoryDataBase],
})
export class CarsModule {}
