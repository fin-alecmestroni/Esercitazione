import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-ex-todo-creation-container',
  templateUrl: './todo-creation-container.component.html',
  styleUrls: ['./todo-creation-container.component.css']
})
export class TodoCreationContainerComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
