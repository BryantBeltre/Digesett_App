import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private auth: AuthenticationService, private routear: Router) { }

  ngOnInit() {
  }

  cerrarsecion(){
    this.auth.SignOut();
  }

  gototarifario(){
   this.routear.navigateByUrl('/tarifario');
  }
  gotovehiculoplaca(){
    this.routear.navigateByUrl('/consutarvehiculo');
  }
  gotoconductorlicencia(){
    this.routear.navigateByUrl('/consultarconductor');
  }
  gotoplicarruta(){
    this.routear.navigateByUrl('/aplicarruta');
  }

  gotoconsultarruta(){
    this.routear.navigateByUrl('/consultarmulta');
  }

  gotomapa(){
    this.routear.navigateByUrl('/mapa');
  }
  gotonoticias(){
    this.routear.navigateByUrl('/noticias');
  }

  gotoclima(){
    this.routear.navigateByUrl('/clima');
  }


}
