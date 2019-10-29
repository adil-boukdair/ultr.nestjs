import { Module } from '@nestjs/common';
import { DateUtilsService } from './date.utils.service';
import { InMomoryDataBaseUtils } from './in.memory.db.utils.service';
import { GeneratorUtilsService } from './generator.utils.service';

@Module({
    imports: [],
    controllers: [],
    providers: [DateUtilsService, InMomoryDataBaseUtils, GeneratorUtilsService],
    exports: [DateUtilsService, InMomoryDataBaseUtils, GeneratorUtilsService],
  })
  export class UtilsModule {}
