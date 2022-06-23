import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyIfElseDirective} from "./directives/my-if-else.directive";



@NgModule({
  declarations: [MyIfElseDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MyIfElseDirective
  ]
})
export class SharedModule { }
