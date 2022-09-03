/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { VerconductorComponent } from '../verconductor/verconductor.component';

@Component({
  selector: 'app-consultarconductor',
  templateUrl: './consultarconductor.page.html',
  styleUrls: ['./consultarconductor.page.scss'],
})
export class ConsultarconductorPage implements OnInit {

  listaconductor =[];
  licenciainput: string;

  constructor(private bdSrvice: AuthenticationService, private mymodal: ModalController, private rutear: Router) { }

  ngOnInit() {
    this.bdSrvice.listar('conductor').then(resp =>{
      resp.subscribe(listaconductorref =>{
        this.listaconductor = listaconductorref.map(listaconductorref =>{
          const rutina= listaconductorref.payload.doc.data();
          rutina['id']=listaconductorref.payload.doc.id;
          return rutina;
        });
      });
    });
  }

  async encontrar(){
    for(let i of this.listaconductor){
      if(i.licencia === this.licenciainput){
        this.bdSrvice.sendobjeto(i);
      }
    }
    const mimodal2 = await this.mymodal.create({
      component: VerconductorComponent
    });
    await mimodal2.present();
  }
  volver(){
    this.rutear.navigateByUrl('/home');
  }

}
