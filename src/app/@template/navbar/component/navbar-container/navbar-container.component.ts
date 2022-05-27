import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fin-ex-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.css']
})
export class NavbarContainerComponent implements OnInit {

  @Input()
  navbarTabs: string [] = []


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  navbarClickHandler(tab: string){
    console.log(tab)
    if (tab === "Home") this.router.navigateByUrl("home")
    if (tab === "Lista TODO")  this.router.navigateByUrl("home/list") 
    if (tab === "Crea TODO")  this.router.navigateByUrl("home/creation")
  }
  

  logOut() {
    this.router.navigateByUrl("welcome")
  }

}
