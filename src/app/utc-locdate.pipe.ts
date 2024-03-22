import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'utcLocdate',
  standalone: true
})
export class UtcToDatePipe implements PipeTransform {

  transform(value: number, offset: number): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const utcTime = value * 1000; // Convert seconds to milliseconds
    const localTime = new Date(utcTime + offset * 1000); // Apply offset and convert to local time

    const dayName = days[localTime.getDay()];
    const monthName = months[localTime.getMonth()];
    const day = localTime.getDate();
    return `${dayName}, ${monthName} ${day}`;
  }
}
