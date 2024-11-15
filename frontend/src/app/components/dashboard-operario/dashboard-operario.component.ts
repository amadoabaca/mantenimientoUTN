import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { OrdenTrabajoBackend } from '../../interfaces/orden-trabajo-backend';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-operario',
  templateUrl: './dashboard-operario.component.html',
  styleUrls: ['./dashboard-operario.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DashboardOperarioComponent implements OnInit {
  listaOrdenes: OrdenTrabajoBackend[] = [];

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarOrdenesTrabajo();
  }

  async cargarOrdenesTrabajo(): Promise<void> {
    this.listaOrdenes = await this.ordenTrabajoService.getOrdenesTrabajo();
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
