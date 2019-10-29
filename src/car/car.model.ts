import { Manifacturer } from '../manifacturer/Manifacturer.model';
import { Owner } from '../owner/owner.model';

export class Car {
    constructor(
        public id: string,
        public manifacturer: Manifacturer,
        public price: number,
        public firstRegistrationDate: Date,
        public owners: Owner[],
    ) {}
}
