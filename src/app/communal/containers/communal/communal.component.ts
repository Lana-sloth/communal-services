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
      <card-component class='col-md-3'
        *ngFor='let communal of communals'
        [card]='communal'>
      </card-component>
    </div> <!-- end of row -->

    <br>
    <div class="alert alert-primary">
      <h3 class="text-center"> Total: {{ countTotal() }} &#8381; </h3>
    </div>

  `
})
export class CommunalComponent implements OnInit{
  total: number = 0;
  communals: Communal[];

  constructor(private communalService: CommunalService){}

  ngOnInit(){
    this.communals = this.communalService.getCommunals();
  }
  
  countTotal(): number {
    this.total = 0;
    for (let i = 0; i < this.communals.length; i++){
      this.total += Number(this.communals[i].spent);
    }
    return _.round(this.total, 2);
  }; 
}
