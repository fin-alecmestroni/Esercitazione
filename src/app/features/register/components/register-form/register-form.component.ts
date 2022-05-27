import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/shared/model/user-model';


@Component({
  selector: 'fin-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})

// Componente figlio, del modulo che si occupa della recistrazione, che si occupa di gestire il form di registrazione

export class RegisterFormComponent implements OnInit {

  // Definisco le variabili che saranno gestite dal form

  formName: string = ""
  formMail: string = ""
  formPassword: string = ""
  formPasswordCheck: string = ""
  
  // Definisco la variabile collegata al padre che si occupa della verifica delle credenziali

  @Input()
  userAlredyExistForm: boolean= false
  
  // Definisco l'evento che permette l'invio dei dati contenuti nel LoginModel al padre per la verifica 

  @Output()
  credentialTransferEvent: EventEmitter<UserModel> = new EventEmitter<UserModel>()

  constructor() { }

  ngOnInit(): void {
  }

  // Definisco la funzione che, alla submit del form, assegna i valori inseriti (nome, email e pass) all'interfaccia UserModel

  assignCredential(credentialForm: NgForm){
    const formInput: UserModel = {
      id: 0,
      name: credentialForm.value.name,
      mail: credentialForm.value.mail,
      password: credentialForm.value.password
     } 

     // Emetto l'evento verso il padre

     this.credentialTransferEvent.emit(formInput)

  }

}
