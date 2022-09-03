import { Component, OnInit } from '@angular/core';
import { LasnoticiaService } from '../services/lasnoticia.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  obtener: any;

  constructor(private noticiasService: LasnoticiaService, private rutear: Router) {

   }

  ngOnInit() {
    this.noticiasService.getnoticias().subscribe((resp) =>{
      this.obtener = .resparticles;
      console.log(this.obtener);
   });
  }

  volver(){
    this.rutear.navigateByUrl('/home');
  }

}
