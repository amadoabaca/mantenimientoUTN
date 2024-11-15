import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { ActivoService } from '../../services/activo.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdenTrabajoBackend } from '../../interfaces/orden-trabajo-backend';
import { Activo } from '../../interfaces/activo';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class HistorialComponent implements OnInit {
  listaOrdenes: OrdenTrabajoBackend[] = [];
  activos: Activo[] = [];
  operarios: User[] = [];
  filtroActivo: string = '';
  filtroOperario: string = '';

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    private activoService: ActivoService,
    private userService: UserService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.cargarOrdenesTrabajo();
    await this.cargarActivos();
    await this.cargarOperarios();
  }

  async cargarOrdenesTrabajo(): Promise<void> {
    this.listaOrdenes = await this.ordenTrabajoService.getOrdenesTrabajo();
  }

  async cargarActivos(): Promise<void> {
    this.activos = await this.activoService.obtenerActivos();
  }

  async cargarOperarios(): Promise<void> {
    this.operarios = await this.userService.getOperarios();
  }

  onActivoChange(): void {
    if (this.filtroActivo) {
      this.filtroOperario = '';
    }
    this.filtrarOrdenes();
  }

  onOperarioChange(): void {
    if (this.filtroOperario) {
      this.filtroActivo = '';
    }
    this.filtrarOrdenes();
  }

  filtrarOrdenes(): void {
    this.ordenTrabajoService
      .getOrdenesTrabajoFiltradas(this.filtroActivo, this.filtroOperario)
      .then((ordenes: OrdenTrabajoBackend[]) => {
        this.listaOrdenes = ordenes;
        console.log('Órdenes filtradas:', this.listaOrdenes);
      })
      .catch((error) =>
        console.error('Error al obtener órdenes de trabajo filtradas:', error)
      );
  }

  goBack(): void {
    this.router.navigate(['/dashboard-admin']);
  }
}
