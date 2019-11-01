import { Module } from '@nestjs/common';
import { DateUtilsService } from './date.utils.service';
import { InMomoryDataBase } from '../in.memory.db.utils.service';
import { GeneratorUtilsService } from './generator.utils.service';

@Module({
    imports: [],
    controllers: [],
    providers: [DateUtilsService, GeneratorUtilsService],
    exports: [DateUtilsService, GeneratorUtilsService],
  })
  export class UtilsModule {}
