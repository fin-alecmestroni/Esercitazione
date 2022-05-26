import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '', component: LoginContainerComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginRoutingModule { }
