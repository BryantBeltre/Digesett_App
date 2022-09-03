import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-detallestarifario',
  templateUrl: './detallestarifario.component.html',
  styleUrls: ['./detallestarifario.component.scss'],
})
export class DetallestarifarioComponent implements OnInit {
  list: Array<any>=[];
  articulo: string;
  infraccion: string;
  monto: string;
  constructor(public modal: ModalController, private bd: AuthenticationService) { }

  ngOnInit() {
    this.bd.$getobjeto.subscribe(datos => this.list.push(datos)).unsubscribe();
    for(let ii of this.list){
      this.articulo = ii.articulo_ley;
      this.infraccion = ii.infraccion;
      this.monto = ii.monto;
    }
  }

  cerrarP(){
    this.modal.dismiss();
  }


}
