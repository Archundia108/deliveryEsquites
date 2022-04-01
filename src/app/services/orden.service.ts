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
    return this.firestore.collection('orden').add(Object.assign({},orden));
  }

  updateOrden(orden:Orden){
    this.firestore.doc('orden/'+orden.id).update(orden);
  }
}
