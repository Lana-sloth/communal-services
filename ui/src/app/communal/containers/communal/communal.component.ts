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
                Tax &#8381;
            </span>
            </p>
            <!-- tax input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->

            <!-- last month input group -->
            <div class="input-group  mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text communal-label">last</span>
              </div>
              <input type='number' class="form-control">
            </div> <!-- end of last month input group -->
            
            <!-- this month input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>now</span>
              </div>
              <input type='number' class='form-control'>
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
                Tax &#8381;
              </span>
            </p>
            <!-- tax input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
  
            <!-- last month input group -->
            <div class="input-group  mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text communal-label">last</span>
              </div>
              <input type='number' class="form-control">
            </div> <!-- end of last month input group -->
            
            <!-- this month input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>now</span>
              </div>
              <input type='number' class='form-control'>
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
                Tax &#8381;
              </span>
            </p>
            <!-- tax input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
  
            <!-- last month input group -->
            <div class="input-group  mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text communal-label">last</span>
              </div>
              <input type='number' class="form-control">
            </div> <!-- end of last month input group -->
            
            <!-- this month input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>now</span>
              </div>
              <input type='number' class='form-control'>
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
                Tax &#8381;
              </span>
            </p>
            <!-- tax input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>tax</span>
              </div>
              <input type='number' class='form-control'>
            </div> <!-- end of  tax input group  -->
  
            <!-- last month input group -->
            <div class="input-group  mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text communal-label">last</span>
              </div>
              <input type='number' class="form-control">
            </div> <!-- end of last month input group -->
            
            <!-- this month input group -->
            <div class='input-group  mb-3'>
              <div class='input-group-prepend'>
                <span class='input-group-text communal-label'>now</span>
              </div>
              <input type='number' class='form-control'>
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
