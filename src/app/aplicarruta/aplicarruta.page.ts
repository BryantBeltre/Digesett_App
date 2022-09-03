import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aplicarruta',
  templateUrl: './aplicarruta.page.html',
  styleUrls: ['./aplicarruta.page.scss'],
})
export class AplicarrutaPage implements OnInit {

  multa = {
    cedula: '',
    comentario: '',
    fecha: '',
    hora: '',
    imagen: '',
    latitud: '',
    longitud: '',
    placa: '',
    tipoinfraccion: '',
  };

  constructor(private rutear: Router ,private bdSrvice: AuthenticationService, private alertController: AlertController) { }

  ngOnInit() {
  }

  limpiarinputs(){
    this.multa.cedula= '';
    this.multa.comentario= '';
    this.multa.fecha= '';
    this.multa.hora= '';
    this.multa.imagen= '';
    this.multa.latitud= '';
    this.multa.longitud= '';
    this.multa.placa= '';
    this.multa.tipoinfraccion= '';
  }

  async guardado(){
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'mensaje importante',
      message: 'La multa se registro con exito',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async guardar() {
    if (this.multa.cedula === '' || this.multa.comentario === '' || this.multa.fecha === '' || this.multa.hora === ''
      || this.multa.latitud === '' || this.multa.longitud === '' || this.multa.placa === '' || this.multa.tipoinfraccion === '') {
      const alert = await this.alertController.create({
        header: 'Aviso',
        subHeader: 'mensaje importante',
        message: 'Asegurate que todos los campos esten lleno',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      this.bdSrvice.create('multas', this.multa).then(resp => {
        console.log(resp);
        this.guardado();
      }).catch(error => {
        console.log('Error al crear');
      });

      this.limpiarinputs();
    }



  }
  async newImg(event: any){

    const path = 'Imagen';
    const nombre = this.multa.tipoinfraccion;
    const file = event.target.files[0];
    const respuesta = await this.bdSrvice.uploadImage(file, path, nombre);
    this.multa.imagen= respuesta;
  }

  volver(){
    this.rutear.navigateByUrl('/home');
  }

}


