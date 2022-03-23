import { Component, OnInit,Input } from '@angular/core';
import { WeatherserviceService } from 'src/app/weatherservice.service';
import { Country, State, City }  from 'country-state-city';
import { ActivatedRoute ,Router} from '@angular/router';
import { CitiesService } from 'src/app/cities.service';
@Component({
  selector: 'app-currentweather',
  templateUrl: './currentweather.component.html',
  styleUrls: ['./currentweather.component.css']
})
export class CurrentweatherComponent implements OnInit {
  constructor(private _WeatherserviceService:WeatherserviceService,private citysys:CitiesService,private _Activatedroute:ActivatedRoute,private router:Router) { }
  WeatherData: any;
  City:any;
  currentcity:any
  Cities:any;
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.City = params.get('city'); 
      this.getCountryandCity()
  });
  this.citysys.getcity().subscribe((data)=>{
    this.currentcity=data
    this.Cities=City.getCitiesOfCountry(this.currentcity.countryCode)
  });
  }
  
  getCountryandCity(){
    this._WeatherserviceService.getweather(this.City)
    .subscribe(data=>{this.WeatherData=data
    });
  }
  setselectedcity(newcity:string){
    this.City=newcity
    this.router.navigate(['/currentweather',newcity])
   }
}
