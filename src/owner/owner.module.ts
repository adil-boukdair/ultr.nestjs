import { Module } from '@nestjs/common';
import { UtilsModule } from '../utils/utils.module';
import { GeneratorUtilsService } from '../utils/generator.utils.service';
import { InMomoryDataBase } from '../in.memory.db.utils.service';
import { OwnerDaoService } from './owner.dao.service';
import { OwnerProcessService } from './owner.process.service';

@Module({
    imports: [UtilsModule],
    controllers: [],
    providers: [OwnerProcessService, OwnerDaoService, InMomoryDataBase, GeneratorUtilsService],
    exports: [OwnerProcessService, OwnerDaoService],
  })
export class OwnerModule {}
