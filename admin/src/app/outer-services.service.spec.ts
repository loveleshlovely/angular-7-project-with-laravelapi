import { TestBed } from '@angular/core/testing';

import { OuterServicesService } from './outer-services.service';

describe('OuterServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OuterServicesService = TestBed.get(OuterServicesService);
    expect(service).toBeTruthy();
  });
});
