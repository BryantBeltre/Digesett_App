/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vervehiculo',
  templateUrl: './vervehiculo.component.html',
  styleUrls: ['./vervehiculo.component.scss'],
})
export class VervehiculoComponent implements OnInit {

  list: Array<any>=[];
  placa: string;
  marca: string;
  modelo: string;
  color: string;
  ano: string;

  constructor(private bdSrvice: AuthenticationService, private modal: ModalController) { }

  ngOnInit() {
    this.bdSrvice.$getobjeto.subscribe(datos => this.list.push(datos)).unsubscribe();
    for(let ii of this.list){
      this.placa= ii.placa;
      this.marca = ii.marca;
      this.modelo= ii.modelo;
      this.color = ii.color;
      this.ano = ii.año;

    }

  }

  cerrarP(){
    this.modal.dismiss();
  }

}
