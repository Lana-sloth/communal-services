import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Communal } from '../communal/containers/models/communal.models';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

const COMMUNAL_API: string = 'http://127.0.0.1:5000/cs_bills/';

@Injectable()
export class CommunalService {
  constructor(private http: Http){}
  
  lastItem = {
    "date": {
      "year": 2018,
      "month": 2
    },
    "cold_water": 33.062,
    "hot_water": 27.442,
    "electricity_day": 13023,
    "electricity_night": 4606,
    "taxes": {
      "cold_water_tax": 35.40,
      "hot_water_tax": 180.55,
      "electricity_day_tax": 6.19,
      "electricity_night_tax": 1.79
    }
  }
  
  getCommunals(): Observable<Communal[]>{
    return this.http
      .get(COMMUNAL_API)
      .map((response: Response) => response.json()); 
  }
}