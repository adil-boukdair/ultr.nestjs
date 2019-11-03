import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CarModule, TypeOrmModule.forRoot()],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
