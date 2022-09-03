import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LasnoticiaService {
  url= 'https://newsapi.org/v2/everything?q=all&sortBy=publishedAt&apiKey=90445b2425fb4dbeaf71ff4fd667e319';
  constructor(public http: HttpClient) { }

  getnoticias(): Observable<any> {

    return this.http.get<any>(this.url);

  }
}
