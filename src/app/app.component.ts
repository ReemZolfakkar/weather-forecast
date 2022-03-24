import { Component } from '@angular/core';
import { CurrentweatherComponent } from './components/currentweather/currentweather/currentweather.component';
import { WeatherserviceService } from 'src/app/weatherservice.service';
import { CitiesService } from './cities.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private _WeatherserviceService:WeatherserviceService,private citysys:CitiesService){

  }
  ngOnInit(){
    this.citysys.getcity().subscribe((data)=>{this.City=data
    this.City=this._WeatherserviceService.redirecthome(this.City.city)
    this._WeatherserviceService.setcity(this.City.city)
    })
  }
  
 

 
}
