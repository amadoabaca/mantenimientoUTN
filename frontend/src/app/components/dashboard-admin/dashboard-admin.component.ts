import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrdenTrabajoService } from '../../services/orden-trabajo.service';
@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css',
})
export class DashboardAdminComponent {
  constructor(
    private router: Router,
    private ordenTrabajoService: OrdenTrabajoService
  ) {}

  async ngOnInit() {
    this.ordenesTrabajo = await this.ordenTrabajoService.getOrdenesTrabajo();
  }
  @Input() ordenesTrabajo: any[] = [];
  goBack() {
    this.router.navigate(['/anterior-componente']);
  }

  navigateToOT() {
    this.router.navigate(['/orden-trabajo']);
  }

  navigateToSolicitud() {
    this.router.navigate(['/orden-trabajo-form']);
  }

  navigateToRegistro() {
    this.router.navigate(['/registro']);
  }

  navigateToHistorial() {
    this.router.navigate(['/historial']);
  }
  navigateToGestion() {
    this.router.navigate(['/gestion']);
  }
}
