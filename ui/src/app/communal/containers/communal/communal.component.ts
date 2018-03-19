import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';               
import { Communal } from '../models/communal.models';

import { CommunalService } from '../../communal.service';
import { isArray } from 'util';

@Component({
  selector: 'communal',
  styleUrls: [
    '../../../app.component.css'
  ],
  template: `
    <br>
    <div *ngIf='this.thisMonthDefined' class='row'>
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
            <p *ngIf='!totals.cold_water.isEditing'>Tax: 
            <span 
              (click) = 'toggleEdit("cold_water")'
              class='taxLink'>
              {{ thisMonth?.taxes.cold_water_tax }} &#8381;
            </span>
            </p>
            <!-- tax input group -->
            <div *ngIf='totals.cold_water.isEditing' class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input 
                (blur) = 'toggleEdit("cold_water")'
                (pointercancel) = 'toggleEdit("cold_water")'
                [(ngModel)]='thisMonth?.taxes.cold_water_tax' type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
            
            <!-- last mounth -->
            <p>last: 
            <span 
            class='taxLink'>
              {{ lastMonth?.cold_water }}
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
                  <td>{{ totals?.cold_water.diff }}</td>
                </tr>
                <tr>
                  <th>Spent:</th>
                  <td>{{ totals?.cold_water.cost }} &#8381;</td>
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
            <p *ngIf='!totals.hot_water.isEditing'>Tax: 
              <span 
                (click) = 'toggleEdit("hot_water")'
                class='taxLink'>
                {{ thisMonth?.taxes.hot_water_tax }} &#8381;
              </span>
            </p>
            <!-- tax input group -->
            <div *ngIf='totals.hot_water.isEditing' class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input 
                (blur) = 'toggleEdit("hot_water")'
                (pointercancel) = 'toggleEdit("hot_water")'
                [(ngModel)]='thisMonth?.taxes.hot_water_tax' type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
  
            <!-- last mounth -->
            <p>last: 
            <span 
            class='taxLink'>
              {{ lastMonth?.hot_water }}
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
                <td>{{ totals?.hot_water.diff }}</td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td>{{ totals?.hot_water.cost }} &#8381;</td>
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
            <p *ngIf='!totals.electricity_day.isEditing'>Tax: 
              <span 
                (click) = 'toggleEdit("electricity_day")'
                class='taxLink'>
                {{ thisMonth?.taxes.electricity_day_tax }} &#8381;
              </span>
            </p>
            <!-- tax input group -->
            <div *ngIf='totals.electricity_day.isEditing' class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input 
                (blur) = 'toggleEdit("electricity_day")'
                (pointercancel) = 'toggleEdit("electricity_day")'
                [(ngModel)]='thisMonth?.taxes.electricity_day_tax' type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
  
            <!-- last mounth -->
            <p>last: 
            <span 
            class='taxLink'>
              {{ lastMonth?.electricity_day }}
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
                <td>{{ totals?.electricity_day.diff }}</td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td>{{ totals?.electricity_day.cost }} &#8381;</td>
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
            <p *ngIf='!totals.electricity_night.isEditing'>Tax: 
              <span 
                (click) = 'toggleEdit("electricity_night")'
                class='taxLink'>
                {{ thisMonth?.taxes.electricity_night_tax }} &#8381;
              </span>
            </p>
            <!-- tax input group -->
            <div *ngIf='totals.electricity_night.isEditing' class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input 
                (blur) = 'toggleEdit("electricity_night")'
                (pointercancel) = 'toggleEdit("electricity_night")'
                [(ngModel)]='thisMonth?.taxes.electricity_night_tax' type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
  
            <!-- last mounth -->
            <p>last: 
            <span 
            class='taxLink'>
              {{ lastMonth?.electricity_night }}
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
                <td> {{ totals?.electricity_night.diff }} </td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td> {{ totals?.electricity_night.cost }} &#8381; </td>
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

    <button (click)='calculate()'>Calculate</button>

  `
})
export class CommunalComponent implements OnInit{
  total;
  totals;
  currentDate;
  communals: any;
  lastMonth;
  thisMonth: Communal;
  thisMonthDefined: boolean = false;
  
  constructor(private communalService: CommunalService){}

