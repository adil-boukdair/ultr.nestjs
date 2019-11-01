import { Module } from '@nestjs/common';
import { ManifacturerDaoService } from './manifacturer.dao.service';
import { ManifacturerRestService } from './manifacturer.rest.service';
import { UtilsModule } from '../utils/utils.module';
import { InMomoryDataBase } from '../in.memory.db.utils.service';
import { GeneratorUtilsService } from '../utils/generator.utils.service';
import { ManifacturerEntity } from './manifacturer.entity';
import { ManifacturerRepository } from './manifacturer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [UtilsModule, TypeOrmModule.forFeature([ManifacturerEntity, ManifacturerRepository])],
    controllers: [],
    providers: [ManifacturerRestService, ManifacturerDaoService, InMomoryDataBase, GeneratorUtilsService],
    exports: [ManifacturerRestService, ManifacturerDaoService],
  })
  export class ManifacturerModule {}
