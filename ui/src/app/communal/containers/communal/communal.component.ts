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
      
      <!-- ///////////////////// -->
      <!--      COLD WATER       -->
      <!-- ///////////////////// -->
      <div class='col-md-3'>
        <div class='card' >
          <div class='card-body'>
  
            <!-- title -->
            <h5 class='card-title'>Water</h5>
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
                  <td>...</td>
                </tr>
                <tr>
                  <th>Spent:</th>
                  <td>... &#8381;</td>
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
            <h5 class='card-title'>Water</h5>
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
                <td>...</td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td>... &#8381;</td>
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
            <h5 class='card-title'>Water</h5>
            <!-- tax link -->
            <p>Tax: 
              <span 
              class='taxLink'>
                {{ thisMonth.electricity_day }} Tax &#8381;
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
                <td>...</td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td>... &#8381;</td>
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
            <h5 class='card-title'>Water</h5>
            <!-- tax link -->
            <p>Tax: 
              <span 
              class='taxLink'>
                {{ thisMonth.electricity_night }} Tax &#8381;
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
                <td>...</td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td>... &#8381;</td>
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
      <h3 class="text-center"> Total: {{ countTotal() }} &#8381; </h3>
    </div>

    <button (click)='count()'>Count</button>

  `
})
export class CommunalComponent implements OnInit{
  total: number = 0;
  lastMonth;
  thisMonth = {
    "date": {
      "year": 0,
      "month": 0
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
  };
  communals: Communal[];

  constructor(private communalService: CommunalService){}

  ngOnInit(){
    this.communals = this.communalService.getCommunals();
    this.lastMonth = this.communalService.getLast();
    console.log(this.lastMonth);
  }
  
  countTotal(): number {
    this.total = 0;
    for (let i = 0; i < this.communals.length; i++){
      this.total += Number(this.communals[i].spent);
    }
    return _.round(this.total, 2);
  }; 

  count(){
    console.log('count');
  }
}
