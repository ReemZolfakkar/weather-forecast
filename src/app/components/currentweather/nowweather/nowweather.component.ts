import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-nowweather',
  templateUrl: './nowweather.component.html',
  styleUrls: ['./nowweather.component.css']
})
export class NowweatherComponent implements OnInit {
  Cloudy:any;
  isDay:any;
  constructor() { }
  @Input() WeatherData: any;

  ngOnInit(): void {
    this.isCloudy()
    this.tConvert()
  }
  isCloudy(){
    if(this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Partly cloudy' || this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Cloudy' ||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Haze' )
    this.Cloudy=true 
    else 
    this.Cloudy=false
    return this.Cloudy
  }
  tConvert () {
    let t=this.WeatherData.data.time_zone[0].localtime
    t=t.split(" ")
    let time=t[1]
    time=time.split(":",1)
    if (time==" ")
    time="12:00"
    else
    {
    if(time<10)
    {
    time=`0${time}:00`
    }
    else
    time=`${time}:00`
   }
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours

    }
    time=time.join(''); // return adjusted time or original string
    if(time.indexOf('P')==-1)
    this.isDay=true 
    else 
    this.isDay=false
    return this.isDay
  }
  


}
