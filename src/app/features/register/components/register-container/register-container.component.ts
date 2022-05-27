import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { UserModel } from 'src/app/shared/model/user-model';

@Component({
  selector: 'fin-ex-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.css']
})

// Componente padre, del modulo che si occupa della registazione, che si occupa di comunicare con il Servizio user.service

export class RegisterContainerComponent implements OnInit {

  constructor(

    // Definisco router come private tramite una Constructor Injection per permettere la gestione del cambio pagina

    private router: Router,

    // Definisco userService come private tramite una Constructor Injection per fare una verifica dell'utente

    private userService: UserService

  ) { }

  ngOnInit(): void {
  }

  // Definisco una variabile che mi permette di gestire un errore nell HTML quando le crededenziali inserite sono errate

  userAlreadyExist: boolean = false

  // Creo una funzione che gestisce la comunicazione con il Servzio una volta ricevute le credenziali dal componente figlio login-form

  registrationHandler(formInput: UserModel) {
    this.userService.registerUser(formInput).subscribe(
      result => {
        console.log(result)
        if (!result) {

          // Se un utente non viene trovato, allora result sara' nullo e quindi verro' reindirizzato alla login-page per il test delle credenziali 

          this.router.navigateByUrl('login')
        }
        else {

          // Se un utente  viene trovato, allora la variabile userAlreadyExist diventa true mostrando un errore 

          this.userAlreadyExist = true
        }
      },
      error => {
        console.log(error)
      }
    )


  }
}
