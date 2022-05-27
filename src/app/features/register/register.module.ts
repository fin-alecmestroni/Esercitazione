import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterContainerComponent } from './components/register-container/register-container.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterRoutingModule } from './register-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    RegisterContainerComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,

    // Importo il rounting module nel modulo principale

    RegisterRoutingModule,

    // Importo il Form module che mi serve nel login-form component

    FormsModule,

    // Importo il modulo di Shared

    SharedModule

  ]
})
export class RegisterModule { }
