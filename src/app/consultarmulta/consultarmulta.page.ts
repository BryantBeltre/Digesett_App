/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { BuscarmultaComponent } from '../buscarmulta/buscarmulta.component';


@Component({
  selector: 'app-consultarmulta',
  templateUrl: './consultarmulta.page.html',
  styleUrls: ['./consultarmulta.page.scss'],
})
export class ConsultarmultaPage implements OnInit {
  listamulta = [];

  constructor(private mymodal: ModalController, private bdSrvice: AuthenticationService, private rutear: Router ) { }

  ngOnInit() {
    this.bdSrvice.listar('multas').then(resp =>{
      resp.subscribe(listamultaref =>{
        this.listamulta = listamultaref.map(listamultaref =>{
          const rutina= listamultaref.payload.doc.data();
          rutina['id']= listamultaref.payload.doc.id;
          return rutina;
        });
        console.log(this.listamulta);
      });
    });
  }

  async abrirP(id: string){

    for(let i of this.listamulta){
      if(i.id === id){
        this.bdSrvice.sendobjeto(i);
      }
    }
    const mimodal2 = await this.mymodal.create({
      component: BuscarmultaComponent
    });
    await mimodal2.present();
  }

  volver(){
    this.rutear.navigateByUrl('/home');
  }

}
