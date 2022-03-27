import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-nowweather',
  templateUrl: './nowweather.component.html',
  styleUrls: ['./nowweather.component.css']
})
export class NowweatherComponent implements OnInit {
  Cloudy:any;
  isDay:any;
  Rainy:any;
  Snowy:any;
  constructor() { }
  @Input() WeatherData: any;

  ngOnInit(): void {
    this.isCloudy()
    this.tConvert()
  }
  isCloudy(){
    if(this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Partly cloudy' || this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Cloudy' ||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Haze'||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Overcast' )
    this.Cloudy=true 
    else 
    this.Cloudy=false
    return this.Cloudy
  }
  isRainy(){
    if(this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Light sleet' || this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Shower In Vicinty' ||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Patchy rain possible'||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Light rain shower'||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Light rain drizzle'||this.WeatherData.data.current_condition[0].weatherDesc[0].value=="Rain Shower" )
    this.Rainy=true 
    else 
    this.Rainy=false
    return this.Rainy
  }
  isSnowy(){
    if(this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Light Snow Shower, Heavy Snow Shower' || this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Light snow showers' ||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Light snow'||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Blizzard'||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Blowing snow'||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Heavy snow'||this.WeatherData.data.current_condition[0].weatherDesc[0].value=='Moderate snow' )
    this.Snowy=true 
    else 
    this.Snowy=false
    return this.Snowy
  }
  tConvert () {
    let t=this.WeatherData.data.time_zone[0].localtime
    if(t>this.WeatherData.data.weather[0].astronomy[0].sunset)
    this.isDay=true 
    else 
    this.isDay=false
    return this.isDay
  }
  


}
