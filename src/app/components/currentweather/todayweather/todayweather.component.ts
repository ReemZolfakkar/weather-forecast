import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-todayweather',
  templateUrl: './todayweather.component.html',
  styleUrls: ['./todayweather.component.css']
})
export class TodayweatherComponent implements OnInit {

  constructor() { }
  @Input() WeatherData: any;

  ngOnInit(): void {

    
  }
  tConvert (time:any) {
    time=time.split("0", 1)
    
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
    return time.join(''); // return adjusted time or original string
  
  }
}
