/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceProvidersService } from './service-providers.service';

describe('Service: Providers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceProvidersService]
    });
  });

  it('should ...', inject([ServiceProvidersService], (service: ServiceProvidersService) => {
    expect(service).toBeTruthy();
  }));
});
