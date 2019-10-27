
import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { CarsDaoService } from './cars.dao.service';

@Module({
  imports: [InMemoryDBModule],
  controllers: [CarsController],
  providers: [CarsService, CarsDaoService],
})
export class CarsModule {}
