import { Injectable, NotFoundException } from '@nestjs/common';
import { Manifacturer } from './Manifacturer.model';
import { ManifacturerDaoService } from './manifacturer.dao.service';
import { ManifacturerRepository } from './manifacturer.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ManifacturerRestService {

    constructor(
      private readonly manifacturerDaoService: ManifacturerDaoService,
      @InjectRepository(ManifacturerRepository) private readonly manifacturerRepository: ManifacturerRepository) {}

    createManifacturer(manifacturer: Manifacturer): Manifacturer {
        return this.manifacturerDaoService.create(manifacturer);
    }

    getManifacturer(id: string): Manifacturer {
        const manifacturer: Manifacturer = this.manifacturerDaoService.get(id);
        if (Object.entries(manifacturer).length === 0) {
          throw new NotFoundException('Could not find manifacturer with id:' + id);
        }
        return manifacturer;
      }

}
