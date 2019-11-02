import { Injectable } from '@nestjs/common';
import { CarRepository } from './car.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { DateUtilsService } from '../utils/date.utils.service';

@Injectable()
export class CarProcessService {

    readonly DISCOUNT_PERCENTAGE: number = 20;
    readonly MIN_MONTH: number = 12;
    readonly MAX_MONTH: number = 18;

    constructor(
        @InjectRepository(CarRepository) private readonly carRepository: CarRepository,
        private readonly dateUtilsService: DateUtilsService,
    ) {}

    applyDiscount() {
        const firstDate: Date = this.dateUtilsService.subtractFromDate(new Date(), 'months', this.MIN_MONTH);
        const secondDate: Date = this.dateUtilsService.subtractFromDate(new Date(), 'months', this.MAX_MONTH);

        this.carRepository.applyDiscount(this.DISCOUNT_PERCENTAGE, firstDate, secondDate);
    }
}
