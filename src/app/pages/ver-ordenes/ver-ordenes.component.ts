import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/orden';
import { OrdenService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-ver-ordenes',
  templateUrl: './ver-ordenes.component.html',
  styleUrls: ['./ver-ordenes.component.css']
})
export class VerOrdenesComponent implements OnInit {

  ordenes:Orden[] = [];
  orden = new Orden();

  constructor(private ordenService:OrdenService) { }

  ngOnInit(): void {
    this.ordenService.getOrdenes().subscribe(data => {
      this.ordenes = data.map(doc => {
        return{
          ...doc.payload.doc.data() as Orden,
          id: doc.payload.doc.id
        };
      })
    });
  }

}
