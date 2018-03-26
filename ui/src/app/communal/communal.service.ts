import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Communal } from '../communal/containers/models/communal.models';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

const COMMUNAL_API: string = 'http://127.0.0.1:5000/cs_bills';

@Injectable()
export class CommunalService {
  constructor(private http: Http){}

  currentMonth = new Date().getMonth()+1;
  currentYear = new Date().getFullYear();
  monthMock(month, year) {
    return {
      "date": {
        "year": year,
        "month": month
      },
      "cold_water": 0,
      "hot_water": 0,
      "electricity_day": 0,
      "electricity_night": 0,
      "taxes": {
        "cold_water_tax": 0,
        "hot_water_tax": 0,
        "electricity_day_tax": 0,
        "electricity_night_tax": 0
      }
    }
  }
  
  getCommunals(): Observable<Communal[]>{
    return this.http
      .get(`${COMMUNAL_API}`)
      .map((response: Response) => response.json()); 
  }
  getThisMonth(): Observable<Communal[]>{
    return this.http
      .get(`${COMMUNAL_API}/?where={"date.year":${this.currentYear},"date.month":${this.currentMonth}}`)
      .map((response: Response) => response.json()); 
  }
  getLastMonth(): Observable<Communal[]>{
    return this.http
      .get(`${COMMUNAL_API}/?where={"date.year":${this.currentYear},"date.month":${this.currentMonth-1}}`)
      .map((response: Response) => response.json()); 
  }

}