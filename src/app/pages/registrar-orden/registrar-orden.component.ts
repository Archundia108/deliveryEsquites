import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/orden';
import { OrdenService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-registrar-orden',
  templateUrl: './registrar-orden.component.html',
  styleUrls: ['./registrar-orden.component.css']
})
export class RegistrarOrdenComponent implements OnInit {

  orden = new Orden();

  constructor(private ordenService:OrdenService) { }

  ngOnInit(): void {
  }

  registrarOrden(){
    this.ordenService.createOrden(this.orden);
    this.orden = new Orden();
  }
}
