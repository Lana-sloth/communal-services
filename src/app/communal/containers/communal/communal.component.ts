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
      <card-component class='col-md-3'
        *ngFor='let communal of communals'
        [card]='communal'>
      </card-component>
    </div> <!-- end of row -->

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
      spent: 0
    },
    { 
      title: 'Hot Water',
      tax: 180.55,
      last: 0,
      current: 0,
      spent: 0
    },
    { 
      title: 'Day Electricity',
      tax: 6.19,
      last: 0,
      current: 0,
      spent: 0
    },
    { 
      title: 'Night Electricity',
      tax: 1.79,
      last: 0,
      current: 0,
      spent: 0
    }
  ]
  
  countTotal() {
    this.total = 0;
    for (let i = 0; i < this.communals.length; i++){
      this.total += Number(this.communals[i].spent);
    }
    return _.round(this.total, 2);
  }; 
}
