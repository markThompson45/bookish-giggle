import { Injectable } from '@angular/core';

import { ServiceProvider } from './service-provider';
import { SERVICE_PROVIDERS } from './mock-service-providers';

@Injectable()
export class ServiceProvidersService {
  serviceProviders: ServiceProvider[] = SERVICE_PROVIDERS;

  getServiceProviders(): Promise<ServiceProvider[]> {
    return Promise.resolve( this.serviceProviders );
  }

  constructor() {}
}
