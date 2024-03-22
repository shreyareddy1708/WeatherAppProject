import { Component, Input, OnInit } from '@angular/core';
import {NgIf, NgFor, DatePipe,JsonPipe} from '@angular/common'
import {MatCardModule, MatCard, MatCardTitle} from '@angular/material/card';
import { wetherday } from './wetherday';
import { UtcToDatePipe } from "../../utc-locdate.pipe";



@Component({
    selector: 'app-weatherdaily',
    standalone: true,
    templateUrl: './weatherdaily.component.html',
    styleUrl: './weatherdaily.component.css',
    imports: [NgIf, NgFor, DatePipe, JsonPipe, MatCardModule, MatCard, MatCardTitle, UtcToDatePipe]
})
export class WeatherdailyComponent implements OnInit {

  @Input() dailyWeather : wetherday[] = []
  @Input() TimeOffset!: number
  
  constructor () {

  }
  ngOnInit() : void {
    
  }
}
