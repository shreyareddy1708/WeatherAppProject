import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRioData (): Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=-22.908333&lon=-43.196388&appid=482944e26d320a80bd5e4f23b3de7d1f&units=metric&exclude=minutely,alerts,current`)
  }
  
  getBejingData () : Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=39.916668&lon=116.383331&appid=482944e26d320a80bd5e4f23b3de7d1f&units=metric&exclude=minutely,alerts,current`)
  }
  getLAData () : Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=34.0549&lon=118.2426&appid=482944e26d320a80bd5e4f23b3de7d1f&units=metric&exclude=minutely,alerts,current`)
  }
  getCity (): Observable<any> {
    return this.http.get<any>('../assets/city.json')
  }
}
