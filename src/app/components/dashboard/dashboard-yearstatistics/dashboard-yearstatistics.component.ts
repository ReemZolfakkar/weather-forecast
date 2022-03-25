import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherserviceService } from 'src/app/weatherservice.service';

@Component({
  selector: 'app-dashboard-yearstatistics',
  templateUrl: './dashboard-yearstatistics.component.html',
  styleUrls: ['./dashboard-yearstatistics.component.css']
})
export class DashboardYearstatisticsComponent implements OnInit {
  City:any;
  WeatherData:any;
  data:any;
  
  constructor(private _WeatherserviceService:WeatherserviceService,private _Activatedroute:ActivatedRoute) { 
  
  }
 
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.City = params.get('city'); 
      this.getCountryandCity()
  });
 
  }
  getCountryandCity(){
    
    this._WeatherserviceService.getweather(this.City)
    .subscribe((data)=>{this.WeatherData=data
      this.data=this.WeatherData.data.ClimateAverages[0].month;
     
    });
  }

}
