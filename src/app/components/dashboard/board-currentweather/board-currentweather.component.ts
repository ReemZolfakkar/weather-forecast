import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherserviceService } from 'src/app/weatherservice.service';
@Component({
  selector: 'app-board-currentweather',
  templateUrl: './board-currentweather.component.html',
  styleUrls: ['./board-currentweather.component.css']
})
export class BoardCurrentweatherComponent implements OnInit {
  City:any;
  WeatherData:any;
  loader:any;
  constructor(private _WeatherserviceService:WeatherserviceService,private _Activatedroute:ActivatedRoute) { 
   
  }
 
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.City = params.get('city'); 
      this.loader=false;
      this.getCountryandCity()
  });
 
  }
  getCountryandCity(){
    
    this._WeatherserviceService.getweather(this.City)
    .subscribe((data)=>{  
      this.WeatherData=data
      this.loader=true
    });
  }
    
}
