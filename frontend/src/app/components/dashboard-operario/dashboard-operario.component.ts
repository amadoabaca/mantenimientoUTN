import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdenTrabajo } from '../../interfaces/orden-trabajo';
import { FormsModule } from '@angular/forms';
import { OrdenTrabajoBackend } from '../../interfaces/orden-trabajo-backend';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
@Component({
  selector: 'app-dashboard-operario',
  templateUrl: './dashboard-operario.component.html',
  styleUrls: ['./dashboard-operario.component.css'],
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule para que ngFor funcione
})
export class DashboardOperarioComponent implements OnInit {
  ordenesTrabajo: OrdenTrabajo[] = [];

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarOrdenesTrabajo();
  }

  async cargarOrdenesTrabajo(): Promise<void> {
    try {
      this.ordenesTrabajo = await this.ordenTrabajoService.listaOrdenTrabajo();
      console.log('Órdenes de trabajo cargadas:', this.ordenesTrabajo);
    } catch (error) {
      console.error('Error al cargar las órdenes de trabajo:', error);
    }
  }

  goBack() {
    this.router.navigate(['/login-form']);
  }

  navigateToOT(id: number): void {
    this.router.navigate(['/orden-trabajo', id]);
  }

  navigateToSolicitud() {
    this.router.navigate(['/orden-trabajo-form']);
  }
}
