import { Injectable } from '@nestjs/common';

@Injectable()
export class DateUtilsService {

    isDateValide(date: Date): boolean {
        return date.getTime() === date.getTime();
    }
}
