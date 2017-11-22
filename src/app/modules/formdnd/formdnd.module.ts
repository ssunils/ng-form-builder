import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormdndComponent } from './formdnd.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormdndComponent],
  exports: [
    FormdndComponent // <-- this!
  ]
})
export class FormdndModule { }
