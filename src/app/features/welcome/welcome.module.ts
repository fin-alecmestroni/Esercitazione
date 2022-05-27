import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeContainerComponent } from './components/welcome-container/welcome-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    WelcomeContainerComponent
  ],
  imports: [
    CommonModule,

    // Importo il rounting module nel modulo principale

    WelcomeRoutingModule,

    // Importo il modulo di Shared

    SharedModule
  ]
})

export class WelcomeModule { }
