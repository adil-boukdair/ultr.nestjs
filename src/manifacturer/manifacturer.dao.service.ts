import { Injectable } from '@nestjs/common';
import { Manifacturer } from './Manifacturer.model';
import { v4 as uuid } from 'uuid';
import { InMomoryDataBaseUtils } from '../utils/in.memory.db.utils.service';
import { GeneratorUtilsService } from '../utils/generator.utils.service';

@Injectable()
export class ManifacturerDaoService {

    constructor(
        private inMemory: InMomoryDataBaseUtils,
        private generatorUtilsService: GeneratorUtilsService,
      ) {}

    create(manifactruer: Manifacturer): Manifacturer {
        // To simplify the database model i save every thing Car Manifactruer
        // in InMomoryDataBaseUtils.database, I use this method to only generate the ID
        manifactruer.id = this.generatorUtilsService.uuid();
        return {...manifactruer};
    }

    get(id: string): Manifacturer {
        const manifactruer: Manifacturer = this.inMemory.getManifacturerTable().find((aManifacturer) => aManifacturer.id === id);

        return {...manifactruer};
      }
}