  ngOnInit(){
    this.communalService
      .getCommunals()
      .subscribe((data: Communal[]) => {
        // gets items from server
        this.communals = Object.values(data)[0];
        
        console.log('OnInit: ui', this.communals);
        console.log('OnInit: api', Object.values(data)[0]);

        // if list is empty, uses mock
        if(!this.communals.length) { 
          console.log('OnInit: list is empty! Pushing mock:', this.communalService.lastItem.date);
          this.communals.push(this.communalService.lastItem); 
          console.log('OnInit:', this.communals);

          // gets last month from server
          this.lastMonth = this.getLastItem();
          this.thisMonth = this.getThisMonth();
          this.thisMonthDefined = true;
        }
      });

    this.currentDate = new Date();

    this.totals = {
      "cold_water": {
        "isEditing": false,
        "diff": 0,
        "cost": 0
      },
      "hot_water": {
        "isEditing": false,
        "diff": 0,
        "cost": 0
      },
      "electricity_day": {
        "isEditing": false,
        "diff": 0,
        "cost": 0
      },
      "electricity_night": {
        "isEditing": false,
        "diff": 0,
        "cost": 0
      }
    };
    this.total = 0
  } // ngOnInit end

  getLastItem(){
    // if list is undefined or empty, return mock
    if(!this.communals || !this.communals.length) {
      console.log('getLastItem: list is', this.communals);
      return;
    }
    // else return last month from list
    let last = this.communals.length - 1;
    console.log('getLastItem: found and is', this.communals[last].date)
    return this.communals[last];
  }

  getThisMonth(){
    if(!this.lastMonth) {
      console.log('getThisMonth: failed cause last month is', this.lastMonth);
      return
    }
    console.log('getThisMonth: last month is', this.lastMonth.date);
    return {
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
  }
  
  toggleEdit(card){
    if (card == 'cold_water') 
      this.totals.cold_water.isEditing = !this.totals.cold_water.isEditing;
    else if (card == 'hot_water') 
      this.totals.hot_water.isEditing = !this.totals.hot_water.isEditing;
    else if (card == 'electricity_day') 
      this.totals.electricity_day.isEditing = !this.totals.electricity_day.isEditing;
    else if (card == 'electricity_night') 
      this.totals.electricity_night.isEditing = !this.totals.electricity_night.isEditing;
  }  

  diffCount(last, current): number{
    let diff = current - last;
    if (diff <= 0) return 0;
    else {
      return _.round(diff, 2);
    }
  }

  spentCount(diff, tax): number{
    let spent = diff * tax;
    if (spent <= 0) return 0;
    else {
      return _.round(spent, 2);
    }
  }

  calculate(){
    let t = this.totals;
    let x = this.thisMonth.taxes;
    let last = this.lastMonth;
    let cur = this.thisMonth;

    // gets differences from totals for each card
    t.cold_water.diff = this.diffCount(last.cold_water, cur.cold_water);
    t.hot_water.diff = this.diffCount(last.hot_water, cur.hot_water);
    t.electricity_day.diff = this.diffCount(last.electricity_day, cur.electricity_day);
    t.electricity_night.diff = this.diffCount(last.electricity_night, cur.electricity_night);
    
    // gets results from totals for each card (in rubls)
    t.cold_water.cost = this.spentCount(t.cold_water.diff, x.cold_water_tax);
    t.hot_water.cost = this.spentCount(t.hot_water.diff, x.hot_water_tax);
    t.electricity_day.cost = this.spentCount(t.electricity_day.diff, x.electricity_day_tax);
    t.electricity_night.cost = this.spentCount(t.electricity_night.diff, x.electricity_night_tax);
    
    // counts total result
    let spentTotal = t.cold_water.cost + t.hot_water.cost + t.electricity_day.cost + t.electricity_night.cost;
    this.total = _.round(spentTotal, 2);

    ///////////////////////////////
    // sends thisMonth to server //
    ///////////////////////////////

    let lastM = this.getLastItem();
    // checks date of last month and pops if it's the same date as in current month
    if (this.thisMonth.date == lastM.date) {
      console.log('calculate: the same date in', this.communals);
      //this.communals.pop();
      //console.log('calculate: pop last', this.communals);
      console.log('calculate: last month is', this.lastMonth);
      return
    }
    // pushes to the list
      this.communals.push(this.thisMonth);
      console.log('calculate: add new date', this.communals);
  }

}
