/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { GeocoderService } from '../services/geocoder.service';
import { ModalController } from '@ionic/angular';
import * as Leaflet from 'leaflet';

/* import { HttpClient } from '@angular/common/http';*/
@Component({
  selector: 'app-verenelmapa',
  templateUrl: './verenelmapa.component.html',
  styleUrls: ['./verenelmapa.component.scss'],
})
export class VerenelmapaComponent implements OnInit {

  list =[];
  getcity: any;
  tipomulta: string;
  placa: string;
  longitud: string='';
  latitud: string ='';
  map: Leaflet.Map;

  constructor(private bd: AuthenticationService, private geocoder: GeocoderService, private modal: ModalController) { }

  ngOnInit() {
    this.bd.$getobjeto.subscribe(datos => this.list.push(datos)).unsubscribe();
    for(let i of this.list){
      this.tipomulta= i.tipomulta;
      this.placa= i.placa;
      this.latitud = i.latitud;
      this.longitud =i.longitud;
    }

  }
  ionViewDidEnter() { this.leaftMap(); }

  leaftMap(){
    this.map = Leaflet.map('map').setView([this.latitud, this.longitud], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Tarea 9 // Francis Bryant 2020-10731',
    }).addTo(this.map);


    this.geocoder.getcity(this.latitud, this.longitud).subscribe((resp)=>{
      this.getcity = resp.address;
      Leaflet.marker([this.latitud, this.longitud]).addTo(this.map).bindPopup(this.placa + ', ' + this.getcity.city);
   });

  }



  cerrar(){
    this.modal.dismiss();
  }

}
