import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logueado: string;
  usuario: User = new User();


  constructor(public authService: AuthenticationService, private rutear: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async login(){
    const usuario = await this.authService.SignIn(this.usuario);
    if(usuario){
      console.log('logueado');
      this.rutear.navigateByUrl('/home');
    }



  }


}
