import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonTitle, IonToolbar, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { Preferences } from '@capacitor/preferences';
import { Messages } from 'src/app/services/messages';
//import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonButton, IonInput, IonTextarea]
})
export class ContactoPage implements OnInit {
datosGuardados() {
throw new Error('Method not implemented.');
}
correo: string = '';
mensaje: string = '';

constructor(private servicio:Messages) { }

ngOnInit() {}

guardar(){
  this.servicio.guardarMensaje(this.correo, this.mensaje);
}
leer(){
  this.servicio.leerMensajes();
}
consultar(){
  this.servicio.consultarPlataforma();
}

async enviar() {
console.log("Enviado");
  this.servicio.guardarMensaje(this.correo,this.mensaje);
  
  this.servicio.leerMensajes();
  }
}
