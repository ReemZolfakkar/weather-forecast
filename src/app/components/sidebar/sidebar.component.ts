import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherserviceService } from 'src/app/weatherservice.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  City:any;
  paragraph:number;
  constructor(private _Activatedroute:ActivatedRoute) {
      this.paragraph=1;
   }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.City = params.get('city'); 
    });
  }
  onclick(number:any)
  {
    if(number==1)
    {
      this.paragraph=1;
    }
    if(number==2)
    {
      this.paragraph=2;
    }
    if(number==3)
    {
      this.paragraph=3;
    }
   
  }
}
