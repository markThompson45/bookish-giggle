import { Component, OnInit } from '@angular/core';

import { DateService } from '../date.service';
import { CalendarDay } from '../calendar-day';

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

  constructor( private dateService: DateService ) { }

  ngOnInit() {
    this.days = this.dateService.getDays( this.today );
    this.monthName = this.dateService.getMonth( this.today );
    this.year = this.today.getFullYear();
    this.dayOfMonth = this.today.getDate();
    this.dayNames = this.dateService.getDayNames();
    this.dayNames = this.dayNames.map( this.abbreviate );
  }

  abbreviate( x: string ): string {
    return x.substr(0, 2);
  }
}
