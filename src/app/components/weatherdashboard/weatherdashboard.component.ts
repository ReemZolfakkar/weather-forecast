import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { WeatherserviceService } from 'src/app/weatherservice.service';
@Component({
  selector: 'app-weatherdashboard',
  templateUrl: './weatherdashboard.component.html',
  styleUrls: ['./weatherdashboard.component.css']
})
export class WeatherdashboardComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute ) { }
  City:any
  ngOnInit(): void {    
      
  }


}
