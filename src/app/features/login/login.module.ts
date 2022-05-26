import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    LoginContainerComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
  ]
})
export class LoginModule { }
