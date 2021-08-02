import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Poesia } from '../domain/poesias';

@Injectable({
  providedIn: 'root'
})
export class PoesiasService {

  constructor(public afs: AngularFirestore) { }

  save(contacto: Poesia){
    const refContactos = this.afs.collection("usuarios");

    if(contacto.uid == null){
      contacto.uid= this.afs.createId();
      contacto.codigo = "0";
    }

    refContactos.doc(contacto.uid).set(Object.assign({}, contacto));


  }

  getContactos(): Observable<any[]>{
    return this.afs.collection("usuarios", ref => ref.where("codigo", "==", "1")).valueChanges();
  }
}
