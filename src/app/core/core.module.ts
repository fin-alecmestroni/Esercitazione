import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { TodoService } from './services/todo.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  // Aggiungo nei provider i servizi dichiarati in services

  providers: [ 
    UserService,
    TodoService
  ]
})

export class CoreModule { }
