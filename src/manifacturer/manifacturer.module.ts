import { Module } from '@nestjs/common';
import { ManifacturerDaoService } from './manifacturer.dao.service';
import { ManifacturerService } from './manifacturer.service';
import { UtilsModule } from '../utils/utils.module';
import { InMomoryDataBaseUtils } from '../utils/in.memory.db.utils.service';
import { GeneratorUtilsService } from '../utils/generator.utils.service';

@Module({
    imports: [UtilsModule],
    controllers: [],
    providers: [ManifacturerService, ManifacturerDaoService, InMomoryDataBaseUtils, GeneratorUtilsService],
    exports: [ManifacturerService, ManifacturerDaoService],
  })
  export class ManifacturerModule {}
