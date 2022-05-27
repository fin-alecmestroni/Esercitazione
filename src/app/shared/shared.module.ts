import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedListContainerComponent } from './components/shared-list-container/shared-list-container.component';
import { SharedButtonContainerComponent } from './components/shared-button-container/shared-button-container.component';



@NgModule({
  declarations: [
    SharedListContainerComponent,
    SharedButtonContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SharedListContainerComponent,
    SharedButtonContainerComponent
  ]
})
export class SharedModule { }
