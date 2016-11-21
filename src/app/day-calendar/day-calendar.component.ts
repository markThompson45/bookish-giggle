import { Component, OnInit } from '@angular/core';

import { ServiceProvider } from '../service-provider';
import { ServiceProvidersService } from  '../service-providers.service';

@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.css']
})
export class DayCalendarComponent implements OnInit {
  serviceProviders: ServiceProvider[];
  providerNames: string[];

  constructor( private serviceProvidersService: ServiceProvidersService ) { }

  ngOnInit() {
    this.getServiceProviders();
  }

  getServiceProviders(): void {
    this.serviceProvidersService.getServiceProviders().then( serviceProviders => {
      this.serviceProviders = serviceProviders;
      this.getFullNames();
    });
  }

  getFullNames(): void {
    this.providerNames = this.serviceProviders.map( provider => provider.firstName + ' ' + provider.lastName );
  }

}
