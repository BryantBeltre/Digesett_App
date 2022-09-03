/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  latitud: string='18.6691759';
  longitud: string='-71.2512582';
  ApiKey ='3eecdfa35b219c5aa5c08cc9b6cf4ac1';


  url=`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitud}&lon=${this.longitud}&lang=es&units=metric&appid=${this.ApiKey}`;

  constructor(public http: HttpClient) { }

  getclima(): Observable<any> {
    return this.http.get<any>(this.url);

  }

}
