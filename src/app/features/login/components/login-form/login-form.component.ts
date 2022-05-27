import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from 'src/app/shared/model/login-model';


@Component({
  selector: 'fin-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

// Componente figlio, del modulo che si occupa del login, che si occupa di gestire il form di autenticazione

export class LoginFormComponent implements OnInit {

  // Definisco le variabili che saranno gestite dal form

  formMail: string = ""
  formPassword: string = ""

  // Definisco la variabile collegata al padre che si occupa della verifica delle credenziali

  @Input()
  credentialAreIncorrectForm: boolean = false
  
  // Definisco l'evento che permette l'invio dei dati contenuti nel LoginModel al padre per la verifica 

  @Output()
  credentialTransferEvent: EventEmitter<LoginModel> = new EventEmitter<LoginModel>()

  constructor() { }

  ngOnInit(): void {
  }

  // Definisco la funzione che, alla submit del form, assegna i valori inseriti (email e pass) all'interfaccia LoginModel

  assignCredential(credentialForm: NgForm){
    const formInput: LoginModel = {
      mail: credentialForm.value.mail,
      password: credentialForm.value.password
     } 

     // Emetto l'evento verso il padre
    console.log(formInput)
     this.credentialTransferEvent.emit(formInput)

  }

}
