/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/no-shadow */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VerenelmapaComponent } from '../verenelmapa/verenelmapa.component';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {



  listarutina = [];
  constructor(private rutear: Router,private mymodal: ModalController, private bdSrvice: AuthenticationService) { }

  ngOnInit() {
    this.bdSrvice.listar('multas').then(resp => {
      resp.subscribe(listarutinaref => {
        this.listarutina = listarutinaref.map(listarutinaref => {
          const rutina = listarutinaref.payload.doc.data();
          rutina['id'] = listarutinaref.payload.doc.id;
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
      component: VerenelmapaComponent
    });
    await mimodal2.present();
  }

  volver(){
    this.rutear.navigateByUrl('/home');
  }


}


