import { Module } from '@nestjs/common';
import { UtilsModule } from '../utils/utils.module';
import { ManifacturerEntity } from './manifacturer.entity';
import { ManifacturerRepository } from './manifacturer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [UtilsModule, TypeOrmModule.forFeature([ManifacturerEntity, ManifacturerRepository])],
    controllers: [],
    providers: [],
    exports: [],
  })
  export class ManifacturerModule {}
