import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from './components/weather';
import { Subject } from 'rxjs'
import { CitiesService } from './cities.service'; 
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {
  
  private cityChange: Subject<string> = new Subject<string>();
  city$=this.cityChange.asObservable();
  constructor(private http:HttpClient, private citys:CitiesService,private router:Router) {
    
   }
  getweather(city: string):Observable <IWeather[]>{
        return this.http.get<IWeather[]>(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=147a618d4c94416d883104458222003&q=${city}&format=json&num_of_days=6&extra=isDayTime&tp=3&showlocaltime=yes`);

  }
  setcity(val:string){
    this.cityChange.next(val);
  }
  redirecthome(city:string){
    this.router.navigate(['/currentweather',city]);
  }
  

 
}
