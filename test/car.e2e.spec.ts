import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CarModule } from '../src/car/car.module';
import { CarsRestService } from '../src/car/cars.rest.service';
import { INestApplication } from '@nestjs/common';

describe('Cars', () => {
  let app: INestApplication;
  const carsRestService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [CarModule],
    })
      .overrideProvider(CarsRestService)
      .useValue(carsRestService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET cars`, () => {
    return request(app.getHttpServer())
      .get('/cars')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
