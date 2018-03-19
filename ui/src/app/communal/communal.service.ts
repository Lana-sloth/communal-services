import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Communal } from '../communal/containers/models/communal.models';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

const COMMUNAL_API: string = 'http://127.0.0.1:5000/cs_bills/';

@Injectable()
export class CommunalService {
  constructor(private http: Http){}
  
  allItems = [{
    "date": {
      "year": 2018,
      "month": 1
    },
    "cold_water": 25.847,
    "hot_water": 19.846,
    "electricity_day": 12812,
    "electricity_night": 4532,
    "taxes": {
      "cold_water_tax": 35.40,
      "hot_water_tax": 180.55,
      "electricity_day_tax": 6.19,
      "electricity_night_tax": 1.79
    }
  }]

  getLast(){
    let last = this.allItems.length - 1;
    return this.allItems[last];
  }

  getCommunals(): Observable<Communal[]>{
    return this.http
      .get(COMMUNAL_API)
      .map((response: Response) => response.json());
  }
}