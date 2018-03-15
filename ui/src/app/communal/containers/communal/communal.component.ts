import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';               
import { Communal } from '../models/communal.models';

import { CommunalService } from '../../communal.service';

@Component({
  selector: 'communal',
  styleUrls: [
    '../../../app.component.css'
  ],
  template: `
    <br>
    <div class='row'>
      <!-- <card-component class='col-md-3'
        *ngFor='let communal of communals'
        [card]='communal'>
      </card-component> -->
     
      <div class='col-md-12'>
        <p class="text-center"> {{ this.currentDate | date:'longDate' }} </p>
      </div>

      <!-- ///////////////////// -->
      <!--      COLD WATER       -->
      <!-- ///////////////////// -->
      <div class='col-md-3'>
        <div class='card' >
          <div class='card-body'>
  
            <!-- title -->
            <h5 class='card-title'>Cold Water</h5>
            <!-- tax link -->
            <p>Tax: 
            <span 
            class='taxLink'>
              {{ thisMonth.taxes.cold_water_tax }} Tax &#8381;
            </span>
            </p>
            <!-- tax input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input [(ngModel)]='thisMonth.taxes.cold_water_tax' type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
            
            <!-- last mounth -->
            <p>last: 
            <span 
            class='taxLink'>
              {{ lastMonth.cold_water }}
            </span>
            
            <!-- this month input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>now</span>
              </div>
              <input [(ngModel)]='thisMonth.cold_water' type='number' class='form-control'>
            </div> <!-- end of this month input group -->

            <hr>
            <table>
                <tr>
                  <th>Delta:</th>
                  <td>
                  </td>
                </tr>
                <tr>
                  <th>Spent:</th>
                  <td>{{ totals.cold_water }} &#8381;</td>
                </tr>
            </table>
  
          </div> <!-- end of  card body  -->
        </div> <!-- end of  card  -->
      </div> <!-- end of  column  -->
      
          
      <!-- ///////////////////// -->
      <!--      HOT WATER        -->
      <!-- ///////////////////// -->
      <div class='col-md-3'>
        <div class='card' >
          <div class='card-body'>
  
            <!-- title -->
            <h5 class='card-title'>Hot Water</h5>
            <!-- tax link -->
            <p>Tax: 
              <span 
              class='taxLink'>
                {{ thisMonth.taxes.hot_water_tax }} Tax &#8381;
              </span>
            </p>
            <!-- tax input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input [(ngModel)]='thisMonth.taxes.hot_water_tax' type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
  
            <!-- last mounth -->
            <p>last: 
            <span 
            class='taxLink'>
              {{ lastMonth.hot_water }}
            </span>

            <!-- this month input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>now</span>
              </div>
              <input [(ngModel)]='thisMonth.hot_water' type='number' class='form-control'>
            </div> <!-- end of this month input group -->
  
            <hr>
            <table>
              <tr>
                <th>Delta:</th>
                <td>
                </td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td>{{ totals.hot_water }} &#8381;</td>
              </tr>
            </table>
  
          </div> <!-- end of  card body  -->
        </div> <!-- end of  card  -->
      </div> <!-- end of  column  -->


      <!-- ///////////////////// -->
      <!--    DAY ELECTIRCITY    -->
      <!-- ///////////////////// -->
      <div class='col-md-3'>
        <div class='card' >
          <div class='card-body'>
  
            <!-- title -->
            <h5 class='card-title'>Day Electricity</h5>
            <!-- tax link -->
            <p>Tax: 
              <span 
              class='taxLink'>
                {{ thisMonth.taxes.electricity_day_tax }} Tax &#8381;
              </span>
            </p>
            <!-- tax input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input [(ngModel)]='thisMonth.taxes.electricity_day_tax' type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
  
            <!-- last mounth -->
            <p>last: 
            <span 
            class='taxLink'>
              {{ lastMonth.electricity_day }}
            </span>
            
            <!-- this month input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>now</span>
              </div>
              <input [(ngModel)]='thisMonth.electricity_day' type='number' class='form-control'>
            </div> <!-- end of this month input group -->
  
            <hr>
            <table>
              <tr>
                <th>Delta:</th>
                <td>
                </td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td>{{ totals.electricity_day }} &#8381;</td>
              </tr>
            </table>
  
          </div> <!-- end of  card body  -->
        </div> <!-- end of  card  -->
      </div> <!-- end of  column  -->


      <!-- ///////////////////// -->
      <!--   NIGHT ELECTIRCITY   -->
      <!-- ///////////////////// -->
      <div class='col-md-3'>
        <div class='card' >
          <div class='card-body'>
  
            <!-- title -->
            <h5 class='card-title'>Night Electricity</h5>
            <!-- tax link -->
            <p>Tax: 
              <span 
              class='taxLink'>
                {{ thisMonth.taxes.electricity_night_tax }} Tax &#8381;
              </span>
            </p>
            <!-- tax input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input [(ngModel)]='thisMonth.taxes.electricity_night_tax' type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
  
            <!-- last mounth -->
            <p>last: 
            <span 
            class='taxLink'>
              {{ lastMonth.electricity_night }}
            </span>
            
            <!-- this month input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>now</span>
              </div>
              <input [(ngModel)]='thisMonth.electricity_night' type='number' class='form-control'>
            </div> <!-- end of this month input group -->
  
            <hr>
            <table>
              <tr>
                <th>Delta:</th>
                <td>  </td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td> {{ totals.electricity_night }} &#8381; </td>
              </tr>
            </table>
  
          </div> <!-- end of  card body  -->
        </div> <!-- end of  card  -->
      </div> <!-- end of  column  -->

    </div> <!-- end of row -->

    <!-- ///////////////////// -->
    <!--         TOTAL         -->
    <!-- ///////////////////// -->
    <br>
    <div class="alert alert-primary">
      <h3 class="text-center"> Spent: {{ total }} &#8381; </h3>
    </div>

    <button (click)='count()'>Count</button>

  `
})
export class CommunalComponent implements OnInit{
  total;
  totals;
  currentDate;
  lastMonth;
  thisMonth: Communal;
  communals: Communal[];

