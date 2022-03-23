import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherserviceService } from 'src/app/weatherservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'weather_forcast';
  City:any
  constructor(private _Activatedroute:ActivatedRoute,private _WeatherserviceService:WeatherserviceService) {
    
   }

  ngOnInit(): void {
    this._WeatherserviceService.city$
    .subscribe(data=>this.City=data
    )
    
  }
  
  
  

}
