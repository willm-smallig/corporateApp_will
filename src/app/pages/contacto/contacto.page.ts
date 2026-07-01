import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonButton]
})
export class ContactoPage implements OnInit {
datosGuardados() {
throw new Error('Method not implemented.');
}
correo: string = '';
mensaje: string = '';

  constructor() { }

  ngOnInit() {
  }
async enviar() {
  await Preferences.set({
key: 'ultimoMensaje',
value: JSON.stringify({
correo:this.correo,
mensaje:this.mensaje
})
});
}
}
