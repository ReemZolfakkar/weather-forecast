import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { CurrentweatherComponent } from './components/currentweather/currentweather/currentweather.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherserviceService } from './weatherservice.service';
import { TodayweatherComponent } from './components/currentweather/todayweather/todayweather.component';
import { NowweatherComponent } from './components/currentweather/nowweather/nowweather.component';
import { WeeklyweatherComponent } from './components/currentweather/weeklyweather/weeklyweather.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentweatherComponent,
    TodayweatherComponent,
    NowweatherComponent,
    WeeklyweatherComponent,
    SearchComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
