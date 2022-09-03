import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeocoderService {

  constructor(public http: HttpClient) { }

  getcity(latitud, longitud): Observable<any> {
    const url= `https://nominatim.openstreetmap.org/reverse?lat=${latitud}&lon=${longitud}&format=json`;
    return this.http.get<any>(url);

  }
}
