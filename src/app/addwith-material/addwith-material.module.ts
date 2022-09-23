import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddwithMaterialRoutingModule } from './addwith-material-routing.module';
import { AddMatComponent } from './add-mat/add-mat.component';


@NgModule({
  declarations: [AddMatComponent],
  imports: [
    CommonModule,
    AddwithMaterialRoutingModule
  ]
})
export class AddwithMaterialModule { }
