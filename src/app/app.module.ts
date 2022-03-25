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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BoardCurrentweatherComponent } from './components/dashboard/board-currentweather/board-currentweather.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';
import { DashboardWeekweatherComponent } from './components/dashboard/dashboard-weekweather/dashboard-weekweather.component';
import { LinechartComponent } from './components/dashboard/linechart/linechart.component';
import { DashboardYearstatisticsComponent } from './components/dashboard/dashboard-yearstatistics/dashboard-yearstatistics.component';
const appRoutes:Routes=[
  {path:'WeatherDashBoard/:city',component:WeatherdashboardComponent},
  {path:'currentweather/:city',component:CurrentweatherComponent},
  {path:'WeatherDashBoard/WeekWeather/:city',component:DashboardWeekweatherComponent}
  
  
  
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
    SearchComponent,
    SidebarComponent,
    BoardCurrentweatherComponent,
    ChartComponent,
    DashboardWeekweatherComponent,
    LinechartComponent,
    DashboardYearstatisticsComponent
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
