import { Injectable } from '@nestjs/common';
import { Car } from './car/car.model';
import { Manifacturer } from './manifacturer/Manifacturer.model';
import { Owner } from './owner/owner.model';

// This service will simulate a database
@Injectable()
export class InMomoryDataBase {

    database: Car[] = [];

  // Simulating in memory Database with a list of type car

  onModuleInit() {
    this.initDB();
  }

  initDB() {
    // Create some Dummy data
    const manifacturer1: Manifacturer = {id : '4577d822-6ae2-4f77-b87e-e97bf0447b80', name : 'FORD', phone: '0662773390', siret: '802 954 785 00028'};
    const owner1: Owner = {id: '4577d822-6ae2-4f77-b87e-e97bf0447c99', name: 'John Doe', purchaseDate: new Date('2011-10-10') };
    const owner2: Owner = {id: '4577d822-6ae2-4f77-b87e-e97bf0447c98', name: 'Douglas Lyphe', purchaseDate: new Date('2019-10-30') };

    const car1: Car = {id : '4577d822-6ae2-4f77-b87e-e97bf0447b97', price: 55000, firstRegistrationDate: new Date(), manifacturer: manifacturer1, owners: [owner1]};
    const car2: Car = {id : '4577d822-6ae2-4f77-b87e-e97bf0447b98', price: 66000, firstRegistrationDate: new Date(),  manifacturer: manifacturer1 , owners: [owner2]};

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

  // To Simulate owner Table
  getOnwerTable(): Owner[] {
    const owners: Owner[] = [];
    this.database.forEach((aCar) => {
      owners.push(...aCar.owners);
    });
    return owners;
  }

  removeOwners(ownersId: string[]) {
    console.log('ownersId:', ownersId);

    const owners: Owner[] = [];

    this.database.splice(1, 1);
    console.log(this.database);
    // this.database.push(new Car('1', new Manifacturer(), 12, new Date(), owners));
    // for (let i = 0; i< this.database.length; i++) {
    //   this.database[i].id = '1';
    // }
    // this.database.forEach((aCar) => {
    //   aCar.id = '1';
    //   // aCar.owners = aCar.owners.filter((owner) => !ownersId.includes(owner.id));
    //   aCar.owners = [];
    // });
  
  }

}
