import { Injectable } from '@nestjs/common';
import { InMomoryDataBase } from '../in.memory.db.utils.service';
import { Owner } from './owner.model';

@Injectable()
export class OwnerDaoService {

    constructor(private inMomoryDataBaseUtils: InMomoryDataBase) {}

    getAll(): Owner[] {
        return this.inMomoryDataBaseUtils.getOnwerTable();
    }

    removeListOfOwners(ownersId: string[]) {
        this.inMomoryDataBaseUtils.removeOwners(ownersId);
    }
}
