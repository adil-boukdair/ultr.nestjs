import { Injectable } from '@nestjs/common';
import { Car } from 'src/car/car.model';
import { Manifacturer } from 'src/manifacturer/Manifacturer.model';
import { Owner } from 'src/owner/owner.model';

// This service will simulate a database
@Injectable()
export class InMomoryDataBaseUtils {

    database: Car[] = [];

  // Simulating in memory Database with a list of type car

  constructor() {
    // Create some Dummy data
    const manifacturer1: Manifacturer = {id : '4577d822-6ae2-4f77-b87e-e97bf0447b80', name : 'FORD', phone: '0662773390', siret: '802 954 785 00028'};
    const owner: Owner = {id: '4577d822-6ae2-4f77-b87e-e97bf0447c99', name: 'John Doe', purchaseDate: new Date() };
    const owners: Owner[] = [];
    owners.push(owner);
    const car1: Car = {id : '4577d822-6ae2-4f77-b87e-e97bf0447b97', price: 55000, firstRegistrationDate: new Date(), manifacturer: manifacturer1, owners: owners};
    const car2: Car = {id : '4577d822-6ae2-4f77-b87e-e97bf0447b98', price: 66000, firstRegistrationDate: new Date(),  manifacturer: manifacturer1 , owners: owners};

    this.database.push(car1);
    this.database.push(car2);
  }

  save(car: Car) {
    this.database.push(car);
  }

  // To Simulate manifacturer Table
  getManifacturerTable(): Manifacturer[] {
    return this.database.map((aCar) => aCar.manifacturer);
  }

}
