import { Component, OnInit } from '@angular/core';

import { DateService } from '../date.service';
import { CalendarDay } from '../calendar-day';
import { Month } from '../Month';

@Component({
  selector: 'app-mini-calendar',
  templateUrl: './mini-calendar.component.html',
  styleUrls: ['./mini-calendar.component.css']
})
export class MiniCalendarComponent implements OnInit {
  today: Date = new Date();
  days: CalendarDay[][];
  monthName: string;
  year: number;
  dayOfMonth: number;
  dayNames: string[];
  months: Month[];

  constructor( private dateService: DateService ) { }

  ngOnInit() {
    this.getDateInfo( this.today );
  }

  getDateInfo( date: Date ) {
    this.days = this.dateService.getDays( date );
    this.monthName = this.dateService.getMonth( date );
    this.year = date.getFullYear();
    this.dayOfMonth = date.getDate();
    this.dayNames = this.dateService.getDayNames();
    this.months = this.dateService.getMonths();
  }

  dayClicked(date: number){
    alert(date);
  }
}
