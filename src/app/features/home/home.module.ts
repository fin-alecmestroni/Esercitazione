import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';
import { TodoCreationContainerComponent } from './components/todo-creation-container/todo-creation-container.component';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NavbarModule } from 'src/app/@template/navbar/navbar.module';



@NgModule({
  declarations: [
    HomeContainerComponent,
    TodoCreationContainerComponent,
    TodoListContainerComponent
  ],
  imports: [
    CommonModule,

    // Importo il rounting module nel modulo principale

    HomeRoutingModule,
    
    // Importo il modulo di Shared

    SharedModule,

    // Importo il RouterModule
    RouterModule,

    // Importo la Navbar
    NavbarModule
  ]
})

export class HomeModule { }
