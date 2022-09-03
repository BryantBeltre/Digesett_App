/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ModalController } from '@ionic/angular';
import { VervehiculoComponent } from '../vervehiculo/vervehiculo.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consutarvehiculo',
  templateUrl: './consutarvehiculo.page.html',
  styleUrls: ['./consutarvehiculo.page.scss'],
})
export class ConsutarvehiculoPage implements OnInit {

  listavehiculo = [];
  placainput: string;

  constructor(private bdSrvice: AuthenticationService, private mymodal: ModalController, private rutear: Router) { }

  ngOnInit() {    this.bdSrvice.listar('vehiculos').then(resp =>{
    resp.subscribe(listavehiculoref =>{
      this.listavehiculo = listavehiculoref.map(listavehiculoref =>{
        const rutina= listavehiculoref.payload.doc.data();
        rutina['id']= listavehiculoref.payload.doc.id;
        return rutina;
      });
    });
  });
  }

  async encontrar(){
    for(let i of this.listavehiculo){
      if(i.placa === this.placainput){
        this.bdSrvice.sendobjeto(i);
        console.log(i.marca);
      }
    }
    const mimodal2 = await this.mymodal.create({
      component: VervehiculoComponent
    });
    await mimodal2.present();
  }
  volver(){
    this.rutear.navigateByUrl('/home');
  }
}
