import { TestBed, inject } from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ServiceService]
  }));

  it('should be created', inject([ServiceService], (service: ServiceService) => {
    // const services: ServiceService = TestBed.get(ServiceService);
    expect(service).toBeTruthy();
  }))
});
