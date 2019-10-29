import { Injectable, NotFoundException } from '@nestjs/common';
import { Manifacturer } from './Manifacturer.model';
import { ManifacturerDaoService } from './manifacturer.dao.service';

@Injectable()
export class ManifacturerService {

    constructor(private readonly manifacturerDaoService: ManifacturerDaoService) {}

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
