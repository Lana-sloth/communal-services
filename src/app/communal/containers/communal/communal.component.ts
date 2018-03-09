import * as _ from 'lodash';
import { Component } from '@angular/core';               
import { Communal } from '../models/communal.models';

@Component({
  selector: 'communal',
  styleUrls: [
    '../../../app.component.css'
  ],
  template: `
  <br>
    <div class='row'>
      <card-component></card-component>
      
      <div *ngFor='let communal of communals' class='col-md-3'>
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">{{ communal.title }}</h5>
            
            <p 
            [hidden]='communal.active'>Tax: 
            <span 
            class='taxLink'
            (click)='switchActive(communal)'>
              {{ communal.tax }} &#8381;
            </span>
            </p>

            <div [hidden]='!communal.active' class="input-group  mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text communal-label">tax</span>
              </div>
              <input
              type='number'
              [(ngModel)]='communal.tax' 
              class="form-control" 
              (blur)='switchActive(communal)'
              (focus)='valueSelect($event)'/>
            </div>
  
            <div class="input-group  mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text communal-label">last</span>
              </div>
              <input type='number' [(ngModel)]='communal.last' class="form-control" autofocus (focus)='valueSelect($event)'/>
            </div>
      
            <div class="input-group  mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text communal-label">now</span>
              </div>
              <input type='number' [(ngModel)]='communal.current' (focus)='valueSelect($event)' class="form-control"/>
            </div>
            
            <hr>
            <table>
              <tr>
                <th>Delta:</th>
                <td>{{ communal.current - communal.last }}</td>
              </tr>
              <tr>
                <th>Spent:</th>
                <td>{{ countSpent(communal) }} &#8381;</td>
              </tr>
            </table>
  
          </div>
        </div>
      </div>
    </div>
    
    <br>
    <div class="alert alert-primary">
      <h3 class="text-center">Total: {{countTotal()}} &#8381;</h3>
    </div>

  `
})
export class CommunalComponent {
  total = 0;
  communals: Communal[] = [
    { 
      title: 'Cold Water',
      tax: 35.40,
      last: 0,
      current: 0,
      spent: 0,
      active: false
    },
    { 
      title: 'Hot Water',
      tax: 180.55,
      last: 0,
      current: 0,
      spent: 0,
      active: false
    },
    { 
      title: 'Day Electricity',
      tax: 6.19,
      last: 0,
      current: 0,
      spent: 0,
      active: false
    },
    { 
      title: 'Night Electricity',
      tax: 1.79,
      last: 0,
      current: 0,
      spent: 0,
      active: false
    }
  ]
  
  checkThis(){
    console.log("CHECKED");
  }

  switchActive(communal){
    communal.active = !communal.active;
  }

  valueSelect(event){
    event.path[0].select();
  }
  
  countSpent(communal){
    communal.spent = (Number((communal.current - communal.last) * communal.tax));
    return _.round(communal.spent, 2);
  }

  countTotal() {
    this.total = 0;
    for (let i = 0; i < this.communals.length; i++){
      this.total += Number(this.communals[i].spent);
    }
    return _.round(this.total, 2);
  }; 
}
