import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service'; 
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit {
  listaOrdenes: any[] = [];
  ordenesCargadas: boolean = false;


constructor( 
  private router: Router, 
  private ordenService: OrdenTrabajoService ){}

  ngOnInit(): void {
  }

  async buscarOrdenes() {
    try {
      this.ordenesCargadas = true;
      const data = await this.ordenService.listaOrdenTrabajo();
      console.log(data);
    } catch (error) {
      console.error('Error al buscar las órdenes de trabajo:', error);
    }
  }

  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }
  
}
