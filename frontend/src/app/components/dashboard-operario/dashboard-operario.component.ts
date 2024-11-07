import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { OrdenTrabajo } from '../../interfaces/orden-trabajo';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard-operario',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard-operario.component.html',
  styleUrl: './dashboard-operario.component.css'
})
export class DashboardOperarioComponent implements OnInit {
  ordenesTrabajo: OrdenTrabajo[] = [];

  constructor(
    private router: Router,
    private ordenTrabajoService: OrdenTrabajoService
  ) {}

  ngOnInit(): void {
    this.cargarOrdenesTrabajo();
  }

  async cargarOrdenesTrabajo(): Promise<void> {
    try {
      this.ordenesTrabajo = await this.ordenTrabajoService.listaOrdenTrabajo();
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
