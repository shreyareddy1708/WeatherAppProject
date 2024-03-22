import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcToDate',
  standalone: true
})
export class UtcToDatePipe implements PipeTransform {

  transform(value: number, offset: number): string {
    const utcTime = value * 1000; // Convert seconds to milliseconds
    const localTime = new Date(utcTime + offset * 1000); // Apply offset and convert to local time
    let hours: number = 0
    hours = localTime.getHours() >12 ? localTime.getHours() -12 : localTime.getHours()

    return hours.toString()   + " " +this.formatAMPM(localTime);
  }
  formatAMPM(date:Date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    
    return ampm;
  }
  
}
