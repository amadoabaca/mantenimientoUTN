import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
import { ActivoService } from '../../services/activo.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import {  CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  standalone:true,
  imports :[CommonModule,FormsModule]
})
export class HistorialComponent implements OnInit {
  listaOrdenes: any[] = [];
  activos: any[] = [];
  operarios: any[] = [];
  filtroActivo = '';
  filtroOperario = '';

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    private activoService: ActivoService,
    private userService: UserService,
    private router:Router
  ) {}

  async ngOnInit() {
    await this.cargarOrdenesTrabajo();
    await this.cargarActivos();
    await this.cargarOperarios();
  }

  async cargarOrdenesTrabajo() {
    this.listaOrdenes = await this.ordenTrabajoService.getOrdenesTrabajo();
  }

  async cargarActivos() {
    this.activos = await this.activoService.obtenerActivos();
  }

  async cargarOperarios() {
    this.operarios = await this.userService.getOperarios();
  }

  onActivoChange() {
    if (this.filtroActivo) {
      this.filtroOperario = ''; // Limpia el filtro de operario si se selecciona un activo
    }
    this.filtrarOrdenes();
  }

  // Método para manejar el cambio de selección de operario
  onOperarioChange() {
    if (this.filtroOperario) {
      this.filtroActivo = ''; // Limpia el filtro de activo si se selecciona un operario
    }
    this.filtrarOrdenes();
  }

  filtrarOrdenes() {
    this.ordenTrabajoService
      .getOrdenesTrabajoFiltradas(this.filtroActivo, this.filtroOperario)
      .then((ordenes) => {
        this.listaOrdenes = ordenes;
        console.log('Órdenes filtradas:', this.listaOrdenes);
      })
      .catch(error => console.error('Error al obtener órdenes de trabajo filtradas:', error));
  }




  goBack() {
    this.router.navigate(['/dashboard-admin']);
  }
  
}
