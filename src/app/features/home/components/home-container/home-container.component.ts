import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fin-ex-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})

export class HomeContainerComponent implements OnInit {


  


  @Input()
  tab: string = ""


  @Output()
  navbarTabList: string[] = ['Home', 'Lista TODO', 'Crea TODO']
 

  constructor(

    // Definisco Router come private tramite una Constructor Injection per permettere la gestione del cambio pagina

    private router: Router,

    // Attivo la navigazione per le sottorotte

    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
  }

  navbarTabResponse(navbarRoute: string) {
    
    console.log(navbarRoute)
  }

}
