import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { routing, appRoutingProviders } from './app.routes';
import { MiniCalendarComponent } from './mini-calendar/mini-calendar.component';
import { DayCalendarComponent } from './day-calendar/day-calendar.component';
import { PadNumberPipe } from './pad-number.pipe';
import { DateService } from './date.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiniCalendarComponent,
    DayCalendarComponent,
    PadNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
