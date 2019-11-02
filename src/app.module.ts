import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './car/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CarsModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
