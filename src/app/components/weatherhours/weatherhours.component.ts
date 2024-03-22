import { Component, Input, OnInit } from '@angular/core';
import { hourlyweather } from './weatherhour';
import {MatCardModule} from '@angular/material/card';
import {NgIf, NgFor, DatePipe,JsonPipe, PercentPipe} from '@angular/common'
import { UtcToDatePipe } from "../../utc-to-date.pipe";

@Component({
    selector: 'app-weatherhours',
    standalone: true,
    templateUrl: './weatherhours.component.html',
    styleUrl: './weatherhours.component.css',
    imports: [MatCardModule, NgFor, JsonPipe, DatePipe, UtcToDatePipe,PercentPipe]
})
export class WeatherhoursComponent implements OnInit {

  @Input() hourlyWeather : hourlyweather[] = []
 @Input() TimeOffset!: number
  constructor () {

  }

  ngOnInit() : void {
    
  }

}
