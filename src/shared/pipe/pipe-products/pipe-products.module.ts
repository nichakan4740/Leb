import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoosePipe } from './choose.pipe';



@NgModule({
  declarations: [
    ChoosePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChoosePipe
  ]
})
export class PipeProductsModule { }
