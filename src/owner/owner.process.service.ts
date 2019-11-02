import { Injectable } from '@nestjs/common';
import { DateUtilsService } from '../utils/date.utils.service';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerRepository } from './owner.repository';

@Injectable()
export class OwnerProcessService {
    readonly MONTHS_REMOVE_THRESHOLD: number = 18;

    constructor(
        private dateUtilsService: DateUtilsService,
        @InjectRepository(OwnerRepository) private readonly ownerRepository: OwnerRepository) {}

    removePastOwners(): void {
        const dateToDeleteFrom: Date = this.dateUtilsService.subtractFromDate(new Date(), 'months', this.MONTHS_REMOVE_THRESHOLD);

        this.ownerRepository.deleteOwners(dateToDeleteFrom);
    }

}
