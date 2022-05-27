import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-ex-shared-button-container',
  templateUrl: './shared-button-container.component.html',
  styleUrls: ['./shared-button-container.component.css']
})
export class SharedButtonContainerComponent implements OnInit {

  @Input()
  buttonName: string = ""

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  clickHandler(buttonName: any) {
    if (buttonName === "Register") this.router.navigateByUrl("register")
    if (buttonName === "Login") this.router.navigateByUrl("login")
  }
}
