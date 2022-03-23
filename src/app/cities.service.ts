import { Injectable } from '@angular/core';
import { ICities } from './components/cities';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http:HttpClient) { }
  getcity():Observable <ICities[]>{
    
    return this.http.get<ICities[]>(`http://ip-api.com/json`);

  }
 
}
