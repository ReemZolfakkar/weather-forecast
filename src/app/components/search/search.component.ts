import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  @Input() Cities:any
  @Input() City:any
  @Output() selectedcity=new EventEmitter <string>();
  
  ngOnInit(): void {
  }
  OnCitySelected(val:any)
  {
    this.selectedcity.emit(val)
    console.log(this.selectedcity.emit(val))
    
  }
}
