/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { EventEmitter, Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';

import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as Emitter from 'component-emitter';

const lista: any={};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;



  private obejectSource = new BehaviorSubject<any>({});
  $getobjeto = this.obejectSource.asObservable();


  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public storage: AngularFireStorage) {
    /* ngFireAuth.authState.subscribe( user => (this.islogged = user)); */
    this.ngFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });

  }

  //Cargar ruta de imagen
  uploadImage(file: any, path: string, nombre: string): Promise<string>{
    return new Promise(resolve =>{

      const filePath = path + '/' + nombre;
      const refe = this.storage.ref(filePath);
      const task = refe.put(file);
      task.snapshotChanges().pipe(
        finalize(()=>{
          refe.getDownloadURL().subscribe(res => {
            const dowloadURL = res;
            resolve(dowloadURL);
            return;
        });
      })
      ).subscribe();
    });
  }

  //insertar datos
  async create(colleccion, data){
    try{
    return await this.afStore.collection(colleccion).add(data);
  }catch(error){
    console.log('error en: crear ');
  }
}

  //Login
  SignIn(user: User) {
    try {
      return this.ngFireAuth.signInWithEmailAndPassword(user.email, user.password);
    } catch (error) {
      console.log('Error en el logueo', error);
    }

  }

  //Logout
  SignOut() {
    return this.ngFireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }


  //listar datos
  async listar(colleccion) {
    try {
      return await this.afStore.collection(colleccion).snapshotChanges();
    } catch (error) {
      console.log('error en: obtener ');
    }

  }
  //listar datos por id
  async listarId(colleccion, id) {
    try {
      return await this.afStore.collection(colleccion).doc(id).get();
    } catch (error) {
      console.log('error en: obtener por id ');
    }
  }

  sendobjeto(data: any) {
    this.obejectSource.next(data);
  }

}
