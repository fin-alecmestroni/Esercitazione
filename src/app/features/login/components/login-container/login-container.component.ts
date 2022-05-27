import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { LoginModel } from 'src/app/shared/model/login-model';


@Component({
  selector: 'fin-ex-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})

// Componente padre, del modulo che si occupa del login, che si occupa di comunicare con il Servizio user.service

export class LoginContainerComponent implements OnInit {

  constructor(

    // Definisco router come private tramite una Constructor Injection per permettere la gestione del cambio pagina

    private router: Router,

    // Definisco userService come private tramite una Constructor Injection per fare una verifica dell'utente

    private userService: UserService

  ) { }

  ngOnInit(): void {
  }

  // Definisco una variabile che mi permette di gestire un errore nell HTML quando le crededenziali inserite sono errate

  credentialAreIncorrect: boolean = false

  // Creo una funzione che gestisce la comunicazione con il Servzio una volta ricevute le credenziali dal componente figlio login-form

  loginHandler(formInput: LoginModel) {

    this.userService.loginUser(formInput).subscribe(
      result => {
        console.log(result)
        if (result) {

          // Se un utente viene trovato, allora result avra' valore e quindi verro' reindirizzato alla home 

          this.router.navigateByUrl('home')
        }
        else {

          // Se un utente non viene trovato, allora la variabile credentialAreIncorrect diventa true mostrando un errore 

          this.credentialAreIncorrect = true
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
