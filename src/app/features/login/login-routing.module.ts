import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginContainerComponent } from './components/login-container/login-container.component';

// Collego la route base della Home al component che la gestira' effettivamente

const routes = [
  {
    path: '', component: LoginContainerComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Importo il modulo per le rotte figlie
    
    RouterModule.forChild(routes)
  ]
})

export class LoginRoutingModule { }
