import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherserviceService } from 'src/app/weatherservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router,private _WeatherserviceService:WeatherserviceService) { }
  @Input() Cities:any
  @Input() City:any
  @Output() selectedcity=new EventEmitter <string>();
  
  ngOnInit(): void {
  }
  OnCitySelected(val:any)
  {
    
    this.selectedcity.emit(val)
    this._WeatherserviceService.setcity(this.City)
    
  }
}
