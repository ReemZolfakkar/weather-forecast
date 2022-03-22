import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from './components/weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http:HttpClient) { }
  getweather(city: string):Observable <IWeather[]>{
        return this.http.get<IWeather[]>(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=147a618d4c94416d883104458222003&q=${city}&format=json&num_of_days=6&extra=isDayTime&tp=3&showlocaltime=yes`);

  }
 
}
