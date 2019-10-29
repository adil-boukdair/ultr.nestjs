
import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsDaoService } from './cars.dao.service';
import { UtilsModule } from '../utils/utils.module';
import { DateUtilsService } from '../utils/date.utils.service';
import { ManifacturerModule } from '../manifacturer/manifacturer.module';
import { ManifacturerDaoService } from '../manifacturer/manifacturer.dao.service';

@Module({
  imports: [UtilsModule, ManifacturerModule],
  controllers: [CarsController],
  providers: [CarsService, CarsDaoService, DateUtilsService, ManifacturerDaoService],
})
export class CarsModule {}
