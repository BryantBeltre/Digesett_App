/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/dot-notation */
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { DetallestarifarioComponent } from '../detallestarifario/detallestarifario.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarifario',
  templateUrl: './tarifario.page.html',
  styleUrls: ['./tarifario.page.scss'],
})
export class TarifarioPage implements OnInit {

  listarutina = [];



  constructor(private bdSrvice: AuthenticationService, private mymodal: ModalController, private rutear: Router) { }

  ngOnInit() {
    this.bdSrvice.listar('tarifario').then(resp =>{
      resp.subscribe(listarutinaref =>{
        this.listarutina = listarutinaref.map(listarutinaref =>{
          const rutina= listarutinaref.payload.doc.data();
          rutina['id']= listarutinaref.payload.doc.id;
          return rutina;
        });
        console.log(this.listarutina);
      });
    });
  }

  async abrirP(id: string){

    for(let i of this.listarutina){
      if(i.id === id){
        this.bdSrvice.sendobjeto(i);

      }
    }
    const mimodal2 = await this.mymodal.create({
      component: DetallestarifarioComponent
    });
    await mimodal2.present();
  }

  volver(){
    this.rutear.navigateByUrl('/home');
  }

}
