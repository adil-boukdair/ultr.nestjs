import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
@Injectable()
export class DateUtilsService {

    readonly DATE_FORMAT: string = 'YYYY-DD-MM';

    isDateValide(date: Date): boolean {
        return moment(date, this.DATE_FORMAT, true).isValid();
    }

    isDateBeforeNumberOfMonths(date: Date, numberOfMonths: number): boolean {

        const numberOfMonthsFromNow: moment.Moment = moment(new Date()).subtract(18, 'months');

        return moment(date).isBefore(numberOfMonthsFromNow);
    }

}
