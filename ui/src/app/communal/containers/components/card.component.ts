import { Component, Input } from '@angular/core';
import { Communal } from '../models/communal.models';
import * as _ from 'lodash';

@Component({
  selector: 'card-component',
  styleUrls: ['../../../app.component.css'],
  template: `
    <div class="card" >
        <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            
            <p 
            [hidden]='editing'>Tax: 
            <span 
            class='taxLink'
            (click)='switchEditing()'>
                {{ card.tax }} &#8381;
            </span>
            </p>
        
            <div [hidden]='!editing' class="input-group  mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text communal-label">tax</span>
                </div>
                <input
                type='number'
                [(ngModel)]='card.tax' 
                class="form-control" 
                (blur)='switchEditing()'
                (focus)='valueSelect($event)'/>
            </div>
        
            <div class="input-group  mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text communal-label">last</span>
                </div>
                <input type='number' [(ngModel)]='card.last' class="form-control" autofocus (focus)='valueSelect($event)'/>
            </div>
        
            <div class="input-group  mb-3">
                <div class="input-group-prepend">
                <span class="input-group-text communal-label">now</span>
                </div>
                <input type='number' [(ngModel)]='card.current' (focus)='valueSelect($event)' class="form-control"/>
            </div>
            
            <hr>
            <table>
                <tr>
                <th>Delta:</th>
                <td>{{ card.current - card.last }}</td>
                </tr>
                <tr>
                <th>Spent:</th>
                <td>{{ countSpent(card) }} &#8381;</td>
                </tr>
            </table>
    
        </div> <!-- end of card body -->  
    </div> <!-- end of card -->    
  `
})
export class CardComponent {
    @Input()
    card: Communal;

    editing = false;

    switchEditing(){
        this.editing = !this.editing;
    }
    valueSelect(event){
        event.path[0].select();
    }
      
    countSpent(communal){
    communal.spent = (Number((communal.current - communal.last) * communal.tax));
    return _.round(communal.spent, 2);
    }
}
