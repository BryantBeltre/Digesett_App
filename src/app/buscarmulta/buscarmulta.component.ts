import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-buscarmulta',
  templateUrl: './buscarmulta.component.html',
  styleUrls: ['./buscarmulta.component.scss'],
})
export class BuscarmultaComponent implements OnInit {
  list: Array<any>=[];
  cedula: string;
  comentario: string;
  fecha: string;
  hora: string;
  imagen: string;
  latitud: string;
  longitud: string;
  placa: string;


  constructor(private bd: AuthenticationService, private modal: ModalController) { }

  ngOnInit() {
    this.bd.$getobjeto.subscribe(datos => this.list.push(datos)).unsubscribe();
    for(let ii of this.list){
      this.cedula = ii.cedula;
      this.comentario = ii.comentario;
      this.fecha = ii.fecha;
      this.hora = ii.hora;
      this.imagen = ii.imagen;
      this.latitud = ii.latitud;
      this.longitud = ii.longitud;
      this.placa = ii.placa;
    }
  }

  cerrarP(){
    this.modal.dismiss();
  }

}