  constructor(private communalService: CommunalService){}

  ngOnInit(){
    this.communals = this.communalService.getCommunals();
    this.currentDate = new Date();
    this.lastMonth = this.communalService.getLast();
    this.thisMonth = {
      "date": {
        "year": this.currentDate.getFullYear(),
        "month": this.currentDate.getMonth() + 1
      },
      "cold_water": 0,
      "hot_water": 0,
      "electricity_day": 0,
      "electricity_night": 0,
      "taxes": {
        "cold_water_tax": this.lastMonth.taxes.cold_water_tax,
        "hot_water_tax": this.lastMonth.taxes.hot_water_tax,
        "electricity_day_tax": this.lastMonth.taxes.electricity_day_tax,
        "electricity_night_tax": this.lastMonth.taxes.electricity_night_tax
      }
    }
    this.totals = {
      "cold_water": 0,
      "hot_water": 0,
      "electricity_day": 0,
      "electricity_night": 0
    };
    this.total = 0
  }

  spentCount(last, current, tax): number{
    let diff = current - last;
    let spent = diff * tax;
    if (spent <= 0) return 0;
    else {
      return _.round(spent, 2);
    }
  }

  count(){
    let t = this.totals;
    let x = this.thisMonth.taxes;
    let last = this.lastMonth;
    let cur = this.thisMonth;

    t.cold_water = this.spentCount(last.cold_water, cur.cold_water, x.cold_water_tax);
    t.hot_water = this.spentCount(last.hot_water, cur.hot_water, x.hot_water_tax);
    t.electricity_day = this.spentCount(last.electricity_day, cur.electricity_day, x.electricity_day_tax);
    t.electricity_night = this.spentCount(last.electricity_night, cur.electricity_night, x.electricity_night_tax);
    
    this.total = t.cold_water + t.hot_water + t.electricity_day + t.electricity_night;
  }

}
