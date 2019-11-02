import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
@Injectable()
export class DateUtilsService {

    readonly DATE_FORMAT: string = 'YYYY-DD-MM';

    isDateValide(date: Date): boolean {
        return moment(date, this.DATE_FORMAT, true).isValid();
    }

    subtractFromDate(date: Date, unit: moment.unitOfTime.Base, value: number): Date {
        return moment(date).subtract(value, unit).toDate();
    }

}
