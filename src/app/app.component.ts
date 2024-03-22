import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import {MatGridList, MatGridTile} from '@angular/material/grid-list'
import {MatButton} from '@angular/material/button'
import {MatTabsModule} from '@angular/material/tabs';
import { hourlyweather } from './components/weatherhours/weatherhour';
import { WeatherhoursComponent } from "./components/weatherhours/weatherhours.component";
import { DataService } from './service/data.service';
import { wetherday } from './components/weatherdaily/wetherday';
import { WeatherdailyComponent } from "./components/weatherdaily/weatherdaily.component";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AsyncPipe} from '@angular/common';
import { city } from './city';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MatButton,RouterOutlet, MatGridList, MatGridTile, MatTabsModule, WeatherhoursComponent, WeatherdailyComponent ,MatFormFieldModule,
      MatInputModule,
      MatAutocompleteModule,AsyncPipe]
})

export class AppComponent implements OnInit{
  title = 'weather-project';
  RioHoursArray:hourlyweather [] = [];
  RioDailyArray:wetherday [] = []
  RioTimeZoneOffset!: number;

  BejHoursArray:hourlyweather [] = [];
  BejDailyArray:wetherday [] = []
  BejTimeZoneOffset!: number;

  LAHoursArray:hourlyweather [] = [];
  LADailyArray:wetherday [] = []
  LATimeZoneOffset!: number;

  cityoptions!:city[]

  constructor (private data_service: DataService) {

  }
  displayFn(item: city): string {
    return item ? item.city_name : '';
  }
  onOptionSelected(event:any): void {
    console.log('Option selected:', event.option.value);
  }
  loadRioDat() {
    this.RioDailyArray = []
    this.RioHoursArray = []
    this.data_service.getRioData().subscribe({
      next: (data) =>{
        this.RioHoursArray = data.hourly
        this.RioDailyArray = data.daily
        this.RioTimeZoneOffset = data.timezone_offset
      }
     })
  }

  loadBejDat() {
    this.BejDailyArray=[]
    this.BejHoursArray=[]
    this.data_service.getBejingData().subscribe({
      next: (data) =>{
        this.BejHoursArray = data.hourly
        this.BejDailyArray = data.daily
        this.BejTimeZoneOffset = data.timezone_offset
      }
     })
  }

  loadlaDat() {
    this.LADailyArray = []
    this.LAHoursArray = []
    this.data_service.getLAData().subscribe({
      next: (data) =>{
        
        this.LAHoursArray = data.hourly
        this.LADailyArray = data.daily
        this.LATimeZoneOffset = data.timezone_offset
      }
     })
  }

  ngOnInit(): void {

     this.data_service.getCity().subscribe({
       next: (data) => {
        this.cityoptions = data
       }
     })
     this.data_service.getRioData().subscribe({
      next: (data) =>{
        this.RioHoursArray = data.hourly
        this.RioDailyArray = data.daily
        this.RioTimeZoneOffset = data.timezone_offset
      }
     })

     this.data_service.getBejingData().subscribe({
      next: (data) =>{
        this.BejHoursArray = data.hourly
        this.BejDailyArray = data.daily
        this.BejTimeZoneOffset = data.timezone_offset
      }
     })

     this.data_service.getLAData().subscribe({
      next: (data) =>{
        
        this.LAHoursArray = data.hourly
        this.LADailyArray = data.daily
        this.LATimeZoneOffset = data.timezone_offset
      }
     })
  }
}
