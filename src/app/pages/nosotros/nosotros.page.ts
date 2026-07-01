import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { GeolocationService } from 'src/app/services/geolocation-service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class NosotrosPage implements OnInit {
obtenerUbicacion() {
throw new Error('Method not implemented.');
}

  oficinaLat=50;
  oficinaLon=-5;
  actualLat:number=0;
  actualLon:number=0;
  distancia:number | null=null;

 

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit() {
  }
async verUbicacion() {
  const ubicacion = await this.geolocationService.getCurrentPosition();
  this.actualLat = ubicacion.latitude;
  this.actualLon = ubicacion.longitude;
}

CalcularDistancia() {{
  this.distancia=this.geolocationService.calcularDistancia(this.oficinaLat, this.oficinaLon, this.actualLat, this.actualLon);
}
}
}
