
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommunalComponent } from './containers/communal/communal.component';
import { CardComponent } from './containers/components/card.component';

import { CommunalService } from './communal.service';

@NgModule({
  declarations: [
    CommunalComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommunalComponent],
  providers: [CommunalService]
})
export class CommunalModule { }
