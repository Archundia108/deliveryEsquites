import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/orden';
import { Tamanio } from 'src/app/models/tamanios';
import { OrdenService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-registrar-orden',
  templateUrl: './registrar-orden.component.html',
  styleUrls: ['./registrar-orden.component.css']
})
export class RegistrarOrdenComponent implements OnInit {
  

  orden = new Orden();
  enviado = false;

  constructor(private ordenService:OrdenService) { }

  tamanios:Tamanio[] = [];
  tamanio = new Tamanio();

  ngOnInit(): void {
    this.ordenService.getTamanios().subscribe(data => {
      this.tamanios = data.map(doc => {
        return{
          ...doc.payload.doc.data() as Tamanio,
          id: doc.payload.doc.id
        };
      })
    });
  }

  onSubmit(){
    this.enviado = true;
  }
  newOrden(){
    this.orden = new Orden();
  }
  
  registrarOrden(){
    this.ordenService.createOrden(this.orden);
    this.orden = new Orden();
  }
}
