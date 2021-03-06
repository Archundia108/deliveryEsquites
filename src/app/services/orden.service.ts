import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Orden } from '../models/orden';


@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  constructor(private firestore:AngularFirestore) { }

  getOrdenes(){
    return this.firestore.collection('orden').snapshotChanges();
  }

  getTamanios(){
    return this.firestore.collection('tamanio').snapshotChanges();
  }

  createOrden(orden:Orden){
    orden.status = 1;
    if(orden.tamanio == 1){
      orden.precio = 15;
    }else{
      if(orden.tamanio == 2){
        orden.precio = 20;
      }else{
        if(orden.tamanio == 3){
          orden.precio = 25;
        }
      }
    }
    return this.firestore.collection('orden').add(Object.assign({},orden));
  }

  updateOrden(orden:Orden){
    this.firestore.doc('orden/'+orden.id).update(orden);
  }

  deleteOrden(ordenId:string){
    this.firestore.doc('orden/'+ordenId).delete();
  }
}
