import { Injectable } from '@nestjs/common';
import { InMomoryDataBase } from '../in.memory.db.utils.service';
import { OwnerDaoService } from './owner.dao.service';
import { Owner } from './owner.model';
import { DateUtilsService } from '../utils/date.utils.service';

@Injectable()
export class OwnerProcessService {
    readonly MONTHS_REMOVE_THRESHOLD: number = 18;

    constructor(
        private ownerDaoService: OwnerDaoService,
        private dateUtilsService: DateUtilsService) {}

    removePastOwners(): void {
        const owners: Owner[] = this.ownerDaoService.getAll();
        const listOfOwnersIdToRemove: string[] = [];
        owners.forEach((owner) => {
            if (this.dateUtilsService.isDateBeforeNumberOfMonths(owner.purchaseDate, this.MONTHS_REMOVE_THRESHOLD)) {
                    listOfOwnersIdToRemove.push(owner.id);
            }
        });
        // Sending a list of id's to remove instead of removing record by record
        this.ownerDaoService.removeListOfOwners(listOfOwnersIdToRemove);
    }

}
