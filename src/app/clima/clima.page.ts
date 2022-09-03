import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  obtenerclima: any;

  constructor(private clima: ClimaService, private rutear: Router) { }

  ngOnInit() {
    this.clima.getclima().subscribe((resp)=>{
      this.obtenerclima = resp.weather;
      console.log(this.obtenerclima);
    });
  }

  volver(){
    this.rutear.navigateByUrl('/home');
  }

}
