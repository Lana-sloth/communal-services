
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CommunalComponent } from './containers/communal/communal.component';

@NgModule({
  declarations: [
    CommunalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CommunalComponent]
})
export class CommunalModule { }
