import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-verconductor',
  templateUrl: './verconductor.component.html',
  styleUrls: ['./verconductor.component.scss'],
})
export class VerconductorComponent implements OnInit {
  list: Array<any>=[];
  licencia: string;
  nombres: string;
  apellidos: string;
  fechanacimiento: string;
  signozodiacal: string;

  constructor(public modal: ModalController, private bd: AuthenticationService) { }

  ngOnInit()
  {
    this.bd.$getobjeto.subscribe(datos => this.list.push(datos)).unsubscribe();
    console.log(this.list);
    for(let ii of this.list){
      this.licencia = ii.licencia;
      this.nombres = ii.nombres;
      this.apellidos = ii.apellidos;
      this.fechanacimiento = ii.fecha_nacimiento;
      this.signozodiacal = ii.signozodiacal;
    }
  }

  cerrarP(){
    this.modal.dismiss();
  }

}
