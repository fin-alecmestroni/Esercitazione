import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fin-ex-welcome-container',
  templateUrl: './welcome-container.component.html',
  styleUrls: ['./welcome-container.component.css']
})

export class WelcomeContainerComponent implements OnInit {

  // Parametri per la gestione dei bottoni 
  registerButtonName: string = "Register"
  loginButtonName: string = "Login"

  constructor() { }

  ngOnInit(): void {
  }

}
