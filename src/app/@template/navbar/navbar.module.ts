import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarContainerComponent } from './component/navbar-container/navbar-container.component';



@NgModule({
  declarations: [
    NavbarContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarContainerComponent
  ]
})

export class NavbarModule { }
