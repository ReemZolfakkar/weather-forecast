import { Component } from '@angular/core';
import { CurrentweatherComponent } from './components/currentweather/currentweather/currentweather.component';
import { WeatherserviceService } from 'src/app/weatherservice.service';
import { Country, State, City }  from 'country-state-city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CountryName:any;
  City:any;
  WeatherData:any;
  CountryCode:any;
  Cities:any;
  newselectedcity:any;
  constructor(private _WeatherserviceService:WeatherserviceService){

  }
  ngOnInit(){
   this.getCountryandCity();
   this.settime()

  }
  getCountryandCity(){
    fetch('http://ip-api.com/json')
    .then(function (response) {
        return response.json();
    })
    .then((payload) =>{
        console.log(payload)
        this.CountryName=payload.country
        this.City=payload.city
        this.CountryCode=payload.countryCode
      
        this._WeatherserviceService.getweather(this.City)
        .subscribe(data=>this.WeatherData=data);
      
        this.Cities=City.getCitiesOfCountry(this.CountryCode)
       
    });
  }
  settime(){
    let hr = new Date();
    this.WeatherData.isDay=(hr.getTime()>12);
  }
 setselectedcity(newcity:string){
  this._WeatherserviceService.getweather(newcity)
  .subscribe(data=>this.WeatherData=data);
 }
}
