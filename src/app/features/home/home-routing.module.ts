import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components/home-container/home-container.component';

const routes = [
  {
    path: '', component: HomeContainerComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
