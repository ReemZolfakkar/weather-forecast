import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { CurrentweatherComponent } from './components/currentweather/currentweather/currentweather.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherserviceService } from './weatherservice.service';
import { TodayweatherComponent } from './components/currentweather/todayweather/todayweather.component';
import { NowweatherComponent } from './components/currentweather/nowweather/nowweather.component';
import { WeeklyweatherComponent } from './components/currentweather/weeklyweather/weeklyweather.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherdashboardComponent } from './components/weatherdashboard/weatherdashboard.component';
import { FormsModule } from '@angular/forms';
import { CitiesService } from './cities.service';
const appRoutes:Routes=[
  {path:`WeatherDashBoard/:city`,component:WeatherdashboardComponent},
  {path:'currentweather/:city',component:CurrentweatherComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentweatherComponent,
    WeatherdashboardComponent,
    TodayweatherComponent,
    NowweatherComponent,
    WeeklyweatherComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherserviceService,CitiesService],
  bootstrap: [AppComponent],
  exports:[RouterModule ]
})
export class AppModule { }
