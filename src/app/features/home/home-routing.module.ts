import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';
import { TodoCreationContainerComponent } from './components/todo-creation-container/todo-creation-container.component';

// Collego la route base della Home al component che la gestira' effettivamente

const routes = [
  {
    path: '', component: HomeContainerComponent,
    children: [
      {
        path: 'list',component: TodoListContainerComponent,
      },
      {
        path: 'creation', component: TodoCreationContainerComponent,
      }
    ],
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Importo il modulo per le rotte figlie

    RouterModule.forChild(routes)
  ]
})

export class HomeRoutingModule { }
