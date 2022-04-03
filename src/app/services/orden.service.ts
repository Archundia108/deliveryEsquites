import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Orden } from '../models/orden';


@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private firestore:AngularFirestore) { }

  getOrdenes(){
    return this.firestore.collection('orden').snapshotChanges();
  }

  createOrden(orden:Orden){
    orden.status = '/status/1';
    if(orden.tamanio == 1){
      orden.tamanio = '/tamanio/1';
      orden.precio = 15;
    }else{
      if(orden.tamanio == 2){
        orden.tamanio = '/tamanio/2';
        orden.precio = 20;
      }else{
        if(orden.tamanio == 3){
          orden.tamanio = '/tamanio/3';
          orden.precio = 25;
        }
      }
    }
    return this.firestore.collection('orden').add(Object.assign({},orden));
  }

  updateOrden(orden:Orden){
    this.firestore.doc('orden/'+orden.id).update(orden);
  }
}
