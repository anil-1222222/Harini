import { TestBed } from '@angular/core/testing';

import { CarUserServiceService } from './car-user-service.service';

describe('CarUserServiceService', () => {
  let service: CarUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
