import { Module } from '@nestjs/common';
import { UtilsModule } from '../utils/utils.module';
import { OwnerProcessService } from './owner.process.service';
import { OwnerEntity } from './owner.entity';
import { OwnerRepository } from './owner.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [UtilsModule, TypeOrmModule.forFeature([OwnerEntity, OwnerRepository])],
    controllers: [],
    providers: [OwnerProcessService],
    exports: [OwnerProcessService],
  })
export class OwnerModule {}
