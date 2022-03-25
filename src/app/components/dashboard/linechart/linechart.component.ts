import { Component, OnInit,ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import * as d3Shape from 'd3';
import * as d3Array from 'd3';
import * as d3Axis from 'd3';
import { WeatherserviceService } from 'src/app/weatherservice.service';
@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {
  currentRate = 8;
  title = 'D3 Barchart with Angular 10';
  width: number;
  height: number;
  margin = { top: 20, right: 20, bottom: 30, left: 40 };
  x: any;
  y: any;
  svg: any;
  g: any;
  data:any;
  WeatherData:any;
  City:any;
  constructor(private _WeatherserviceService:WeatherserviceService,private _Activatedroute:ActivatedRoute) {
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    
   }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.City = params.get('city'); 
      this.getCountryandCity()
  });
  }
  getCountryandCity(){
    this._WeatherserviceService.getweather(this.City)
    .subscribe(data=>{this.WeatherData=data
      this.data=this.WeatherData.data.weather
      this.initSvg();
      this.initAxis();
      this.drawAxis();
      this.drawBars();
    })};
  
     obj = {
      0: 'Bar 1',
      1: 'Bar 2',
      2: 'Bar 3',
      3: 'Bar 4',
      4: 'Bar 5',
      5: 'Bar 6',
    };
    initSvg() {
      this.svg = d3.select('#barChart')
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', '0 0 900 511');
      this.g = this.svg.append('g')
        .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }
  
    initAxis() {
      this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
      this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
      this.x.domain(this.data.map((d:any) => d.date));
      this.y.domain([0, d3Array.max(this.data, (d:any) => d.avgtempC)]);
    }
  
    drawAxis() {
      this.g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + this.height + ')')
        .call(d3Axis.axisBottom(this.x));
      this.g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3Axis.axisLeft(this.y))
        .append('text')
        .attr('class', 'axis-title')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Frequency');
    }
  
    drawBars() {
      this.g.selectAll('.bar')
        .data(this.data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d:any) => this.x(d.date))
        .attr('y', (d:any) => this.y(d.avgtempC))
        .attr('width', this.x.bandwidth())
        .attr('fill', 'rgb(8, 10, 63)')
        .attr('height', (d:any) => this.height - this.y(d.avgtempC));
    }
   
}
