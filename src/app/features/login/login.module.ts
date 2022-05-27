import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    
    // Importo il rounting module nel modulo principale

    LoginRoutingModule,

    // Importo il Form module che mi serve nel login-form component

    FormsModule,

    // Importo il modulo di Shared

    SharedModule
  ]
})
export class LoginModule { }
