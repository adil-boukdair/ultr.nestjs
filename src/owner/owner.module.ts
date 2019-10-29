import { Module } from '@nestjs/common';
import { UtilsModule } from '../utils/utils.module';
import { GeneratorUtilsService } from '../utils/generator.utils.service';
import { InMomoryDataBaseUtils } from '../utils/in.memory.db.utils.service';
import { OwnerDaoService } from './owner.dao.service';
import { OwnerService } from './owner.service';

@Module({
    imports: [UtilsModule],
    controllers: [],
    providers: [OwnerService, OwnerDaoService, InMomoryDataBaseUtils, GeneratorUtilsService],
    exports: [OwnerService, OwnerDaoService],
  })
export class OwnerModule {}
